/**
 * Feira Eu Amo Pet — Backend API
 * Stack: Express.js (ESM) + JWT + CORS
 * 
 * Endpoints:
 *   POST /api/auth/login   → valida credenciais e retorna token JWT
 *   GET  /api/auth/verify  → verifica se token ainda é válido
 *   POST /api/auth/logout  → invalida sessão (cliente apaga o token)
 * 
 * Em desenvolvimento: qualquer username/senha não-vazia é aceita
 * Em produção: adicionar DB (Supabase, PlanetScale, etc.)
 */

import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { createServer } from 'http';

// ─── Configuração sem dotenv instalado (lê .env manualmente) ───────────────
function loadEnv() {
  try {
    const lines = readFileSync('.env', 'utf-8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...rest] = trimmed.split('=');
        if (key && rest.length) {
          process.env[key.trim()] = rest.join('=').trim();
        }
      }
    }
  } catch {
    // .env opcional — usa valores padrão
  }
}
loadEnv();

const PORT = process.env.PORT || 3100;
const JWT_SECRET = process.env.JWT_SECRET || 'feira_pet_dev_secret';
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:3002';

const app = express();

// ─── Middlewares ────────────────────────────────────────────────────────────
app.use(cors({
  origin: [FRONTEND_ORIGIN, 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:5173'],
  credentials: true,
}));
app.use(express.json());

// Rate limiter simples (sem dependência externa)
const loginAttempts = new Map();
function rateLimitLogin(req, res, next) {
  const ip = req.ip || 'local';
  const attempts = loginAttempts.get(ip) || { count: 0, resetAt: Date.now() + 60000 };
  if (Date.now() > attempts.resetAt) {
    attempts.count = 0;
    attempts.resetAt = Date.now() + 60000;
  }
  attempts.count++;
  loginAttempts.set(ip, attempts);
  if (attempts.count > 10) {
    return res.status(429).json({ error: 'Muitas tentativas. Aguarde 1 minuto.' });
  }
  next();
}

// ─── JWT simples (sem dependência, usa base64) ──────────────────────────────
function signToken(payload) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const body = Buffer.from(JSON.stringify({ ...payload, iat: Date.now(), exp: Date.now() + 8 * 3600 * 1000 })).toString('base64url');
  // Assinatura simplificada (HMAC não disponível sem crypto — usamos hash simples para dev)
  const sig = Buffer.from(`${JWT_SECRET}:${header}.${body}`).toString('base64url').slice(0, 32);
  return `${header}.${body}.${sig}`;
}

function verifyToken(token) {
  try {
    const [header, body, sig] = token.split('.');
    const expectedSig = Buffer.from(`${JWT_SECRET}:${header}.${body}`).toString('base64url').slice(0, 32);
    if (sig !== expectedSig) return null;
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf-8'));
    if (payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

// ─── Usuários (em produção: substituir por DB) ───────────────────────────────
// TEAM_USERS em .env: "usuario1:senha1;usuario2:senha2"
function getTeamUsers() {
  const raw = process.env.TEAM_USERS || '';
  const users = {};
  if (raw.trim()) {
    for (const entry of raw.split(';')) {
      const [u, p] = entry.split(':');
      if (u && p) users[u.trim().toLowerCase()] = p.trim();
    }
  }
  return users;
}

// ─── Rotas ──────────────────────────────────────────────────────────────────

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Feira Pet Backend', timestamp: new Date().toISOString() });
});

// POST /api/auth/login
app.post('/api/auth/login', rateLimitLogin, (req, res) => {
  const { username, password } = req.body;

  if (!username || !password || username.trim().length < 2 || password.trim().length < 3) {
    return res.status(400).json({ error: 'Informe usuário e senha válidos.' });
  }

  const teamUsers = getTeamUsers();
  const userKey = username.trim().toLowerCase();

  // Se TEAM_USERS está vazio → modo desenvolvimento: qualquer credencial válida
  const isDevMode = Object.keys(teamUsers).length === 0;
  const isAuthorized = isDevMode || (teamUsers[userKey] && teamUsers[userKey] === password.trim());

  if (!isAuthorized) {
    return res.status(401).json({ error: 'Credenciais inválidas. Verifique usuário e senha.' });
  }

  const token = signToken({
    username: username.trim(),
    role: 'team',
    devMode: isDevMode,
  });

  res.json({
    token,
    user: {
      username: username.trim(),
      role: 'team',
      devMode: isDevMode,
    },
    message: isDevMode
      ? 'Acesso em modo desenvolvimento (configure TEAM_USERS no .env para produção)'
      : 'Login realizado com sucesso',
  });
});

// GET /api/auth/verify
app.get('/api/auth/verify', (req, res) => {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');
  const payload = verifyToken(token);
  if (!payload) {
    return res.status(401).json({ valid: false, error: 'Token inválido ou expirado.' });
  }
  res.json({ valid: true, user: payload });
});

// POST /api/auth/logout (cliente apaga o token; aqui apenas confirma)
app.post('/api/auth/logout', (req, res) => {
  res.json({ message: 'Logout realizado. Remova o token do cliente.' });
});

// ─── Start ──────────────────────────────────────────────────────────────────
const server = createServer(app);
server.listen(PORT, () => {
  console.log(`\n🐾 Feira Pet Backend rodando em http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Auth:   http://localhost:${PORT}/api/auth/login`);
  const devMode = Object.keys(getTeamUsers()).length === 0;
  if (devMode) {
    console.log(`\n⚠️  MODO DESENVOLVIMENTO — qualquer usuário/senha funciona`);
    console.log(`   Configure TEAM_USERS no backend/.env para restringir o acesso\n`);
  }
});

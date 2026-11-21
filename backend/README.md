# Feira Pet — Backend API

Servidor Express.js simples para autenticação da equipe de gestão da Feira Eu Amo Pet.

## Iniciar

```bash
cd backend
node server.js
# ou em modo watch (Node 18+):
node --watch server.js
```

Rodará em `http://localhost:3100`

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/auth/login` | Login com `{username, password}` |
| `GET` | `/api/auth/verify` | Verifica token (`Authorization: Bearer <token>`) |
| `POST` | `/api/auth/logout` | Logout (cliente remove o token) |

## Configuração

Copie `.env.example` para `.env`:

```bash
cp .env.example .env
```

**Modo Desenvolvimento** (padrão): `TEAM_USERS` vazio → qualquer usuário e senha aceitos.

**Produção**: defina usuários em `TEAM_USERS`:

```
TEAM_USERS=maycon:suasenha;andre:senhaandre
```

> Em produção, substitua por banco de dados (Supabase, Neon, PlanetScale, MongoDB Atlas).

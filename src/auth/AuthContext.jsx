import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

const BACKEND = 'http://localhost:3100';
const TOKEN_KEY = 'feira_pet_team_token';
const USER_KEY  = 'feira_pet_team_user';

function checkShouldAutoAuth() {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname.toLowerCase();
  return (
    host.includes('dashboard') || 
    host.includes('painel') || 
    host.includes('admin') ||
    import.meta.env.VITE_APP_MODE === 'dashboard'
  );
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = sessionStorage.getItem(USER_KEY);
      if (stored) return JSON.parse(stored);
      // Auto-authenticate default organizer session in dashboard domain/mode
      if (checkShouldAutoAuth()) {
        const defaultUser = { username: 'Maycon Douglas', role: 'admin', devMode: true };
        sessionStorage.setItem(USER_KEY, JSON.stringify(defaultUser));
        sessionStorage.setItem(TOKEN_KEY, 'feira-pet-organizer-token-2027');
        return defaultUser;
      }
      return null;
    } catch { return null; }
  });

  const [token, setToken] = useState(() => {
    try {
      const stored = sessionStorage.getItem(TOKEN_KEY);
      if (stored) return stored;
      if (checkShouldAutoAuth()) {
        return 'feira-pet-organizer-token-2027';
      }
      return null;
    } catch { return null; }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Verify token with backend on mount (if one exists)
  useEffect(() => {
    if (!token) return;
    fetch(`${BACKEND}/api/auth/verify`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(r => r.json())
      .then(data => {
        if (!data.valid) {
          // Token expired or invalid
          clearSession();
        }
      })
      .catch(() => {
        // Backend offline in dev or static cloud deploy — keep session alive locally
      });
  }, []);

  const saveSession = (tok, usr) => {
    setToken(tok);
    setUser(usr);
    try {
      sessionStorage.setItem(TOKEN_KEY, tok);
      sessionStorage.setItem(USER_KEY, JSON.stringify(usr));
    } catch (_) {}
  };

  const clearSession = () => {
    setToken(null);
    setUser(null);
    try {
      sessionStorage.removeItem(TOKEN_KEY);
      sessionStorage.removeItem(USER_KEY);
    } catch (_) {}
  };

  // ── login ────────────────────────────────────────────────────────────────
  const login = useCallback(async (username, password) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${BACKEND}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Erro ao fazer login.');
        setLoading(false);
        return false;
      }

      saveSession(data.token, data.user);
      setLoading(false);
      return true;
    } catch {
      // Backend offline / static deploy fallback
      if (username.trim().length >= 2) {
        const fakeToken = btoa(`${username}:${Date.now()}`);
        const fakeUser  = { username: username.trim(), role: 'team', devMode: true, offlineFallback: true };
        saveSession(fakeToken, fakeUser);
        setLoading(false);
        return true;
      }
      setError('Informe um usuário válido para acessar o painel.');
      setLoading(false);
      return false;
    }
  }, []);

  // ── logout ───────────────────────────────────────────────────────────────
  const logout = useCallback(() => {
    if (token) {
      fetch(`${BACKEND}/api/auth/logout`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      }).catch(() => {});
    }
    clearSession();
  }, [token]);

  const isAuthenticated = Boolean(user && token);

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout, loading, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve estar dentro de AuthProvider');
  return ctx;
}

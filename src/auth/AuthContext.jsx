import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

const BACKEND = 'http://localhost:3100';
const TOKEN_KEY = 'feira_pet_team_token';
const USER_KEY  = 'feira_pet_team_user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = sessionStorage.getItem(USER_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch { return null; }
  });
  const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY) || null);
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
          // Token expired or invalid — force logout
          clearSession();
        }
      })
      .catch(() => {
        // Backend offline in dev — keep session alive locally
      });
  }, []); // only on mount

  const saveSession = (tok, usr) => {
    setToken(tok);
    setUser(usr);
    sessionStorage.setItem(TOKEN_KEY, tok);
    sessionStorage.setItem(USER_KEY, JSON.stringify(usr));
  };

  const clearSession = () => {
    setToken(null);
    setUser(null);
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
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
      // Backend offline → accept any non-empty credentials locally (dev fallback)
      if (username.trim().length >= 2 && password.trim().length >= 3) {
        const fakeToken = btoa(`${username}:${Date.now()}`);
        const fakeUser  = { username: username.trim(), role: 'team', devMode: true, offlineFallback: true };
        saveSession(fakeToken, fakeUser);
        setLoading(false);
        return true;
      }
      setError('Backend offline. Use usuário (≥2 chars) e senha (≥3 chars) para modo local.');
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

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Eye, EyeOff, ShieldCheck, AlertTriangle, Loader2, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, loading, error, setError, isAuthenticated } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // If already logged in, go straight to dashboard
  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard', { replace: true });
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!username.trim() || !password.trim()) {
      setError('Preencha o usuário e a senha para continuar.');
      return;
    }
    const ok = await login(username, password);
    if (ok) navigate('/dashboard', { replace: true });
  };

  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Back to public site */}
      <div className="absolute top-6 left-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs text-stone-500 hover:text-stone-300 transition-colors font-medium"
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar ao site público
        </a>
      </div>

      {/* Card */}
      <div className="w-full max-w-sm">

        {/* Logo + Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-stone-900 border border-stone-800 mb-4 shadow-lg">
            <img
              src="/assets/branding/Logo_Feira_Pet__Amor_por_todos__os_pets_-removebg-preview.png"
              alt="Logo"
              className="w-9 h-9 object-contain"
              onError={(e) => { e.target.src = '/assets/logo/logo-eu-amo-pet.png'; }}
            />
          </div>
          <h1 className="text-xl font-bold text-stone-100 tracking-tight">
            Acesso Restrito à Equipe
          </h1>
          <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
            Painel operacional da Feira Eu Amo Pet.<br />
            Esta área não está vinculada ao site público.
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-stone-900 border border-stone-800 rounded-2xl p-7 shadow-xl space-y-5"
        >
          {/* Dev mode notice */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-950/40 border border-amber-800/50">
            <ShieldCheck className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-300/90 leading-relaxed">
              <span className="font-bold">Modo desenvolvimento:</span> qualquer usuário
              e senha são aceitos enquanto o backend estiver em modo padrão.
            </p>
          </div>

          {/* Username */}
          <div>
            <label className="block text-xs font-semibold text-stone-400 mb-1.5">
              Usuário
            </label>
            <input
              type="text"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Seu nome ou e-mail"
              className="w-full px-4 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-stone-400 mb-1.5">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha de acesso"
                className="w-full px-4 py-2.5 pr-11 rounded-xl bg-stone-800 border border-stone-700 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-950/50 border border-red-800/60">
              <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
              <p className="text-xs text-red-300">{error}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 disabled:bg-stone-700 disabled:text-stone-500 text-white text-sm font-bold transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Autenticando...
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                Entrar no Painel
              </>
            )}
          </button>
        </form>

        {/* Footer note */}
        <p className="text-center text-[11px] text-stone-600 mt-6">
          Painel operacional • Feira Eu Amo Pet 2025<br />
          Acesso exclusivo para a equipe MD Mercado Digital & Manfertech
        </p>
      </div>
    </div>
  );
}

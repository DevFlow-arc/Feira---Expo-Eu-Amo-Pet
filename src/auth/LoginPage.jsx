import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Eye, EyeOff, ShieldCheck, AlertTriangle, Loader2, ArrowLeft, Lock, UserCheck } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, loading, error, setError, isAuthenticated } = useAuth();

  const [username, setUsername] = useState('Maycon Douglas');
  const [password, setPassword] = useState('admin2027');
  const [showPassword, setShowPassword] = useState(false);

  // If already logged in, go straight to dashboard
  useEffect(() => {
    if (isAuthenticated) navigate('/', { replace: true });
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!username.trim()) {
      setError('Preencha o usuário para continuar.');
      return;
    }
    const ok = await login(username, password || 'admin2027');
    if (ok) navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#f8f5ee] text-[#202f6b] flex flex-col items-center justify-center px-4 relative overflow-hidden font-sans">

      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffc600]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#f9418c]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Back to public site */}
      <div className="absolute top-6 left-6 z-10">
        <a
          href="https://feira-eu-amo-pet.vercel.app"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#202f6b]/70 hover:text-[#202f6b] px-3.5 py-2 rounded-xl bg-white border border-[#e5dfd3] shadow-xs transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar ao site público
        </a>
      </div>

      {/* Card */}
      <div className="w-full max-w-md relative z-10">

        {/* Logo + Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center p-3 rounded-3xl bg-white border border-[#e5dfd3] mb-3 shadow-md">
            <img
              src="/assets/branding/logo-eu-amo-pet-transparente-oficial.png"
              alt="Logo Feira Eu Amo Pet"
              className="h-14 w-auto object-contain"
              onError={(e) => { e.target.src = '/assets/logo/logo-eu-amo-pet.png'; }}
            />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f9418c]/10 text-[#f9418c] text-xs font-bold uppercase tracking-wider mb-2 border border-[#f9418c]/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Painel Operacional 2027
          </div>
          <h1 className="text-2xl font-extrabold text-[#202f6b] tracking-tight font-display">
            Acesso Restrito à Equipe
          </h1>
          <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
            Gestão estratégica, cotas de patrocínio e compliance sanitário da Feira Eu Amo Pet.
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#e5dfd3] rounded-3xl p-7 sm:p-8 shadow-xl space-y-5"
        >
          {/* Quick Notice */}
          <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#ffc600]/15 border border-[#ffc600]/30 text-amber-900 text-xs">
            <UserCheck className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
            <p className="leading-relaxed">
              <span className="font-bold">Acesso Facilitado:</span> Credenciais de organizador pré-carregadas para acesso imediato ao painel.
            </p>
          </div>

          {/* Username */}
          <div>
            <label className="block text-xs font-bold text-[#202f6b] mb-1.5">
              Usuário / E-mail
            </label>
            <input
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Maycon Douglas"
              className="w-full px-4 py-2.5 rounded-2xl bg-[#f8f5ee]/60 border border-[#e5dfd3] text-[#202f6b] text-sm font-semibold placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f9418c] focus:border-transparent transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-[#202f6b] mb-1.5">
              Senha de Acesso
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 pr-11 rounded-2xl bg-[#f8f5ee]/60 border border-[#e5dfd3] text-[#202f6b] text-sm font-semibold placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f9418c] focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#202f6b] transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
              <AlertTriangle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#202f6b] hover:bg-[#182452] disabled:opacity-50 text-white text-sm font-extrabold transition-all shadow-md hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-[#202f6b]"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#ffc600]" />
                Autenticando...
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4 text-[#ffc600]" />
                Entrar no Painel Executivo
              </>
            )}
          </button>
        </form>

        {/* Footer note */}
        <p className="text-center text-[11px] text-slate-500 mt-5">
          Feira Eu Amo Pet 2027 • Liderança MD Mercado Digital & Manfertech<br />
          Ambiente de Gestão Integrada • Macaé e Região dos Lagos - RJ
        </p>
      </div>
    </div>
  );
}

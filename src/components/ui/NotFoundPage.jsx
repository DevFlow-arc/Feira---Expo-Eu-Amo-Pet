import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 font-black text-2xl font-mono">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
            Página não encontrada
          </h1>
          <p className="text-sm text-stone-500 leading-relaxed">
            A rota acessada não existe ou foi removida. Retorne à página principal da Feira Eu Amo Pet.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#202f6b] hover:bg-[#182352] text-white text-sm font-semibold transition-colors shadow-xs"
          >
            <Home className="w-4 h-4 text-[#ffc600]" />
            <span>Voltar à Página Principal</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const { data } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { generalInfo } = data;
  const isLanding = location.pathname === '/' || location.pathname === '';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#ebdcca] transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#f8f1e2] p-1 border border-[#ebdcca] flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              <img 
                src="/assets/branding/Logo_Feira_Pet__Amor_por_todos__os_pets_-removebg-preview.png" 
                alt="Logo Eu Amo Pet" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = "/assets/logo/logo-eu-amo-pet.png";
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-black text-xl text-[#202f6b] tracking-tight">
                  eu <span className="text-[#f45225]">amo</span> pet
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#ffc600]/30 text-[#8c43dc]">
                  Festival & Expo
                </span>
              </div>
              <p className="text-xs text-[#62628d] font-semibold hidden sm:block">
                {generalInfo.city} - RJ
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          {isLanding && (
            <nav className="hidden md:flex items-center gap-7">
              <a href="#fp-about" className="text-sm font-semibold text-[#202f6b] hover:text-[#f45225] transition-colors">
                O Festival
              </a>
              <a href="#fp-purpose" className="text-sm font-semibold text-[#202f6b] hover:text-[#f45225] transition-colors">
                Propósito & Adoção
              </a>
              <a href="#fp-tem-tudo" className="text-sm font-semibold text-[#202f6b] hover:text-[#f45225] transition-colors">
                Atrações
              </a>
              <a href="#fp-edicoes" className="text-sm font-semibold text-[#202f6b] hover:text-[#f45225] transition-colors">
                Edições
              </a>
              <a href="#fp-apoiadores" className="text-sm font-semibold text-[#202f6b] hover:text-[#f45225] transition-colors">
                Marcas Parceiras
              </a>
              <a href="#fp-faq" className="text-sm font-semibold text-[#202f6b] hover:text-[#f45225] transition-colors">
                Dúvidas Frequentes
              </a>
            </nav>
          )}

          {/* Action Button: Public Event CTA (Strictly no dashboard link) */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5522997885784?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Feira%20Eu%20Amo%20Pet."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f45225] hover:bg-[#d94218] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quero Participar</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#202f6b] hover:text-[#f45225] rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#ebdcca] px-4 py-4 space-y-3">
          <a 
            href="#fp-about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#202f6b] hover:text-[#f45225] py-1"
          >
            O Festival
          </a>
          <a 
            href="#fp-purpose" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#202f6b] hover:text-[#f45225] py-1"
          >
            Propósito & Adoção
          </a>
          <a 
            href="#fp-tem-tudo" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#202f6b] hover:text-[#f45225] py-1"
          >
            Atrações
          </a>
          <a 
            href="#fp-edicoes" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#202f6b] hover:text-[#f45225] py-1"
          >
            Edições
          </a>
          <a 
            href="#fp-apoiadores" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#202f6b] hover:text-[#f45225] py-1"
          >
            Marcas Parceiras
          </a>
          <a 
            href="#fp-faq" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#202f6b] hover:text-[#f45225] py-1"
          >
            Dúvidas Frequentes
          </a>
          <div className="pt-2">
            <a
              href="https://wa.me/5522997885784?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Feira%20Eu%20Amo%20Pet."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#f45225] text-white text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quero Participar</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

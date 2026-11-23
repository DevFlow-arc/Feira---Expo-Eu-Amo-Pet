import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function FestivalHero() {
  const { eventInfo, notify } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [leadType, setLeadType] = useState('visitante');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    notify(`Cadastro realizado com sucesso! Entraremos em contato.`, 'success');
    setModalOpen(false);
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <section className="fp-home" id="hero">

      {/* Top Header & Navigation (embedded in Hero like festivalpet.com.br) */}
      <header className="fp-home-top">
        <a href="#hero" className="block select-none">
          <img
            decoding="async"
            className="fp-home-logo"
            src="/assets/branding/logo-eu-amo-pet-transparente-oficial.png"
            alt="Feira Eu Amo Pet"
          />
        </a>

        <nav className="fp-home-nav" aria-label="Menu principal">
          <a href="#o-festival">O Festival</a>
          <a href="#mercado">Mercado</a>
          <a href="#atracoes">Atrações</a>
          <a href="#edicoes">Edições</a>
          <a href="#patrocinio">Patrocínio</a>
          <a href="#ebook">Dossiê 2027</a>
          <a href="#contato">Contato</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      {/* Main Hero Container */}
      <main className="fp-home-main">
        <div className="fp-home-copy">
          <div className="fp-home-badge">FEIRA EU AMO PET {eventInfo?.year || '2027'}</div>

          {/* Animated SVG Heart */}
          <svg className="fp-home-heart" viewBox="0 0 66 58" fill="none" aria-hidden="true">
            <path d="M33 52C7 34 5 16 16 9c9-6 17 2 17 10 0-8 8-16 17-10 11 7 9 25-17 43Z" stroke="#f9418c" strokeWidth="4" strokeLinejoin="round"/>
            <path d="m48 7 5-5m1 13 8-2" stroke="#f9418c" strokeWidth="4" strokeLinecap="round"/>
          </svg>

          {/* Triple Line Accents */}
          <div className="fp-home-lines" aria-hidden="true">
            <i></i><i></i><i></i>
          </div>

          {/* Staggered box headlines */}
          <h1 className="fp-home-title">
            <span>ONDE <b className="orange">PETS,</b></span>
            <span><b className="purple">PESSOAS</b> E MARCAS</span>
            <span>SE ENCONTRAM</span>
            <span>PARA VIVER ALGO <b className="pink">ESPECIAL.</b></span>
          </h1>

          <p className="fp-home-lead">
            Um festival transformador que une o amor pelos animais, inovação e oportunidades de negócios no mercado pet em Macaé e Região dos Lagos.
          </p>
        </div>

        {/* Real Festival Crowd Composition Cutout */}
        <div className="fp-home-photo-wrap">
          <img
            decoding="async"
            className="fp-home-photo"
            src="/assets/festival/ChatGPT-Image-21_09_2026-15_14_31.png"
            alt="Pessoas e pets na Feira Eu Amo Pet"
          />
        </div>

        {/* Rotating Star Badge */}
        <div className="fp-home-star" aria-hidden="true">
          <svg viewBox="0 0 280 280">
            <polygon fill="#f9418c" points="258,130 215,153 241,194 192,192 194,241 153,215 130,258 107,215 66,241 68,192 19,194 45,153 2,130 45,107 19,66 68,68 66,19 107,45 130,2 153,45 194,19 192,68 241,66 215,107"/>
            <g fill="#202f6b" textAnchor="middle" fontFamily="Protest Strike, sans-serif" fontSize="24" transform="rotate(-8 130 130)">
              <text x="130" y="112">EXPERIÊNCIA</text>
              <text x="130" y="142">CONHECIMENTO</text>
              <text x="130" y="172">IMPACTO SOCIAL</text>
            </g>
          </svg>
        </div>

        {/* Mascot Cat with Sunglasses & Hat */}
        <img
          decoding="async"
          className="fp-home-dog"
          src="/assets/festival/Banner-Vivo-Valoriza-1.png"
          alt="Gato Mascote Feira Eu Amo Pet"
        />

        {/* Bottom Stats Pills */}
        <div className="fp-home-stats">
          <div>
            <svg viewBox="0 0 48 36" fill="currentColor" aria-hidden="true">
              {/* Left silhouette */}
              <circle cx="11" cy="10" r="4.5" />
              <path d="M2.5 30c0-5.5 3.8-9.8 9-10.2 1.8.8 3.5 2 4.7 3.6-1.5 2-2.2 4.2-2.2 6.6H2.5z" />
              {/* Right silhouette */}
              <circle cx="37" cy="10" r="4.5" />
              <path d="M36.5 19.8c5.2.4 9 4.7 9 10.2h-11.5c0-2.4-.7-4.6-2.2-6.6 1.2-1.6 2.9-2.8 4.7-3.6z" />
              {/* Center front silhouette */}
              <circle cx="24" cy="8" r="5.5" />
              <path d="M14 30c0-6 4.5-10.8 10-10.8s10 4.8 10 10.8H14z" />
            </svg>
            <p><b>+15.000</b><small>VISITANTES &amp; PETS</small></p>
          </div>

          <div>
            <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="4">
              <path d="m25 4 6 14 15 1-11 10 4 15-14-8-14 8 4-15L4 19l15-1 6-14Z"/>
            </svg>
            <p><b>8 GRANDES</b><small>ATRAÇÕES CONFIRMADAS</small></p>
          </div>

          <div>
            <svg viewBox="0 0 50 46" fill="none" stroke="currentColor" strokeWidth="4">
              <path d="M25 40C7 29 2 20 5 12c4-10 15-8 20 1C30 4 41 2 45 12c3 8-2 17-20 28Z"/>
            </svg>
            <p><b>3 DIAS</b><small>DE FEIRA &amp; EXPO 2027</small></p>
          </div>
        </div>
      </main>

      {/* Modal Interativo de Inscrição */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#f8f1e5] border-4 border-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-stone-900">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-stone-700 flex items-center justify-center font-bold text-lg hover:bg-stone-100 transition-colors"
            >
              ×
            </button>

            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#f9418c]/15 text-[#f9418c] text-xs font-black uppercase tracking-wider mb-2">
                {leadType === 'visitante' ? 'Ingresso Antecipado Gratuito' : 'Espaço Comercial & Patrocínio'}
              </span>
              <h3 className="font-serif font-black text-2xl text-[#202f6b]">
                {leadType === 'visitante' ? 'Garanta sua Entrada' : 'Reserve seu Estande'}
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                {leadType === 'visitante' 
                  ? 'Receba o voucher digital com acesso direto aos 3 dias de evento no Parque da Fundação Rural.'
                  : 'Fale com Maycon Douglas e receba a planta atualizada e tabela comercial de cotas.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Seu Nome Completo</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Ana Carolina Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f9418c]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">WhatsApp com DDD</label>
                <input
                  type="tel"
                  required
                  placeholder="(22) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f9418c]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">E-mail Principal</label>
                <input
                  type="email"
                  required
                  placeholder="contato@seumail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f9418c]"
                />
              </div>

              {leadType === 'expositor' && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Nome da Empresa / Marca</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Pet Center Goytacaz"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f9418c]"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-[#202f6b] hover:bg-[#151a4b] text-white font-black text-sm uppercase tracking-wider transition-all shadow-md"
              >
                Confirmar Cadastro
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}

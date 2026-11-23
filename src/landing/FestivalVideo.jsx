import React, { useState, useEffect } from 'react';
import { Play, Sparkles, MapPin, Video, X, ExternalLink, Calendar, Users } from 'lucide-react';

export default function FestivalVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fecha modal com a tecla ESC e trava o scroll da página enquanto aberto
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section className="fp-video-section relative overflow-hidden" aria-label="Vídeo Oficial da Feira Eu Amo Pet 2027">
      <div className="fp-video-content">
        <div className="fp-video-frame" id="fp-video-frame">
          <button
            className="fp-video-cover group relative w-full h-full block cursor-pointer overflow-hidden text-left border-0 p-0"
            id="fp-video-cover"
            type="button"
            onClick={() => setIsModalOpen(true)}
            aria-label="Assistir ao vídeo oficial da Feira &amp; Expo Eu Amo Pet 2027"
          >
            {/* Fotografia oficial autêntica do festival ao ar livre com palmeiras e gramado */}
            <img
              decoding="async"
              src="/assets/festival/Copia-de-_YAN2359-scaled.jpg"
              alt="Feira &amp; Expo Eu Amo Pet 2027 • Macaé e Região dos Lagos"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradiente Cinematográfico Escuro */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101b44]/90 via-[#101b44]/40 to-[#101b44]/30 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Eyebrow Badge Superior */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#f9418c] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                <span>VÍDEO OFICIAL • EDIÇÃO 2027</span>
              </span>
            </div>

            {/* Botão Central de Play com Efeito Pulsante */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 text-center">
              <div className="relative mb-3 sm:mb-4">
                <div className="absolute -inset-2 sm:-inset-3 rounded-full bg-[#f9418c]/40 animate-ping" />
                <div className="w-16 h-16 sm:w-22 sm:h-22 rounded-full bg-[#f9418c] group-hover:bg-[#ffc600] text-white group-hover:text-[#202f6b] flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                  <Play className="w-7 h-7 sm:w-10 sm:h-10 fill-current translate-x-0.5 sm:translate-x-1" />
                </div>
              </div>

              <h3
                className="text-xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tight drop-shadow-md max-w-3xl leading-tight"
                style={{ fontFamily: '"Protest Strike", sans-serif' }}
              >
                FEIRA &amp; EXPO EU AMO PET
              </h3>

              <p
                className="text-white/90 text-xs sm:text-base md:text-lg font-bold mt-1.5 sm:mt-2 drop-shadow flex items-center gap-1.5 sm:gap-2"
                style={{ fontFamily: '"Nunito", sans-serif' }}
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffc600]" />
                <span>MACAÉ &amp; CIRCUITO REGIÃO DOS LAGOS 2027</span>
              </p>

              {/* Botão de Chamada Inferior */}
              <div className="mt-3 sm:mt-5 inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white text-[#202f6b] font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-xl group-hover:bg-[#ffc600] transition-colors">
                <span>▶ VIVA ESSA EXPERIÊNCIA</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* ─── Modal Expansível Fullscreen para Mobile & Desktop ─────────────── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0c122b]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo Oficial da Feira Eu Amo Pet 2027"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="relative w-full max-w-3xl bg-[#101b44] border border-white/15 rounded-3xl p-5 sm:p-8 shadow-2xl text-white text-center animate-in fade-in zoom-in-95 duration-200">
            {/* Botão Fechar Ergonômico (Touch-friendly 44px+) */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center font-bold text-lg transition-colors cursor-pointer z-10"
              aria-label="Fechar modal de vídeo"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Cabeçalho do Modal */}
            <div className="space-y-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f9418c] text-white text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Experiência Imersiva • 2027</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white"
                style={{ fontFamily: '"Protest Strike", sans-serif' }}
              >
                Feira &amp; Expo Eu Amo Pet 2027
              </h3>

              <p className="text-xs sm:text-sm text-stone-200 max-w-xl mx-auto leading-relaxed">
                Um festival completo de convivência, lazer e geração de negócios. Conheça as arenas temáticas, estandes, desfiles pet e palestras veterinárias em Macaé e no Circuito da Região dos Lagos.
              </p>
            </div>

            {/* Quadro de Demonstração / Preview Cenográfico */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-inner flex items-center justify-center mb-6">
              <img
                src="/assets/festival/71A7967.jpg"
                alt="Encontro de pets e tutores"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101b44] via-transparent to-transparent" />

              <div className="relative z-10 p-4 space-y-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f9418c] text-white flex items-center justify-center mx-auto shadow-2xl shadow-pink-500/50">
                  <Video className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#ffc600] uppercase tracking-wider">
                  Teaser Oficial em Alta Definição
                </p>
                <p className="text-[11px] sm:text-xs text-white/80 max-w-md mx-auto">
                  Acompanhe a montagem, os estandes de marcas pet, a arena de agility e o espaço de adoção com o Castramóvel CCZ.
                </p>
              </div>
            </div>

            {/* Botões de Ação Imediata */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="#atracoes"
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#f9418c] hover:bg-[#e02e77] active:scale-95 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                Ver Todas as 8 Atrações
              </a>
              <a
                href="#patrocinio"
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Cotas de Patrocínio 2027
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

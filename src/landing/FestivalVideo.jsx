import React, { useState } from 'react';
import { Play, Sparkles, MapPin, Video, ArrowRight } from 'lucide-react';

export default function FestivalVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="fp-video-section relative overflow-hidden" aria-label="Vídeo Oficial da Feira Eu Amo Pet 2027">
      <div className="fp-video-content">
        <div className="fp-video-frame" id="fp-video-frame">
          {!isPlaying ? (
            <button
              className="fp-video-cover group relative w-full h-full block cursor-pointer overflow-hidden text-left border-0 p-0"
              id="fp-video-cover"
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Assistir ao vídeo da Feira Eu Amo Pet 2027"
            >
              {/* Authentic Festival Background Photo (Beach / Palm trees / Crowd / Pet friendly) */}
              <img
                decoding="async"
                src="/assets/festival/Copia-de-_YAN2359-scaled.jpg"
                alt="Feira &amp; Expo Eu Amo Pet 2027 • Macaé e Região dos Lagos"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Cinematic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101b44]/90 via-[#101b44]/40 to-[#101b44]/30 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Top Eyebrow Badge */}
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#f9418c] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>VÍDEO OFICIAL • EDIÇÃO 2027</span>
                </span>
              </div>

              {/* Center Play Button with Brand Pulse */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 text-center">
                <div className="relative mb-3 sm:mb-4">
                  {/* Pulsing ring */}
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

                {/* Bottom Call to Action Pill */}
                <div className="mt-3 sm:mt-5 inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white text-[#202f6b] font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-xl group-hover:bg-[#ffc600] transition-colors">
                  <span>▶ VIVA ESSA EXPERIÊNCIA</span>
                </div>
              </div>
            </button>
          ) : (
            <div className="w-full h-full bg-[#101b44] flex flex-col items-center justify-center relative p-6 sm:p-10 text-center">
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/20 text-white hover:bg-white/40 flex items-center justify-center font-bold text-xl transition-colors cursor-pointer"
                aria-label="Fechar Vídeo"
              >
                ✕
              </button>

              <div className="max-w-2xl text-white space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f9418c] text-white flex items-center justify-center mx-auto shadow-lg shadow-pink-500/30">
                  <Video className="w-8 h-8" />
                </div>
                <h3
                  className="font-black text-2xl sm:text-3xl text-white uppercase tracking-tight"
                  style={{ fontFamily: '"Protest Strike", sans-serif' }}
                >
                  Feira &amp; Expo Eu Amo Pet 2027
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-xl mx-auto">
                  Acompanhe os preparativos do maior evento do setor pet no interior fluminense: pavilhões de estandes, arena de agility, área de adoção responsável, palestras com especialistas veterinários e praça gastronômica.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="#atracoes"
                    onClick={() => setIsPlaying(false)}
                    className="px-6 py-3 rounded-full bg-[#f9418c] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#e02e77] transition-colors"
                  >
                    Ver Todas as Atrações
                  </a>
                  <a
                    href="#patrocinio"
                    onClick={() => setIsPlaying(false)}
                    className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Cotas de Patrocínio 2027
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

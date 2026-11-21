import React, { useState } from 'react';

export default function FestivalVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="fp-video-section" aria-label="Vídeo Feira Eu Amo Pet">
      <div className="fp-video-content">
        <div className="fp-video-frame" id="fp-video-frame">
          {!isPlaying ? (
            <button
              className="fp-video-cover"
              id="fp-video-cover"
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Assistir ao vídeo da Feira Eu Amo Pet"
            >
              <img
                decoding="async"
                src="/assets/festival/ChatGPT-Image-21_09_2026-16_42_41.png"
                alt="Feira Eu Amo Pet - Vídeo Oficial"
              />

              <span className="fp-video-play" aria-hidden="true">
                <svg viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="29" fill="#F9418C" />
                  <path d="M26 20.5L46 32L26 43.5V20.5Z" fill="#fff" />
                </svg>
              </span>

              <span className="fp-video-text">VIVA ESSA EXPERIÊNCIA</span>
            </button>
          ) : (
            <div className="w-full h-full bg-black flex flex-col items-center justify-center relative p-6 text-center">
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/40 flex items-center justify-center font-bold text-xl transition-colors"
                aria-label="Fechar Vídeo"
              >
                ✕
              </button>
              <div className="max-w-xl text-white space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f9418c] text-white flex items-center justify-center mx-auto shadow-lg shadow-pink-500/30">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="font-serif font-black text-2xl text-white">
                  Feira &amp; Expo Eu Amo Pet 2027 • Macaé &amp; Região dos Lagos
                </h3>
                <p className="text-sm text-stone-300">
                  Conheça a planta cenográfica, os pavilhões comerciais de estandes, a arena de agility, praça gastronômica pet friendly e o circuito de adoção nas regiões mapeadas de Macaé e Região dos Lagos.
                </p>
                <div className="pt-2">
                  <a
                    href="#o-festival"
                    onClick={() => setIsPlaying(false)}
                    className="inline-block px-6 py-2.5 rounded-full bg-white text-[#202f6b] font-bold text-xs uppercase tracking-wider hover:bg-stone-100 transition-colors"
                  >
                    Explorar Atrações
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

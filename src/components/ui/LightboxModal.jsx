import React from 'react';
import { useApp } from '../../context/AppContext';
import { X } from 'lucide-react';

export default function LightboxModal() {
  const { lightboxImage, setLightboxImage } = useApp();

  if (!lightboxImage) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={() => setLightboxImage(null)}
    >
      <div 
        className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setLightboxImage(null)}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[75vh] overflow-hidden bg-slate-900 flex items-center justify-center">
          <img
            src={lightboxImage.src}
            alt={lightboxImage.title}
            className="w-full h-full max-h-[75vh] object-contain"
          />
        </div>

        <div className="p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-pet-terracotta">
              {lightboxImage.category}
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              {lightboxImage.title}
            </h3>
            {lightboxImage.caption && (
              <p className="text-sm text-slate-500 mt-0.5">
                {lightboxImage.caption}
              </p>
            )}
          </div>
          <span className="text-xs text-slate-400 font-mono self-start sm:self-auto">
            Acervo Oficial Feira Eu Amo Pet
          </span>
        </div>
      </div>
    </div>
  );
}

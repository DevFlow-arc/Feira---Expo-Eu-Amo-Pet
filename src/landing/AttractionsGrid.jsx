import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function AttractionsGrid() {
  const { data, setLightboxImage } = useApp();
  const { attractionsList } = data;

  return (
    <section id="atracoes" className="py-20 bg-pet-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-pet-terracotta bg-orange-100/70 px-3 py-1 rounded-full border border-orange-200">
            Experiência & Lazer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Grandes Atrações para Toda a Família
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Uma programação completa pensada para o bem-estar animal, capacitação profissional de lojistas e diversão de tutores.
          </p>
        </div>

        {/* 6 Attractions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractionsList.map((attraction) => (
            <div
              key={attraction.id}
              className="bg-white rounded-2xl overflow-hidden border border-pet-border shadow-xs card-hover flex flex-col group"
            >
              {/* Card Image */}
              <div 
                className="relative h-52 overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => setLightboxImage({ src: attraction.image, title: attraction.title, category: attraction.category, caption: attraction.description })}
              >
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/assets/gallery/Leonardo_Diffusion_XL_A_bustling_petthemed_event_filled_with_a_0.jpg";
                  }}
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold">
                  {attraction.category}
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-bold shadow-sm">
                  {attraction.highlight}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-pet-terracotta transition-colors">
                    {attraction.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {attraction.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5 text-pet-forest">
                    <CheckCircle2 className="w-4 h-4" />
                    Atração Confirmada
                  </span>
                  <button
                    onClick={() => setLightboxImage({ src: attraction.image, title: attraction.title, category: attraction.category, caption: attraction.description })}
                    className="text-pet-terracotta hover:underline font-semibold"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

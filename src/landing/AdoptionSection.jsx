import React from 'react';
import { useApp } from '../context/AppContext';
import { Heart, ShieldCheck, Check, Sparkles, ArrowRight } from 'lucide-react';

export default function AdoptionSection() {
  const { data } = useApp();
  const { generalInfo } = data;

  return (
    <section id="adocao" className="py-20 bg-white border-b border-pet-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-rose-50/70 via-white to-amber-50/50 rounded-3xl p-8 sm:p-12 border border-rose-100 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Box */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900">
                <img
                  src="/assets/gallery/Leonardo_Diffusion_XL_An_engaging_pet_adoption_area_featuring_1.jpg"
                  alt="Área de Adoção Pet"
                  className="w-full h-80 sm:h-96 object-cover"
                  onError={(e) => {
                    e.target.src = "/assets/gallery/Leonardo_Diffusion_XL_A_bustling_petthemed_event_filled_with_a_0.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6 text-white">
                  <div>
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                      Causa Animal
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      Adoção com Amor e Responsabilidade
                    </h4>
                  </div>
                </div>
              </div>

              {/* Floating Counter Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3.5 shadow-lg border border-rose-100 flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-rose-500 text-white flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 leading-tight">
                    Meta: {generalInfo.targetAdoptions} Vidas
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Acolhidas em Novos Lares
                  </div>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/70 text-rose-800 text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
                Parceria com CCZ e ONGs de Campos
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Um Espaço Dedicado a Dar um Novo Começo a Quem Mais Precisa
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A Feira Eu Amo Pet tem o compromisso moral de unir forças com o <strong>Centro de Controle de Zoonoses (CCZ)</strong> e os abrigos locais de Campos dos Goytacazes para viabilizar adoções éticas, vacinadas e castradas.
              </p>

              {/* Key points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Animais vacinados e microchipados</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Entrevista e triagem com psicólogo animal</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Castramóvel municipal em apoio no local</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Kit boas-vindas oferecido pelos patrocinadores</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#ingressos"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  <span>Quero Adotar um Amigo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

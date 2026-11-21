import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Heart, 
  Sparkles, 
  Compass, 
  Smile, 
  ShieldCheck, 
  Footprints, 
  Award, 
  Lightbulb, 
  HandHeart,
  Dog,
  ArrowRight
} from 'lucide-react';

export default function FestivalPropositoSection() {
  const { eventInfo, triggerCelebration } = useApp();

  return (
    <section id="festival" className="py-20 md:py-28 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Modeled from festivalpet.com.br) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            Um Festival com Propósito • Família & Pets
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 mt-4 tracking-tight leading-tight">
            Onde Pets, Pessoas e Marcas se Encontram para Viver Algo Especial
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed">
            Muito além de uma feira convencional de negócios, criamos um espaço de celebração da convivência entre famílias e animais, com acolhimento social e respeito rigoroso ao bem-estar animal.
          </p>
        </div>

        {/* 3 Pillars Grid (Experiências, Conhecimento, Impacto Social) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Pilar 1: Experiências */}
          <div className="rounded-3xl bg-white border border-stone-200 p-8 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold mb-6 border border-amber-100">
                <Footprints className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Pilar 01</span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1 tracking-tight">
                Experiências & Lazer
              </h3>
              <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                Atrações dinâmicas para entreter tutores e animais em ambiente seguro:
              </p>

              <ul className="mt-4 space-y-2.5 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                  <span><strong>Arena de Agility:</strong> Demonstrações de adestramento e pista de obstáculos aberta.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                  <span><strong>Desfile Pet Fantasia:</strong> Domingo com troféus para pets mais criativos da região.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                  <span><strong>Praça Gastronômica:</strong> Food trucks locais e quiosques com petiscos naturais pet.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 text-[11px] font-semibold text-stone-500">
              Pistas climatizadas e gramado externo
            </div>
          </div>

          {/* Pilar 2: Conhecimento */}
          <div className="rounded-3xl bg-white border border-stone-200 p-8 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-6 border border-emerald-100">
                <Lightbulb className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Pilar 02</span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1 tracking-tight">
                Conhecimento Prático
              </h3>
              <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                Workshops gratuitos para tutores responsáveis e amantes de animais:
              </p>

              <ul className="mt-4 space-y-2.5 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                  <span><strong>Primeiros Socorros em Casa:</strong> O que fazer em caso de engasgo, corte ou insolação.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                  <span><strong>Adestramento Positivo:</strong> Técnicas práticas para passeios sem puxões e ansiedade.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                  <span><strong>Alimentação Segura:</strong> Mitos e verdades sobre frutas, petiscos e dietas mistas.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 text-[11px] font-semibold text-stone-500">
              Palestras de 30 min sem custo adicional
            </div>
          </div>

          {/* Pilar 3: Impacto Social */}
          <div className="rounded-3xl bg-white border border-stone-200 p-8 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold mb-6 border border-rose-100">
                <HandHeart className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700">Pilar 03</span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1 tracking-tight">
                Impacto Social & Saúde
              </h3>
              <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                Parceria estratégica com os órgãos municipais e ONGs locais:
              </p>

              <ul className="mt-4 space-y-2.5 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0"></span>
                  <span><strong>Circuito de Adoção CCZ:</strong> Mais de 150 cães e gatos castrados e vacinados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0"></span>
                  <span><strong>Castramóvel Municipal:</strong> Ações de conscientização e microchipagem gratuita.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0"></span>
                  <span><strong>Arrecadação de Ração:</strong> Ponto de coleta para protetores independentes da cidade.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 text-[11px] font-semibold text-stone-500">
              Chancela oficial da Prefeitura de Campos
            </div>
          </div>

        </div>

        {/* Banner Fotográfico Central com Fotos Reais */}
        <div className="rounded-3xl overflow-hidden border border-stone-300 bg-stone-900 relative shadow-xl">
          <img
            src="/assets/gallery/Leonardo_Diffusion_XL_An_interactive_space_showcasing_exotic_a_0.jpg"
            alt="Espaço Interativo do Festival Pet"
            className="w-full h-72 sm:h-96 object-cover opacity-85"
            onError={(e) => {
              e.target.src = "/assets/gallery/Leonardo_Diffusion_XL_A_bustling_petthemed_event_filled_with_a_0.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent flex flex-col justify-end p-8 sm:p-12 text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Ambiente Planejado para Famílias
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mt-1 max-w-2xl">
              Um Encontro Confortável, Seguro e Acessível para Toda a População de Campos
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 max-w-2xl">
              Estacionamento amplo no Parque da Pecuária, pontos de hidratação gratuitos para cães em todo o trajeto, equipe veterinária de plantão e segurança privada integrada à Guarda Municipal.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, MapPin, Ticket, Award, Store, Heart, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  const { eventInfo, triggerCelebration } = useApp();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Institutional Status & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge (Modeled after petfaires.com.br hero) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-300 text-stone-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>Hub de Negócios do Mercado Pet e Vet do Norte Fluminense</span>
            </div>

            {/* Main title (Exact Pet Fair ES headline adapted to the user's region) */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-950 tracking-tight leading-[1.12]">
              Onde o mercado pet e vet se encontra
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Negócios, relacionamento, ciência e espetáculo em três dias de evento no Parque de Exposições da Fundação Rural de Campos dos Goytacazes.
            </p>

            {/* Date and Location indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-stone-200/90 shadow-xs text-xs sm:text-sm font-semibold text-stone-800">
                <Calendar className="w-4 h-4 text-emerald-700" />
                <span>{eventInfo.date || '14 a 16 de Novembro de 2027'}</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-stone-200/90 shadow-xs text-xs sm:text-sm font-semibold text-stone-800">
                <MapPin className="w-4 h-4 text-stone-600" />
                <span>{eventInfo.venue || 'Fundação Rural de Campos'}</span>
              </div>
            </div>

            {/* Call to Actions (Modeled from petfaires.com.br) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#quero-expor"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-50 text-sm font-bold shadow-sm transition-all hover:shadow"
              >
                <Store className="w-4 h-4" />
                <span>Quero expor minha marca</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </a>
              <a
                href="#garanta-entrada"
                onClick={triggerCelebration}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 border border-stone-300 text-stone-900 text-sm font-semibold transition-all shadow-xs"
              >
                <Ticket className="w-4 h-4 text-stone-700" />
                <span>Quero visitar (Credenciamento)</span>
              </a>
            </div>

            {/* Institutional Endorsement */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2.5 text-xs text-stone-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>Apoio Institucional: Prefeitura Municipal de Campos • Parceria CCZ • Fundação Rural</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase (Real 3D Fair Pavilion Render) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Architectural Card Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-300 bg-stone-900 group">
                <img
                  src="/assets/gallery/Leonardo_Diffusion_XL_A_bustling_petthemed_event_filled_with_a_0.jpg"
                  alt="Pavilhão Oficial da Feira Eu Amo Pet"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
                
                {/* Subtle Overlay Badge */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    Hub de Negócios & Convivência
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    Feira de Negócios, Pet Educa & Batalha de Groomers
                  </h3>
                  <p className="text-xs text-stone-300 mt-1">
                    52 estandes modulares, Arena VET 360, triagem sanitária CAEX e circuito de adoção ética.
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1: Adoções CCZ */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-xl p-3.5 shadow-md border border-stone-200/90 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
                </div>
                <div>
                  <div className="text-base font-bold text-stone-900">
                    +{eventInfo.targetAdoptions || 150}
                  </div>
                  <div className="text-[11px] font-medium text-stone-500">
                    Adoções Previstas
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 2: Estandes */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-xl p-3.5 shadow-md border border-stone-200/90 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <div className="text-base font-bold text-stone-900">
                    {eventInfo.exhibitorCount || 52} Estandes
                  </div>
                  <div className="text-[11px] font-medium text-stone-500">
                    Capacidade do Pavilhão
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-950">
              R$ 76,3 Bi
            </div>
            <div className="text-xs text-stone-500 font-medium mt-1">
              Mercado Pet Nacional
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-950">
              {eventInfo.expectedAttendees ? eventInfo.expectedAttendees.toLocaleString('pt-BR') : '35.000'}
            </div>
            <div className="text-xs text-stone-500 font-medium mt-1">
              Visitantes Projetados
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-950">
              3 Dias
            </div>
            <div className="text-xs text-stone-500 font-medium mt-1">
              Feira, Arenas & Workshops
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-emerald-700">
              Gratuito
            </div>
            <div className="text-xs text-stone-500 font-medium mt-1">
              Acesso da População
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

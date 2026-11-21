import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Stethoscope, 
  Store, 
  Scissors, 
  ArrowRight, 
  Award, 
  Clock, 
  Calendar, 
  Trophy,
  Sparkles,
  MessageCircle
} from 'lucide-react';

export default function NegociosCienciaEspetaculoSection() {
  const { eventInfo, triggerCelebration } = useApp();

  const handleAction = (tipo) => {
    triggerCelebration();
    const phone = "5522997885784";
    let text = "";
    if (tipo === 'vet') {
      text = "Olá Maycon! Gostaria de receber o informativo sobre a abertura de inscrições e temas do Congresso VET 360 / Pet Educa na Feira Eu Amo Pet.";
    } else if (tipo === 'expor') {
      text = "Olá Maycon! Vim pela seção de Feira de Negócios e quero reservar um estande comercial para minha marca.";
    } else {
      text = "Olá Maycon! Sou tosador/groomer e quero receber o regulamento oficial e categorias da Batalha de Groomers na Feira Eu Amo Pet.";
    }
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="programacao-hub" className="py-20 md:py-28 bg-[#f5f3ef] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Modeled from petfaires.com.br - Seção 6) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-stone-600" />
            Programação Integrada • Hub de Experiências
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 mt-4 tracking-tight">
            Negócios, ciência e espetáculo
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed">
            A convergência perfeita entre a atualização clínica dos médicos veterinários, a geração de negócios no pavilhão comercial e o show de técnica dos melhores tosadores do estado.
          </p>
        </div>

        {/* 3 Power Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Ciência / Pet Educa (VET 360) */}
          <div className="rounded-3xl bg-white border border-stone-200 p-8 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold border border-emerald-100">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Ciência & Saúde
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                Pet Educa / VET 360
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                Conteúdo científico de ponta para médicos veterinários e acadêmicos, com curadoria técnica de instituições de ensino superior (UENF e convidados).
              </p>

              <div className="mt-6 pt-6 border-t border-stone-100 space-y-2 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Sexta, Sábado e Domingo • 3 Dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Carga horária de 20h com certificado digital</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Auditório climatizado com kit congressista</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <button
                type="button"
                onClick={() => handleAction('vet')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
              >
                <span>Quero ser avisado das inscrições</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Negócios / Feira de Negócios */}
          <div className="rounded-3xl bg-white border border-stone-200 p-8 shadow-xs hover:border-amber-500 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold border border-amber-100">
                  <Store className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                  Comércio & Indústria
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                Feira de Negócios
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                Marcas líderes, lançamentos e tendências do setor pet, criando oportunidades reais de abastecimento com descontos de fábrica para pet shops da região.
              </p>

              <div className="mt-6 pt-6 border-t border-stone-100 space-y-2 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-800 shrink-0" />
                  <span>52 Estandes no Pavilhão Principal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-800 shrink-0" />
                  <span>Horário: 10h às 21h em todos os dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-800 shrink-0" />
                  <span>Experiências e sampling para quem leva o pet junto</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <button
                type="button"
                onClick={() => handleAction('expor')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-xs"
              >
                <span>Quero expor minha marca</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Espetáculo / Batalha de Groomers */}
          <div className="rounded-3xl bg-white border border-stone-200 p-8 shadow-xs hover:border-purple-500 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-800 flex items-center justify-center font-bold border border-purple-100">
                  <Scissors className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-100 text-purple-800">
                  Estética & Show
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                Batalha de Groomers
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                Tosadores e esteticistas disputam o pódio ao vivo diante de jurados técnicos. Troféus oficiais, maquinários e prêmios para os vencedores.
              </p>

              <div className="mt-6 pt-6 border-t border-stone-100 space-y-2 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-800 shrink-0" />
                  <span>Sábado & Domingo na Arena Central</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-800 shrink-0" />
                  <span>Categorias: Tosa Comercial, Asian Style e Poodle</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-800 shrink-0" />
                  <span>Visibilidade nos canais oficiais e redes</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <button
                type="button"
                onClick={() => handleAction('groomer')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-800 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-xs"
              >
                <span>Quero competir na Batalha</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

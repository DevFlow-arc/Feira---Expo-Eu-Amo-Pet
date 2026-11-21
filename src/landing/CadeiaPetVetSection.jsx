import React from 'react';
import { 
  Users, 
  BookOpen, 
  Handshake, 
  BadgeCheck, 
  Building2, 
  ArrowRight,
  Target,
  Sparkles
} from 'lucide-react';

export default function CadeiaPetVetSection() {
  return (
    <section id="por-que-expor" className="py-20 md:py-28 bg-[#f5f3ef] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Modeled from petfaires.com.br - Seção 3) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5 text-stone-600" />
            Por que Expor na Feira Eu Amo Pet?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 mt-4 tracking-tight">
            A cadeia pet e vet em um só lugar
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed">
            Mais do que volume de público, entregamos relevância comercial. Filtramos os visitantes para que sua equipe converse diretamente com quem tem poder real de decisão.
          </p>
        </div>

        {/* 3 Strong Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Decisores, não curiosos */}
          <div className="rounded-2xl bg-white border border-stone-200 p-8 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold mb-6 border border-amber-100">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                Decisores, não curiosos
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                Entrada gratuita e credenciamento exclusivo apenas para empresários do setor, com CNPJ comprovado, e médicos veterinários com CRMV ativo. <strong>Quem entra de graça na área técnica é quem compra e prescreve.</strong>
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 text-[11px] font-semibold text-stone-500 flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-emerald-600" />
              Qualificação rigorosa no credenciamento
            </div>
          </div>

          {/* Card 2: Conteúdo que traz o profissional */}
          <div className="rounded-2xl bg-white border border-stone-200 p-8 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold mb-6 border border-emerald-100">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                Conteúdo que atrai o profissional
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                O <strong>Congresso VET em Foco / Arena VET 360</strong> e a <strong>Batalha de Groomers</strong> atraem o profissional formador de opinião: quem indica medicamentos, recomenda rações e influencia diretamente as compras dos tutores.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 text-[11px] font-semibold text-stone-500 flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-emerald-600" />
              Presença dos maiores especialistas do estado
            </div>
          </div>

          {/* Card 3: Relacionamento frente a frente */}
          <div className="rounded-2xl bg-white border border-stone-200 p-8 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-bold mb-6 border border-blue-100">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                Relacionamento frente a frente
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                Demonstração prática de equipamentos, amostra de produto na mão do comprador (sampling) e conversas comerciais aprofundadas com condições exclusivas de fechamento que <strong>nenhum anúncio digital ou catálogo PDF consegue entregar.</strong>
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 text-[11px] font-semibold text-stone-500 flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-emerald-600" />
              Ambiente climatizado para reuniões e contratos
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Ticket, 
  Building2, 
  GraduationCap, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Dog,
  Sparkles
} from 'lucide-react';

export default function GarantaSuaEntradaSection() {
  const { eventInfo, triggerCelebration } = useApp();

  return (
    <section id="garanta-entrada" className="py-20 md:py-28 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Modeled from petfaires.com.br - Seção 7) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <Ticket className="w-3.5 h-3.5 text-stone-600" />
            Credenciamento Antecipado
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 mt-4 tracking-tight">
            Garanta sua entrada
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed">
            Selecione a sua categoria de participação e emita seu comprovante digital antecipado para evitar filas no Parque de Exposições da Fundação Rural de Campos.
          </p>
        </div>

        {/* 3 Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Categoria 1: Tutores e Público Geral */}
          <div className="rounded-3xl bg-white border border-stone-200 p-8 shadow-xs hover:border-stone-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold mb-6">
                <Dog className="w-6 h-6 text-stone-700" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                Público Geral & Famílias
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                Tutores e Público
              </h3>
              
              <div className="mt-4">
                <div className="text-3xl font-serif font-extrabold text-emerald-800">
                  Gratuito
                </div>
                <div className="text-xs text-stone-500 mt-0.5">
                  Acesso livre mediante inscrição online
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-stone-100 space-y-2.5 text-xs text-stone-700">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Acesso ao pavilhão de feira, desfiles e praça de alimentação</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Espaço Adoção CCZ e Castramóvel municipal</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pet entra com carteira de vacina e triagem CAEX</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Menores de 16 anos acompanhados não pagam</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <a
                href="#inscricao"
                onClick={triggerCelebration}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-xs"
              >
                <span>Emitir Ingresso Gratuito</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Categoria 2: Empresário do Setor Pet (Destaque B2B) */}
          <div className="rounded-3xl bg-stone-900 border-2 border-stone-900 p-8 shadow-xl text-stone-100 flex flex-col justify-between relative scale-[1.02]">
            <div className="absolute -top-3 right-6 bg-amber-400 text-stone-950 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
              Exclusivo B2B
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-800 text-stone-200 flex items-center justify-center font-bold mb-6">
                <Building2 className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Lojistas, Pet Shops & Clínicas
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Empresário do Setor
              </h3>
              
              <div className="mt-4">
                <div className="text-3xl font-serif font-extrabold text-white">
                  Entrada Gratuita
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  Basta informar o CNPJ no credenciamento
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-stone-800 space-y-2.5 text-xs text-stone-300">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Crachá B2B de comprador profissional</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Acesso às Rodadas de Negócios e condições de fábrica</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Catálogo digital com tabela de distribuidores</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Entrada rápida pelo portão de expositores e credenciados</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800">
              <a
                href="#inscricao"
                onClick={triggerCelebration}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold transition-all shadow-md"
              >
                <span>Credenciamento com CNPJ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Categoria 3: Pet Educa / Congresso VET */}
          <div className="rounded-3xl bg-white border border-stone-200 p-8 shadow-xs hover:border-stone-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold mb-6">
                <GraduationCap className="w-6 h-6 text-emerald-700" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                Médicos Veterinários & Acadêmicos
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                Pet Educa / VET 360
              </h3>
              
              <div className="mt-4">
                <div className="text-3xl font-serif font-extrabold text-stone-900 font-mono">
                  R$ 80,00
                </div>
                <div className="text-xs text-stone-500 mt-0.5">
                  Ou meia-entrada para estudantes com carteirinha
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-stone-100 space-y-2.5 text-xs text-stone-700">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Acesso a todas as 4 salas do Congresso Técnico</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Certificado oficial de 20 horas complementares</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Kit congressista e caderno de resumos científicos</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Já garante acesso irrestrito aos 3 dias de feira</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <a
                href="#congresso-vet"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-xs"
              >
                <span>Inscrever-se no Congresso VET</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

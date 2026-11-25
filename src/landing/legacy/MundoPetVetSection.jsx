import React from 'react';
import { 
  Bone, 
  Stethoscope, 
  Scissors, 
  ShoppingBag, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function MundoPetVetSection() {
  const segments = [
    {
      icon: Bone,
      name: 'Nutrição & Alimentação Super Premium',
      desc: 'Rações secas e úmidas, petiscos funcionais, dietas veterinárias de prescrição e alimentação natural para cães e gatos.',
      badge: 'Alimentação'
    },
    {
      icon: Stethoscope,
      name: 'Medicina Veterinária, Vacinas & Farmácia',
      desc: 'Laboratórios farmacêuticos, equipamentos de diagnóstico por imagem, anestesia, instrumental cirúrgico e vacinas.',
      badge: 'Saúde Animal'
    },
    {
      icon: Scissors,
      name: 'Estética Animal & Grooming Profissional',
      desc: 'Sopradores, secadores, máquinas de tosa, tesouras importadas, cosméticos hipoalergênicos e hidratações dermatológicas.',
      badge: 'Banho & Tosa'
    },
    {
      icon: ShoppingBag,
      name: 'Acessórios, Camas, Guias & Brinquedos',
      desc: 'Coleiras com trava de segurança, guias ergonômicas, caixas de transporte homologadas para aviação e brinquedos interativos.',
      badge: 'Varejo & Lifestyle'
    },
    {
      icon: Cpu,
      name: 'Tecnologia, Softwares & Planos de Saúde',
      desc: 'Sistemas ERP para gestão de clínicas e pet shops, planos de saúde animal, automação de agendamentos e seguros pet.',
      badge: 'Serviços & Tech'
    }
  ];

  return (
    <section id="mercado-integrado" className="py-20 md:py-28 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Modeled from petfaires.com.br - Seção 4) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            Conectando o Mercado Regional
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 mt-4 tracking-tight">
            Onde todo o mundo pet e vet se encontra
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed">
            A <strong>Feira Eu Amo Pet</strong> reúne, em um só lugar, quem fabrica, distribui, vende, atende e cuida no universo pet e veterinário de Campos dos Goytacazes e região. São marcas apresentando lançamentos lado a lado com conteúdo científico e competições de estética ao vivo.
          </p>
        </div>

        {/* 5 Industrial Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs hover:border-stone-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5 text-stone-700" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                      {seg.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                    {seg.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
                    {seg.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Espaço de exposição homologado no pavilhão</span>
                </div>
              </div>
            );
          })}

          {/* Card Especial de Conexão com os Pets */}
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-900 text-white shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                Convivência Responsável
              </span>
              <h3 className="font-serif text-xl font-bold text-white mt-2 leading-snug">
                E sim, os pets também são bem-vindos!
              </h3>
              <p className="text-xs text-stone-300 mt-3 leading-relaxed">
                Ambiente 100% pet-friendly com triagem veterinária obrigatória no <strong>Portão 2 CAEX (12h às 17h)</strong>, carteira de vacinação em dia e pontos gratuitos de hidratação e higienização em todos os corredores.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-stone-800 text-xs font-semibold text-amber-300">
              Protocolo de biosseguridade rigoroso
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

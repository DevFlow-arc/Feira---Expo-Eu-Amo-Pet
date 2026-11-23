import React from 'react';
import { Car, ShieldCheck, LayoutGrid, Compass, ArrowDownToLine, MapPin } from 'lucide-react';

export default function FestivalInfraestrutura() {
  const pilares = [
    {
      id: 'estacionamento',
      titulo: 'Estacionamento Amplo & Seguro',
      desc: 'Área dedicada e ampla para estacionamento de veículos com controle de acesso facilitado, segurança patrimonial e fácil circulação de visitantes e expositores.',
      icon: <Car className="w-6 h-6 text-[#202f6b]" />,
      badge: 'ACESSO FACILITADO'
    },
    {
      id: 'castramovel',
      titulo: 'Castramóvel & Sanidade Animal',
      desc: 'Serviço de castração móvel em parceria com órgãos de proteção animal e CCZ, proporcionando comodidade, bem-estar e saúde pública durante o evento.',
      icon: <ShieldCheck className="w-6 h-6 text-[#f9418c]" />,
      badge: 'BEM-ESTAR ANIMAL'
    },
    {
      id: 'planta',
      titulo: 'Planta Baixa Modular para Estandes',
      desc: 'Opções flexíveis de layout adaptáveis a diferentes portes de empresas (estandes pequenos de 9m², médios de 15m² a 30m² e grandes ilhas de 60m²).',
      icon: <LayoutGrid className="w-6 h-6 text-[#ffc600]" />,
      badge: 'LAYOUT FLEXÍVEL'
    },
    {
      id: 'espacos',
      titulo: 'Espaços Dedicados & Setorização',
      desc: 'Áreas específicas para feiras comerciais, arena de desfiles, sanitários higienizados, playground infantil/pet e praça de alimentação para fluxo ordenado.',
      icon: <Compass className="w-6 h-6 text-[#8c43dc]" />,
      badge: 'FLUXO INTELIGENTE'
    }
  ];

  return (
    <section id="infraestrutura" className="fp-infra-section relative overflow-hidden py-16 sm:py-24" style={{ scrollMarginTop: '90px' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span
            className="inline-block px-5 py-1.5 rounded-full bg-[#202f6b] text-[#ffc600] text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm -rotate-1 mb-4"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            INFRAESTRUTURA &amp; LOGÍSTICA • EDIÇÃO 2027
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#202f6b] uppercase tracking-tight leading-tight"
            style={{ fontFamily: '"Protest Strike", sans-serif' }}
          >
            UM ESPAÇO PLANEJADO PARA <br className="hidden sm:inline" />
            <span className="text-[#f9418c]">CONFORTO, NEGÓCIOS E SEGURANÇA</span>
          </h2>

          <div className="w-36 h-2 bg-[#ffc600] rounded-full mx-auto my-4 -rotate-1" />

          <p
            className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            Estrutura técnica completa desenhada para acomodar com tranquilidade mais de 15.000 visitantes e milhares de pets em Macaé e no circuito regional.
          </p>
        </div>

        {/* 4 Pillars Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {pilares.map((item) => (
            <div
              key={item.id}
              className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border-2 border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <div>
                <span
                  className="text-[10px] font-black uppercase tracking-wider text-[#f9418c] bg-[#f9418c]/10 px-2.5 py-0.5 rounded-md inline-block mb-1.5"
                  style={{ fontFamily: '"Nunito", sans-serif' }}
                >
                  {item.badge}
                </span>

                <h3
                  className="text-base sm:text-lg font-bold text-[#202f6b] group-hover:text-[#f9418c] transition-colors leading-snug mb-2"
                  style={{ fontFamily: '"Nunito", sans-serif' }}
                >
                  {item.titulo}
                </h3>

                <p
                  className="text-stone-600 text-xs sm:text-sm leading-relaxed"
                  style={{ fontFamily: '"Nunito", sans-serif' }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Floor Plan & Manuals Callout Box */}
        <div className="bg-[#f8f1e5] border-2 border-dashed border-[#8c43dc]/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#8c43dc]/10 text-[#8c43dc] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4
                className="text-base sm:text-lg font-bold text-[#202f6b]"
                style={{ fontFamily: '"Nunito", sans-serif' }}
              >
                Consulte a Planta Arquitetônica e Metragens Detalhadas
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                Arquivo técnico original com cotas de corredores (3,20m a 4,80m), pontos de energia e hidrantes.
              </p>
            </div>
          </div>

          <a
            href="/docs/manuais/Planta-Baixa-Arquitetonica-Feira-Pet.pdf"
            download
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#8c43dc] hover:bg-[#7733c2] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            <ArrowDownToLine className="w-4 h-4" />
            <span>Baixar Planta Técnica (PDF)</span>
          </a>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { TrendingUp, BarChart3, Users, Award, ArrowUpRight } from 'lucide-react';

export default function FestivalMercadoPet() {
  const stats = [
    {
      numero: '3º LUGAR',
      rotulo: 'NO MERCADO GLOBAL',
      desc: 'O Brasil é o terceiro maior mercado pet do mundo em faturamento, com crescimento contínuo de dois dígitos ao ano.',
      cor: '#f9418c',
      bg: 'bg-[#f9418c]/10'
    },
    {
      numero: '+60%',
      rotulo: 'EM SAÚDE & BEM-ESTAR',
      desc: 'Mais da metade do orçamento dos tutores é voltada para produtos premium, nutrição especializada e medicina preventiva.',
      cor: '#ffc600',
      bg: 'bg-[#ffc600]/15'
    },
    {
      numero: 'POLO MC / RL',
      rotulo: 'MACAÉ & REGIÃO DOS LAGOS',
      desc: 'Região com alto poder de compra per capita e demanda latente por feiras, produtos inovadores e grandes eventos pet.',
      cor: '#8c43dc',
      bg: 'bg-[#8c43dc]/10'
    }
  ];

  return (
    <section id="mercado" className="fp-mercado-section relative overflow-hidden py-16 sm:py-24" style={{ scrollMarginTop: '90px' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span
            className="inline-block px-5 py-1.5 rounded-full bg-[#ffc600] text-[#202f6b] text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm -rotate-1 mb-4"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            O MERCADO PET EM NÚMEROS • PROJEÇÃO 2027
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#202f6b] uppercase tracking-tight leading-tight"
            style={{ fontFamily: '"Protest Strike", sans-serif' }}
          >
            O BRASIL É O 3º MAIOR MERCADO PET DO MUNDO <br className="hidden sm:inline" />
            <span className="text-[#f9418c]">— E NÃO PARA DE CRESCER.</span>
          </h2>

          <div className="w-36 h-2 bg-[#8c43dc] rounded-full mx-auto my-4 -rotate-1" />

          <p
            className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            Segundo relatórios da <strong>Euromonitor International</strong>, o consumidor brasileiro tem priorizado como nunca a qualidade de vida e o bem-estar dos seus pets, acelerando o consumo de rações premium, cuidados veterinários e experiências de lazer.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border-2 border-stone-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-2xl sm:text-3xl font-black tracking-tight"
                    style={{ color: item.cor, fontFamily: '"Protest Strike", sans-serif' }}
                  >
                    {item.numero}
                  </span>
                  <div className={`w-10 h-10 rounded-2xl ${item.bg} flex items-center justify-center text-stone-800 group-hover:scale-110 transition-transform`}>
                    <TrendingUp className="w-5 h-5" style={{ color: item.cor === '#ffc600' ? '#202f6b' : item.cor }} />
                  </div>
                </div>

                <h3
                  className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#202f6b] mb-2"
                  style={{ fontFamily: '"Nunito", sans-serif' }}
                >
                  {item.rotulo}
                </h3>

                <p
                  className="text-stone-600 text-xs sm:text-sm leading-relaxed"
                  style={{ fontFamily: '"Nunito", sans-serif' }}
                >
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-bold text-[#8c43dc]">
                <span>Oportunidade Comercial 2027</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Callout Banner */}
        <div className="bg-[#202f6b] rounded-3xl p-6 sm:p-10 shadow-2xl text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#f9418c] text-white text-[11px] font-black uppercase tracking-wider mb-3">
              OPORTUNIDADE ESTRATÉGICA
            </span>
            <h3
              className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug"
              style={{ fontFamily: '"Protest Strike", sans-serif' }}
            >
              Conecte sua empresa diretamente aos tutores e decisores do mercado fluminense.
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
              A Feira &amp; Expo Eu Amo Pet 2027 oferece estandes comerciais, cotas de patrocínio e ativações de marca para quem busca visibilidade, autoridade e novos clientes no segmento pet.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href="#patrocinio"
              className="px-6 py-3.5 rounded-full bg-[#f9418c] hover:bg-[#e02e77] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-pink-500/30 transition-all text-center"
              style={{ fontFamily: '"Nunito", sans-serif' }}
            >
              Ver Cotas de Patrocínio
            </a>
            <a
              href="#contato"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all text-center"
              style={{ fontFamily: '"Nunito", sans-serif' }}
            >
              Falar com Comercial
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { 
  Trophy, Sparkles, HeartHandshake, Stethoscope, 
  Eye, ShoppingBag, Gamepad2, UtensilsCrossed 
} from 'lucide-react';

export default function FestivalAtracoes() {
  const atracoes = [
    {
      id: 1,
      titulo: 'Concursos & Desfiles Pets',
      categoria: 'LAZER & ENTRETENIMENTO',
      desc: 'Exibições de habilidades, beleza e desfile pet fantasia com premiações para tutores e animais de todas as raças e portes.',
      icon: <Trophy className="w-6 h-6 text-[#f9418c]" />,
      cor: '#f9418c',
      bgBadge: 'bg-[#f9418c]/15 text-[#f9418c]'
    },
    {
      id: 2,
      titulo: 'Workshops & Palestras Técnicas',
      categoria: 'CONHECIMENTO VET',
      desc: 'Sessões educativas e interativas com especialistas renomados, abordando temas de nutrição, saúde, comportamento e negócios.',
      icon: <Sparkles className="w-6 h-6 text-[#ffc600]" />,
      cor: '#ffc600',
      bgBadge: 'bg-[#ffc600]/20 text-[#202f6b]'
    },
    {
      id: 3,
      titulo: 'Espaço Adote um Pet & Causa Animal',
      categoria: 'IMPACTO SOCIAL',
      desc: 'Área dedicada à adoção responsável em parceria direta com Centros de Controle de Zoonoses (CCZ) e ONGs parceiras regionais.',
      icon: <HeartHandshake className="w-6 h-6 text-[#f9418c]" />,
      cor: '#f9418c',
      bgBadge: 'bg-[#f9418c]/15 text-[#f9418c]'
    },
    {
      id: 4,
      titulo: 'Hospital Veterinário no Local',
      categoria: 'SAÚDE & BEM-ESTAR',
      desc: 'Triagem clínica, orientações médicas veterinárias gratuitas, vacinação e protocolos de primeiros socorros preventivos.',
      icon: <Stethoscope className="w-6 h-6 text-[#8c43dc]" />,
      cor: '#8c43dc',
      bgBadge: 'bg-[#8c43dc]/15 text-[#8c43dc]'
    },
    {
      id: 5,
      titulo: 'Espaço de Animais Exóticos & Aves',
      categoria: 'EDUCAÇÃO AMBIENTAL',
      desc: 'Ambiente seguro e monitorado para o público conhecer espécies fascinantes, promovendo a conscientização e o respeito à fauna.',
      icon: <Eye className="w-6 h-6 text-[#202f6b]" />,
      cor: '#202f6b',
      bgBadge: 'bg-[#202f6b]/15 text-[#202f6b]'
    },
    {
      id: 6,
      titulo: 'Comercialização de Insumos & Produtos',
      categoria: 'FEIRA COMERCIAL',
      desc: 'Estandes com produtos essenciais para criação e cuidados: alimentos super premium, acessórios, cosméticos e medicamentos.',
      icon: <ShoppingBag className="w-6 h-6 text-[#f9418c]" />,
      cor: '#f9418c',
      bgBadge: 'bg-[#f9418c]/15 text-[#f9418c]'
    },
    {
      id: 7,
      titulo: 'Playground Recreativo para Pets',
      categoria: 'DIVERSÃO & AGILITY',
      desc: 'Área com circuitos de obstáculos e recreação monitorada para os animais se divertirem e gastarem energia em total segurança.',
      icon: <Gamepad2 className="w-6 h-6 text-[#ffc600]" />,
      cor: '#ffc600',
      bgBadge: 'bg-[#ffc600]/20 text-[#202f6b]'
    },
    {
      id: 8,
      titulo: 'Praça de Alimentação Pet Friendly',
      categoria: 'GASTRONOMIA & CONFORTO',
      desc: 'Opções gastronômicas variadas, áreas de descanso com sombra e pontos de hidratação contínua para pets e tutores.',
      icon: <UtensilsCrossed className="w-6 h-6 text-[#8c43dc]" />,
      cor: '#8c43dc',
      bgBadge: 'bg-[#8c43dc]/15 text-[#8c43dc]'
    }
  ];

  return (
    <section id="atracoes" className="fp-atracoes-section relative overflow-hidden py-16 sm:py-24" style={{ scrollMarginTop: '90px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span
            className="inline-block px-5 py-1.5 rounded-full bg-[#8c43dc] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md -rotate-1 mb-4"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            EXPERIÊNCIAS CONFIRMADAS • EDIÇÃO 2027
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#202f6b] uppercase tracking-tight leading-tight"
            style={{ fontFamily: '"Protest Strike", sans-serif' }}
          >
            8 GRANDES ATRAÇÕES QUE <br className="hidden sm:inline" />
            <span className="text-[#f9418c]">TRANSFORMAM A EXPERIÊNCIA</span>
          </h2>

          <div className="w-40 h-2 bg-[#ffc600] rounded-full mx-auto my-4 -rotate-1" />

          <p
            className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            A <strong>Feira &amp; Expo Eu Amo Pet 2027</strong> reuniu atrações diversificadas que combinam entretenimento familiar, atualização técnica veterinária e oportunidades comerciais de alto impacto.
          </p>
        </div>

        {/* 8 Cards Grid (4x2 desktop, 2x4 tablet, 1x8 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {atracoes.map((item) => (
            <div
              key={item.id}
              className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 border-2 border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${item.bgBadge}`}
                    style={{ fontFamily: '"Nunito", sans-serif' }}
                  >
                    {item.categoria}
                  </span>
                </div>

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

              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-stone-700">
                <span>Atração Oficial</span>
                <span className="text-[#f9418c] font-black">2027</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Quick CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-stone-600 font-semibold mb-4">
            Deseja expor seus produtos ou realizar ativações exclusivas em alguma dessas áreas?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#202f6b] hover:bg-[#152048] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-105"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            <span>Consultar Disponibilidade de Espaços</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

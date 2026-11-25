import React from 'react';
import { Crown, Star, Sparkles, Check, ArrowRight, MessageCircle } from 'lucide-react';

export default function FestivalPatrocinio() {
  const cotas = [
    {
      id: 'master',
      nome: 'PATROCÍNIO MÁSTER',
      subtitulo: 'Impacto Máximo & Exclusividade',
      destaque: 'PRINCIPAL PATROCINADOR',
      corPrincipal: '#f9418c',
      bgCard: 'border-[#f9418c] bg-white shadow-xl scale-[1.02] z-10',
      badgeCor: 'bg-[#f9418c] text-white',
      icone: <Crown className="w-7 h-7 text-[#f9418c]" />,
      beneficios: [
        'Exclusividade no segmento de atuação no evento',
        'Estande nobre com localização privilegiada de maior tráfego',
        'Logotipo em destaque em 100% dos materiais gráficos, digitais e palco',
        'Oportunidade de ministrar palestra ou workshop oficial',
        'Acesso VIP com reuniões de networking e mídia especializada',
        'Ações de marketing personalizadas antes, durante e após o evento'
      ],
      ctaTexto: 'Solicitar Cota Máster',
      msgWhats: 'Olá Maycon Douglas! Gostaria de receber informações e proposta da *Cota Máster* para a Feira Eu Amo Pet 2027.'
    },
    {
      id: 'senior',
      nome: 'PATROCÍNIO SÊNIOR',
      subtitulo: 'Grande Visibilidade & Flexibilidade',
      destaque: 'PATROCINADOR OFICIAL',
      corPrincipal: '#8c43dc',
      bgCard: 'border-stone-200 bg-white/95 shadow-md hover:shadow-xl',
      badgeCor: 'bg-[#8c43dc] text-white',
      icone: <Star className="w-7 h-7 text-[#8c43dc]" />,
      beneficios: [
        'Estande em área estratégica com excelente fluxo de público',
        'Logotipo em destaque nas peças promocionais, site e e-mail marketing',
        'Direito a realizar ativações promocionais e distribuição de brindes',
        'Acesso à área exclusiva de networking para negócios',
        '5 Ingressos exclusivos para o evento com acesso a painéis'
      ],
      ctaTexto: 'Solicitar Cota Sênior',
      msgWhats: 'Olá Maycon Douglas! Gostaria de receber informações e proposta da *Cota Sênior* para a Feira Eu Amo Pet 2027.'
    },
    {
      id: 'junior',
      nome: 'PATROCÍNIO JÚNIOR',
      subtitulo: 'Entrada Acessível & Posicionamento',
      destaque: 'APOIADOR OFICIAL',
      corPrincipal: '#202f6b',
      bgCard: 'border-stone-200 bg-white/95 shadow-md hover:shadow-xl',
      badgeCor: 'bg-[#202f6b] text-white',
      icone: <Sparkles className="w-7 h-7 text-[#ffc600]" />,
      beneficios: [
        'Estande em área comercial ativa com boa circulação',
        'Inclusão do logotipo em materiais gráficos e banners na área do evento',
        'Divulgação oficial no site e redes sociais da feira',
        'Participação com distribuição de folhetos e amostras grátis',
        '2 Ingressos para o evento'
      ],
      ctaTexto: 'Solicitar Cota Júnior',
      msgWhats: 'Olá Maycon Douglas! Gostaria de receber informações e proposta da *Cota Júnior* para a Feira Eu Amo Pet 2027.'
    }
  ];

  return (
    <section id="patrocinio" className="fp-patrocinio-section relative overflow-hidden py-16 sm:py-24" style={{ scrollMarginTop: '90px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span
            className="inline-block px-5 py-1.5 rounded-full bg-[#f9418c] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md -rotate-1 mb-4"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            OPORTUNIDADES DE PATROCÍNIO • EDIÇÃO 2027
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#202f6b] uppercase tracking-tight leading-tight"
            style={{ fontFamily: '"Protest Strike", sans-serif' }}
          >
            ESCOLHA O PACOTE IDEAL E <br className="hidden sm:inline" />
            <span className="text-[#f9418c]">MAXIMIZE SUA PARTICIPAÇÃO</span>
          </h2>

          <div className="w-36 h-2 bg-[#ffc600] rounded-full mx-auto my-4 -rotate-1" />

          <p
            className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            Diferentes níveis de investimento desenhados para atender aos objetivos comerciais e de autoridade da sua marca perante milhares de tutores e decisores do mercado pet.
          </p>
        </div>

        {/* 3 Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {cotas.map((cota) => (
            <div
              key={cota.id}
              className={`rounded-3xl p-6 sm:p-8 border-2 transition-all duration-300 flex flex-col justify-between ${cota.bgCard}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${cota.badgeCor}`}
                    style={{ fontFamily: '"Nunito", sans-serif' }}
                  >
                    {cota.destaque}
                  </span>
                  <div className="p-2 rounded-2xl bg-stone-50 border border-stone-200">
                    {cota.icone}
                  </div>
                </div>

                <h3
                  className="text-xl sm:text-2xl font-black text-[#202f6b] leading-tight"
                  style={{ fontFamily: '"Protest Strike", sans-serif' }}
                >
                  {cota.nome}
                </h3>

                <p
                  className="text-xs sm:text-sm text-stone-500 font-semibold mb-6"
                  style={{ fontFamily: '"Nunito", sans-serif' }}
                >
                  {cota.subtitulo}
                </p>

                <div className="space-y-3.5 mb-8">
                  {cota.beneficios.map((ben, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: `${cota.corPrincipal}20`, color: cota.corPrincipal }}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                        {ben}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/5522997885784?text=${encodeURIComponent(cota.msgWhats)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-white"
                  style={{
                    backgroundColor: cota.corPrincipal,
                    fontFamily: '"Nunito", sans-serif'
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{cota.ctaTexto}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Ebook & Dossier Banner Link */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-stone-600 font-medium">
            Precisa da apresentação completa com valores, plantas e plano de mídia detalhado?
          </p>
          <a
            href="#ebook"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8c43dc] hover:text-[#f9418c] underline underline-offset-4 mt-2 transition-colors"
          >
            <span>Baixar o Livro de Apresentação e Dossiê Comercial 2027 (PDF)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

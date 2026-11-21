import React, { useState } from 'react';

export default function FestivalFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      q: 'Todos os tipos de pets são permitidos?',
      a: 'O evento é voltado principalmente para cães e gatos. Como gatos geralmente não gostam de passeios onde não estejam livres, ainda mais num ambiente cheio de cachorros, recomendamos levar apenas os cães. Caso deseje levar outro tipo de animal de estimação, entre em contato previamente com nossa equipe veterinária para avaliarmos a viabilidade com cuidado e segurança.',
      // Ícone 1: Cão e Gato juntos / Patinha dupla
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <ellipse cx="6" cy="10" rx="1.8" ry="2.4"/>
          <ellipse cx="10.5" cy="6.5" rx="1.8" ry="2.6"/>
          <ellipse cx="15.5" cy="6.5" rx="1.8" ry="2.6"/>
          <ellipse cx="20" cy="10" rx="1.8" ry="2.4"/>
          <path d="M13 12c2.5 0 4.5 2 4.5 4 0 1.8-1.7 2.7-3.3 2.7-1 0-1.3-.4-2.2-.4s-1.2.4-2.2.4c-1.6 0-3.3-.9-3.3-2.7 0-2 2-4 4.5-4z"/>
        </svg>
      )
    },
    {
      q: 'É obrigatório o uso de guia e coleira?',
      a: 'Sim. Todos os pets devem estar com guia e coleira durante todo o evento no polo oficial de Macaé e Região dos Lagos. Essa medida é essencial para garantir a segurança e o bem-estar de todos os visitantes e animais.',
      // Ícone 2: Coleira pet com fivela e guia
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8"/>
          <path d="M12 4v4"/>
          <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
          <path d="M16 20c2-1 4-3 4-6"/>
        </svg>
      )
    },
    {
      q: 'Meu pet não se dá bem com outros animais. É seguro levá-lo?',
      a: 'Se o seu pet é reativo ou não está acostumado com ambientes com muitos estímulos, recomendamos cautela. O evento terá bastante movimento, com muitos animais e pessoas, o que pode ser desafiador para alguns pets.',
      // Ícone 3: Escudo de proteção com coração pet
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 8c-1.5-1.5-3.5 0-2 2.5l2 2 2-2c1.5-2.5-.5-4-2-2.5z" fill="currentColor"/>
        </svg>
      )
    },
    {
      q: 'Haverá atividades exclusivas para os pets?',
      a: 'Sim! Teremos circuitos de Agility, áreas de socialização, Concurso Pet Fantasia e outras atrações pensadas especialmente para o bem-estar e a diversão dos pets.',
      // Ícone 4: Obstáculo de Agility e estrela pet
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 19h18"/>
          <path d="M5 19V7l7-4 7 4v12"/>
          <polygon points="12 8 13.5 11 17 11.5 14.5 14 15 17.5 12 16 9 17.5 9.5 14 7 11.5 10.5 11" fill="currentColor"/>
        </svg>
      )
    },
    {
      q: 'Posso participar das palestras sem inscrição prévia?',
      a: 'Sim! As palestras da Arena Conhecimento são abertas ao público do evento, recomendando-se apenas chegar com antecedência. Para o Congresso VET 360 com emissão de certificado acadêmico de 20h, haverá credenciamento específico.',
      // Ícone 5: Estetoscópio veterinário e coração
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4v5a4 4 0 0 0 8 0V4"/>
          <path d="M8 13v3a4 4 0 0 0 8 0v-1"/>
          <circle cx="16" cy="14" r="2" fill="currentColor"/>
          <circle cx="4" cy="4" r="1.5" fill="currentColor"/>
          <circle cx="12" cy="4" r="1.5" fill="currentColor"/>
        </svg>
      )
    },
    {
      q: 'Como minha empresa pode expor ou apoiar a Feira Eu Amo Pet?',
      a: 'Sua marca pode se tornar patrocinadora oficial (Cotas Master, Sênior e Júnior), expositora de estande ou parceira oficial do evento. Entre em contato direto com Maycon Douglas (MD Mercado Digital) pelo WhatsApp (22) 99788-5784 ou preencha o formulário na página.',
      // Ícone 6: Estande de feira / Loja pet
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <path d="M9 22V12h6v10"/>
          <circle cx="12" cy="7" r="1.5" fill="currentColor"/>
        </svg>
      )
    },
    {
      q: 'Quais são os benefícios para os patrocinadores e expositores?',
      a: 'Visibilidade expressiva para mais de 15.000 pessoas altamente engajadas com o universo pet em Macaé, Região dos Lagos e interior fluminense, ativações de marca no evento, presença maciça nos materiais de rádio, TV e mídia digital, além de relacionamento comercial direto com decisores do mercado.',
      // Ícone 7: Megafone com patinha / Destaque de mídia
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        </svg>
      )
    },
    {
      q: 'Haverá feira de adoção e vacinação no local?',
      a: 'Sim! Em parceria oficial com Centros de Controle de Zoonoses (CCZ) e ONGs parceiras regionais, teremos o Circuito de Adoção Responsável com animais vacinados e castrados, além de posto gratuito de vacinação antirrábica e orientação veterinária preventiva.',
      // Ícone 8: Mãos de adoção / Coração pet com vacina
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
        </svg>
      )
    },
    {
      q: 'Como funciona o acesso e estacionamento no local do evento?',
      a: 'O polo de grandes eventos mapeado em Macaé / Região dos Lagos conta com amplo estacionamento interno privativo com segurança patrimonial, fácil acesso pelas principais vias e rodovias da região, além de infraestrutura completa para pets e famílias.',
      // Ícone 9: Pin de localização do Parque / Carro e árvores
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3" fill="currentColor"/>
        </svg>
      )
    },
    {
      q: 'É permitida a entrada de animais silvestres ou exóticos?',
      a: 'Não será permitida a circulação avulsa de animais silvestres ou exóticos sem autorização prévia e estande credenciado. A participação geral é voltada para animais domésticos (cães e gatos), devidamente vacinados e com comportamento equilibrado, em conformidade com as normas da Defesa Agropecuária e do CCZ.',
      // Ícone 10: Brasão de proteção da fauna / Guia normativo
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
          <path d="M9 16c1-2 4-2 5 0"/>
        </svg>
      )
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div id="faq" style={{ scrollMarginTop: '110px' }}>
      <div id="festivalpet-faq">
        <div className="fq-wrap">

          {/* Floating Sticker Decorations matching reference */}
          <div className="fq-stickers" aria-hidden="true">
            <img decoding="async" className="fq-st st-1" src="/assets/festival/Design-sem-nome-26.png" alt="" />
            <img decoding="async" className="fq-st st-2" src="/assets/festival/Design-sem-nome-28.png" alt="" />
            <img decoding="async" className="fq-st st-3" src="/assets/festival/Design-sem-nome-29.png" alt="" />
            <img decoding="async" className="fq-st st-4" src="/assets/festival/Design-sem-nome-28.png" alt="" />
            <img decoding="async" className="fq-st st-5" src="/assets/festival/Design-sem-nome-26.png" alt="" />
            <img decoding="async" className="fq-st st-6" src="/assets/festival/Design-sem-nome-29.png" alt="" />
          </div>

          <div className="fq-head">
            <span className="fq-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3"/>
                <path d="M12 17h.01"/>
                <circle cx="12" cy="12" r="9.5"/>
              </svg>
              DÚVIDAS FREQUENTES
            </span>

            <h2 className="fq-title">
              Ficou com alguma <span className="fq-pink">dúvida?</span>
            </h2>

            <p className="fq-sub">
              Reunimos tudo que você precisa saber antes de curtir a Feira Eu Amo Pet 🐾
            </p>
          </div>

          <div className="fq-list">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`fq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="fq-q"
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="fq-paw" title="Tema da dúvida">
                      {item.icon}
                    </span>

                    <span className="fq-q-txt">{item.q}</span>

                    <span className="fq-plus" aria-hidden="true"></span>
                  </button>

                  <div className="fq-a">
                    <div className="fq-a-in">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}

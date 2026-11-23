import React from 'react';
import BrandHeartPaw from '../components/BrandHeartPaw';

export default function FestivalPurpose() {
  return (
    <section id="social" className="fp-purpose">
      <div className="pp-deco pp-rays" aria-hidden="true">
        <i></i><i></i><i></i>
      </div>

      {/* Coração de contorno decorativo — mantido fiel ao original */}
      <svg className="pp-deco pp-heart" viewBox="0 0 124 112" fill="none" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
        <path d="M62,100 C24,72 9,51 16,31 C21,15 43,15 57,32 Q60,36 62,40 Q64,36 67,32 C81,15 103,17 108,33 C115,53 100,74 62,100 Z" />
      </svg>

      {/* Coração+patinha da marca — SVG limpo via componente, sem img */}
      <div className="pp-deco pp-paw select-none pointer-events-none" aria-hidden="true">
        <BrandHeartPaw className="w-full h-full drop-shadow-md" />
      </div>

      <svg className="pp-deco pp-star" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" aria-hidden="true">
        <path d="M50,7 L50,93 M13,25 L87,75 M87,25 L13,75" />
        <path d="M50,37 L53.5,47 L64,50 L53.5,53 L50,63 L46.5,53 L36,50 L46.5,47 Z" fill="#f51b88" stroke="none" />
      </svg>

      <svg className="pp-deco pp-squiggle" viewBox="0 0 260 55" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" aria-hidden="true">
        <path d="M5 36c24-42 50 29 75-1s50 30 76 0 51 27 98-20" />
      </svg>

      <div className="purpose-inner">
        <h2 className="purpose-title">
          UM FESTIVAL COM <span>PROPÓSITO</span>
        </h2>

        <span className="purpose-line" aria-hidden="true"></span>

        {/* Manifesto Oficial da Feira & Expo Eu Amo Pet */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <p className="purpose-text">
            A <strong>Feira &amp; Expo Eu Amo Pet</strong> é um evento inovador e abrangente que celebra o universo pet, reunindo apaixonados por animais, empresas do setor e especialistas em um só lugar.
          </p>

          <p className="purpose-text">
            Nosso objetivo é criar uma experiência única que promova a interação, a troca de conhecimento e o desenvolvimento de negócios no mercado pet, que está em constante crescimento no Brasil e no mundo.
          </p>

          <p className="purpose-text text-[#f9418c] font-black uppercase tracking-wide pt-1">
            Venha fazer parte deste evento transformador, que une amor pelos animais, inovação e desenvolvimento de mercado.
          </p>
        </div>

        {/* Blocos Estratégicos: MISSÃO, VISÃO E VALORES */}
        <div className="purpose-pillars-grid">
          {/* Card Missão */}
          <div className="purpose-pillar-card purpose-pillar-mission">
            <span className="pillar-badge mission">MISSÃO</span>
            <p className="pillar-text">
              CRIAR VALOR NA INTERAÇÃO COM OS APAIXONADOS POR ANIMAIS DE ESTIMAÇÃO, POTENCIALIZANDO O BEM DA RELAÇÃO ENTRE O PET E SUA FAMÍLIA.
            </p>
          </div>

          {/* Card Visão */}
          <div className="purpose-pillar-card purpose-pillar-vision">
            <span className="pillar-badge vision">VISÃO</span>
            <p className="pillar-text">
              SER NACIONALMENTE CONHECIDA, COMO A MAIOR FEIRA NO RAMO PET, ATÉ 2027.
            </p>
          </div>
        </div>

        {/* Card Valores */}
        <div className="purpose-values-card">
          <div className="mb-4">
            <span className="pillar-badge values">VALORES</span>
          </div>

          <ul className="values-list">
            <li>
              <span className="val-paw" aria-hidden="true">🐾</span>
              <span>PAIXÃO PELO MUNDO PET</span>
            </li>
            <li>
              <span className="val-paw" aria-hidden="true">🐾</span>
              <span>INOVAÇÃO E CRIATIVIDADE</span>
            </li>
            <li>
              <span className="val-paw" aria-hidden="true">🐾</span>
              <span>ENCANTAR NOSSOS CLIENTES</span>
            </li>
            <li>
              <span className="val-paw" aria-hidden="true">🐾</span>
              <span>ÉTICA, PROFISSIONALISMO E RESPONSABILIDADE SOCIOAMBIENTAL</span>
            </li>
            <li>
              <span className="val-paw" aria-hidden="true">🐾</span>
              <span>COMPROMETIMENTO E CREDIBILIDADE COM O MERCADO</span>
            </li>
            <li>
              <span className="val-paw" aria-hidden="true">🐾</span>
              <span>QUALIDADE DOS PRODUTOS E SERVIÇOS OFERECIDOS</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

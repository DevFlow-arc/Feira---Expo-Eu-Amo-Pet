import React from 'react';

export default function FestivalTemTudo() {
  return (
    <section id="o-que-tem" className="fp-tem-tudo">
      <div className="fp-tem-tudo-card">

        <h2>
          TEM DE TUDO <span>POR AQUI!</span>
        </h2>

        <p className="fp-tem-tudo-intro">
          Experiências interativas, conhecimento especializado e impacto social para apaixonados pelo universo pet.
          Três pilares estratégicos desenhados para conectar famílias, tutores, veterinários e marcas inovadoras!
        </p>

        <div className="fp-tem-tudo-itens">

          <article className="fp-tem-tudo-item">
            <div className="fp-tem-tudo-icon" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="currentColor">
                <path d="M32 7 37.5 26.5 57 32 37.5 37.5 32 57 26.5 37.5 7 32l19.5-5.5L32 7Z"/>
                <path d="m50 9 2.2 7.8L60 19l-7.8 2.2L50 29l-2.2-7.8L40 19l7.8-2.2L50 9Z"/>
                <path d="m15 39 1.6 5.4L22 46l-5.4 1.6L15 53l-1.6-5.4L8 46l5.4-1.6L15 39Z"/>
              </svg>
            </div>

            <span className="fp-tem-tudo-num pink">01</span>
            <h3>CONCURSOS &amp; LAZER</h3>
            <p>Concursos e desfiles premiando habilidades e beleza pet, playground recreativo seguro e praça de alimentação com conforto para toda a família.</p>
          </article>

          <article className="fp-tem-tudo-item">
            <div className="fp-tem-tudo-icon" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none">
                <path d="M22 29a10 10 0 1 1 20 0c0 6-4.5 8.3-5.7 12.3H27.7C26.5 37.3 22 35 22 29Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
                <path d="M27 46h10M29 52h6" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                <path d="M32 9v5M15 17l4 4M49 17l-4 4" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>

            <span className="fp-tem-tudo-num yellow">02</span>
            <h3>WORKSHOPS &amp; NEGÓCIOS</h3>
            <p>Sessões educativas e palestras com especialistas do mercado pet, abordando saúde animal, nutrição, comportamento e novas oportunidades comerciais.</p>
          </article>

          <article className="fp-tem-tudo-item">
            <div className="fp-tem-tudo-icon" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none">
                <path d="M32 50C14 39 9 29 13 20c4-10 15-8 19 1 4-9 15-11 19-1 4 9-1 19-19 30Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
                <path d="M22 30h20M32 20v20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>

            <span className="fp-tem-tudo-num pink">03</span>
            <h3>ESPAÇO ADOTE UM PET</h3>
            <p>Área dedicada para adoção responsável em parceria com ONGs e canis locais, suporte ao Castramóvel, vacinação e conscientização sobre posse responsável.</p>
          </article>

        </div>
      </div>
    </section>
  );
}

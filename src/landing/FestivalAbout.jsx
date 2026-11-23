import React from 'react';

export default function FestivalAbout() {
  return (
    <section id="o-festival" className="fp-about">
      <div className="about-wrap">
        <div className="about-left">
          <div className="about-title-wrap">
            <span className="about-rays" aria-hidden="true">
              <i></i><i></i><i></i>
            </span>

            <h2 className="about-title">
              <span>O MAIOR</span>
              <span>ENCONTRO PET</span>
              <span>MACAÉ &amp; REGIÃO DOS LAGOS</span>
            </h2>

            <span className="about-title-line" aria-hidden="true"></span>
          </div>

          <p className="about-text">
            A <strong>Feira &amp; Expo Eu Amo Pet 2027</strong> é um evento inovador e abrangente que celebra o universo pet, reunindo apaixonados por animais, empresas do setor e especialistas em um só lugar. Nosso objetivo é criar uma experiência única que promova a interação, a troca de conhecimento e o desenvolvimento de negócios no mercado pet em <strong>Macaé e Região dos Lagos</strong>.
          </p>

          <div className="features">
            <div className="feature">
              <div className="feat-ico feat-paw">
                <svg viewBox="0 0 64 64" fill="currentColor" stroke="#20204a" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
                  <ellipse cx="13" cy="29" rx="6" ry="8.5" transform="rotate(-24 13 29)"/>
                  <ellipse cx="26" cy="18" rx="6.5" ry="9"/>
                  <ellipse cx="40" cy="18" rx="6.5" ry="9"/>
                  <ellipse cx="52" cy="29" rx="6" ry="8.5" transform="rotate(24 52 29)"/>
                  <path d="M32,31 C44,31 53,40 50,51 C47,60 38,61 32,56 C26,61 17,60 14,51 C11,40 20,31 32,31 Z"/>
                </svg>
              </div>
              <span className="feat-lbl">Concursos &amp;<br />Desfiles Pets</span>
            </div>

            <div className="feature">
              <div className="feat-ico feat-light">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M32,3 L32,9 M14,12 L18,16 M50,12 L46,16 M6,30 L12,30 M58,30 L52,30"/>
                  <path d="M32,11 C21,11 14,19 14,29 C14,36 18,41 22,46 C24,49 25,50 25,53 L39,53 C39,50 40,49 42,46 C46,41 50,36 50,29 C50,19 43,11 32,11 Z"/>
                  <path d="M25,53 L39,53 M27,57 L37,57 M29,61 L35,61"/>
                  <path d="M28,32 L32,40 L36,32"/>
                </svg>
              </div>
              <span className="feat-lbl">Workshops &amp;<br />Palestras VET</span>
            </div>

            <div className="feature">
              <div className="feat-ico feat-bag">
                <svg viewBox="0 0 64 64" fill="currentColor" stroke="#00518c" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M14,21 L50,21 L47,57 L17,57 Z"/>
                  <path d="M23,25 L23,17 C23,11 27,8 32,8 C37,8 41,11 41,17 L41,25" fill="none"/>
                </svg>
              </div>
              <span className="feat-lbl">Marcas &amp;<br />Insumos Pet</span>
            </div>

            <div className="feature">
              <div className="feat-ico feat-cup">
                <svg viewBox="0 0 64 64" fill="currentColor" stroke="#8d1b17" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M36,18 L41,5" fill="none" strokeWidth="3"/>
                  <path d="M16,18 L48,18 L48,13 L16,13 Z"/>
                  <path d="M18,23 L46,23 L43,57 C43,59.5 41,61 38.5,61 L25.5,61 C23,61 21,59.5 21,57 Z"/>
                  <path d="M27,30 L26,52 M37,30 L38,52" fill="none" stroke="#fff" strokeWidth="2.4" opacity=".7"/>
                </svg>
              </div>
              <span className="feat-lbl">Playground &amp;<br />Gastronomia</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-photo">
            <img
              decoding="async"
              className="about-img"
              src="/assets/festival/71A7967.jpg"
              alt="Pessoas relaxando com seus cachorros na Feira Eu Amo Pet"
            />
          </div>

          <svg className="ab-stk ab-spark" viewBox="0 0 80 80" fill="none" stroke="#ffc600" strokeWidth="7" strokeLinecap="round" aria-hidden="true">
            <path d="M44,8 L40,30 M70,20 L54,32 M16,24 L30,34 M74,48 L56,46 M20,54 L33,48"/>
          </svg>

          <svg className="ab-stk ab-heart-blue" viewBox="0 0 92 84" fill="none" stroke="#10a8e8" strokeWidth="6" strokeLinecap="round" aria-hidden="true">
            <path d="M46,72 C20,52 8,36 14,22 C18,11 34,11 44,23 Q46,26 46,28 Q47,26 49,23 C59,11 75,12 79,23 C85,37 71,53 46,72 Z"/>
            <path d="M44,64 C26,49 16,37 20,26" strokeWidth="3.6" opacity=".75"/>
          </svg>

          <svg className="ab-stk ab-heart-pink" viewBox="0 0 92 84" fill="none" stroke="#f51b88" strokeWidth="6" strokeLinecap="round" aria-hidden="true">
            <path d="M46,72 C20,52 8,36 14,22 C18,11 34,11 44,23 Q46,26 46,28 Q47,26 49,23 C59,11 75,12 79,23 C85,37 71,53 46,72 Z"/>
          </svg>

          <svg className="ab-stk ab-squiggle" viewBox="0 0 250 56" fill="none" stroke="#ffc600" strokeWidth="13" strokeLinecap="round" aria-hidden="true">
            <path d="M10,34 C50,10 84,10 124,30 C162,49 198,46 240,22"/>
            <path d="M40,50 C78,34 120,34 160,48" strokeWidth="11" opacity=".9"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

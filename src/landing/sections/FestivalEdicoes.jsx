import React from 'react';
import { useApp } from '../../context/AppContext';

export default function FestivalEdicoes() {
  const { eventInfo } = useApp();

  return (
    <section id="edicoes" className="fp-editions-v2">
      <div className="fp-editions-v2-stage">

        <div className="fp-editions-v2-deco" aria-hidden="true">
          <svg className="fp-v2-heart heart-top" viewBox="0 0 60 56" fill="none">
            <path d="M30 51C7 35 5 17 15 10c8-5 15 1 15 9 0-8 7-14 15-9 10 7 8 25-15 41Z" stroke="currentColor" strokeWidth="4"/>
          </svg>

          <svg className="fp-v2-paw paw-top" viewBox="0 0 56 56" fill="currentColor">
            <ellipse cx="13" cy="25" rx="6" ry="8"/>
            <ellipse cx="24" cy="14" rx="6" ry="8"/>
            <ellipse cx="37" cy="14" rx="6" ry="8"/>
            <ellipse cx="48" cy="25" rx="6" ry="8"/>
            <path d="M30 30c8 0 15 6 15 13 0 6-5 9-10 9-3 0-4-1-7-1s-4 1-7 1c-5 0-10-3-10-9 0-7 7-13 15-13Z"/>
          </svg>

          <svg className="fp-v2-squig" viewBox="0 0 90 30" fill="none">
            <path d="M4 17c9-16 17 16 28 0s19-16 30 0 19 16 25 0" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
          </svg>

          <div className="fp-v2-sun"></div>

          <svg className="fp-v2-heart heart-right" viewBox="0 0 60 56" fill="none">
            <path d="M30 51C7 35 5 17 15 10c8-5 15 1 15 9 0-8 7-14 15-9 10 7 8 25-15 41Z" stroke="currentColor" strokeWidth="4"/>
          </svg>

          <svg className="fp-v2-paw paw-bottom" viewBox="0 0 56 56" fill="currentColor">
            <ellipse cx="13" cy="25" rx="6" ry="8"/>
            <ellipse cx="24" cy="14" rx="6" ry="8"/>
            <ellipse cx="37" cy="14" rx="6" ry="8"/>
            <ellipse cx="48" cy="25" rx="6" ry="8"/>
            <path d="M30 30c8 0 15 6 15 13 0 6-5 9-10 9-3 0-4-1-7-1s-4 1-7 1c-5 0-10-3-10-9 0-7 7-13 15-13Z"/>
          </svg>
        </div>

        <header className="fp-v2-head">
          <div className="fp-v2-title">
            <span className="fp-v2-rays rays-left"></span>
            <h2>NOSSAS EDIÇÕES &amp; POLOS</h2>
            <span className="fp-v2-rays rays-right"></span>
          </div>

          <p>
            A <strong>Feira Eu Amo Pet 2027</strong> mapeou as regiões com maior concentração de tutores e potencial econômico fluminense: Macaé e a Região dos Lagos, reunindo marcas, famílias e o setor veterinário em encontros inesquecíveis.
          </p>
        </header>

        {/* POLO 1 - MACAÉ 2027 */}
        <article className="fp-v2-card fp-v2-sp">
          <div className="fp-v2-photo">
            <img
              decoding="async"
              src="/assets/festival/ChatGPT-Image-21_09_2026-14_51_51.png"
              alt="Feira Eu Amo Pet em Macaé"
            />
          </div>

          <div className="fp-v2-label">
            <strong>MC</strong>
            <span>MACAÉ • POLO PRINCIPAL 2027</span>
          </div>

          <div className="fp-v2-info">
            <div className="fp-v2-detail">
              <span className="fp-v2-icon pink">▣</span>
              <b>3 DIAS<br />DE FEIRA</b>
            </div>

            <div className="fp-v2-detail">
              <span className="fp-v2-icon purple">⌖</span>
              <b>POLO DE<br />GRANDES EVENTOS</b>
            </div>

            <div className="fp-v2-detail">
              <span className="fp-v2-icon yellow">●</span>
              <b>+15 MIL<br />VISITANTES</b>
            </div>

            <div className="fp-v2-detail">
              <span className="fp-v2-icon pink">♥</span>
              <b>+5.000<br />PETS</b>
            </div>
          </div>
        </article>

        {/* POLO 2 - REGIÃO DOS LAGOS */}
        <article className="fp-v2-card fp-v2-rj">
          <div className="fp-v2-photo">
            <img
              decoding="async"
              src="/assets/festival/Copia-de-_YAN2359-scaled.jpg"
              alt="Circuito Região dos Lagos"
            />
          </div>

          <div className="fp-v2-label">
            <strong>RL</strong>
            <span>REGIÃO DOS LAGOS • CIRCUITO 2027</span>
          </div>

          <div className="fp-v2-info">
            <div className="fp-v2-detail">
              <span className="fp-v2-icon pink">▣</span>
              <b>CIRCUITO<br />REGIONAL</b>
            </div>

            <div className="fp-v2-detail">
              <span className="fp-v2-icon purple">⌖</span>
              <b>CABO FRIO /<br />BÚZIOS / ALDEIA</b>
            </div>

            <div className="fp-v2-detail">
              <span className="fp-v2-icon yellow">●</span>
              <b>+10 MIL<br />FAMÍLIAS</b>
            </div>

            <div className="fp-v2-detail">
              <span className="fp-v2-icon pink">♥</span>
              <b>100% CAUSA<br />ANIMAL</b>
            </div>
          </div>
        </article>

        <div className="fp-v2-cat" aria-hidden="true">
          <img decoding="async" src="/assets/festival/Banner-Vivo-Valoriza-1.png" alt="Mascote" />
        </div>
      </div>
    </section>
  );
}

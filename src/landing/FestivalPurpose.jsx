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

        <p className="purpose-text">
          Nossa missão é <strong>criar valor na interação com os apaixonados por animais de estimação, potencializando o bem da relação entre o pet e sua família</strong>. A Feira &amp; Expo Eu Amo Pet nasce para reunir tutores, empresas do setor e especialistas veterinários em uma celebração que transforma carinho em cuidado, saúde e desenvolvimento no mercado pet em Macaé e Região dos Lagos.
        </p>

        <p className="purpose-text purpose-text-second">
          Essa missão se traduz em ações concretas a cada edição: apoio integrado ao <strong>Centro de Controle de Zoonoses (CCZ)</strong>, suporte ativo a ONGs e protetores locais credenciados, campanhas de vacinação e um legado que permanece na região. <strong>Conheça os resultados e causas que movem o nosso festival:</strong>
        </p>

        <ul className="impact-list">
          <li>
            <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
              <ellipse cx="24" cy="35" rx="11" ry="15" />
              <ellipse cx="45" cy="20" rx="11" ry="15" />
              <ellipse cx="68" cy="22" rx="11" ry="15" />
              <ellipse cx="84" cy="40" rx="11" ry="15" />
              <path d="M50 45c-19 0-32 15-32 29 0 14 13 19 25 13 5-3 9-3 14 0 12 6 25 1 25-13 0-14-13-29-32-29Z" />
            </svg>
            <span><strong>63 toneladas de ração</strong> arrecadadas para ONGs e protetores parceiros;</span>
          </li>

          <li>
            <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
              <ellipse cx="24" cy="35" rx="11" ry="15" />
              <ellipse cx="45" cy="20" rx="11" ry="15" />
              <ellipse cx="68" cy="22" rx="11" ry="15" />
              <ellipse cx="84" cy="40" rx="11" ry="15" />
              <path d="M50 45c-19 0-32 15-32 29 0 14 13 19 25 13 5-3 9-3 14 0 12 6 25 1 25-13 0-14-13-29-32-29Z" />
            </svg>
            <span><strong>Mais de 100 pets castrados</strong> em parceria com o Castramóvel CCZ;</span>
          </li>

          <li>
            <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
              <ellipse cx="24" cy="35" rx="11" ry="15" />
              <ellipse cx="45" cy="20" rx="11" ry="15" />
              <ellipse cx="68" cy="22" rx="11" ry="15" />
              <ellipse cx="84" cy="40" rx="11" ry="15" />
              <path d="M50 45c-19 0-32 15-32 29 0 14 13 19 25 13 5-3 9-3 14 0 12 6 25 1 25-13 0-14-13-29-32-29Z" />
            </svg>
            <span><strong>Milhares de vacinas e antiparasitários</strong> aplicados gratuitamente;</span>
          </li>

          <li>
            <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
              <ellipse cx="24" cy="35" rx="11" ry="15" />
              <ellipse cx="45" cy="20" rx="11" ry="15" />
              <ellipse cx="68" cy="22" rx="11" ry="15" />
              <ellipse cx="84" cy="40" rx="11" ry="15" />
              <path d="M50 45c-19 0-32 15-32 29 0 14 13 19 25 13 5-3 9-3 14 0 12 6 25 1 25-13 0-14-13-29-32-29Z" />
            </svg>
            <span><strong>Espaço Adote um Pet:</strong> Área dedicada a ONGs para apresentarem seus projetos e realizarem adoções responsáveis;</span>
          </li>

          <li>
            <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
              <ellipse cx="24" cy="35" rx="11" ry="15" />
              <ellipse cx="45" cy="20" rx="11" ry="15" />
              <ellipse cx="68" cy="22" rx="11" ry="15" />
              <ellipse cx="84" cy="40" rx="11" ry="15" />
              <path d="M50 45c-19 0-32 15-32 29 0 14 13 19 25 13 5-3 9-3 14 0 12 6 25 1 25-13 0-14-13-29-32-29Z" />
            </svg>
            <span><strong>Workshops &amp; Conscientização:</strong> Sessões gratuitas sobre posse responsável, nutrição preventiva e legado pet friendly na região.</span>
          </li>
        </ul>

        <p className="purpose-closing">
          Porque para nós, potencializar o bem da relação entre o pet e sua família também significa cuidar com responsabilidade de quem mais precisa.
        </p>
      </div>
    </section>
  );
}

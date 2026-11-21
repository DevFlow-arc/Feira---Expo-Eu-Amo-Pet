import React from 'react';
import BrandHeartPaw from '../components/BrandHeartPaw';

export default function FestivalApoiadores() {
  // 18 slots exatos organizados de acordo com os pacotes oficiais do Livro de Apresentação:
  // Patrocínio Máster, Patrocínio Sênior, Patrocínio Júnior, Estande Comercial e Apoios
  const slotsApoiadores = [
    // Linha 1 (5 cards)
    { id: 1, cota: 'COTA MÁSTER', desc: 'Patrocínio Principal' },
    { id: 2, cota: 'COTA MÁSTER', desc: 'Patrocínio Principal' },
    { id: 3, cota: 'COTA MÁSTER', desc: 'Patrocínio Principal' },
    { id: 4, cota: 'COTA SÊNIOR', desc: 'Patrocinador Oficial' },
    { id: 5, cota: 'COTA SÊNIOR', desc: 'Patrocinador Oficial' },
    // Linha 2 (5 cards)
    { id: 6, cota: 'COTA SÊNIOR', desc: 'Patrocinador Oficial' },
    { id: 7, cota: 'COTA SÊNIOR', desc: 'Patrocinador Oficial' },
    { id: 8, cota: 'COTA JÚNIOR', desc: 'Apoiador Oficial' },
    { id: 9, cota: 'COTA JÚNIOR', desc: 'Apoiador Oficial' },
    { id: 10, cota: 'COTA JÚNIOR', desc: 'Apoiador Oficial' },
    // Linha 3 (5 cards)
    { id: 11, cota: 'COTA JÚNIOR', desc: 'Apoiador Oficial' },
    { id: 12, cota: 'ESTANDE COMERCIAL', desc: 'Expositor Oficial' },
    { id: 13, cota: 'ESTANDE COMERCIAL', desc: 'Expositor Oficial' },
    { id: 14, cota: 'PARCEIRO COMERCIAL', desc: 'Expositor Oficial' },
    { id: 15, cota: 'PARCEIRO COMERCIAL', desc: 'Expositor Oficial' },
    // Linha 4 (3 cards centralizados na 2ª coluna - 16, 17 e 18 via CSS .fp-logo-card:nth-child(16) { grid-column: 2; })
    { id: 16, cota: 'PARCEIRO DE MÍDIA', desc: 'Rádio, TV & Web' },
    { id: 17, cota: 'APOIO INSTITUCIONAL', desc: 'CCZ & Fundação Rural' },
    { id: 18, cota: 'APOIO INSTITUCIONAL', desc: 'Prefeitura de Campos' },
  ];

  const handleDownloadEbook = () => {
    window.open('/docs/Livro_de_Apresentacao_Para_Patrocinadores.pdf', '_blank');
  };

  return (
    <section id="apoiadores" className="fp-apoiadores">
      <div className="fp-apoiadores-inner">

        {/* Elementos decorativos com posições absolutas exatas da referência */}
        <div className="fp-deco fp-heart" aria-hidden="true">
          <svg viewBox="0 0 100 100">
            <path d="M50 84S10 60 10 31C10 12 34 7 50 28 66 7 90 12 90 31 90 60 50 84 50 84Z" />
          </svg>
        </div>

        <div className="fp-deco fp-rays fp-rays-left" aria-hidden="true">
          <i></i><i></i><i></i>
        </div>
        <div className="fp-deco fp-rays fp-rays-right" aria-hidden="true">
          <i></i><i></i><i></i>
        </div>

        <div className="fp-deco fp-paw select-none pointer-events-none" aria-hidden="true">
          <BrandHeartPaw className="w-full h-full drop-shadow-md" />
        </div>

        {/* Onda decorativa roxa que transparece sob a 4ª linha de cards */}
        <div className="fp-deco fp-squiggle" aria-hidden="true">
          <svg viewBox="0 0 260 55">
            <path d="M5 36c24-42 50 29 75-1s50 30 76 0 51 27 98-20" />
          </svg>
        </div>

        <header className="fp-apoiadores-head">
          <span className="fp-apoiadores-tag">MARCAS</span>

          <h2>
            QUE JÁ FIZERAM PARTE<br />
            <strong>DESSA HISTÓRIA</strong>
          </h2>

          <span className="fp-amarelo" aria-hidden="true"></span>

          <p>
            A <strong>Feira Eu Amo Pet 2027</strong> acontece junto de marcas, parceiros e apoiadores que acreditam<br />
            no poder das conexões entre pets, pessoas e marcas em Macaé, Região dos Lagos e todo o estado.
          </p>

          {/* Link direcionando para preenchimento de dados na Seção de E-book */}
          <div className="mt-3.5 mb-1 flex justify-center">
            <a
              href="#ebook"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8c43dc]/10 hover:bg-[#8c43dc]/20 text-[#8c43dc] text-xs font-black uppercase tracking-wider transition-all hover:scale-105"
              title="Solicitar Livro de Apresentação Para Patrocinadores"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span>Solicitar Dossiê de Patrocinadores (PDF)</span>
            </a>
          </div>
        </header>

        {/* Grid de 18 cards com a diagramação original 5-5-5-3 */}
        <div className="fp-logos-grid">
          {slotsApoiadores.map((slot) => (
            <div
              key={slot.id}
              onClick={handleDownloadEbook}
              className="fp-logo-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer group"
              title={`${slot.cota} - Clique para abrir o E-book de Patrocinadores`}
            >
              {slot.logo ? (
                <img decoding="async" src={slot.logo} alt={slot.nome || slot.cota} />
              ) : (
                <div className="flex flex-col items-center justify-center text-center select-none w-full px-2 py-1">
                  <div className="flex items-center justify-center gap-1.5 mb-1 opacity-40 group-hover:opacity-100 transition-opacity">
                    <svg className="w-3.5 h-3.5 text-[#f9418c]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#202f6b]">
                      {slot.cota}
                    </span>
                  </div>
                  <span className="text-[12px] font-bold text-stone-400 group-hover:text-[#8c43dc] transition-colors">
                    Espaço Reservado
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

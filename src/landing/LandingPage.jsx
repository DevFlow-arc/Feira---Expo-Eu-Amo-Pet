import React from 'react';
import FestivalHero from './FestivalHero';
import FestivalAbout from './FestivalAbout';
import FestivalPurpose from './FestivalPurpose';
import FestivalTemTudo from './FestivalTemTudo';
import FestivalEdicoes from './FestivalEdicoes';
import FestivalVideo from './FestivalVideo';
import FestivalManuaisSection from './FestivalManuaisSection';
import FestivalEbook from './FestivalEbook';
import FestivalApoiadores from './FestivalApoiadores';
import FestivalFaq from './FestivalFaq';

// LandingPage: Modeled identically in structure, design tokens and flow from festivalpet.com.br
// Adapted authentically to Feira Eu Amo Pet (Macaé & Região dos Lagos 2027, Manfertech, MD Mercado Digital, CCZ)
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f1e2] text-[#202f6b]">
      {/* 1. Hero: Onde Pets, Pessoas e Marcas se Encontram */}
      <FestivalHero />

      {/* 2. O Festival: O Maior Encontro Pet de Macaé e Região dos Lagos */}
      <FestivalAbout />

      {/* 3. Social: Um Festival com Propósito */}
      <FestivalPurpose />

      {/* 4. O Que Tem: Tem de Tudo Por Aqui! (3 Pilares) */}
      <FestivalTemTudo />

      {/* 5. Nossas Edições & Polos Regionais (Macaé 2027 & Região dos Lagos) */}
      <FestivalEdicoes />

      {/* 6. Tour Virtual / Vídeo Showcase */}
      <FestivalVideo />

      {/* 7. Manuais Técnicos & Regulamentos Oficiais */}
      <FestivalManuaisSection />

      {/* 8. Dossiê Oficial & E-book para Patrocinadores e Expositores 2027 */}
      <FestivalEbook />

      {/* 9. Marcas & Apoiadores */}
      <FestivalApoiadores />

      {/* 10. FAQ: Ficou com Alguma Dúvida? */}
      <FestivalFaq />
    </div>
  );
}

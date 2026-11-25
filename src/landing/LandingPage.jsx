import React from 'react';
import FestivalHero from './sections/FestivalHero';
import FestivalAbout from './sections/FestivalAbout';
import FestivalPurpose from './sections/FestivalPurpose';
import FestivalMercadoPet from './sections/FestivalMercadoPet';
import FestivalTemTudo from './sections/FestivalTemTudo';
import FestivalAtracoes from './sections/FestivalAtracoes';
import FestivalEdicoes from './sections/FestivalEdicoes';
import FestivalInfraestrutura from './sections/FestivalInfraestrutura';
import FestivalVideo from './sections/FestivalVideo';
import FestivalPatrocinio from './sections/FestivalPatrocinio';
import FestivalApoiadores from './sections/FestivalApoiadores';
import FestivalManuaisSection from './sections/FestivalManuaisSection';
import FestivalEbook from './sections/FestivalEbook';
import FestivalFaq from './sections/FestivalFaq';
import FestivalContato from './sections/FestivalContato';

// LandingPage: Estrutura completa orientada ao método AIDA (Atenção, Interesse, Desejo, Ação)
// 100% alinhada com o Livro de Apresentação Oficial 2027 da Feira & Expo Eu Amo Pet
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f1e2] text-[#202f6b]">
      {/* 1. ATENÇÃO: Hero — Onde Pets, Pessoas e Marcas se Encontram */}
      <FestivalHero />

      {/* 2. ATENÇÃO: O Festival — O Maior Encontro Pet de Macaé e Região dos Lagos */}
      <FestivalAbout />

      {/* 3. INTERESSE: Propósito Institucional (Missão, Visão e Valores 2027) */}
      <FestivalPurpose />

      {/* 4. INTERESSE: Inteligência de Mercado (Brasil 3º Mercado Global - Euromonitor) */}
      <FestivalMercadoPet />

      {/* 5. INTERESSE: 3 Pilares Estratégicos (Lazer, Negócios e Causa Animal) */}
      <FestivalTemTudo />

      {/* 6. INTERESSE PROFUNDO: 8 Grandes Atrações Confirmadas do Festival */}
      <FestivalAtracoes />

      {/* 7. DESEJO: Polos Estratégicos (Macaé Polo Principal & Circuito Região dos Lagos 2027) */}
      <FestivalEdicoes />

      {/* 8. DESEJO: Infraestrutura Completa (Estacionamento, Castramóvel CCZ & Planta Modular) */}
      <FestivalInfraestrutura />

      {/* 9. DESEJO: Experiência Visual / Vídeo Tour Oficial */}
      <FestivalVideo />

      {/* 10. DESEJO -> DECISÃO B2B: Pacotes e Cotas de Patrocínio (Máster, Sênior e Júnior) */}
      <FestivalPatrocinio />

      {/* 11. DESEJO: Marcas, Patrocinadores e Parceiros */}
      <FestivalApoiadores />

      {/* 12. AÇÃO: Manuais Técnicos Operacionais (CBMERJ, NR-10 e CRMV-RJ) */}
      <FestivalManuaisSection />

      {/* 13. AÇÃO: Livro de Apresentação & Dossiê Comercial 2027 (Download Direto) */}
      <FestivalEbook />

      {/* 14. AÇÃO: FAQ — Dúvidas Frequentes */}
      <FestivalFaq />

      {/* 15. AÇÃO IMEDIATA: Canal de Atendimento Comercial e Expositores 2027 */}
      <FestivalContato />
    </div>
  );
}

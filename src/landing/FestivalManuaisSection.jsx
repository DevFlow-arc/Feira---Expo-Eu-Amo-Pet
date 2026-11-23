import React from 'react';
import { OFFICIAL_MANUALS } from '../data/floorPlanData';
import { 
  FileText, Zap, ShieldCheck, Dog, Calendar, 
  ArrowDownToLine, Download 
} from 'lucide-react';

export default function FestivalManuaisSection() {
  const getManualIcon = (iconName) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Dog': return <Dog className="w-5 h-5" />;
      case 'Calendar': return <Calendar className="w-5 h-5" />;
      case 'Download': default: return <Download className="w-5 h-5" />;
    }
  };

  return (
    <section id="fp-manuais" className="fp-manuais-section relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc600]/30 text-[#8c43dc] text-xs font-bold uppercase tracking-wider">
            Documentação Oficial • Edição 2027
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#202f6b] tracking-tight">
            Manuais Técnicos &amp; Regulamentos
          </h2>
          <p className="text-sm sm:text-base text-[#62628d] font-medium leading-relaxed">
            Acesse e baixe os manuais operacionais em PDF para montadoras, expositores e tutores em conformidade com as normas do Corpo de Bombeiros (CBMERJ), NR-10 e sanidade animal do CRMV-RJ.
          </p>
        </div>

        {/* ─── Termo de Responsabilidade Animal (Destaque Especial) ────────── */}
        <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-5 sm:p-8 border-2 border-dashed border-[#f45225]/40 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#f45225]/10 text-[#f45225] flex items-center justify-center shrink-0">
              <Dog className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#f45225] bg-[#f45225]/10 px-2 py-0.5 rounded-md">
                  Acesso de Animais • Portão 2 CAEX
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">FORM-CAEX-01</span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#202f6b] mt-1">
                Termo de Responsabilidade Animal (Impressão Obrigatória)
              </h3>
              <p className="text-xs sm:text-sm text-[#62628d] mt-1 max-w-2xl leading-relaxed">
                Para agilizar a entrada na triagem veterinária (Portão 2 • 12h às 17h), baixe o termo oficial em PDF, imprima e traga preenchido junto à carteira de vacinação (V8/V10 e antirrábica) e atestado de saúde de até 15 dias.
              </p>
            </div>
          </div>

          <a
            href="/docs/manuais/Termo-De-Responsabilidade-Animal-Feira-Pet.pdf"
            download
            className="w-full md:w-auto shrink-0 px-6 py-3.5 rounded-2xl bg-[#f45225] hover:bg-[#d94218] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all min-h-[44px]"
          >
            <Download className="w-4 h-4" />
            <span>Baixar Termo em PDF</span>
          </a>
        </div>

        {/* ─── Grid de Manuais Técnicos Oficiais ───────────────────────────── */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#ebdcca]/80">
            <h3 className="text-lg font-serif font-bold text-[#202f6b]">
              Manuais de Montagem, Instalações Elétricas e Sanidade
            </h3>
            <span className="text-xs text-[#62628d] font-semibold hidden sm:inline">
              Download direto sem formulários
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFICIAL_MANUALS.map(manual => (
              <div 
                key={manual.id}
                className="bg-white/95 backdrop-blur-xs rounded-3xl p-5 sm:p-6 border border-[#ebdcca] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2.5 sm:p-3 rounded-2xl bg-[#f8f1e2] text-[#202f6b] group-hover:bg-[#202f6b] group-hover:text-white transition-colors">
                      {getManualIcon(manual.icon)}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                      {manual.code}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#f45225] block uppercase tracking-wider mb-1">
                    {manual.badge}
                  </span>
                  <h4 className="text-base font-serif font-bold text-[#202f6b] group-hover:text-[#f45225] transition-colors">
                    {manual.title}
                  </h4>
                  <p className="text-xs text-[#62628d] mt-2 leading-relaxed">
                    {manual.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#f0e3d2] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-[#8d8da0] text-center sm:text-left">
                    {manual.pages} • {manual.size}
                  </span>

                  <a
                    href={manual.pdfUrl}
                    download
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#202f6b] hover:bg-[#152048] text-white text-xs font-bold shadow-2xs transition-all min-h-[40px]"
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5" />
                    <span>Baixar PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Transição Rasgada em Papel Kraft/Festival - Ligação fluida para o Dossiê/Ebook */}
      <div 
        className="fp-torn-divider-bottom"
        style={{ backgroundImage: 'url("/assets/festival/Colagem-Dossie_top_crop.png")' }}
        aria-hidden="true"
      />
    </section>
  );
}

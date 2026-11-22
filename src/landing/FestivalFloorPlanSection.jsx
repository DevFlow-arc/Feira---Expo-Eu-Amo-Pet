import React from 'react';
import FestivalFloorPlan from '../components/floorplan/FestivalFloorPlan';
import { OFFICIAL_MANUALS } from '../data/floorPlanData';
import { 
  FileText, Download, Zap, ShieldCheck, Dog, Calendar, 
  ExternalLink, ArrowDownToLine, Info, CheckCircle2 
} from 'lucide-react';

export default function FestivalFloorPlanSection() {
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
    <section id="fp-planta" className="py-20 bg-[#f8f1e2] relative overflow-hidden border-t border-[#ebdcca]">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc600]/30 text-[#8c43dc] text-xs font-bold uppercase tracking-wider">
            Gabarito Técnico Oficial • Edição 2027
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#202f6b] tracking-tight">
            Planta Baixa Interativa do Festival
          </h2>
          <p className="text-sm sm:text-base text-[#62628d] font-medium leading-relaxed">
            Consulte a disposição dos 50 estandes comerciais, ilhas nobres e arenas temáticas no Polo de Grandes Eventos em Macaé e Região dos Lagos. Clique em qualquer estande para consultar metragem, pontos de força elétrica e reservar diretamente pelo WhatsApp.
          </p>
        </div>

        {/* ─── The 100% Code-Based Floor Plan Component ───────────────────── */}
        <FestivalFloorPlan mode="public" />

        {/* ─── Downloads Oficiais do Expositor (Manuais & Termos) ───────────── */}
        <div className="pt-8 space-y-6">
          
          {/* Header of Manuals */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#ebdcca]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#f45225]">
                Conformidade & Legislação
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#202f6b] mt-0.5">
                Manuais Técnicos & Documentos Oficiais
              </h3>
              <p className="text-xs sm:text-sm text-[#62628d] mt-1">
                Downloads diretos em PDF para montadoras, médicos veterinários e expositores confirmados.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#202f6b] bg-white px-3.5 py-2 rounded-xl border border-[#ebdcca]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Regulamentos em conformidade com NR-10 e CRMV-RJ</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {OFFICIAL_MANUALS.map(manual => (
              <div 
                key={manual.id} 
                className="bg-white rounded-2xl p-5 border border-[#ebdcca] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2.5 rounded-xl bg-[#f8f1e2] text-[#202f6b] group-hover:bg-[#202f6b] group-hover:text-white transition-colors">
                      {getManualIcon(manual.icon)}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                      {manual.code}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#f45225] block uppercase tracking-wider mb-0.5">
                    {manual.badge}
                  </span>
                  <h4 className="text-sm font-bold text-[#202f6b] group-hover:text-[#f45225] transition-colors line-clamp-1">
                    {manual.title}
                  </h4>
                  <p className="text-xs text-[#62628d] mt-1.5 leading-relaxed line-clamp-2">
                    {manual.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#f0e3d2] flex items-center justify-between">
                  <div className="text-[11px] font-mono text-[#8d8da0]">
                    {manual.pages} • {manual.size}
                  </div>

                  <a
                    href={manual.pdfUrl}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#202f6b] hover:bg-[#152048] text-white text-xs font-bold shadow-2xs transition-all hover:scale-105"
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5" />
                    <span>Baixar PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Special Banner for Animal Term (Pergunta 3 - Opção B) */}
          <div className="p-6 rounded-3xl bg-white border-2 border-dashed border-[#f45225]/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#f45225]/10 text-[#f45225] flex items-center justify-center shrink-0">
                <Dog className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#f45225]">
                  Atenção Especial a Todos os Tutores e Expositores
                </span>
                <h4 className="text-base font-bold text-[#202f6b]">
                  Termo de Responsabilidade para Acesso de Animais (CAEX)
                </h4>
                <p className="text-xs text-[#62628d] mt-0.5 max-w-2xl leading-relaxed">
                  Para agilizar sua entrada pelo <strong>Portão 2 (Triagem das 12h às 17h)</strong>, baixe o nosso termo oficial sob medida, imprima e traga preenchido junto com a carteira vacinal e atestado sanitário de até 15 dias.
                </p>
              </div>
            </div>

            <a
              href="/docs/manuais/Termo-De-Responsabilidade-Animal-Feira-Pet.pdf"
              download
              className="shrink-0 px-5 py-3 rounded-2xl bg-[#f45225] hover:bg-[#d94218] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover:shadow transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Termo em PDF (Impressão)</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

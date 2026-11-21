import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  TrendingUp,
  Target,
  Megaphone,
  Calendar,
  Video,
  Camera,
  Share2,
  Users,
  CheckCircle2,
  Clock
} from 'lucide-react';

export default function MarketingView() {
  const { data } = useApp();
  const { marketingFunnel } = data;
  const { stages, sixWeeksPlan } = marketingFunnel;

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
            Liderança: Maycon Douglas • MD Mercado Digital
          </span>
          <h2 className="font-display text-2xl font-extrabold text-slate-900 mt-2">
            Marketing Estratégico, Funil AARRR & Tráfego
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Plano integrado de aquisição e retenção para atingir a meta de 100k alcance e 5.000 visitantes presenciais.
          </p>
        </div>
      </div>

      {/* Funil AARRR Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-base font-bold text-slate-900 flex items-center gap-2">
            <Target className="w-5 h-5 text-pet-terracotta" />
            Funil AARRR (Metodologia de Crescimento)
          </h3>
          <span className="text-xs text-slate-500">
            5 Etapas Estratégicas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {stages.map((stg, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3 card-hover"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-pet-sand text-pet-terracotta border border-pet-border">
                  {stg.stage}
                </span>
                <p className="text-xs font-bold text-slate-900 mt-2">
                  {stg.focus}
                </p>
                <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                  <strong>Meta:</strong> {stg.kpi}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
                {stg.metrics}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cronograma de 6 Semanas Pré-Evento */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h3 className="font-display text-base font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-pet-teal" />
              Cronograma Tático de 6 Semanas Pré-Evento
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Roteiro de postagens, anúncios pagos, enquetes e cobertura ao vivo
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600">
            Cadência Semanal
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sixWeeksPlan.map((wk) => (
            <div
              key={wk.week}
              className="p-4 rounded-xl bg-pet-sand border border-pet-border flex flex-col justify-between space-y-2"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-pet-terracotta font-mono">
                    Semana 0{wk.week}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    {wk.week <= 2 ? 'Ativa' : 'Agendada'}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mt-1.5">
                  {wk.theme}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {wk.focus}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-pet-forest" />
                <span>Reels + Stories + Tráfego Pago</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipe Audiovisual & Escopo Técnico */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase">
            <Megaphone className="w-4 h-4 text-pet-terracotta" />
            Estrategista Digital (MD)
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Planejamento completo, copywriting, configuração de campanhas Meta/Google Ads, gestão de CRM e coordenação dos estandes.
          </p>
          <div className="text-xs font-mono font-bold text-slate-900 pt-1">
            Faixa: R$ 4.500 - R$ 5.500
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase">
            <Camera className="w-4 h-4 text-pet-teal" />
            Fotógrafo Oficial
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Cobertura fotográfica profissional de todos os estandes, desfiles pet, espaço de adoção e entrega de acervo em alta resolução.
          </p>
          <div className="text-xs font-mono font-bold text-slate-900 pt-1">
            Faixa: R$ 950 - R$ 1.250
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase">
            <Video className="w-4 h-4 text-amber-600" />
            Videomaker & Editor
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Captação de vídeos para Reels em tempo real durante o evento, depoimentos de expositores e aftermovie oficial pós-evento.
          </p>
          <div className="text-xs font-mono font-bold text-slate-900 pt-1">
            Faixa: R$ 1.700 - R$ 2.100
          </div>
        </div>

      </div>

    </div>
  );
}

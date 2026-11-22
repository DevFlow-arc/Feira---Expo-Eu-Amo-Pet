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
  Clock,
  Sparkles,
  ArrowRight,
  Flame,
  Radio,
  Eye,
  Award
} from 'lucide-react';

export default function MarketingView() {
  const { data } = useApp();
  const { marketingFunnel } = data;
  const { stages, sixWeeksPlan } = marketingFunnel;

  const funnelColors = [
    { bg: 'bg-[#f9418c]/10', border: 'border-[#f9418c]/30', text: 'text-[#f9418c]', bar: 'bg-[#f9418c]' },
    { bg: 'bg-[#ffc600]/15', border: 'border-[#ffc600]/40', text: 'text-amber-700', bar: 'bg-[#ffc600]' },
    { bg: 'bg-[#8c43dc]/10', border: 'border-[#8c43dc]/30', text: 'text-[#8c43dc]', bar: 'bg-[#8c43dc]' },
    { bg: 'bg-[#cbe33d]/25', border: 'border-[#cbe33d]/50', text: 'text-lime-900', bar: 'bg-[#a3be1c]' },
    { bg: 'bg-[#202f6b]/10', border: 'border-[#202f6b]/30', text: 'text-[#202f6b]', bar: 'bg-[#202f6b]' }
  ];

  return (
    <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
      
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white rounded-3xl p-6 sm:p-8 border border-[#e5dfd3] shadow-xs relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 rounded-full bg-[#f9418c]/5 pointer-events-none blur-xl" />
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f9418c]/10 text-[#f9418c] text-xs font-bold uppercase tracking-wider border border-[#f9418c]/20">
            <Flame className="w-3.5 h-3.5" />
            Liderança de Comunicação • Maycon Douglas (MD Mercado Digital)
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#202f6b] tracking-tight">
            Marketing Estratégico, Funil AARRR & Tráfego Pago
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Arquitetura de crescimento com foco em alcançar 100.000 pessoas nas redes e converter 5.000 visitantes presenciais qualificados em Macaé e Região dos Lagos.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 relative z-10">
          <div className="text-right hidden sm:block">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Alcance Projetado</span>
            <span className="text-xl font-extrabold text-[#202f6b] font-display">100.000+ pets & tutores</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#ffc600]/20 border border-[#ffc600]/40 flex items-center justify-center text-amber-800">
            <Radio className="w-6 h-6 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Funil AARRR Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-lg font-bold text-[#202f6b] flex items-center gap-2.5">
              <Target className="w-5 h-5 text-[#f9418c]" />
              Funil Pirata AARRR (Metodologia de Escala)
            </h3>
            <p className="text-xs text-slate-500">
              5 etapas de jornada: da descoberta nas redes sociais até o boca a boca pós-evento
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-white border border-[#e5dfd3] text-slate-600 rounded-full shadow-2xs">
            Metodologia Ativa
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {stages.map((stg, i) => {
            const color = funnelColors[i % funnelColors.length];
            return (
              <div
                key={i}
                className="p-5 rounded-3xl bg-white border border-[#e5dfd3] shadow-xs flex flex-col justify-between space-y-4 transition-all hover:shadow-md hover:-translate-y-0.5 relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${color.bar}`} />
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${color.bg} ${color.text} ${color.border}`}>
                      {stg.stage}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 font-mono">0{i + 1}</span>
                  </div>

                  <p className="text-sm font-bold text-[#202f6b] mt-3 leading-snug">
                    {stg.focus}
                  </p>
                  
                  <div className="mt-2.5 p-2.5 rounded-xl bg-[#f8f5ee]/80 border border-[#e5dfd3]/60">
                    <p className="text-[11px] text-slate-700 leading-relaxed">
                      <strong className="text-[#202f6b]">Meta:</strong> {stg.kpi}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#f2eee5] text-[11px] font-mono text-slate-500">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Métricas-Chave</div>
                  {stg.metrics}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cronograma de 6 Semanas Pré-Evento */}
      <div className="bg-white rounded-3xl border border-[#e5dfd3] shadow-xs p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#f2eee5] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc600]/15 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2 border border-[#ffc600]/30">
              <Calendar className="w-3.5 h-3.5" />
              Execução Tática
            </div>
            <h3 className="font-display text-xl font-extrabold text-[#202f6b]">
              Cronograma Tático de 6 Semanas Pré-Evento
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Roteiro de postagens, tráfego pago segmentado por geolocalização e engajamento da comunidade pet fluminense
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#202f6b]/5 text-[#202f6b] border border-[#202f6b]/15 self-start sm:self-auto">
            Cadência Semanal Contínua
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sixWeeksPlan.map((wk) => (
            <div
              key={wk.week}
              className="p-5 rounded-2xl bg-[#f8f5ee]/70 border border-[#e5dfd3] flex flex-col justify-between space-y-3 transition-all hover:bg-white hover:border-[#f9418c]/40 hover:shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#f9418c] font-mono px-2.5 py-0.5 rounded-full bg-[#f9418c]/10 border border-[#f9418c]/20">
                    Semana 0{wk.week}
                  </span>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                    wk.week <= 2 
                      ? 'bg-[#cbe33d]/30 text-lime-900 border border-[#cbe33d]' 
                      : 'bg-white text-slate-500 border border-slate-200'
                  }`}>
                    {wk.week <= 2 ? 'Ativa no Momento' : 'Agendada'}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#202f6b] mt-3 group-hover:text-[#f9418c] transition-colors">
                  {wk.theme}
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {wk.focus}
                </p>
              </div>

              <div className="pt-3 border-t border-[#e5dfd3]/60 flex items-center gap-2 text-[11px] font-semibold text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Reels + Stories + Anúncios Segmentados</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipe Audiovisual & Escopo Técnico */}
      <div className="space-y-4">
        <div>
          <h3 className="font-display text-lg font-bold text-[#202f6b] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#8c43dc]" />
            Equipe Técnica de Comunicação & Audiovisual
          </h3>
          <p className="text-xs text-slate-500">
            Escopo operacional contratado para garantir alta percepção de valor dos patrocinadores e cobertura em tempo real
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="p-6 rounded-3xl bg-white border border-[#e5dfd3] shadow-xs space-y-4 relative overflow-hidden">
            <div className="w-10 h-10 rounded-2xl bg-[#f9418c]/10 text-[#f9418c] flex items-center justify-center font-bold">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#f9418c]">Direção Estratégica</span>
              <h4 className="text-base font-extrabold text-[#202f6b] mt-0.5">Estrategista Digital (MD)</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Planejamento completo, copywriting, configuração de campanhas Meta/Google Ads, gestão de CRM, automações e suporte comercial aos estandes.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#f8f5ee] border border-[#e5dfd3] text-xs font-mono font-bold text-[#202f6b] flex items-center justify-between">
              <span className="text-slate-500 font-sans font-medium text-[11px]">Investimento:</span>
              <span>R$ 4.500 - R$ 5.500</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#e5dfd3] shadow-xs space-y-4 relative overflow-hidden">
            <div className="w-10 h-10 rounded-2xl bg-[#8c43dc]/10 text-[#8c43dc] flex items-center justify-center font-bold">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8c43dc]">Cobertura Fotográfica</span>
              <h4 className="text-base font-extrabold text-[#202f6b] mt-0.5">Fotógrafo Oficial do Festival</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Cobertura fotográfica profissional de todos os estandes, desfiles pet, espaço de adoção e entrega de acervo em alta resolução para marcas parceiras.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#f8f5ee] border border-[#e5dfd3] text-xs font-mono font-bold text-[#202f6b] flex items-center justify-between">
              <span className="text-slate-500 font-sans font-medium text-[11px]">Investimento:</span>
              <span>R$ 950 - R$ 1.250</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#e5dfd3] shadow-xs space-y-4 relative overflow-hidden">
            <div className="w-10 h-10 rounded-2xl bg-[#ffc600]/20 text-amber-800 flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Produção de Vídeo</span>
              <h4 className="text-base font-extrabold text-[#202f6b] mt-0.5">Videomaker & Editor de Reels</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Captação de vídeos para Reels em tempo real durante os 3 dias, depoimentos de expositores e aftermovie oficial pós-evento em 4K.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#f8f5ee] border border-[#e5dfd3] text-xs font-mono font-bold text-[#202f6b] flex items-center justify-between">
              <span className="text-slate-500 font-sans font-medium text-[11px]">Investimento:</span>
              <span>R$ 1.700 - R$ 2.100</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

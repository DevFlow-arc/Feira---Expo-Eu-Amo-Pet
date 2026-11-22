import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Target, Link2, Copy, Check, Calendar, Megaphone, Users, Sparkles } from 'lucide-react';

export default function MarketingView() {
  const { data, showToast } = useApp();
  const { marketingFunnel } = data;
  const { stages, sixWeeksPlan } = marketingFunnel;

  // UTM Link Generator
  const [source, setSource] = useState('instagram');
  const [medium, setMedium] = useState('bio');
  const [campaign, setCampaign] = useState('lancamento-2027');
  const [copiedLink, setCopiedLink] = useState(false);

  const baseUrl = 'https://feira-eu-amo-pet.vercel.app';
  const generatedUtmLink = `${baseUrl}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;

  const copyUtmLink = () => {
    navigator.clipboard.writeText(generatedUtmLink);
    setCopiedLink(true);
    showToast('Link UTM copiado com sucesso.');
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <h1 className="text-xl font-bold text-[#202f6b] tracking-tight">
            Marketing, Tráfego & Aquisição
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Metodologia AARRR, links rastreados de campanha e cronograma de publicação.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[11px] font-semibold text-slate-400 block uppercase">Leads Ativos:</span>
            <span className="text-sm font-bold font-mono text-emerald-700">1.840 / 5.000</span>
          </div>
        </div>
      </div>

      {/* UTM Campaign Link Builder (Ferramenta Operacional Real) */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Link2 className="w-4 h-4 text-[#202f6b]" />
          <h2 className="text-sm font-bold text-[#202f6b]">Gerador de Links UTM para Divulgação</h2>
          <span className="text-[10px] text-slate-400 font-mono">Rastreamento de Tráfego Pago & Parcerias</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div>
            <label className="text-slate-500 font-semibold block mb-1">Origem (utm_source)</label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-[#f9418c]"
            >
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook Ads</option>
              <option value="google">Google Ads</option>
              <option value="whatsapp">Grupos WhatsApp</option>
              <option value="influenciador">Influenciador / Parceiro</option>
            </select>
          </div>

          <div>
            <label className="text-slate-500 font-semibold block mb-1">Mídia (utm_medium)</label>
            <select
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-[#f9418c]"
            >
              <option value="bio">Bio do Perfil</option>
              <option value="stories">Stories (Link)</option>
              <option value="feed">Feed / Carrossel</option>
              <option value="cpc">Anúncio Pago (CPC)</option>
              <option value="direto">Disparo Direto</option>
            </select>
          </div>

          <div>
            <label className="text-slate-500 font-semibold block mb-1">Campanha (utm_campaign)</label>
            <input
              type="text"
              value={campaign}
              onChange={(e) => setCampaign(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
            />
          </div>
        </div>

        {/* Link Result Box */}
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <input
            type="text"
            readOnly
            value={generatedUtmLink}
            className="flex-1 bg-transparent border-none text-slate-700 font-mono text-[11px] focus:outline-hidden truncate"
          />
          <button
            onClick={copyUtmLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#202f6b] hover:bg-[#182452] text-white text-xs font-semibold shrink-0 transition-colors"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-[#ffc600]" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedLink ? 'Copiado!' : 'Copiar Link'}
          </button>
        </div>
      </div>

      {/* Funil AARRR (Metodologia) */}
      <div className="space-y-3">
        <h2 className="text-sm font-bold text-[#202f6b]">Funil de Conversão AARRR</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {stages.map((stg, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  {stg.stage}
                </span>
                <p className="text-xs font-bold text-[#202f6b] mt-2">{stg.focus}</p>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  <strong>Meta:</strong> {stg.kpi}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 font-mono text-[10px] text-slate-400">
                {stg.metrics}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cronograma de 6 Semanas Pré-Evento */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#202f6b]" />
            <h2 className="text-sm font-bold text-[#202f6b]">Cronograma Tático de 6 Semanas</h2>
          </div>
          <span className="text-[11px] font-mono text-slate-400">Cadência Semanal</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {sixWeeksPlan.map(wk => (
            <div key={wk.week} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-[#f9418c]">Semana 0{wk.week}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${
                  wk.week <= 2 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                }`}>
                  {wk.week <= 2 ? 'Ativa' : 'Agendada'}
                </span>
              </div>
              <h3 className="font-bold text-[#202f6b]">{wk.theme}</h3>
              <p className="text-slate-600 leading-relaxed text-[11px]">{wk.focus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Orçamentos da Equipe Audiovisual */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#202f6b]">Estrategista Digital</span>
            <span className="font-mono text-emerald-700 font-bold">R$ 4.500 - R$ 5.500</span>
          </div>
          <p className="text-xs text-slate-600">
            Tráfego pago Meta/Google, gestão de CRM e automações.
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#202f6b]">Fotógrafo Oficial</span>
            <span className="font-mono text-emerald-700 font-bold">R$ 950 - R$ 1.250</span>
          </div>
          <p className="text-xs text-slate-600">
            Cobertura fotográfica dos 3 dias de evento e entrega em alta resolução.
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#202f6b]">Videomaker & Reels</span>
            <span className="font-mono text-emerald-700 font-bold">R$ 1.700 - R$ 2.100</span>
          </div>
          <p className="text-xs text-slate-600">
            Captação de reels ao vivo nos estandes e aftermovie oficial.
          </p>
        </div>
      </div>

    </div>
  );
}

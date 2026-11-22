import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Users,
  Award,
  DollarSign,
  Heart,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  MapPin,
  ArrowRight,
  Landmark,
  ShieldCheck,
  Plus,
  Phone,
  MessageCircle,
  Clock,
  Check
} from 'lucide-react';

export default function OverviewView() {
  const { data, leads, updateLead, sponsorshipTiers, municipalChecklist, biosafetyChecklist } = useApp();
  const { generalInfo } = data;

  const totalPotential = sponsorshipTiers.reduce((acc, t) => acc + (t.price * (t.availableSlots || t.spots || 0)), 0);
  const totalClosed = sponsorshipTiers.reduce((acc, t) => acc + (t.price * (t.filledSlots || 0)), 0);
  const percentClosed = totalPotential > 0 ? Math.round((totalClosed / totalPotential) * 100) : 0;

  const occupiedBooths = generalInfo.occupiedBoothsCount || 18;
  const totalBooths = generalInfo.totalBoothsCount || 60;
  const boothPercent = Math.round((occupiedBooths / totalBooths) * 100);

  const completedMun = municipalChecklist.filter(i => i.status === 'concluido').length;
  const totalMun = municipalChecklist.length;

  const completedBio = biosafetyChecklist.filter(i => i.status === 'concluido').length;
  const totalBio = biosafetyChecklist.length;

  const handleWhatsappLead = (lead) => {
    const cleanPhone = lead.telefone.replace(/\D/g, '');
    const text = encodeURIComponent(
      `Olá ${lead.contato}! Sou Maycon Douglas, da organização da Feira Eu Amo Pet. Recebemos sua solicitação de estande (${lead.cota}) para a ${lead.empresa} e preparei nossa planta oficial para alinharmos os detalhes.`
    );
    window.open(`https://wa.me/55${cleanPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-6">
      
      {/* Executive Command Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-[#202f6b] tracking-tight">
              {generalInfo.eventName} • Painel Operacional
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Operação Ativa
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 mt-1">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {generalInfo.targetDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {generalInfo.venueName}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            to="/comercial"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#202f6b] hover:bg-[#182452] text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-[#ffc600]" />
            Gerenciar Leads
          </Link>
          <Link
            to="/prefeitura"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <Landmark className="w-3.5 h-3.5" />
            Alvarás ({completedMun}/{totalMun})
          </Link>
        </div>
      </div>

      {/* 4 Core KPIs — Quiet Chrome, High Scanability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1: Captação de Patrocínios */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Receita de Cotas</span>
            <span className="font-mono text-emerald-700 font-semibold">{percentClosed}% da meta</span>
          </div>
          <div className="text-2xl font-bold font-mono text-[#202f6b] tabular-nums tracking-tight">
            R$ {totalClosed.toLocaleString('pt-BR')}
          </div>
          <div className="space-y-1.5">
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#202f6b] h-full rounded-full transition-all"
                style={{ width: `${Math.min(percentClosed, 100)}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-400 flex justify-between font-mono">
              <span>Realizado</span>
              <span>Meta: R$ {totalPotential.toLocaleString('pt-BR')}</span>
            </div>
          </div>
        </div>

        {/* KPI 2: Ocupação de Estandes */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Estandes do Pavilhão</span>
            <span className="font-mono text-amber-700 font-semibold">{boothPercent}% ocupado</span>
          </div>
          <div className="text-2xl font-bold font-mono text-[#202f6b] tabular-nums tracking-tight">
            {occupiedBooths} <span className="text-slate-400 text-base font-normal">/ {totalBooths}</span>
          </div>
          <div className="space-y-1.5">
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#f9418c] h-full rounded-full transition-all"
                style={{ width: `${Math.min(boothPercent, 100)}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-400 flex justify-between font-mono">
              <span>{totalBooths - occupiedBooths} disponíveis</span>
              <span>Total: {totalBooths} vagas</span>
            </div>
          </div>
        </div>

        {/* KPI 3: Conformidade Municipal */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Licenças & Alvarás</span>
            <span className="font-mono text-sky-700 font-semibold">{completedMun} de {totalMun}</span>
          </div>
          <div className="text-2xl font-bold font-mono text-[#202f6b] tabular-nums tracking-tight">
            {Math.round((completedMun / totalMun) * 100)}%
          </div>
          <div className="space-y-1.5">
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-sky-600 h-full rounded-full transition-all"
                style={{ width: `${(completedMun / totalMun) * 100}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-400 flex justify-between font-mono">
              <span>{totalMun - completedMun} em trâmite</span>
              <span>Exigências SEDEC / CCZ</span>
            </div>
          </div>
        </div>

        {/* KPI 4: Biosseguridade & CRMV */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Sanidade & Triagem</span>
            <span className="font-mono text-emerald-700 font-semibold">RT Ativo</span>
          </div>
          <div className="text-2xl font-bold font-mono text-[#202f6b] tabular-nums tracking-tight">
            {completedBio} <span className="text-slate-400 text-base font-normal">/ {totalBio}</span>
          </div>
          <div className="space-y-1.5">
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-emerald-600 h-full rounded-full transition-all"
                style={{ width: `${(completedBio / totalBio) * 100}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-400 flex justify-between font-mono">
              <span>Plantão CAEX: 12h-17h</span>
              <span>CRMV-RJ 14.892</span>
            </div>
          </div>
        </div>

      </div>

      {/* Two Utilitarian Operational Grids */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Tabela de Leads Recentes com Ação WhatsApp */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-[#202f6b]">Leads Comerciais Recentes</h2>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                {leads.length} registros
              </span>
            </div>
            <Link
              to="/comercial"
              className="text-xs font-semibold text-[#f9418c] hover:underline flex items-center gap-1"
            >
              Ver todos <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {leads.slice(0, 4).map((lead) => (
              <div key={lead.id} className="p-3.5 flex items-center justify-between gap-3 hover:bg-slate-50/60 transition-colors">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#202f6b] truncate">{lead.empresa}</span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 shrink-0">
                      {lead.cota}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                    <span>{lead.contato}</span>
                    <span>•</span>
                    <span className="font-mono">{lead.telefone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${
                    lead.status === 'Contrato Assinado' 
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                      : lead.status === 'Proposta Enviada' 
                      ? 'bg-sky-50 text-sky-700 border-sky-200'
                      : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}>
                    {lead.status}
                  </span>
                  <button
                    onClick={() => handleWhatsappLead(lead)}
                    className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                    title="Chamar no WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabela de Alvarás e Prazos com Status Direto */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-[#202f6b]">Status de Alvarás & Órgãos</h2>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                {completedMun}/{totalMun} Aprovados
              </span>
            </div>
            <Link
              to="/prefeitura"
              className="text-xs font-semibold text-[#f9418c] hover:underline flex items-center gap-1"
            >
              Gerenciar <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {municipalChecklist.slice(0, 4).map((item) => (
              <div key={item.id} className="p-3.5 flex items-center justify-between gap-3 hover:bg-slate-50/60 transition-colors">
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#202f6b] truncate">{item.title}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span>Resp: {item.responsible}</span>
                  </div>
                </div>

                <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border shrink-0 ${
                  item.status === 'concluido'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}>
                  {item.status === 'concluido' ? 'Concluído' : 'Em Andamento'}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

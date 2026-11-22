import React from 'react';
import { useApp } from '../../context/AppContext';
import { Building2, Zap, Shield, Check, FileText, ArrowDownToLine } from 'lucide-react';
import { OFFICIAL_MANUALS } from '../../data/floorPlanData';

export default function InfrastructureView() {
  const { data, updateBoothsBreakdown } = useApp();
  const { infrastructureSpecs } = data;
  const { electrical, fireSafety, boothsBreakdown } = infrastructureSpecs;

  const handleBoothsChange = (index, field, value) => {
    updateBoothsBreakdown(index, { [field]: Number(value) });
  };

  const totalRevenuePotential = boothsBreakdown.reduce((acc, b) => acc + (b.total * b.pricePerUnit), 0);
  const totalRevenueAchieved = boothsBreakdown.reduce((acc, b) => acc + (b.booked * b.pricePerUnit), 0);
  const totalBooths = boothsBreakdown.reduce((acc, b) => acc + b.total, 0);
  const totalBooked = boothsBreakdown.reduce((acc, b) => acc + b.booked, 0);
  const occupancyPercent = totalBooths > 0 ? Math.round((totalBooked / totalBooths) * 100) : 0;

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#202f6b] text-white flex items-center justify-center font-bold">
              <Building2 className="w-4 h-4" />
            </span>
            <h1 className="text-xl font-bold text-[#202f6b] tracking-tight">
              Infraestrutura & Pavilhão de Estandes
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Gestão de capacidade instalada, metragens, precificação e conformidade técnica (NR-10 e Bombeiros AVCB).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-left sm:text-right">
            <div className="text-[11px] font-semibold text-slate-400 uppercase">Receita Realizada / Potencial:</div>
            <div className="text-base font-bold font-mono text-emerald-700">
              R$ {totalRevenueAchieved.toLocaleString('pt-BR')} <span className="text-slate-400 text-xs font-normal">/ R$ {totalRevenuePotential.toLocaleString('pt-BR')}</span>
            </div>
          </div>
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold">
            {occupancyPercent}% Ocupado
          </span>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-400 block mb-1">Total de Estandes</span>
          <span className="text-2xl font-black font-mono text-[#202f6b]">{totalBooths}</span>
          <span className="text-[11px] text-slate-500 block mt-0.5">Capacidade homologada</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-400 block mb-1">Estandes Vendidos</span>
          <span className="text-2xl font-black font-mono text-emerald-700">{totalBooked}</span>
          <span className="text-[11px] text-emerald-600 block mt-0.5">Contratos fechados</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-400 block mb-1">Disponíveis</span>
          <span className="text-2xl font-black font-mono text-amber-600">{totalBooths - totalBooked}</span>
          <span className="text-[11px] text-amber-600 block mt-0.5">Lotes abertos para venda</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-400 block mb-1">Corredores de Circulação</span>
          <span className="text-2xl font-black font-mono text-slate-800">3,20m a 4,80m</span>
          <span className="text-[11px] text-slate-500 block mt-0.5">Norma NR-23 / Acessibilidade</span>
        </div>
      </div>

      {/* Booth Grid with Live Inline Inputs */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#202f6b] uppercase tracking-wider">
            Metragens & Precificação dos Lotes de Estandes
          </h2>
          <span className="text-xs text-slate-400">Valores editáveis em tempo real</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {boothsBreakdown.map((booth, idx) => {
            const subtotal = booth.booked * booth.pricePerUnit;
            const occPercent = booth.total > 0 ? Math.round((booth.booked / booth.total) * 100) : 0;

            return (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-[#202f6b]">{booth.type}</h3>
                    <span className="text-[11px] text-slate-400 font-mono">{booth.size}</span>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    {occPercent}% ocupado
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-slate-500 font-semibold block mb-1">Preço Unitário (R$)</label>
                    <input
                      type="number"
                      value={booth.pricePerUnit}
                      onChange={(e) => handleBoothsChange(idx, 'pricePerUnit', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono font-bold text-slate-800 text-sm focus:ring-2 focus:ring-[#f45225]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-slate-500 font-semibold block mb-1">Total Estandes</label>
                      <input
                        type="number"
                        value={booth.total}
                        onChange={(e) => handleBoothsChange(idx, 'total', e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono text-xs focus:ring-2 focus:ring-[#f45225]"
                      />
                    </div>
                    <div>
                      <label className="text-slate-500 font-semibold block mb-1">Vendidos</label>
                      <input
                        type="number"
                        value={booth.booked}
                        onChange={(e) => handleBoothsChange(idx, 'booked', e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono font-bold text-emerald-700 text-xs focus:ring-2 focus:ring-[#f45225]"
                      />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-500 font-mono text-[11px]">
                    <span>{booth.total - booth.booked} disponíveis</span>
                    <span className="font-bold text-slate-800">Faturamento: R$ {subtotal.toLocaleString('pt-BR')}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Normas Técnicas Essenciais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Elétrica */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#202f6b] uppercase tracking-wider pb-2 border-b border-slate-100">
            <Zap className="w-4 h-4 text-amber-500" />
            Normas Elétricas (NR-10 & NBR 5410)
          </div>
          <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <li>• <strong>Tensão de Alimentação:</strong> {electrical.voltage}.</li>
            <li>• <strong>Tomadas Homologadas:</strong> {electrical.plugType}.</li>
            <li>• <strong>Fiação e Cabos:</strong> {electrical.cables}.</li>
            <li>• <strong>Quadros de Distribuição:</strong> {electrical.breakerBoxes}.</li>
          </ul>
        </div>

        {/* Bombeiros & Segurança */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#202f6b] uppercase tracking-wider pb-2 border-b border-slate-100">
            <Shield className="w-4 h-4 text-rose-500" />
            Prevenção de Incêndio & AVCB
          </div>
          <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <li>• <strong>Projeto Técnico AVCB:</strong> {fireSafety.status}.</li>
            <li>• <strong>Extintores Instalados:</strong> {fireSafety.extinguishersCount} unidades operacionais.</li>
            <li>• <strong>Rotas e Saídas de Emergência:</strong> {fireSafety.emergencyExits} saídas sinalizadas.</li>
            <li>• <strong>Largura Mínima dos Corredores:</strong> {fireSafety.hallwayWidthMin}.</li>
          </ul>
        </div>
      </div>

      {/* Manuais Técnicos Disponíveis para Download Operacional */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#202f6b]" />
            <h2 className="text-xs font-bold text-[#202f6b] uppercase tracking-wider">
              Documentos Técnicos Oficiais para Operação e Montadoras
            </h2>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">6 arquivos PDF homologados</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {OFFICIAL_MANUALS.map(manual => (
            <div key={manual.id} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[10px] font-mono font-bold text-[#f45225] block truncate">
                  {manual.code} • {manual.badge}
                </span>
                <span className="text-xs font-bold text-slate-800 block truncate">
                  {manual.title}
                </span>
                <span className="text-[11px] text-slate-400 font-mono block">
                  {manual.pages} • {manual.size}
                </span>
              </div>
              <a
                href={manual.pdfUrl}
                download
                className="shrink-0 p-2 rounded-lg bg-white border border-slate-200 hover:bg-[#202f6b] hover:text-white text-slate-700 transition-colors"
                title={`Baixar ${manual.title}`}
              >
                <ArrowDownToLine className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

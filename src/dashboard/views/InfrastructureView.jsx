import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import FestivalFloorPlan from '../../components/floorplan/FestivalFloorPlan';
import { Building2, Zap, Shield, Check, LayoutGrid, SlidersHorizontal, RefreshCw } from 'lucide-react';

export default function InfrastructureView() {
  const { data, updateBoothsBreakdown, resetBooths } = useApp();
  const { infrastructureSpecs } = data;
  const { electrical, fireSafety, boothsBreakdown } = infrastructureSpecs;

  const [activeSubTab, setActiveSubTab] = useState('planta'); // 'planta' | 'metas'

  const handleBoothsChange = (index, field, value) => {
    updateBoothsBreakdown(index, { [field]: Number(value) });
  };

  const totalRevenuePotential = boothsBreakdown.reduce((acc, b) => acc + (b.total * b.pricePerUnit), 0);
  const totalRevenueAchieved = boothsBreakdown.reduce((acc, b) => acc + (b.booked * b.pricePerUnit), 0);
  const totalBooths = boothsBreakdown.reduce((acc, b) => acc + b.total, 0);
  const totalBooked = boothsBreakdown.reduce((acc, b) => acc + b.booked, 0);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <h1 className="text-xl font-bold text-[#202f6b] tracking-tight">
            Infraestrutura & Pavilhão de Estandes
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Gestão de estandes em tempo real, capacidade instalada e conformidade técnica (NR-10 e Bombeiros AVCB).
          </p>
        </div>

        {/* View Switcher Tabs & Reset */}
        <div className="flex items-center gap-2">
          <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveSubTab('planta')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeSubTab === 'planta' ? 'bg-white text-[#202f6b] shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Planta Baixa Interativa</span>
            </button>
            <button
              onClick={() => setActiveSubTab('metas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeSubTab === 'metas' ? 'bg-white text-[#202f6b] shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Metas & Capacidade</span>
            </button>
          </div>

          <button
            onClick={resetBooths}
            className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            title="Restaurar Estandes Padrão"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Conditional Sub-Views */}
      {activeSubTab === 'planta' ? (
        <FestivalFloorPlan mode="admin" />
      ) : (
        <div className="space-y-6">
          {/* Revenue Summary Mini-bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-600">Faturamento Projetado Estandes:</span>
            <div className="font-mono font-bold text-emerald-700 text-sm">
              R$ {totalRevenueAchieved.toLocaleString('pt-BR')} <span className="text-slate-400 font-normal">/ R$ {totalRevenuePotential.toLocaleString('pt-BR')}</span>
            </div>
          </div>

          {/* Booth Grid with Live Inline Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {boothsBreakdown.map((booth, idx) => {
              const subtotal = booth.booked * booth.pricePerUnit;
              const occPercent = booth.total > 0 ? Math.round((booth.booked / booth.total) * 100) : 0;

              return (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <h2 className="text-sm font-bold text-[#202f6b]">{booth.type}</h2>
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
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono font-bold text-slate-800 text-sm focus:ring-2 focus:ring-[#f9418c]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-slate-500 font-semibold block mb-1">Total Estandes</label>
                        <input
                          type="number"
                          value={booth.total}
                          onChange={(e) => handleBoothsChange(idx, 'total', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono text-xs focus:ring-2 focus:ring-[#f9418c]"
                        />
                      </div>
                      <div>
                        <label className="text-slate-500 font-semibold block mb-1">Vendidos</label>
                        <input
                          type="number"
                          value={booth.booked}
                          onChange={(e) => handleBoothsChange(idx, 'booked', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono font-bold text-emerald-700 text-xs focus:ring-2 focus:ring-[#f9418c]"
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
        </div>
      )}

    </div>
  );
}

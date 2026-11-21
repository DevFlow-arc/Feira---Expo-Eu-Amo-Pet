import React from 'react';
import { useApp } from '../../context/AppContext';
import { Building2, Zap, Shield, Flame, Check, AlertTriangle, Layers } from 'lucide-react';

export default function InfrastructureView() {
  const { data, updateBoothsBreakdown } = useApp();
  const { infrastructureSpecs } = data;
  const { electrical, fireSafety, boothsBreakdown } = infrastructureSpecs;

  const handleBoothsChange = (index, field, value) => {
    updateBoothsBreakdown(index, { [field]: Number(value) });
  };

  const totalRevenuePotential = boothsBreakdown.reduce((acc, b) => acc + (b.total * b.pricePerUnit), 0);
  const totalRevenueAchieved = boothsBreakdown.reduce((acc, b) => acc + (b.booked * b.pricePerUnit), 0);

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-200 px-3 py-1 rounded-full border border-slate-300">
            Engenharia & Montagens
          </span>
          <h2 className="font-display text-2xl font-extrabold text-slate-900 mt-2">
            Infraestrutura, Pavilhões & Normas Técnicas
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Gestão de estandes, planta baixa e conformidade rigorosa com normas elétricas (NR-10/NBR-5410) e Corpo de Bombeiros.
          </p>
        </div>
      </div>

      {/* Estandes Breakdown (Editable values) */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-display text-base font-bold text-slate-900">
              Distribuição e Ocupação dos Estandes
            </h3>
            <p className="text-xs text-slate-500">
              Valores por estande e quantidade de unidades editáveis diretamente abaixo
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Faturamento Estandes (Realizado / Total):</span>
            <span className="text-base font-extrabold text-emerald-700 font-mono">
              R$ {totalRevenueAchieved.toLocaleString('pt-BR')} / R$ {totalRevenuePotential.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boothsBreakdown.map((booth, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-pet-sand border border-pet-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-slate-900 text-sm">
                  {booth.type}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                  {booth.size}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-500 block mb-1">Preço Unitário (R$):</label>
                  <input
                    type="number"
                    value={booth.pricePerUnit}
                    onChange={(e) => handleBoothsChange(idx, 'pricePerUnit', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 font-mono font-bold text-slate-900 text-xs focus:ring-1 focus:ring-pet-terracotta"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-slate-500 block mb-1">Total Unidades:</label>
                    <input
                      type="number"
                      value={booth.total}
                      onChange={(e) => handleBoothsChange(idx, 'total', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 font-mono font-bold text-slate-900 text-xs focus:ring-1 focus:ring-pet-terracotta"
                    />
                  </div>
                  <div>
                    <label className="text-slate-500 block mb-1">Vendidos:</label>
                    <input
                      type="number"
                      value={booth.booked}
                      onChange={(e) => handleBoothsChange(idx, 'booked', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 font-mono font-bold text-emerald-700 text-xs focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Disponíveis: <strong>{booth.total - booth.booked}</strong></span>
                  <span>Ocupação: <strong>{Math.round((booth.booked / booth.total) * 100)}%</strong></span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Normas Técnicas e Elétricas (Base FEIPET / FENAC) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Elétrica */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Normas de Instalação Elétrica (NR-10 & NBR 5410)
              </h3>
              <p className="text-[11px] text-slate-500">
                Exigências obrigatórias para montadoras e expositores
              </p>
            </div>
          </div>

          <ul className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Tensão Disponível:</strong> {electrical.voltage}.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Conexão Padrão:</strong> {electrical.plugType}.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Cabos e Fiação:</strong> {electrical.cables}.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Centro de Distribuição (CD):</strong> {electrical.breakerBoxes}.</span>
            </li>
            <li className="flex items-start gap-2 text-rose-700 bg-rose-50 p-2 rounded-lg border border-rose-200">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
              <span><strong>Proibição Absoluta:</strong> Refletores HQIs, lâmpadas de vapor e halógenas. Permitido somente lâmpadas de LED ou luz fria.</span>
            </li>
          </ul>
        </div>

        {/* Bombeiros & Segurança */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Segurança contra Pânico & Incêndio (AVCB)
              </h3>
              <p className="text-[11px] text-slate-500">
                Corpo de Bombeiros Militar do Estado do Rio de Janeiro
              </p>
            </div>
          </div>

          <ul className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Corredores de Circulação:</strong> Mínimo de 3,00m livres sem obstrução de produtos ou caixas.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Extintores Homologados:</strong> {fireSafety.extinguishersCount} unidades distribuídas nos pavilhões.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Rotas de Fuga & Portões:</strong> {fireSafety.emergencyExits} saídas de emergência com barra antipânico e sinalização fotoluminescente.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Ambulatório com Técnico de Enfermagem:</strong> Posto médico ativo durante todos os dias de montagem e feira.</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
}

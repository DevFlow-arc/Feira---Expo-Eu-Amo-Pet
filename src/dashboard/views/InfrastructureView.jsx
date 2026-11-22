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
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-[#161e47] bg-[#ffc600] px-3.5 py-1 rounded-full shadow-xs">
            Engenharia & Montagens • Manfertech
          </span>
          <h2 className="text-2xl lg:text-3xl font-black text-[#202f6b] mt-2 tracking-tight">
            Infraestrutura, Pavilhões & Normas Técnicas
          </h2>
          <p className="text-xs text-stone-500 font-medium mt-1">
            Gestão de estandes, planta baixa e conformidade rigorosa com normas elétricas (NR-10/NBR-5410) e Corpo de Bombeiros (AVCB).
          </p>
        </div>
      </div>

      {/* Estandes Breakdown (Editable values) */}
      <div className="bg-white rounded-3xl border border-[#e5dfd3] shadow-sm p-6 sm:p-7 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
          <div>
            <h3 className="text-base font-black text-[#202f6b]">
              Distribuição e Ocupação dos Estandes
            </h3>
            <p className="text-xs text-stone-500 font-medium">
              Valores por estande e quantidade de unidades editáveis diretamente abaixo
            </p>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-[11px] font-bold text-stone-400 block uppercase tracking-wider">Faturamento Estandes (Realizado / Total):</span>
            <span className="text-base font-black text-emerald-700 font-mono">
              R$ {totalRevenueAchieved.toLocaleString('pt-BR')} / R$ {totalRevenuePotential.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boothsBreakdown.map((booth, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#f8f5ee] border border-stone-200/80 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-black text-[#202f6b] text-sm">
                  {booth.type}
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-white border border-stone-200 text-[#202f6b]">
                  {booth.size}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-stone-500 font-bold block mb-1">Preço Unitário (R$):</label>
                  <input
                    type="number"
                    value={booth.pricePerUnit}
                    onChange={(e) => handleBoothsChange(idx, 'pricePerUnit', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 font-mono font-bold text-[#202f6b] text-xs focus:outline-none focus:ring-2 focus:ring-[#f9418c]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-stone-500 font-bold block mb-1">Total Unidades:</label>
                    <input
                      type="number"
                      value={booth.total}
                      onChange={(e) => handleBoothsChange(idx, 'total', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 font-mono font-bold text-[#202f6b] text-xs focus:outline-none focus:ring-2 focus:ring-[#f9418c]"
                    />
                  </div>
                  <div>
                    <label className="text-stone-500 font-bold block mb-1">Vendidos:</label>
                    <input
                      type="number"
                      value={booth.booked}
                      onChange={(e) => handleBoothsChange(idx, 'booked', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 font-mono font-bold text-emerald-700 text-xs focus:outline-none focus:ring-2 focus:ring-[#f9418c]"
                    />
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-stone-500 flex items-center justify-between font-bold">
                  <span>Disponíveis: <strong>{booth.total - booth.booked}</strong></span>
                  <span className="text-[#8c43dc]">Ocupação: <strong>{Math.round((booth.booked / booth.total) * 100)}%</strong></span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Normas Técnicas e Elétricas (Base FEIPET / FENAC) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Elétrica */}
        <div className="bg-white rounded-3xl border border-[#e5dfd3] shadow-sm p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
              <Zap className="w-5 h-5 text-[#ffc600]" />
            </div>
            <div>
              <h3 className="text-base font-black text-[#202f6b]">
                Normas de Instalação Elétrica (NR-10 & NBR 5410)
              </h3>
              <p className="text-xs font-bold text-stone-400">
                Exigências obrigatórias para montadoras e expositores
              </p>
            </div>
          </div>

          <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed font-medium">
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
            <li className="flex items-start gap-2 text-rose-700 bg-rose-50 p-3 rounded-2xl border border-rose-200">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
              <span><strong>Proibição Absoluta:</strong> Refletores HQIs, lâmpadas de vapor e halógenas. Permitido somente lâmpadas de LED ou luz fria.</span>
            </li>
          </ul>
        </div>

        {/* Bombeiros & Segurança */}
        <div className="bg-white rounded-3xl border border-[#e5dfd3] shadow-sm p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-200">
              <Flame className="w-5 h-5 text-[#f9418c]" />
            </div>
            <div>
              <h3 className="text-base font-black text-[#202f6b]">
                Segurança contra Pânico & Incêndio (AVCB)
              </h3>
              <p className="text-xs font-bold text-stone-400">
                Corpo de Bombeiros Militar do Estado do Rio de Janeiro
              </p>
            </div>
          </div>

          <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed font-medium">
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

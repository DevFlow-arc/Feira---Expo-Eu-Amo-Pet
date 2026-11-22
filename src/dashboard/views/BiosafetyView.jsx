import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Stethoscope, Clock, Check, AlertCircle, Dog, Bird, ShieldAlert } from 'lucide-react';

export default function BiosafetyView() {
  const { data, updateBiosafetyChecklist, biosafetyChecklist } = useApp();
  const safeBiosafety = biosafetyChecklist || data?.biosafetyChecklist || [];

  const completed = safeBiosafety.filter(i => i.status === 'concluido').length;

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <h1 className="text-xl font-bold text-[#202f6b] tracking-tight">
            Sanidade Animal, GTA & Biosseguridade
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Controle sanitário em conformidade com o CRMV-RJ, MAPA e defesa agropecuária.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-50 px-3.5 py-1.5 rounded-xl border border-emerald-200 text-xs text-emerald-800 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>{completed} de {biosafetyChecklist.length} itens homologados</span>
        </div>
      </div>

      {/* RT Profile & CAEX Schedule */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#202f6b] flex items-center justify-center font-bold">
            <Stethoscope className="w-5 h-5 text-[#202f6b]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-[#202f6b]">Dr. Roberto Mendonça</h2>
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                CRMV-RJ 14.892
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Médico Veterinário Responsável Técnico (RT Oficial do Evento)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 text-slate-700 font-medium">
          <Clock className="w-4 h-4 text-amber-600" />
          <span>Plantão CAEX: <strong>12:00 às 17:00</strong> (Portão 2)</span>
        </div>
      </div>

      {/* Health Rules by Species */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#202f6b] uppercase tracking-wider pb-2 border-b border-slate-100">
            <Dog className="w-4 h-4 text-[#f9418c]" />
            Cães e Gatos
          </div>
          <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <li>• <strong>Vacinas:</strong> Antirrábica e Polivalente (reforço mínimo 20 dias antes).</li>
            <li>• <strong>Atestado de Saúde:</strong> Expedido por veterinário há menos de 15 dias.</li>
            <li>• <strong>Filhotes:</strong> Permitidos somente com ciclo vacinal completo (3 doses).</li>
            <li>• <strong>Identificação:</strong> Coleira com placa de identificação e número do tutor.</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#202f6b] uppercase tracking-wider pb-2 border-b border-slate-100">
            <Bird className="w-4 h-4 text-sky-600" />
            Aves & Criatórios
          </div>
          <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <li>• <strong>GTA Obrigatória:</strong> Guia de Trânsito Animal emitida por profissional credenciado.</li>
            <li>• <strong>Gaiolas e Viveiros:</strong> Telas anti-fuga (malha máxima de 1 polegada / 2,54cm).</li>
            <li>• <strong>Quarentena:</strong> Isolamento preventivo de 14 dias antes do transporte.</li>
            <li>• <strong>Alimentação:</strong> Recipientes herméticos com água filtrada contínua.</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#202f6b] uppercase tracking-wider pb-2 border-b border-slate-100">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            Furões & Pequenos Exóticos
          </div>
          <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <li>• <strong>Furões (Ferrets):</strong> Vacina de Cinomose e atestado sanitário em dia.</li>
            <li>• <strong>Coelhos e Roedores:</strong> Inspeção clínica de ectoparasitas na triagem.</li>
            <li>• <strong>Répteis e Silvestres:</strong> Autorização do órgão ambiental e notas fiscais de origem.</li>
            <li>• <strong>Manejo:</strong> Presença obrigatória de tutor ou monitor durante todo o horário.</li>
          </ul>
        </div>

      </div>

      {/* Operational Checklist Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h2 className="text-sm font-bold text-[#202f6b]">Checklist Operacional de Biosseguridade</h2>
        </div>

        <div className="divide-y divide-slate-100">
          {biosafetyChecklist.map(item => (
            <div key={item.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
              <div className="space-y-1 max-w-2xl min-w-0">
                <div className="text-xs font-bold text-[#202f6b]">{item.title}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                {item.doctorName && (
                  <p className="text-[11px] text-slate-500 font-mono">Responsável: {item.doctorName}</p>
                )}
                {item.notes && (
                  <p className="text-[11px] text-slate-400 italic">{item.notes}</p>
                )}
              </div>

              <button
                onClick={() => updateBiosafetyChecklist(item.id, {
                  status: item.status === 'concluido' ? 'pendente' : 'concluido'
                })}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 flex items-center gap-1.5 transition-colors ${
                  item.status === 'concluido'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {item.status === 'concluido' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Homologado
                  </>
                ) : (
                  <>
                    <Clock className="w-3.5 h-3.5" />
                    Pendente
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

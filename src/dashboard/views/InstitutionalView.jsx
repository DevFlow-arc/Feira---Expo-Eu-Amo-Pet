import React from 'react';
import { useApp } from '../../context/AppContext';
import { Landmark, ShieldAlert, CheckCircle2, Clock, AlertCircle, FileText, Check } from 'lucide-react';

export default function InstitutionalView() {
  const { data, updateMunicipalChecklist } = useApp();
  const { municipalChecklist } = data;

  const handleStatusChange = (id, newStatus) => {
    updateMunicipalChecklist(id, { status: newStatus });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-[#202f6b] bg-sky-100 px-3.5 py-1 rounded-full border border-sky-200">
            Poder Executivo Municipal • Macaé & Campos
          </span>
          <h2 className="text-2xl lg:text-3xl font-black text-[#202f6b] mt-2 tracking-tight">
            Gestão Institucional, Alvarás & Prefeitura
          </h2>
          <p className="text-xs text-stone-500 font-medium mt-1">
            Acompanhamento das liberações, posturas e parcerias com as secretarias municipais e o Centro de Controle de Zoonoses (CCZ).
          </p>
        </div>
      </div>

      {/* Strategic Context Note */}
      <div className="p-5 rounded-3xl bg-[#ffc600]/10 border border-[#ffc600]/30 text-xs text-[#684900] flex items-start gap-3.5 shadow-xs">
        <AlertCircle className="w-5 h-5 text-[#b8860b] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-black text-sm">Por que o projeto travou na época anterior?</span>
          <p className="leading-relaxed font-medium">
            O André esbarrou na burocracia do Código de Posturas da prefeitura passada, na ausência de alvará provisório e na falta de apoio das secretarias de Turismo e Zoonoses. A nova gestão municipal e a transição política destravaram esse canal institucional, viabilizando o apoio logístico e a cessão do Parque da Fundação Rural.
          </p>
        </div>
      </div>

      {/* Checklist Table */}
      <div className="bg-white rounded-3xl border border-[#e5dfd3] shadow-sm overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-stone-100 flex items-center justify-between">
          <h3 className="text-base font-black text-[#202f6b]">
            Checklist de Obrigações Municipais
          </h3>
          <span className="text-xs text-stone-400 font-bold">
            Clique no status para alterar em tempo real
          </span>
        </div>

        <div className="divide-y divide-stone-100">
          {municipalChecklist.map((item) => (
            <div key={item.id} className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-[#f8f5ee]/60 transition-colors">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#202f6b]/10 text-[#202f6b]">
                    {item.category}
                  </span>
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase font-mono ${
                    item.priority === 'alta' ? 'bg-[#f9418c]/15 text-[#f9418c]' : 'bg-stone-100 text-stone-600'
                  }`}>
                    Prioridade {item.priority}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#202f6b]">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-medium">
                  {item.description}
                </p>
                <div className="text-[11px] text-stone-400 pt-1 flex flex-wrap items-center gap-3 font-medium">
                  <span><strong>Responsável:</strong> {item.responsible}</span>
                  <span>•</span>
                  <span><strong>Prazo:</strong> {item.deadline}</span>
                  <span>•</span>
                  <span className="italic">{item.notes}</span>
                </div>
              </div>

              {/* Status Switcher Buttons */}
              <div className="flex items-center gap-2 self-start lg:self-center shrink-0">
                <button
                  onClick={() => handleStatusChange(item.id, 'concluido')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    item.status === 'concluido'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  Concluído
                </button>

                <button
                  onClick={() => handleStatusChange(item.id, 'em_andamento')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    item.status === 'em_andamento'
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  Em Andamento
                </button>

                <button
                  onClick={() => handleStatusChange(item.id, 'pendente')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    item.status === 'pendente'
                      ? 'bg-[#f9418c] text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  Pendente
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

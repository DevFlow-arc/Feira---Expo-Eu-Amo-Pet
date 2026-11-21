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
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Poder Executivo Municipal
          </span>
          <h2 className="font-display text-2xl font-extrabold text-slate-900 mt-2">
            Gestão Institucional, Alvarás & Prefeitura
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Acompanhamento das liberações e parcerias com as secretarias da Prefeitura de Campos dos Goytacazes.
          </p>
        </div>
      </div>

      {/* Strategic Context Note */}
      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold">Por que o projeto travou na época anterior?</span>
          <p className="leading-relaxed">
            O André esbarrou na burocracia do Código de Posturas da prefeitura passada, na ausência de alvará provisório e na falta de apoio das secretarias de Turismo e Zoonoses. A nova gestão municipal e a transição política destravaram esse canal institucional, viabilizando o apoio logístico e a cessão do Parque da Fundação Rural.
          </p>
        </div>
      </div>

      {/* Checklist Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-display text-base font-bold text-slate-900">
            Checklist de Obrigações Municipais
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            Clique no status para alterar em tempo real
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {municipalChecklist.map((item) => (
            <div key={item.id} className="p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {item.category}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                    item.priority === 'alta' ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-600'
                  }`}>
                    Prioridade {item.priority}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-[11px] text-slate-400 pt-1 flex items-center gap-3">
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
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    item.status === 'concluido'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  Concluído
                </button>

                <button
                  onClick={() => handleStatusChange(item.id, 'em_andamento')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    item.status === 'em_andamento'
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  Em Andamento
                </button>

                <button
                  onClick={() => handleStatusChange(item.id, 'pendente')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    item.status === 'pendente'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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

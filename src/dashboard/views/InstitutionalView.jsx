import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Landmark, Check, Clock, AlertCircle, Plus, X, Filter } from 'lucide-react';

export default function InstitutionalView() {
  const { data, updateMunicipalChecklist, addMunicipalItem } = useApp();
  const { municipalChecklist } = data;

  const [statusFilter, setStatusFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMunForm, setNewMunForm] = useState({
    title: '',
    category: 'Prefeitura & Fazenda',
    description: '',
    responsible: 'Maycon Douglas',
    deadline: '30 dias antes',
    priority: 'alta',
    status: 'pendente'
  });

  const completed = municipalChecklist.filter(i => i.status === 'concluido').length;
  const inProgress = municipalChecklist.filter(i => i.status === 'em_andamento').length;
  const pending = municipalChecklist.filter(i => i.status === 'pendente').length;

  const filteredItems = municipalChecklist.filter(i => {
    if (statusFilter === 'all') return true;
    return i.status === statusFilter;
  });

  const handleStatusChange = (id, newStatus) => {
    updateMunicipalChecklist(id, { status: newStatus });
  };

  const handleCreateMunItem = (e) => {
    e.preventDefault();
    if (!newMunForm.title) return;
    addMunicipalItem(newMunForm);
    setNewMunForm({
      title: '',
      category: 'Prefeitura & Fazenda',
      description: '',
      responsible: 'Maycon Douglas',
      deadline: '30 dias antes',
      priority: 'alta',
      status: 'pendente'
    });
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <h1 className="text-xl font-bold text-[#202f6b] tracking-tight">
            Alvarás & Trâmites Municipais
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Controle de licenciamentos, posturas e convênios com secretarias de Macaé e Região dos Lagos.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#202f6b] hover:bg-[#182452] text-white text-xs font-semibold shadow-xs transition-colors"
        >
          <Plus className="w-3.5 h-3.5 text-[#ffc600]" />
          Adicionar Exigência
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">Aprovados / Concluídos</span>
          <div className="text-2xl font-bold font-mono text-emerald-700 tabular-nums">{completed}</div>
          <span className="text-[11px] text-slate-400">Termos e autorizações emitidas</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">Em Tramitação</span>
          <div className="text-2xl font-bold font-mono text-amber-700 tabular-nums">{inProgress}</div>
          <span className="text-[11px] text-slate-400">Processos abertos em análise</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">Pendentes de Entrada</span>
          <div className="text-2xl font-bold font-mono text-slate-700 tabular-nums">{pending}</div>
          <span className="text-[11px] text-slate-400">Aguardando protocolo oficial</span>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-medium">
        <span className="text-slate-400 mr-1 text-[11px] font-semibold uppercase">Filtrar:</span>
        {[
          { id: 'all', label: `Todos (${municipalChecklist.length})` },
          { id: 'concluido', label: `Concluídos (${completed})` },
          { id: 'em_andamento', label: `Em Andamento (${inProgress})` },
          { id: 'pendente', label: `Pendentes (${pending})` }
        ].map(st => (
          <button
            key={st.id}
            onClick={() => setStatusFilter(st.id)}
            className={`px-3 py-1 rounded-xl text-xs transition-colors ${
              statusFilter === st.id
                ? 'bg-[#202f6b] text-white font-semibold'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {st.label}
          </button>
        ))}
      </div>

      {/* Checklist Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="divide-y divide-slate-100">
          {filteredItems.map(item => (
            <div key={item.id} className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
              <div className="space-y-1 max-w-2xl min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    {item.category}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    item.priority === 'alta' ? 'bg-rose-50 text-rose-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    Prioridade {item.priority}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#202f6b]">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                <div className="text-[11px] text-slate-400 flex flex-wrap items-center gap-3 pt-0.5">
                  <span><strong>Responsável:</strong> {item.responsible}</span>
                  <span>•</span>
                  <span><strong>Prazo:</strong> {item.deadline}</span>
                  {item.notes && (
                    <>
                      <span>•</span>
                      <span className="italic">{item.notes}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Status Selector */}
              <div className="flex items-center gap-1.5 shrink-0 self-start md:self-center">
                <button
                  onClick={() => handleStatusChange(item.id, 'concluido')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors ${
                    item.status === 'concluido'
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  Concluído
                </button>

                <button
                  onClick={() => handleStatusChange(item.id, 'em_andamento')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors ${
                    item.status === 'em_andamento'
                      ? 'bg-amber-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  Em Andamento
                </button>

                <button
                  onClick={() => handleStatusChange(item.id, 'pendente')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors ${
                    item.status === 'pendente'
                      ? 'bg-slate-800 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  Pendente
                </button>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="p-8 text-center text-slate-400 text-xs">
              Nenhuma exigência encontrada com o filtro selecionado.
            </div>
          )}
        </div>
      </div>

      {/* MODAL: NOVA EXIGÊNCIA */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-[#202f6b]">Adicionar Protocolo / Alvará</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateMunItem} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Título do Documento / Alvará</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Alvará Temporário de Eventos"
                  value={newMunForm.title}
                  onChange={(e) => setNewMunForm({ ...newMunForm, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Órgão / Categoria</label>
                  <select
                    value={newMunForm.category}
                    onChange={(e) => setNewMunForm({ ...newMunForm, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c] bg-white"
                  >
                    <option value="Prefeitura & Fazenda">Prefeitura & Fazenda</option>
                    <option value="Causa Animal & CCZ">Causa Animal & CCZ</option>
                    <option value="Espaço & Solo">Espaço & Solo</option>
                    <option value="Segurança & Trânsito">Segurança & Trânsito</option>
                    <option value="Bombeiros (AVCB)">Bombeiros (AVCB)</option>
                    <option value="Turismo & Fomento">Turismo & Fomento</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Prioridade</label>
                  <select
                    value={newMunForm.priority}
                    onChange={(e) => setNewMunForm({ ...newMunForm, priority: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c] bg-white"
                  >
                    <option value="alta">Alta</option>
                    <option value="media">Média</option>
                    <option value="baixa">Baixa</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Descrição</label>
                <textarea
                  rows="2"
                  placeholder="Exigências técnicas do protocolo..."
                  value={newMunForm.description}
                  onChange={(e) => setNewMunForm({ ...newMunForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Responsável</label>
                  <input
                    type="text"
                    value={newMunForm.responsible}
                    onChange={(e) => setNewMunForm({ ...newMunForm, responsible: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Prazo Estimado</label>
                  <input
                    type="text"
                    value={newMunForm.deadline}
                    onChange={(e) => setNewMunForm({ ...newMunForm, deadline: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3.5 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#202f6b] hover:bg-[#182452] text-white font-semibold"
                >
                  Salvar Exigência
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Calendar, Plus, Trash2, Clock, X, MapPin } from 'lucide-react';

export default function ProgramView() {
  const { schedule, addScheduleItem, deleteScheduleItem } = useApp();
  const [activeDay, setActiveDay] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);

  const [newItemForm, setNewItemForm] = useState({
    time: '',
    title: '',
    location: 'Palco Principal',
    description: ''
  });

  const currentDayData = schedule.find(d => d.day === activeDay) || schedule[0];

  const handleCreateItem = (e) => {
    e.preventDefault();
    if (!newItemForm.title || !newItemForm.time) return;
    addScheduleItem(activeDay, newItemForm);
    setNewItemForm({
      time: '',
      title: '',
      location: 'Palco Principal',
      description: ''
    });
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <h1 className="text-xl font-bold text-[#202f6b] tracking-tight">
            Programação Oficial & Arenas
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Grade horária de desfiles, palestras do Seminário VET 360 e triagem CAEX.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#202f6b] hover:bg-[#182452] text-white text-xs font-semibold shadow-xs transition-colors"
        >
          <Plus className="w-3.5 h-3.5 text-[#ffc600]" />
          Nova Atração
        </button>
      </div>

      {/* Critical Gate Hours Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between font-semibold text-slate-500">
            <span>Triagem CAEX (Portão 2)</span>
            <span className="font-mono text-amber-700 font-bold">12:00 - 17:00</span>
          </div>
          <p className="text-slate-600">Acesso restrito de animais inscritos com atestado sanitário.</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between font-semibold text-slate-500">
            <span>Ação Castramóvel CCZ</span>
            <span className="font-mono text-emerald-700 font-bold">Sábado & Domingo</span>
          </div>
          <p className="text-slate-600">Microchipagem gratuita e feira de adoção ética assistida.</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between font-semibold text-slate-500">
            <span>Concursos & Desfiles</span>
            <span className="font-mono text-[#f9418c] font-bold">Domingo às 14:00</span>
          </div>
          <p className="text-slate-600">Desfile Pet Fantasia e Dog Influencer do Norte Fluminense.</p>
        </div>
      </div>

      {/* Day Selector & Schedule Content */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        {/* Day Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50/50 p-2 gap-2">
          {schedule.map(d => (
            <button
              key={d.day}
              onClick={() => setActiveDay(d.day)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all text-center ${
                activeDay === d.day
                  ? 'bg-white text-[#202f6b] shadow-2xs border border-slate-200 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
              }`}
            >
              <span className="text-[10px] text-slate-400 block uppercase font-mono">Dia 0{d.day}</span>
              <span>{d.title}</span>
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-[#202f6b]">{currentDayData.title}</span>
            <span className="text-[11px] font-mono text-slate-400">
              {currentDayData.items.length} atrações cadastradas
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {currentDayData.items.map(item => (
              <div key={item.id} className="py-3.5 flex items-start justify-between gap-4 group">
                <div className="flex items-start gap-3.5 min-w-0">
                  <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 shrink-0 mt-0.5">
                    {item.time}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xs font-bold text-[#202f6b]">{item.title}</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                        {item.location}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => deleteScheduleItem(activeDay, item.id)}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-rose-600 hover:bg-rose-50 transition-colors shrink-0"
                  title="Remover atração"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}

            {currentDayData.items.length === 0 && (
              <div className="p-8 text-center text-slate-400 text-xs">
                Nenhuma atração cadastrada para este dia.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MODAL: NOVA ATRAÇÃO */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-[#202f6b]">
                Adicionar Atração • Dia 0{activeDay} ({currentDayData.title})
              </h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateItem} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Horário (ex: 14:30)</label>
                  <input
                    type="text"
                    required
                    placeholder="14:30"
                    value={newItemForm.time}
                    onChange={(e) => setNewItemForm({ ...newItemForm, time: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c] font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Local / Arena</label>
                  <select
                    value={newItemForm.location}
                    onChange={(e) => setNewItemForm({ ...newItemForm, location: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c] bg-white"
                  >
                    <option value="Palco Principal">Palco Principal</option>
                    <option value="Arena VET 360">Arena VET 360</option>
                    <option value="Espaço CCZ">Espaço CCZ</option>
                    <option value="Arena Agility">Arena Agility</option>
                    <option value="Portão 2">Portão 2 (CAEX)</option>
                    <option value="Entrada Principal">Entrada Principal</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Título da Atração</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Palestra de Primeiros Socorros em Cães"
                  value={newItemForm.title}
                  onChange={(e) => setNewItemForm({ ...newItemForm, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Descrição</label>
                <textarea
                  rows="2"
                  placeholder="Palestrantes, convidados ou detalhes..."
                  value={newItemForm.description}
                  onChange={(e) => setNewItemForm({ ...newItemForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
                />
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
                  Salvar Atração
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Calendar, Clock, MapPin, Plus, CheckCircle, AlertTriangle, 
  Sparkles, Award, HeartHandshake, FileText, ChevronRight, Stethoscope
} from 'lucide-react';

export default function ProgramView() {
  const { schedule, eventInfo, addToast } = useApp();
  const [activeDay, setActiveDay] = useState(1);
  const [agenda, setAgenda] = useState(schedule);
  const [newTitle, setNewTitle] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newLocation, setNewLocation] = useState('Palco Principal');
  const [newDescription, setNewDescription] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const currentDayData = agenda.find(d => d.day === activeDay) || agenda[0];

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newTitle || !newTime) return;

    const newItem = {
      id: Date.now(),
      time: newTime,
      title: newTitle,
      location: newLocation,
      description: newDescription || 'Atração da programação oficial.'
    };

    setAgenda(prev => prev.map(d => {
      if (d.day === activeDay) {
        return {
          ...d,
          items: [...d.items, newItem].sort((a, b) => a.time.localeCompare(b.time))
        };
      }
      return d;
    }));

    setNewTitle('');
    setNewTime('');
    setNewDescription('');
    setShowAddModal(false);
    addToast('Nova atração adicionada com sucesso!', 'success');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5" />
            Cronograma Oficial de 3 Dias
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            Programação do Evento & Arenas
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Gestão do palco principal, Arena VET 360, triagem sanitária CAEX e circuito de adoção.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-all shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Nova Atração
        </button>
      </div>

      {/* Regras e Horários Críticos (CAEX & Sanidade) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white border border-amber-200 rounded-2xl shadow-xs">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Horário de Triagem CAEX</p>
              <h4 className="text-sm font-bold text-slate-900">12:00 às 17:00 (Rigoroso)</h4>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Acesso de animais inscritos apenas com triagem sanitária e médico veterinário responsável no portão 2.
          </p>
        </div>

        <div className="p-4 bg-white border border-emerald-200 rounded-2xl shadow-xs">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Stethoscope className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Castramóvel & CCZ</p>
              <h4 className="text-sm font-bold text-slate-900">Sábado & Domingo</h4>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Microchipagem gratuita, vacinação antirrábica e feira de adoção responsável com 150+ animais assistidos.
          </p>
        </div>

        <div className="p-4 bg-white border border-blue-200 rounded-2xl shadow-xs">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Desfile & Concursos</p>
              <h4 className="text-sm font-bold text-slate-900">Domingo às 16:00</h4>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Concurso Pet Fantasia, Dog Influencer do Ano e entrega de troféus para expositores destaque da região.
          </p>
        </div>
      </div>

      {/* Tabs por Dia */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
        <div className="flex border-b border-slate-200 bg-slate-50/70 p-2 gap-2">
          {agenda.map((d) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(d.day)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all text-center ${
                activeDay === d.day
                  ? 'bg-white text-emerald-700 shadow-sm border border-slate-200/80 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
              }`}
            >
              <div className="text-xs uppercase tracking-wider text-slate-400">Dia {d.day}</div>
              <div className="text-sm">{d.title}</div>
            </button>
          ))}
        </div>

        {/* Content do dia */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-slate-900">{currentDayData.title}</h3>
              <p className="text-xs text-slate-500">Programação oficial com horários de abertura e encerramento de estandes</p>
            </div>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
              {currentDayData.items.length} atrações cadastradas
            </span>
          </div>

          <div className="space-y-4">
            {currentDayData.items.map((item, idx) => (
              <div 
                key={item.id || idx}
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50/50 transition-all"
              >
                <div className="w-20 pt-1 shrink-0">
                  <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-mono font-bold">
                    {item.time}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                      {item.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Adicionar Atração */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Adicionar Nova Atração</h3>
            <p className="text-xs text-slate-500 mb-4">Dia {activeDay} - {currentDayData.title}</p>

            <form onSubmit={handleAddItem} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Horário (ex: 14:30)</label>
                <input
                  type="text"
                  required
                  placeholder="14:30"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Título da Atração</label>
                <input
                  type="text"
                  required
                  placeholder="ex: Workshop de Primeiros Socorros em Cães"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Local / Arena</label>
                <select
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="Palco Principal">Palco Principal</option>
                  <option value="Arena VET 360">Arena VET 360</option>
                  <option value="Espaço Adoção CCZ">Espaço Adoção CCZ</option>
                  <option value="Arena de Agility & Adestramento">Arena de Agility & Adestramento</option>
                  <option value="Área de Expositores">Área de Expositores</option>
                  <option value="Espaço Kids & Gastronomia">Espaço Kids & Gastronomia</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Descrição</label>
                <textarea
                  rows="3"
                  placeholder="Detalhes, palestrante ou objetivos..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-xs font-semibold hover:bg-slate-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs"
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

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Calendar, Clock, MapPin, Plus, CheckCircle, AlertTriangle, 
  Sparkles, Award, HeartHandshake, FileText, ChevronRight, Stethoscope,
  X, Compass
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
      description: newDescription || 'Atração da programação oficial do festival.'
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
    addToast('Nova atração adicionada à programação com sucesso!', 'success');
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-3xl p-6 sm:p-8 border border-[#e5dfd3] shadow-xs relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 rounded-full bg-[#ffc600]/10 pointer-events-none blur-xl" />
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffc600]/20 text-amber-900 text-xs font-bold uppercase tracking-wider border border-[#ffc600]/40">
            <Calendar className="w-3.5 h-3.5" />
            Cronograma Oficial de 3 Dias • Macaé & Região dos Lagos
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#202f6b] tracking-tight">
            Programação do Festival & Gestão de Arenas
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Grade horária integrada do Palco Principal, Arena VET 360, triagem sanitária CAEX e circuito de adoção responsável.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="relative z-10 inline-flex items-center gap-2 px-5 py-3 bg-[#f9418c] hover:bg-[#e02d76] text-white rounded-2xl text-sm font-bold transition-all shadow-md hover:shadow-lg shrink-0"
        >
          <Plus className="w-4 h-4" />
          Nova Atração
        </button>
      </div>

      {/* Regras e Horários Críticos (CAEX & Sanidade) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 bg-white border border-[#e5dfd3] rounded-3xl shadow-xs space-y-3 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ffc600]/20 text-amber-800 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Triagem Sanitária CAEX</p>
              <h4 className="text-sm font-extrabold text-[#202f6b]">12:00 às 17:00 (Rigoroso)</h4>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Acesso de animais com checagem de carteira de vacinação antirrábica e polivalente e emissão de atestado de aptidão no Portão 2.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#e5dfd3] rounded-3xl shadow-xs space-y-3 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#cbe33d]/30 text-lime-900 flex items-center justify-center font-bold">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Castramóvel & CCZ</p>
              <h4 className="text-sm font-extrabold text-[#202f6b]">Sábado & Domingo</h4>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Agendamento de castrações, microchipagem gratuita, vacinação e feira de adoção com suporte da Secretaria de Saúde e ONGs locais.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#e5dfd3] rounded-3xl shadow-xs space-y-3 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#f9418c]/10 text-[#f9418c] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Desfiles & Concursos</p>
              <h4 className="text-sm font-extrabold text-[#202f6b]">Domingo às 16:00</h4>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Concurso Pet Fantasia, Eleição Dog Influencer Regional e premiação de estandes mais inovadores e sustentáveis.
          </p>
        </div>
      </div>

      {/* Tabs por Dia */}
      <div className="bg-white border border-[#e5dfd3] rounded-3xl shadow-xs overflow-hidden">
        {/* Navegação dos Dias */}
        <div className="flex border-b border-[#f2eee5] bg-[#f8f5ee]/80 p-3 gap-2.5">
          {agenda.map((d) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(d.day)}
              className={`flex-1 py-3 px-4 rounded-2xl text-sm font-bold transition-all text-center ${
                activeDay === d.day
                  ? 'bg-[#202f6b] text-white shadow-md'
                  : 'text-[#202f6b] hover:bg-white/80'
              }`}
            >
              <div className={`text-[10px] uppercase font-bold tracking-wider ${activeDay === d.day ? 'text-[#ffc600]' : 'text-slate-400'}`}>
                Dia 0{d.day}
              </div>
              <div className="text-sm mt-0.5">{d.title}</div>
            </button>
          ))}
        </div>

        {/* Content do dia */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#f2eee5]">
            <div>
              <h3 className="font-display text-lg font-bold text-[#202f6b]">{currentDayData.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5">Programação detalhada das arenas com sincronização de estandes e fluxo de público</p>
            </div>
            <span className="px-3 py-1 bg-[#202f6b]/5 text-[#202f6b] text-xs font-bold rounded-full border border-[#202f6b]/15 self-start sm:self-auto">
              {currentDayData.items.length} atrações confirmadas
            </span>
          </div>

          <div className="space-y-3.5">
            {currentDayData.items.map((item, idx) => (
              <div 
                key={item.id || idx}
                className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 sm:p-5 rounded-2xl border border-[#e5dfd3] bg-[#f8f5ee]/40 hover:bg-white hover:border-[#f9418c]/40 hover:shadow-xs transition-all group"
              >
                <div className="sm:w-24 shrink-0">
                  <span className="inline-block px-3 py-1.5 bg-[#202f6b] text-white rounded-xl text-xs font-mono font-bold shadow-2xs">
                    {item.time}
                  </span>
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm font-extrabold text-[#202f6b] group-hover:text-[#f9418c] transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-[#8c43dc] border border-[#8c43dc]/30 shadow-2xs">
                      {item.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Adicionar Atração */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-[#202f6b]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#e5dfd3] animate-in fade-in zoom-in-95 duration-150 relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-[#f8f5ee] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#f9418c]">Gestão de Cronograma</span>
              <h3 className="font-display text-xl font-extrabold text-[#202f6b] mt-0.5">Adicionar Nova Atração</h3>
              <p className="text-xs text-slate-500 mt-1">Dia {activeDay} • {currentDayData.title}</p>
            </div>

            <form onSubmit={handleAddItem} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#202f6b] mb-1.5">Horário de Início (ex: 14:30)</label>
                <input
                  type="text"
                  required
                  placeholder="14:30"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#e5dfd3] rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#f9418c] focus:border-[#f9418c] bg-[#f8f5ee]/40 font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#202f6b] mb-1.5">Título da Atração ou Palestra</label>
                <input
                  type="text"
                  required
                  placeholder="ex: Workshop de Nutrição Natural e Longevidade Canina"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#e5dfd3] rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#f9418c] focus:border-[#f9418c] bg-[#f8f5ee]/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#202f6b] mb-1.5">Local / Arena Designada</label>
                <select
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#e5dfd3] rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#f9418c] focus:border-[#f9418c] bg-white font-medium"
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
                <label className="block text-xs font-bold text-[#202f6b] mb-1.5">Descrição & Convidados</label>
                <textarea
                  rows="3"
                  placeholder="Detalhes, médico veterinário ou objetivos..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#e5dfd3] rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#f9418c] focus:border-[#f9418c] bg-[#f8f5ee]/40"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-[#f2eee5]">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-2.5 border border-[#e5dfd3] text-slate-600 rounded-2xl text-xs font-bold hover:bg-[#f8f5ee] transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#202f6b] hover:bg-[#182452] text-white rounded-2xl text-xs font-bold shadow-md hover:shadow-lg transition-all"
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

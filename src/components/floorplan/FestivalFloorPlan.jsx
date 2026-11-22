import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { FLOOR_PLAN_ZONES, SPECIAL_ARENAS } from '../../data/floorPlanData';
import { 
  Search, Filter, MapPin, CheckCircle2, Clock, ShieldAlert, 
  ExternalLink, MessageCircle, X, Edit3, Save, Zap, Building2,
  Trophy, GraduationCap, Heart, Utensils, ShieldCheck, ArrowRight,
  Maximize2, LayoutGrid, List
} from 'lucide-react';

export default function FestivalFloorPlan({ mode = 'public' }) {
  const { boothsList, updateBooth, showToast } = useApp();

  const [selectedZone, setSelectedZone] = useState('todas');
  const [selectedStatus, setSelectedStatus] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBooth, setActiveBooth] = useState(null);
  const [activeArena, setActiveArena] = useState(null);
  const [viewMode, setViewMode] = useState('map'); // 'map' | 'list'

  // Admin edit form state
  const [editStatus, setEditStatus] = useState('disponivel');
  const [editExpositor, setEditExpositor] = useState('');
  const [editSegment, setEditSegment] = useState('');
  const [editPrice, setEditPrice] = useState(0);

  // Stats calculation
  const stats = useMemo(() => {
    const total = boothsList.length;
    const disponiveis = boothsList.filter(b => b.status === 'disponivel').length;
    const reservados = boothsList.filter(b => b.status === 'reservado').length;
    const ocupados = boothsList.filter(b => b.status === 'ocupado').length;
    const taxaOcupacao = total > 0 ? Math.round(((ocupados + reservados) / total) * 100) : 0;
    const receitaTotal = boothsList.filter(b => b.status === 'ocupado').reduce((acc, b) => acc + (b.price || 0), 0);
    return { total, disponiveis, reservados, ocupados, taxaOcupacao, receitaTotal };
  }, [boothsList]);

  // Filtered booths
  const filteredBooths = useMemo(() => {
    return boothsList.filter(booth => {
      // Zone filter
      if (selectedZone !== 'todas' && selectedZone !== 'arenas') {
        if (booth.zone !== selectedZone) return false;
      }
      // Status filter
      if (selectedStatus !== 'todos') {
        if (booth.status !== selectedStatus) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const codeMatch = booth.code.toLowerCase().includes(q);
        const nameMatch = (booth.expositor || '').toLowerCase().includes(q);
        const segmentMatch = (booth.segment || '').toLowerCase().includes(q);
        const typeMatch = booth.type.toLowerCase().includes(q);
        if (!codeMatch && !nameMatch && !segmentMatch && !typeMatch) return false;
      }
      return true;
    });
  }, [boothsList, selectedZone, selectedStatus, searchQuery]);

  // Open Booth Detail
  const handleOpenBooth = (booth) => {
    setActiveBooth(booth);
    setActiveArena(null);
    setEditStatus(booth.status);
    setEditExpositor(booth.expositor || '');
    setEditSegment(booth.segment || '');
    setEditPrice(booth.price || 0);
  };

  // Open Arena Detail
  const handleOpenArena = (arena) => {
    setActiveArena(arena);
    setActiveBooth(null);
  };

  // Close modals
  const handleCloseModal = () => {
    setActiveBooth(null);
    setActiveArena(null);
  };

  // Save Admin Booth Edits
  const handleSaveAdmin = (e) => {
    e.preventDefault();
    if (!activeBooth) return;

    updateBooth(activeBooth.id, {
      status: editStatus,
      expositor: editStatus === 'disponivel' ? null : editExpositor.trim() || null,
      segment: editStatus === 'disponivel' ? activeBooth.segment : editSegment.trim(),
      price: Number(editPrice)
    });

    setActiveBooth(prev => ({
      ...prev,
      status: editStatus,
      expositor: editStatus === 'disponivel' ? null : editExpositor.trim() || null,
      segment: editStatus === 'disponivel' ? prev.segment : editSegment.trim(),
      price: Number(editPrice)
    }));
  };

  // Helper for booth status style
  const getBoothColor = (booth) => {
    if (booth.status === 'ocupado') {
      return {
        bg: 'bg-slate-900 text-white border-slate-700 hover:bg-slate-800',
        badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        dot: 'bg-emerald-400'
      };
    }
    if (booth.status === 'reservado') {
      return {
        bg: 'bg-amber-50 text-amber-950 border-amber-300 hover:bg-amber-100',
        badge: 'bg-amber-200 text-amber-900 border-amber-400',
        dot: 'bg-amber-500 animate-pulse'
      };
    }
    // Disponível: tone follows zone
    switch (booth.zone) {
      case 'nutricao':
        return {
          bg: 'bg-emerald-50/90 text-emerald-950 border-emerald-300 hover:bg-emerald-100 hover:border-emerald-400',
          badge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          dot: 'bg-emerald-500'
        };
      case 'veterinaria':
        return {
          bg: 'bg-sky-50/90 text-sky-950 border-sky-300 hover:bg-sky-100 hover:border-sky-400',
          badge: 'bg-sky-100 text-sky-800 border-sky-300',
          dot: 'bg-sky-500'
        };
      case 'grooming':
        return {
          bg: 'bg-purple-50/90 text-purple-950 border-purple-300 hover:bg-purple-100 hover:border-purple-400',
          badge: 'bg-purple-100 text-purple-800 border-purple-300',
          dot: 'bg-purple-500'
        };
      case 'acessorios':
      default:
        return {
          bg: 'bg-amber-50/90 text-amber-950 border-amber-300 hover:bg-amber-100 hover:border-amber-400',
          badge: 'bg-amber-100 text-amber-800 border-amber-300',
          dot: 'bg-amber-500'
        };
    }
  };

  const getArenaIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Trophy': return <Trophy className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full space-y-6">
      
      {/* ─── Control Bar: Filters, Search & KPIs ─────────────────────────── */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-5">
        
        {/* Top Row: KPIs and Quick Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#202f6b] text-white">
              <Building2 className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-base font-bold text-[#202f6b]">
                {mode === 'admin' ? 'Gestão de Estandes & Pavilhão' : 'Explorar Planta do Pavilhão'}
              </h3>
              <p className="text-xs text-slate-500">
                Polo de Grandes Eventos • Macaé e Região dos Lagos 2027
              </p>
            </div>
          </div>

          {/* KPI Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <div className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-semibold flex items-center gap-1.5">
              <span>Total:</span>
              <span className="font-bold font-mono text-[#202f6b]">{stats.total} estandes</span>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Disponíveis:</span>
              <span className="font-bold font-mono">{stats.disponiveis}</span>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 font-semibold border border-amber-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Reservados:</span>
              <span className="font-bold font-mono">{stats.reservados}</span>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Confirmados:</span>
              <span className="font-bold font-mono text-emerald-300">{stats.ocupados}</span>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-[#f45225]/10 text-[#f45225] font-bold border border-[#f45225]/20 font-mono">
              {stats.taxaOcupacao}% Ocupado
            </div>
          </div>
        </div>

        {/* Second Row: Zone Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Zonas:
          </span>
          {FLOOR_PLAN_ZONES.map(zone => {
            const isSelected = selectedZone === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  isSelected 
                    ? 'bg-[#202f6b] text-white border-[#202f6b] shadow-xs' 
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {zone.name}
              </button>
            );
          })}
        </div>

        {/* Third Row: Search, Status Filter & View Toggle */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por código (ex: N-01), marca ou segmento..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#f45225] focus:outline-hidden transition-all text-slate-800 placeholder-slate-400 font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Status Filter & View Mode */}
          <div className="flex items-center gap-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white text-slate-700 focus:ring-2 focus:ring-[#f45225] focus:outline-hidden"
            >
              <option value="todos">Todos os Status</option>
              <option value="disponivel">Apenas Disponíveis</option>
              <option value="reservado">Apenas Reservados</option>
              <option value="ocupado">Apenas Confirmados</option>
            </select>

            <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setViewMode('map')}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                  viewMode === 'map' ? 'bg-white text-[#202f6b] shadow-2xs' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Visualização em Mapa Arquitetônico"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden md:inline">Mapa</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                  viewMode === 'list' ? 'bg-white text-[#202f6b] shadow-2xs' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Visualização em Lista / Tabela"
              >
                <List className="w-4 h-4" />
                <span className="hidden md:inline">Lista</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ─── Architectural Floor Plan: CAD / Map Grid ──────────────────── */}
      {viewMode === 'map' ? (
        <div className="bg-[#0f172a] rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-800 shadow-xl text-white relative overflow-hidden">
          
          {/* Subtle CAD Engineering Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Pavilion Header & Regulatory Indicators */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[11px] font-mono font-bold border border-emerald-500/30">
                  GABARITO TÉCNICO OFICIAL
                </span>
                <span className="text-slate-400 text-xs hidden sm:inline">•</span>
                <span className="text-slate-400 text-xs font-mono">
                  Corredores: 3,20m a 4,80m Livres (NR-23)
                </span>
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                Pavilhão Principal de Exposições & Arenas
              </h4>
            </div>

            {/* Emergency and Safety Badges */}
            <div className="flex items-center gap-2 text-[11px] font-mono">
              <div className="px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>4 Saídas de Emergência Sinalizadas</span>
              </div>
              <div className="px-2.5 py-1 rounded-lg bg-amber-950/80 text-amber-300 border border-amber-800/80 hidden sm:flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Padrão Steck NR-10</span>
              </div>
            </div>
          </div>

          {/* Gate Access Banner (Portão 1 & Portão 2 CAEX) */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
            {/* Gate 1 */}
            <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#f45225] text-white flex items-center justify-center font-bold text-xs font-mono shadow-xs">
                  P-01
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Portão 1: Entrada Principal & Credenciamento</div>
                  <div className="text-[11px] text-slate-400">Acesso Geral de Visitantes, Tutores e Imprensa</div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-700 text-slate-300">
                10h às 21h
              </span>
            </div>

            {/* Gate 2: CAEX Triagem */}
            <div 
              onClick={() => handleOpenArena(SPECIAL_ARENAS.find(a => a.id === 'caex'))}
              className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-700/60 hover:border-amber-500 flex items-center justify-between cursor-pointer transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs font-mono shadow-xs">
                  P-02
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-200 group-hover:text-amber-100 flex items-center gap-1.5">
                    Portão 2: Triagem Sanitária CAEX
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-[11px] text-amber-300/70">Inspeção Veterinária Obrigatória para Animais</div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                12h às 17h (Estrito)
              </span>
            </div>
          </div>

          {/* Special Arenas Quick Bar */}
          <div className="relative z-10 mb-6">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Arenas & Espaços Especiais de Experiência</span>
              <span className="text-slate-500 text-[10px] font-normal">Clique para ver detalhes técnicos</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {SPECIAL_ARENAS.map(arena => (
                <button
                  key={arena.id}
                  onClick={() => handleOpenArena(arena)}
                  className={`p-3 rounded-xl border text-left transition-all group ${
                    activeArena?.id === arena.id 
                      ? 'bg-slate-800 border-white ring-2 ring-[#f45225]' 
                      : 'bg-slate-900/90 border-slate-800 hover:border-slate-600 hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span 
                      className="p-1.5 rounded-lg text-white" 
                      style={{ backgroundColor: arena.color }}
                    >
                      {getArenaIcon(arena.icon)}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {arena.code}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white group-hover:text-[#f45225] transition-colors truncate">
                    {arena.name}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                    {arena.area}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ─── Booth Grid by Zones ────────────────────────────────────────── */}
          <div className="relative z-10 space-y-6">

            {/* ZONA 1: Nutrição */}
            {(selectedZone === 'todas' || selectedZone === 'nutricao') && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-emerald-900/50 space-y-3">
                <div className="flex items-center justify-between border-b border-emerald-950 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <h5 className="text-sm font-bold text-emerald-400">
                      Alameda Nutrição & Alimentação Animal
                    </h5>
                    <span className="text-[11px] text-slate-400 hidden sm:inline">• Estandes N-01 a N-12</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-300/70">
                    Avenida Central Pet (4,80m de vão)
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                  {boothsList.filter(b => b.zone === 'nutricao').map(booth => {
                    const isVisible = filteredBooths.some(fb => fb.id === booth.id);
                    const colorStyle = getBoothColor(booth);
                    const isMaster = booth.size === '60m²';
                    const isMedium = booth.size === '30m²';

                    return (
                      <div
                        key={booth.id}
                        onClick={() => handleOpenBooth(booth)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer relative group flex flex-col justify-between ${
                          isMaster ? 'col-span-2 row-span-1 border-2' : ''
                        } ${isMedium ? 'col-span-1' : ''} ${
                          isVisible ? colorStyle.bg : 'opacity-20 pointer-events-none'
                        } ${activeBooth?.id === booth.id ? 'ring-2 ring-[#f45225] scale-[1.02]' : ''}`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-mono font-black tracking-tight">
                              {booth.code}
                            </span>
                            <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-md ${colorStyle.badge}`}>
                              {booth.size}
                            </span>
                          </div>

                          <div className="text-[11px] font-bold line-clamp-1 mt-0.5">
                            {booth.status === 'ocupado' ? (
                              <span className="text-white">{booth.expositor}</span>
                            ) : booth.status === 'reservado' ? (
                              <span className="text-amber-800 italic">Reservado</span>
                            ) : (
                              <span className="text-emerald-700 font-mono">R$ {booth.price.toLocaleString('pt-BR')}</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 mt-2 border-t border-black/5 dark:border-white/10 text-[10px]">
                          <span className="flex items-center gap-1 font-semibold">
                            <span className={`w-1.5 h-1.5 rounded-full ${colorStyle.dot}`}></span>
                            {booth.status === 'ocupado' ? 'Confirmado' : booth.status === 'reservado' ? 'Reserva' : 'Disponível'}
                          </span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ZONA 2: Medicina Veterinária & Saúde */}
            {(selectedZone === 'todas' || selectedZone === 'veterinaria') && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-sky-900/50 space-y-3">
                <div className="flex items-center justify-between border-b border-sky-950 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-sky-500"></span>
                    <h5 className="text-sm font-bold text-sky-400">
                      Alameda Medicina Veterinária & Saúde Animal
                    </h5>
                    <span className="text-[11px] text-slate-400 hidden sm:inline">• Estandes V-01 a V-14</span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-300/70">
                    Ao lado da Arena VET 360
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
                  {boothsList.filter(b => b.zone === 'veterinaria').map(booth => {
                    const isVisible = filteredBooths.some(fb => fb.id === booth.id);
                    const colorStyle = getBoothColor(booth);
                    const isMaster = booth.size === '60m²';

                    return (
                      <div
                        key={booth.id}
                        onClick={() => handleOpenBooth(booth)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer relative group flex flex-col justify-between ${
                          isMaster ? 'col-span-2' : ''
                        } ${isVisible ? colorStyle.bg : 'opacity-20 pointer-events-none'} ${
                          activeBooth?.id === booth.id ? 'ring-2 ring-[#f45225] scale-[1.02]' : ''
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-mono font-black tracking-tight">
                              {booth.code}
                            </span>
                            <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-md ${colorStyle.badge}`}>
                              {booth.size}
                            </span>
                          </div>

                          <div className="text-[11px] font-bold line-clamp-1 mt-0.5">
                            {booth.status === 'ocupado' ? (
                              <span className="text-white">{booth.expositor}</span>
                            ) : booth.status === 'reservado' ? (
                              <span className="text-amber-800 italic">Reservado</span>
                            ) : (
                              <span className="text-sky-700 font-mono">R$ {booth.price.toLocaleString('pt-BR')}</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 mt-2 border-t border-black/5 dark:border-white/10 text-[10px]">
                          <span className="flex items-center gap-1 font-semibold">
                            <span className={`w-1.5 h-1.5 rounded-full ${colorStyle.dot}`}></span>
                            {booth.status === 'ocupado' ? 'Confirmado' : booth.status === 'reservado' ? 'Reserva' : 'Disponível'}
                          </span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ZONA 3: Estética & Grooming */}
            {(selectedZone === 'todas' || selectedZone === 'grooming') && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-purple-900/50 space-y-3">
                <div className="flex items-center justify-between border-b border-purple-950 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                    <h5 className="text-sm font-bold text-purple-400">
                      Alameda Estética, Tosa & Grooming
                    </h5>
                    <span className="text-[11px] text-slate-400 hidden sm:inline">• Estandes G-01 a G-10</span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-300/70">
                    Área equipada p/ demonstração ao vivo
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                  {boothsList.filter(b => b.zone === 'grooming').map(booth => {
                    const isVisible = filteredBooths.some(fb => fb.id === booth.id);
                    const colorStyle = getBoothColor(booth);
                    const isMaster = booth.size === '60m²';

                    return (
                      <div
                        key={booth.id}
                        onClick={() => handleOpenBooth(booth)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer relative group flex flex-col justify-between ${
                          isMaster ? 'col-span-2' : ''
                        } ${isVisible ? colorStyle.bg : 'opacity-20 pointer-events-none'} ${
                          activeBooth?.id === booth.id ? 'ring-2 ring-[#f45225] scale-[1.02]' : ''
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-mono font-black tracking-tight">
                              {booth.code}
                            </span>
                            <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-md ${colorStyle.badge}`}>
                              {booth.size}
                            </span>
                          </div>

                          <div className="text-[11px] font-bold line-clamp-1 mt-0.5">
                            {booth.status === 'ocupado' ? (
                              <span className="text-white">{booth.expositor}</span>
                            ) : booth.status === 'reservado' ? (
                              <span className="text-amber-800 italic">Reservado</span>
                            ) : (
                              <span className="text-purple-700 font-mono">R$ {booth.price.toLocaleString('pt-BR')}</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 mt-2 border-t border-black/5 dark:border-white/10 text-[10px]">
                          <span className="flex items-center gap-1 font-semibold">
                            <span className={`w-1.5 h-1.5 rounded-full ${colorStyle.dot}`}></span>
                            {booth.status === 'ocupado' ? 'Confirmado' : booth.status === 'reservado' ? 'Reserva' : 'Disponível'}
                          </span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ZONA 4: Acessórios, Moda & Brinquedos */}
            {(selectedZone === 'todas' || selectedZone === 'acessorios') && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-amber-900/50 space-y-3">
                <div className="flex items-center justify-between border-b border-amber-950 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <h5 className="text-sm font-bold text-amber-400">
                      Alameda Acessórios, Moda & Brinquedos Pet
                    </h5>
                    <span className="text-[11px] text-slate-400 hidden sm:inline">• Estandes A-01 a A-14</span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-300/70">
                    Corredor de Alto Fluxo do Público
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
                  {boothsList.filter(b => b.zone === 'acessorios').map(booth => {
                    const isVisible = filteredBooths.some(fb => fb.id === booth.id);
                    const colorStyle = getBoothColor(booth);
                    const isMaster = booth.size === '60m²';

                    return (
                      <div
                        key={booth.id}
                        onClick={() => handleOpenBooth(booth)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer relative group flex flex-col justify-between ${
                          isMaster ? 'col-span-2' : ''
                        } ${isVisible ? colorStyle.bg : 'opacity-20 pointer-events-none'} ${
                          activeBooth?.id === booth.id ? 'ring-2 ring-[#f45225] scale-[1.02]' : ''
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-mono font-black tracking-tight">
                              {booth.code}
                            </span>
                            <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-md ${colorStyle.badge}`}>
                              {booth.size}
                            </span>
                          </div>

                          <div className="text-[11px] font-bold line-clamp-1 mt-0.5">
                            {booth.status === 'ocupado' ? (
                              <span className="text-white">{booth.expositor}</span>
                            ) : booth.status === 'reservado' ? (
                              <span className="text-amber-800 italic">Reservado</span>
                            ) : (
                              <span className="text-amber-700 font-mono">R$ {booth.price.toLocaleString('pt-BR')}</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 mt-2 border-t border-black/5 dark:border-white/10 text-[10px]">
                          <span className="flex items-center gap-1 font-semibold">
                            <span className={`w-1.5 h-1.5 rounded-full ${colorStyle.dot}`}></span>
                            {booth.status === 'ocupado' ? 'Confirmado' : booth.status === 'reservado' ? 'Reserva' : 'Disponível'}
                          </span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Floor Plan Legend */}
          <div className="relative z-10 mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-semibold text-slate-300">Legenda:</span>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-emerald-500/20 border border-emerald-400"></span>
                <span>Disponível</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-amber-500/30 border border-amber-400"></span>
                <span>Em Reserva</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-slate-900 border border-slate-700"></span>
                <span>Confirmado (Marca)</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-500">
              * Clique em qualquer estande para consultar metragem, tomada NR-10 e reserva.
            </div>
          </div>

        </div>
      ) : (
        /* ─── Detailed List / Table View ─────────────────────────────────── */
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Código</th>
                  <th className="py-3 px-4">Setor / Zona</th>
                  <th className="py-3 px-4">Tipo & Metragem</th>
                  <th className="py-3 px-4">Dimensões</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Expositor Confirmado</th>
                  <th className="py-3 px-4 text-right">Valor Tabela</th>
                  <th className="py-3 px-4 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredBooths.map(booth => (
                  <tr key={booth.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-[#202f6b]">
                      {booth.code}
                    </td>
                    <td className="py-3 px-4 capitalize">
                      {booth.zone}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-semibold text-slate-900">{booth.size}</span>
                      <span className="text-slate-400 block text-[11px]">{booth.type}</span>
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-500">
                      {booth.dimensions}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                        booth.status === 'ocupado'
                          ? 'bg-slate-900 text-emerald-400'
                          : booth.status === 'reservado'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {booth.status === 'ocupado' ? 'Confirmado' : booth.status === 'reservado' ? 'Reservado' : 'Disponível'}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      {booth.expositor || <span className="text-slate-400 font-normal italic">— Livre —</span>}
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-slate-900">
                      R$ {booth.price.toLocaleString('pt-BR')}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => handleOpenBooth(booth)}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#202f6b] hover:text-white font-semibold transition-colors"
                      >
                        {mode === 'admin' ? 'Gerenciar' : 'Detalhes'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ─── Interactive Detail Modal / Drawer for Booth ─────────────────── */}
      {activeBooth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 border border-slate-200 shadow-2xl relative space-y-6">
            
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#202f6b] text-white flex flex-col items-center justify-center font-mono shadow-md">
                <span className="text-xs text-slate-300 font-sans">Estande</span>
                <span className="text-lg font-black">{activeBooth.code}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {activeBooth.zone.toUpperCase()}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                    activeBooth.status === 'ocupado' 
                      ? 'bg-slate-900 text-emerald-400' 
                      : activeBooth.status === 'reservado'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {activeBooth.status === 'ocupado' ? 'Confirmado' : activeBooth.status === 'reservado' ? 'Em Reserva' : 'Livre / Disponível'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#202f6b]">
                  {activeBooth.type}
                </h3>
                <p className="text-xs text-slate-500">
                  {activeBooth.highlight}
                </p>
              </div>
            </div>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
              <div>
                <span className="text-slate-400 font-medium block">Área Útil</span>
                <span className="font-bold text-slate-800 text-sm font-mono">{activeBooth.size}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Dimensões (Frente x Fundo)</span>
                <span className="font-bold text-slate-800 text-sm font-mono">{activeBooth.dimensions}</span>
              </div>
              <div className="col-span-2 pt-2 border-t border-slate-200/60">
                <span className="text-slate-400 font-medium flex items-center gap-1 mb-0.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  Alimentação Elétrica Homologada (NR-10)
                </span>
                <span className="font-mono font-semibold text-slate-700">{activeBooth.powerSpec}</span>
              </div>
            </div>

            {/* Public Mode Content */}
            {mode === 'public' && (
              <div className="space-y-4">
                {activeBooth.status === 'disponivel' ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-emerald-700 font-medium">Investimento Oficial:</span>
                        <div className="text-2xl font-black font-mono text-emerald-950">
                          R$ {activeBooth.price.toLocaleString('pt-BR')}
                        </div>
                      </div>
                      <span className="text-[11px] text-emerald-700 bg-emerald-100 px-2 py-1 rounded-lg font-semibold">
                        Parcelamento em até 4x
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/5522997885784?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20o%20Estande%20${activeBooth.code}%20(${activeBooth.size})%20na%20Feira%20Eu%20Amo%20Pet%202027.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Reservar Este Estande no WhatsApp</span>
                    </a>
                  </div>
                ) : activeBooth.status === 'ocupado' ? (
                  <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
                    <div className="text-xs text-slate-400">Expositor Confirmado:</div>
                    <div className="text-base font-bold text-emerald-400">{activeBooth.expositor}</div>
                    <div className="text-xs text-slate-300">Segmento: {activeBooth.segment}</div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
                    <strong>Estande em Processo de Reserva:</strong> Este espaço está em análise documental para a marca {activeBooth.expositor || 'parceira'}. Caso queira entrar na lista de espera deste ponto, fale com nosso time comercial.
                  </div>
                )}
              </div>
            )}

            {/* Admin Mode Form (Direct Live Edit) */}
            {mode === 'admin' && (
              <form onSubmit={handleSaveAdmin} className="space-y-4 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#202f6b]">
                  <Edit3 className="w-4 h-4 text-[#f45225]" />
                  <span>Gerenciar Informações Comerciais do Estande</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="font-semibold text-slate-600 block mb-1">Status Operacional</label>
                    <select
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-[#f45225]"
                    >
                      <option value="disponivel">Disponível (Livre para Venda)</option>
                      <option value="reservado">Reservado (Em Negociação)</option>
                      <option value="ocupado">Confirmado / Ocupado (Contrato Assinado)</option>
                    </select>
                  </div>

                  {editStatus !== 'disponivel' && (
                    <>
                      <div>
                        <label className="font-semibold text-slate-600 block mb-1">Nome da Marca / Expositor</label>
                        <input
                          type="text"
                          value={editExpositor}
                          onChange={(e) => setEditExpositor(e.target.value)}
                          placeholder="Ex: Premier Pet, Vet Macaé..."
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-[#f45225]"
                        />
                      </div>

                      <div>
                        <label className="font-semibold text-slate-600 block mb-1">Segmento de Atuação</label>
                        <input
                          type="text"
                          value={editSegment}
                          onChange={(e) => setEditSegment(e.target.value)}
                          placeholder="Ex: Rações Naturais, Medicina Felina..."
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#f45225]"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label className="font-semibold text-slate-600 block mb-1">Valor Negociado (R$)</label>
                    <input
                      type="number"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono font-bold focus:ring-2 focus:ring-[#f45225]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50"
                  >
                    Fechar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#202f6b] hover:bg-[#152048] text-white font-bold flex items-center gap-1.5 shadow-sm"
                  >
                    <Save className="w-4 h-4" />
                    <span>Salvar Alterações</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

      {/* ─── Interactive Detail Modal for Special Arena ──────────────────── */}
      {activeArena && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 border border-slate-200 shadow-2xl relative space-y-5">
            
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-3">
              <span 
                className="p-3 rounded-2xl text-white shadow-md"
                style={{ backgroundColor: activeArena.color }}
              >
                {getArenaIcon(activeArena.icon)}
              </span>
              <div>
                <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 uppercase">
                  {activeArena.badge}
                </span>
                <h3 className="text-xl font-bold text-[#202f6b] mt-1">
                  {activeArena.name}
                </h3>
                <span className="text-xs text-slate-500 font-mono">
                  {activeArena.area}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {activeArena.description}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Especificações Técnicas & Normativas:
              </div>
              <p className="text-slate-600 leading-relaxed font-sans">
                {activeArena.specs}
              </p>
            </div>

            {activeArena.id === 'caex' && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                <strong>Atenção Expositores e Tutores:</strong> É obrigatório portar o <em>Termo de Responsabilidade Animal</em> impresso e assinado, além da carteira com vacinas em dia e atestado sanitário de até 15 dias.
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-5 py-2.5 rounded-xl bg-[#202f6b] text-white font-bold text-xs"
              >
                Entendi / Fechar
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

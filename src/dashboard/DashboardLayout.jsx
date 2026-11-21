import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Sidebar from './Sidebar';
import {
  Calendar,
  MapPin,
  RefreshCw,
  Search,
  Bell,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Users,
  Store,
  DollarSign,
  X
} from 'lucide-react';

const SECTION_TITLES = {
  '/dashboard': 'Visão Geral & KPIs',
  '/dashboard/': 'Visão Geral & KPIs',
  '/dashboard/overview': 'Visão Geral & KPIs',
  '/dashboard/comercial': 'Comercial & Patrocínios',
  '/dashboard/commercial': 'Comercial & Patrocínios',
  '/dashboard/prefeitura': 'Prefeitura & Alvarás',
  '/dashboard/institutional': 'Prefeitura & Alvarás',
  '/dashboard/sanidade': 'Sanidade & Biosseguridade',
  '/dashboard/biosafety': 'Sanidade & Biosseguridade',
  '/dashboard/infraestrutura': 'Infraestrutura & Estandes',
  '/dashboard/infrastructure': 'Infraestrutura & Estandes',
  '/dashboard/marketing': 'Marketing & Funil AARRR',
  '/dashboard/programacao': 'Programação & Atrações',
  '/dashboard/program': 'Programação & Atrações',
  '/dashboard/configuracoes': 'Configurações Globais',
  '/dashboard/settings': 'Configurações Globais'
};

const SEARCH_ITEMS = [
  { label: 'Visão Geral & Métricas Executivas', path: '/dashboard/overview', category: 'Painel' },
  { label: 'Cotas de Patrocínio (Máster, Sênior, Júnior)', path: '/dashboard/comercial', category: 'Comercial' },
  { label: 'Leads Quero Expor & Contatos WhatsApp', path: '/dashboard/comercial', category: 'Comercial' },
  { label: 'Prefeitura, Alvarás & Termos de Cessão', path: '/dashboard/prefeitura', category: 'Institucional' },
  { label: 'Sanidade Animal, GTA & Plantão CAEX', path: '/dashboard/sanidade', category: 'Biosseguridade' },
  { label: 'Planta de Estandes & Normas Manfertech', path: '/dashboard/infraestrutura', category: 'Engenharia' },
  { label: 'Funil AARRR & Plano de 6 Semanas', path: '/dashboard/marketing', category: 'Marketing' },
  { label: 'Programação de 3 Dias & Atrações', path: '/dashboard/programacao', category: 'Agenda' },
  { label: 'Configurações Globais & Parâmetros', path: '/dashboard/configuracoes', category: 'Ajustes' }
];

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, resetToDefaults } = useApp();
  const { generalInfo } = data;

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const searchInputRef = useRef(null);
  const notifRef = useRef(null);

  const currentTitle = SECTION_TITLES[location.pathname] || 'Painel Operacional';

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setSearchOpen(false);
        setNotificationsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close notifications dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredSearch = SEARCH_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen overflow-hidden bg-stone-100 text-stone-900 font-sans antialiased">
      
      {/* 1. Independent Scroll Sidebar */}
      <Sidebar />

      {/* 2. Main Content Column */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        
        {/* Topbar Chrome */}
        <header className="h-16 bg-white border-b border-stone-200/90 px-5 lg:px-7 flex items-center justify-between shrink-0 select-none z-20">
          
          {/* Left: Breadcrumbs + Context */}
          <div className="flex items-center gap-3">
            <nav className="flex items-center gap-2 text-xs font-medium text-stone-500">
              <span className="hidden sm:inline text-stone-400">Painel</span>
              <ChevronRight className="w-3.5 h-3.5 text-stone-300 hidden sm:inline" />
              <span className="text-stone-900 font-semibold truncate max-w-[200px] sm:max-w-none">
                {currentTitle}
              </span>
            </nav>

            <div className="h-4 w-px bg-stone-200 hidden md:block"></div>

            {/* Event Date & Location Calm Badges */}
            <div className="hidden xl:flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200 text-[11px] font-medium text-stone-600">
                <Calendar className="w-3.5 h-3.5 text-stone-400" />
                <span>{generalInfo.targetDate}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200 text-[11px] font-medium text-stone-600 truncate max-w-[240px]">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span className="truncate">{generalInfo.venueName}</span>
              </div>
            </div>
          </div>

          {/* Right: Quick Search, Notifications, Reset, Profile */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Quick Search Button */}
            <button
              onClick={() => {
                setSearchOpen(true);
                setTimeout(() => searchInputRef.current?.focus(), 50);
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50/80 hover:bg-stone-100 text-stone-500 text-xs transition-colors group"
              title="Busca Rápida (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-600" />
              <span className="hidden md:inline text-stone-400">Buscar...</span>
              <kbd className="hidden md:inline-flex text-[10px] font-mono bg-white border border-stone-200 px-1.5 py-0.5 rounded text-stone-400 shadow-2xs">
                Ctrl+K
              </kbd>
            </button>

            {/* Notifications Dropdown */}
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => setNotificationsOpen((prev) => !prev)}
                className={`relative p-2 rounded-xl border transition-colors ${
                  notificationsOpen
                    ? 'bg-stone-100 border-stone-300 text-stone-800'
                    : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-600'
                }`}
                title="Notificações Operacionais"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white"></span>
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white border border-stone-200 rounded-2xl shadow-xl py-3 z-50 animate-fade-in text-xs">
                  <div className="px-4 pb-2.5 border-b border-stone-100 flex items-center justify-between">
                    <span className="font-bold text-stone-900 text-xs">Notificações Operacionais</span>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      3 novas
                    </span>
                  </div>

                  <div className="divide-y divide-stone-100 max-h-72 overflow-y-auto">
                    <div className="p-3 hover:bg-stone-50 transition-colors flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-stone-900">Alvará CCZ & Posturas em análise</div>
                        <div className="text-stone-500 text-[11px] mt-0.5">Nova gestão municipal agendou vistoria técnica no Parque da Fundação Rural.</div>
                        <div className="text-[10px] text-stone-400 font-mono mt-1">Hoje, 09:42</div>
                      </div>
                    </div>

                    <div className="p-3 hover:bg-stone-50 transition-colors flex items-start gap-2.5">
                      <Store className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-stone-900">Novo lead "Quero Expor"</div>
                        <div className="text-stone-500 text-[11px] mt-0.5">Distribuidora Pet Norte Fluminense solicitou proposta para Cota Sênior (30m²).</div>
                        <div className="text-[10px] text-stone-400 font-mono mt-1">Hoje, 08:15</div>
                      </div>
                    </div>

                    <div className="p-3 hover:bg-stone-50 transition-colors flex items-start gap-2.5">
                      <Users className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-stone-900">Grade temática Congresso VET 360</div>
                        <div className="text-stone-500 text-[11px] mt-0.5">As 4 trilhas científicas com 20h de certificado foram cadastradas no cronograma.</div>
                        <div className="text-[10px] text-stone-400 font-mono mt-1">Ontem, 17:30</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Restore Original Demo Data */}
            <button
              onClick={resetToDefaults}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-xs font-medium text-stone-600 transition-colors"
              title="Restaurar dados originais de demonstração"
            >
              <RefreshCw className="w-3.5 h-3.5 text-stone-400" />
              <span>Restaurar</span>
            </button>

            <div className="h-4 w-px bg-stone-200 hidden sm:block"></div>

            {/* Profile Avatar & Info */}
            <div className="flex items-center gap-2 pl-1">
              <div className="w-8 h-8 rounded-xl bg-stone-900 text-stone-100 flex items-center justify-center font-bold text-xs shadow-xs border border-stone-800">
                MD
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-bold text-stone-800 leading-tight flex items-center gap-1.5">
                  <span>Maycon Douglas</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
                <div className="text-[10px] text-stone-500 font-medium">
                  MD Mercado Digital
                </div>
              </div>
            </div>

          </div>
        </header>

        {/* Scrollable View Content routed via Outlet */}
        <main className="flex-1 overflow-y-auto p-5 sm:p-6 lg:p-8 bg-stone-100/80 scrollbar-thin">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>

      </div>

      {/* Quick Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4 z-50 animate-fade-in">
          <div className="bg-white border border-stone-200 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="p-3 border-b border-stone-100 flex items-center gap-2">
              <Search className="w-4 h-4 text-stone-400 ml-2" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar seções, cotas, alvarás, normas..."
                className="flex-1 text-sm text-stone-900 placeholder:text-stone-400 outline-none px-2 py-1"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-600 hover:bg-stone-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-2 max-h-72 overflow-y-auto">
              {filteredSearch.length === 0 ? (
                <div className="p-4 text-center text-xs text-stone-400">
                  Nenhum resultado encontrado para "{searchQuery}".
                </div>
              ) : (
                filteredSearch.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      navigate(item.path);
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-50 flex items-center justify-between text-xs transition-colors"
                  >
                    <span className="font-medium text-stone-800">{item.label}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-500">
                      {item.category}
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

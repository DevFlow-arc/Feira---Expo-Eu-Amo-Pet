import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Sidebar from './Sidebar';
import {
  Calendar,
  MapPin,
  Search,
  Bell,
  ChevronRight,
  CheckCircle2,
  Users,
  Store,
  X
} from 'lucide-react';

const SECTION_TITLES = {
  '/': 'Visão Geral & KPIs',
  '/overview': 'Visão Geral & KPIs',
  '/comercial': 'Comercial & Cotas de Patrocínio',
  '/commercial': 'Comercial & Cotas de Patrocínio',
  '/prefeitura': 'Alvarás & Trâmites Municipais',
  '/institutional': 'Alvarás & Trâmites Municipais',
  '/sanidade': 'Sanidade Animal & Biosseguridade CRMV',
  '/biosafety': 'Sanidade Animal & Biosseguridade CRMV',
  '/infraestrutura': 'Infraestrutura & Pavilhão de Estandes',
  '/infrastructure': 'Infraestrutura & Pavilhão de Estandes',
  '/marketing': 'Marketing, Tráfego & Aquisição',
  '/programacao': 'Programação Oficial & Arenas',
  '/program': 'Programação Oficial & Arenas',
  '/configuracoes': 'Configurações Globais do Evento',
  '/settings': 'Configurações Globais do Evento',
  '/dashboard': 'Visão Geral & KPIs',
  '/dashboard/': 'Visão Geral & KPIs',
  '/dashboard/overview': 'Visão Geral & KPIs',
  '/dashboard/comercial': 'Comercial & Cotas de Patrocínio',
  '/dashboard/commercial': 'Comercial & Cotas de Patrocínio',
  '/dashboard/prefeitura': 'Alvarás & Trâmites Municipais',
  '/dashboard/institutional': 'Alvarás & Trâmites Municipais',
  '/dashboard/sanidade': 'Sanidade Animal & Biosseguridade CRMV',
  '/dashboard/biosafety': 'Sanidade Animal & Biosseguridade CRMV',
  '/dashboard/infraestrutura': 'Infraestrutura & Pavilhão de Estandes',
  '/dashboard/infrastructure': 'Infraestrutura & Pavilhão de Estandes',
  '/dashboard/marketing': 'Marketing, Tráfego & Aquisição',
  '/dashboard/programacao': 'Programação Oficial & Arenas',
  '/dashboard/program': 'Programação Oficial & Arenas',
  '/dashboard/configuracoes': 'Configurações Globais do Evento',
  '/dashboard/settings': 'Configurações Globais do Evento'
};

const SEARCH_ITEMS = [
  { label: 'Visão Geral & Métricas Executivas', path: '/overview', category: 'Painel' },
  { label: 'Pipeline de Expositores & Leads', path: '/comercial', category: 'Comercial' },
  { label: 'Tabela de Cotas (Máster, Sênior, Júnior)', path: '/comercial', category: 'Comercial' },
  { label: 'Scripts & Cadência de Vendas', path: '/comercial', category: 'Comercial' },
  { label: 'Alvarás, Posturas & Convênio CCZ', path: '/prefeitura', category: 'Institucional' },
  { label: 'Sanidade Animal, GTA & CAEX', path: '/sanidade', category: 'Biosseguridade' },
  { label: 'Estandes, Planta Baixa & Elétrica NR-10', path: '/infraestrutura', category: 'Engenharia' },
  { label: 'Gerador de Links UTM & Funil AARRR', path: '/marketing', category: 'Marketing' },
  { label: 'Cronograma dos 3 Dias & Atrações', path: '/programacao', category: 'Agenda' },
  { label: 'Configurações Globais do Evento', path: '/configuracoes', category: 'Ajustes' }
];

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = useApp();
  const { generalInfo } = data;

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const searchInputRef = useRef(null);
  const notifRef = useRef(null);

  const currentTitle = SECTION_TITLES[location.pathname] || 'Painel Operacional';

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
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-800 font-sans antialiased">
      
      {/* 1. Sidebar */}
      <Sidebar />

      {/* 2. Main Content Column */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        
        {/* Topbar Chrome */}
        <header className="h-14 bg-white border-b border-slate-200 px-5 lg:px-7 flex items-center justify-between shrink-0 select-none z-20">
          
          {/* Left: Breadcrumbs */}
          <div className="flex items-center gap-3">
            <nav className="flex items-center gap-2 text-xs text-slate-500">
              <span className="hidden sm:inline font-medium text-slate-400">Painel</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 hidden sm:inline" />
              <span className="text-[#202f6b] font-bold text-sm tracking-tight truncate max-w-[200px] sm:max-w-none">
                {currentTitle}
              </span>
            </nav>

            <div className="h-4 w-px bg-slate-200 hidden md:block" />

            <div className="hidden xl:flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1 font-mono text-[11px] bg-slate-100 px-2.5 py-0.5 rounded-md text-slate-700">
                <Calendar className="w-3 h-3 text-slate-400" />
                {generalInfo.targetDate}
              </span>
              <span className="flex items-center gap-1 text-[11px] text-slate-500">
                <MapPin className="w-3 h-3 text-slate-400" />
                {generalInfo.venueName}
              </span>
            </div>
          </div>

          {/* Right: Search, Notifications, User */}
          <div className="flex items-center gap-2.5">
            
            {/* Quick Search */}
            <button
              onClick={() => {
                setSearchOpen(true);
                setTimeout(() => searchInputRef.current?.focus(), 50);
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-500 text-xs transition-colors"
              title="Buscar (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden md:inline">Buscar...</span>
              <kbd className="hidden md:inline-flex text-[10px] font-mono bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-400">
                Ctrl+K
              </kbd>
            </button>

            {/* Notifications Dropdown */}
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => setNotificationsOpen((prev) => !prev)}
                className={`p-2 rounded-xl border transition-colors ${
                  notificationsOpen
                    ? 'bg-[#202f6b] border-[#202f6b] text-white'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                }`}
                title="Notificações Operacionais"
              >
                <Bell className="w-3.5 h-3.5" />
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-88 bg-white border border-slate-200 rounded-2xl shadow-xl py-2.5 z-50 text-xs">
                  <div className="px-3.5 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-bold text-[#202f6b] text-xs">
                      Notificações do Evento
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      3 recentes
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                    <div className="p-3 hover:bg-slate-50 transition-colors">
                      <div className="font-semibold text-slate-800">Alvará Provisório em Análise</div>
                      <div className="text-slate-500 text-[11px] mt-0.5">Processo protocolado na Secretaria de Fazenda / SEDEC.</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-1">Hoje, 09:42</div>
                    </div>

                    <div className="p-3 hover:bg-slate-50 transition-colors">
                      <div className="font-semibold text-slate-800">Novo Lead Comercial</div>
                      <div className="text-slate-500 text-[11px] mt-0.5">Distribuidora Pet solicitou proposta para Cota Sênior (30m²).</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-1">Hoje, 08:15</div>
                    </div>

                    <div className="p-3 hover:bg-slate-50 transition-colors">
                      <div className="font-semibold text-slate-800">Congresso VET 360</div>
                      <div className="text-slate-500 text-[11px] mt-0.5">Grade científica alinhada com o Responsável Técnico.</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-1">Ontem, 17:30</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Pill */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200 text-xs">
              <div className="w-7 h-7 rounded-lg bg-[#202f6b] text-white font-bold text-xs flex items-center justify-center">
                MD
              </div>
              <span className="hidden md:inline font-semibold text-slate-700">Maycon Douglas</span>
            </div>

          </div>
        </header>

        {/* View Content Viewport */}
        <main className="flex-1 overflow-y-auto p-5 sm:p-6 lg:p-7 space-y-6">
          <Outlet />
        </main>
      </div>

      {/* Global Quick Search Modal (Ctrl+K) */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-lg w-full overflow-hidden text-slate-900">
            <div className="p-3.5 border-b border-slate-100 flex items-center gap-3">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Navegar no painel (ex: cotas, alvará, GTA, estandes...)"
                className="w-full bg-transparent text-xs font-semibold text-slate-800 focus:outline-hidden placeholder:text-slate-400"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-50 text-xs">
              {filteredSearch.length > 0 ? (
                filteredSearch.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      navigate(item.path);
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className="text-slate-800 font-medium">{item.label}</span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {item.category}
                    </span>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-slate-400">
                  Nenhum resultado para "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

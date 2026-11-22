import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Sidebar from './Sidebar';
import BrandHeartPaw from '../components/BrandHeartPaw';
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
  X,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const SECTION_TITLES = {
  '/': 'Visão Geral & KPIs',
  '/overview': 'Visão Geral & KPIs',
  '/comercial': 'Comercial & Cotas de Patrocínio',
  '/commercial': 'Comercial & Cotas de Patrocínio',
  '/prefeitura': 'Prefeitura & Alvarás Governamentais',
  '/institutional': 'Prefeitura & Alvarás Governamentais',
  '/sanidade': 'Sanidade Animal & Biosseguridade CRMV',
  '/biosafety': 'Sanidade Animal & Biosseguridade CRMV',
  '/infraestrutura': 'Infraestrutura, Pavilhão & Estandes',
  '/infrastructure': 'Infraestrutura, Pavilhão & Estandes',
  '/marketing': 'Marketing, Tráfego & Funil AARRR',
  '/programacao': 'Programação & Atrações dos 3 Dias',
  '/program': 'Programação & Atrações dos 3 Dias',
  '/configuracoes': 'Configurações Globais & Parâmetros',
  '/settings': 'Configurações Globais & Parâmetros',
  '/dashboard': 'Visão Geral & KPIs',
  '/dashboard/': 'Visão Geral & KPIs',
  '/dashboard/overview': 'Visão Geral & KPIs',
  '/dashboard/comercial': 'Comercial & Cotas de Patrocínio',
  '/dashboard/commercial': 'Comercial & Cotas de Patrocínio',
  '/dashboard/prefeitura': 'Prefeitura & Alvarás Governamentais',
  '/dashboard/institutional': 'Prefeitura & Alvarás Governamentais',
  '/dashboard/sanidade': 'Sanidade Animal & Biosseguridade CRMV',
  '/dashboard/biosafety': 'Sanidade Animal & Biosseguridade CRMV',
  '/dashboard/infraestrutura': 'Infraestrutura, Pavilhão & Estandes',
  '/dashboard/infrastructure': 'Infraestrutura, Pavilhão & Estandes',
  '/dashboard/marketing': 'Marketing, Tráfego & Funil AARRR',
  '/dashboard/programacao': 'Programação & Atrações dos 3 Dias',
  '/dashboard/program': 'Programação & Atrações dos 3 Dias',
  '/dashboard/configuracoes': 'Configurações Globais & Parâmetros',
  '/dashboard/settings': 'Configurações Globais & Parâmetros'
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
    <div className="flex h-screen overflow-hidden bg-[#f8f5ee] text-[#202f6b] font-sans antialiased">
      
      {/* 1. Independent Scroll Sidebar */}
      <Sidebar />

      {/* 2. Main Content Column */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        
        {/* Topbar Chrome with Festival Brand Accents */}
        <header className="h-16 bg-white/95 backdrop-blur-md border-b border-[#e5dfd3] px-5 lg:px-7 flex items-center justify-between shrink-0 select-none z-20 shadow-xs">
          
          {/* Left: Breadcrumbs + Context */}
          <div className="flex items-center gap-3">
            <nav className="flex items-center gap-2 text-xs font-bold text-stone-500">
              <span className="hidden sm:inline text-stone-400 hover:text-[#202f6b] transition-colors">Painel</span>
              <ChevronRight className="w-3.5 h-3.5 text-stone-300 hidden sm:inline" />
              <span className="text-[#202f6b] font-black text-sm tracking-tight truncate max-w-[200px] sm:max-w-none">
                {currentTitle}
              </span>
            </nav>

            <div className="h-4 w-px bg-stone-200 hidden md:block"></div>

            {/* Event Date & Location Calm Badges */}
            <div className="hidden xl:flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffc600]/15 border border-[#ffc600]/30 text-[11px] font-black text-[#946a00]">
                <Calendar className="w-3.5 h-3.5 text-[#b8860b]" />
                <span>{generalInfo.targetDate}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#202f6b]/5 border border-[#202f6b]/15 text-[11px] font-bold text-[#202f6b] truncate max-w-[260px]">
                <MapPin className="w-3.5 h-3.5 text-[#f9418c]" />
                <span className="truncate">{generalInfo.venueName} • {generalInfo.city}</span>
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
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-600 text-xs font-bold transition-all shadow-2xs hover:border-[#f9418c]/40 group"
              title="Busca Rápida (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#f9418c] transition-colors" />
              <span className="hidden md:inline text-stone-500">Buscar...</span>
              <kbd className="hidden md:inline-flex text-[10px] font-mono font-bold bg-[#f8f5ee] border border-stone-300 px-1.5 py-0.5 rounded text-stone-500 shadow-2xs">
                Ctrl+K
              </kbd>
            </button>

            {/* Notifications Dropdown */}
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => setNotificationsOpen((prev) => !prev)}
                className={`relative p-2 rounded-xl border transition-all ${
                  notificationsOpen
                    ? 'bg-[#202f6b] border-[#202f6b] text-white'
                    : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-600 hover:border-[#f9418c]/40'
                }`}
                title="Notificações Operacionais"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#f9418c] ring-2 ring-white animate-pulse"></span>
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white border border-[#e5dfd3] rounded-2xl shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2 text-xs">
                  <div className="px-4 pb-2.5 border-b border-stone-100 flex items-center justify-between">
                    <span className="font-extrabold text-[#202f6b] text-xs uppercase tracking-wider">
                      Notificações Operacionais
                    </span>
                    <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded-full bg-[#f9418c]/15 text-[#f9418c] border border-[#f9418c]/30">
                      3 novas
                    </span>
                  </div>

                  <div className="divide-y divide-stone-100 max-h-72 overflow-y-auto">
                    <div className="p-3.5 hover:bg-stone-50/80 transition-colors flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-stone-900">Alvará CCZ & Posturas em análise</div>
                        <div className="text-stone-500 text-[11px] mt-0.5">Nova gestão municipal agendou vistoria técnica no Parque da Fundação Rural.</div>
                        <div className="text-[10px] text-stone-400 font-mono mt-1">Hoje, 09:42</div>
                      </div>
                    </div>

                    <div className="p-3.5 hover:bg-stone-50/80 transition-colors flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                        <Store className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-stone-900">Novo lead "Quero Expor"</div>
                        <div className="text-stone-500 text-[11px] mt-0.5">Distribuidora Pet Norte Fluminense solicitou proposta para Cota Sênior (30m²).</div>
                        <div className="text-[10px] text-stone-400 font-mono mt-1">Hoje, 08:15</div>
                      </div>
                    </div>

                    <div className="p-3.5 hover:bg-stone-50/80 transition-colors flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-200">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-stone-900">Grade temática Congresso VET 360</div>
                        <div className="text-stone-500 text-[11px] mt-0.5">As 4 trilhas científicas com 20h de certificado foram cadastradas no cronograma.</div>
                        <div className="text-[10px] text-stone-400 font-mono mt-1">Ontem, 17:30</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Pill Badge */}
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-stone-200">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#202f6b] to-[#f9418c] text-white font-black text-xs flex items-center justify-center shadow-xs">
                MD
              </div>
              <div className="text-left hidden md:block leading-tight">
                <div className="text-xs font-black text-[#202f6b]">Maycon Douglas</div>
                <div className="text-[10px] font-bold text-[#f9418c]">Direção Geral</div>
              </div>
            </div>

          </div>
        </header>

        {/* Dynamic Nested View Viewport with Smooth Scrolling */}
        <main className="flex-1 overflow-y-auto p-5 sm:p-7 lg:p-8 space-y-7 scrollbar-thin">
          <Outlet />
        </main>
      </div>

      {/* Global Quick Search Modal (Ctrl+K) */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 max-w-lg w-full overflow-hidden text-stone-900">
            <div className="p-3.5 border-b border-stone-100 flex items-center gap-3">
              <Search className="w-5 h-5 text-[#f9418c] shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Navegar no painel (ex: cotas, alvará, GTA, estandes...)"
                className="w-full bg-transparent text-sm font-bold text-stone-900 focus:outline-none placeholder:text-stone-400"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-stone-50">
              {filteredSearch.length > 0 ? (
                filteredSearch.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      navigate(item.path);
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="p-3 rounded-xl hover:bg-[#f8f5ee] cursor-pointer flex items-center justify-between text-xs font-bold transition-colors group"
                  >
                    <span className="text-stone-800 group-hover:text-[#202f6b]">{item.label}</span>
                    <span className="text-[10px] uppercase font-mono font-black px-2 py-0.5 rounded-full bg-[#202f6b]/10 text-[#202f6b]">
                      {item.category}
                    </span>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-xs text-stone-400">
                  Nenhum processo ou seção encontrado com "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

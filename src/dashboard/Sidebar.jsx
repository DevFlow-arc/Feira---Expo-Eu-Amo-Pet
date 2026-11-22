import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useAuth } from '../auth/AuthContext';
import BrandHeartPaw from '../components/BrandHeartPaw';
import {
  LayoutDashboard,
  Landmark,
  ShieldCheck,
  Building2,
  DollarSign,
  TrendingUp,
  CalendarDays,
  Settings,
  Globe,
  LogOut,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setActiveDashboardTab, data, municipalChecklist } = useApp();
  const { logout, user } = useAuth();
  const safeMunicipal = municipalChecklist || data?.municipalChecklist || [];

  const pendingAlvaras = safeMunicipal.filter(i => i.status !== 'concluido').length;
  const occupiedBooths = data.generalInfo.occupiedBoothsCount;
  const totalBooths = data.generalInfo.totalBoothsCount;

  const menuItems = [
    { 
      id: 'overview', 
      path: '/dashboard/overview', 
      aliases: ['/dashboard', '/dashboard/'],
      label: 'Visão Geral & KPIs', 
      icon: LayoutDashboard, 
      badge: 'Central',
      color: '#f9418c'
    },
    { 
      id: 'commercial', 
      path: '/dashboard/comercial', 
      aliases: ['/dashboard/commercial'],
      label: 'Comercial & Cotas', 
      icon: DollarSign, 
      badge: 'Cotas',
      color: '#ffc600'
    },
    { 
      id: 'institutional', 
      path: '/dashboard/prefeitura', 
      aliases: ['/dashboard/institutional'],
      label: 'Prefeitura & Alvarás', 
      icon: Landmark, 
      badge: pendingAlvaras > 0 ? `${pendingAlvaras} pend.` : 'Ok', 
      badgeColor: pendingAlvaras > 0 ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30',
      color: '#38bdf8'
    },
    { 
      id: 'biosafety', 
      path: '/dashboard/sanidade', 
      aliases: ['/dashboard/biosafety'],
      label: 'Sanidade & GTA', 
      icon: ShieldCheck, 
      badge: 'CRMV',
      color: '#cbe33d'
    },
    { 
      id: 'infrastructure', 
      path: '/dashboard/infraestrutura', 
      aliases: ['/dashboard/infrastructure'],
      label: 'Infraestrutura & Estandes', 
      icon: Building2, 
      badge: `${occupiedBooths}/${totalBooths}`,
      color: '#a78bfa'
    },
    { 
      id: 'marketing', 
      path: '/dashboard/marketing', 
      aliases: [],
      label: 'Marketing & Funil AARRR', 
      icon: TrendingUp, 
      badge: '6 Semanas',
      color: '#f43f5e'
    },
    { 
      id: 'program', 
      path: '/dashboard/programacao', 
      aliases: ['/dashboard/program'],
      label: 'Programação Oficial', 
      icon: CalendarDays, 
      badge: '3 Dias',
      color: '#fb923c'
    },
    { 
      id: 'settings', 
      path: '/dashboard/configuracoes', 
      aliases: ['/dashboard/settings'],
      label: 'Configurações Globais', 
      icon: Settings, 
      badge: 'Ajustes',
      color: '#94a3b8'
    }
  ];

  const isItemActive = (item) => {
    const current = location.pathname;
    if (current === item.path) return true;
    if (item.aliases && item.aliases.includes(current)) return true;
    const normalizedItem = item.path.replace('/dashboard', '');
    const normalizedCurrent = current.replace('/dashboard', '');
    if (normalizedItem && normalizedCurrent && (normalizedItem === normalizedCurrent || (normalizedItem === '/overview' && (normalizedCurrent === '/' || normalizedCurrent === '')))) {
      return true;
    }
    return false;
  };

  return (
    <aside className="w-[264px] min-w-[264px] bg-[#161e47] text-white flex flex-col shrink-0 h-screen border-r border-[#243068] select-none shadow-xl z-30">
      
      {/* Top Sidebar Header with Official Brand Logo */}
      <div className="p-4 border-b border-[#243068] flex items-center justify-between shrink-0 bg-[#12193b]">
        <Link to="/dashboard/overview" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/15 shadow-sm group-hover:scale-105 transition-transform">
            <img
              src="/assets/branding/logo-eu-amo-pet-transparente-oficial.png"
              alt="Logo Feira Eu Amo Pet"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="font-extrabold text-white text-sm tracking-tight leading-tight flex items-center gap-1.5">
              <span>Feira Eu Amo Pet</span>
            </div>
            <div className="text-[10px] text-[#ffc600] font-black uppercase tracking-wider flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9418c] animate-pulse"></span>
              Painel Operacional 2027
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation Links with Brand Accents */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 scrollbar-thin">
        <div className="px-3 pb-2 text-[10px] font-black uppercase tracking-wider text-indigo-300/60 flex items-center justify-between">
          <span>Processos Críticos</span>
          <span className="text-[9px] text-[#ffc600] bg-[#ffc600]/10 px-1.5 py-0.5 rounded font-mono font-bold">Macaé 2027</span>
        </div>

        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isItemActive(item);

          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => {
                if (setActiveDashboardTab) {
                  setActiveDashboardTab(item.id);
                }
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all group relative ${
                active
                  ? 'bg-[#202f6b] text-white shadow-md border-l-4 border-[#f9418c] pl-2.5'
                  : 'text-indigo-200/80 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3 truncate">
                <div 
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    active ? 'bg-[#f9418c] text-white shadow-sm' : 'bg-white/5 text-indigo-300 group-hover:bg-white/10 group-hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{item.label}</span>
              </div>

              {item.badge && (
                <span className={`text-[10px] font-mono tabular-nums px-2 py-0.5 rounded-md font-bold shrink-0 ${
                  active 
                    ? 'bg-[#ffc600] text-[#161e47] shadow-xs' 
                    : item.badgeColor || 'bg-white/10 text-indigo-200 group-hover:bg-white/15'
                }`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Sidebar Footer with Brand Occupancy Bar & Session Card */}
      <div className="p-3.5 border-t border-[#243068] bg-[#12193b] space-y-2.5 shrink-0">
        
        {/* Booth Occupancy Mini Bar with Brand Gradient */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
          <div className="flex items-center justify-between text-xs">
            <span className="text-indigo-200 text-[11px] font-bold">Ocupação do Pavilhão:</span>
            <span className="font-black text-[#ffc600] font-mono tabular-nums text-xs">
              {Math.round((occupiedBooths / totalBooths) * 100)}% ({occupiedBooths}/{totalBooths})
            </span>
          </div>
          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mt-2 p-0.5">
            <div
              className="bg-gradient-to-r from-[#ffc600] via-[#f9418c] to-[#8c43dc] h-full rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${(occupiedBooths / totalBooths) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* User Session Info Card */}
        {user && (
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2.5 min-w-0 pr-1">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#f9418c] to-[#8c43dc] text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
                MD
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">{user.username || 'Maycon Douglas'}</div>
                <div className="text-[10px] text-indigo-300 font-medium truncate">
                  {user.devMode ? 'Comissão Organizadora' : 'Equipe Autorizada'}
                </div>
              </div>
            </div>
            <button
              onClick={() => { logout(); navigate('/login'); }}
              className="p-1.5 rounded-lg text-indigo-300 hover:text-[#f9418c] hover:bg-white/10 transition-colors shrink-0"
              title="Encerrar sessão"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* View Public Landing Page */}
        <a
          href="https://feira-eu-amo-pet.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-gradient-to-r from-[#f9418c]/15 via-[#ffc600]/10 to-[#8c43dc]/15 hover:from-[#f9418c]/25 hover:to-[#8c43dc]/25 text-white text-xs font-bold transition-all border border-[#f9418c]/30 group shadow-sm"
          title="Abrir a Landing Page oficial em nova aba"
        >
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#ffc600]" />
            <span>Ver Landing Page</span>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-indigo-300 group-hover:text-white" />
        </a>
      </div>

    </aside>
  );
}

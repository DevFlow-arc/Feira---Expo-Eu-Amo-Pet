import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useAuth } from '../auth/AuthContext';
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
  ExternalLink
} from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setActiveDashboardTab, data } = useApp();
  const { logout, user } = useAuth();
  const { municipalChecklist } = data;

  const pendingAlvaras = municipalChecklist.filter(i => i.status !== 'concluido').length;
  const occupiedBooths = data.generalInfo.occupiedBoothsCount;
  const totalBooths = data.generalInfo.totalBoothsCount;

  const menuItems = [
    { 
      id: 'overview', 
      path: '/dashboard/overview', 
      aliases: ['/dashboard', '/dashboard/'],
      label: 'Visão Geral & KPIs', 
      icon: LayoutDashboard, 
      badge: 'Central' 
    },
    { 
      id: 'commercial', 
      path: '/dashboard/comercial', 
      aliases: ['/dashboard/commercial'],
      label: 'Comercial & Patrocínios', 
      icon: DollarSign, 
      badge: 'Cotas' 
    },
    { 
      id: 'institutional', 
      path: '/dashboard/prefeitura', 
      aliases: ['/dashboard/institutional'],
      label: 'Prefeitura & Alvarás', 
      icon: Landmark, 
      badge: pendingAlvaras > 0 ? `${pendingAlvaras} pend.` : 'Ok', 
      badgeColor: pendingAlvaras > 0 ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800' 
    },
    { 
      id: 'biosafety', 
      path: '/dashboard/sanidade', 
      aliases: ['/dashboard/biosafety'],
      label: 'Sanidade & Biosseguridade', 
      icon: ShieldCheck, 
      badge: 'CRMV/GTA' 
    },
    { 
      id: 'infrastructure', 
      path: '/dashboard/infraestrutura', 
      aliases: ['/dashboard/infrastructure'],
      label: 'Infraestrutura & Estandes', 
      icon: Building2, 
      badge: `${occupiedBooths}/${totalBooths}` 
    },
    { 
      id: 'marketing', 
      path: '/dashboard/marketing', 
      aliases: [],
      label: 'Marketing & Funil AARRR', 
      icon: TrendingUp, 
      badge: '6 Semanas' 
    },
    { 
      id: 'program', 
      path: '/dashboard/programacao', 
      aliases: ['/dashboard/program'],
      label: 'Programação & Atrações', 
      icon: CalendarDays, 
      badge: '3 Dias' 
    },
    { 
      id: 'settings', 
      path: '/dashboard/configuracoes', 
      aliases: ['/dashboard/settings'],
      label: 'Configurações Globais', 
      icon: Settings, 
      badge: 'Editar' 
    }
  ];

  const isItemActive = (item) => {
    const current = location.pathname;
    if (current === item.path) return true;
    if (item.aliases && item.aliases.includes(current)) return true;
    return false;
  };

  return (
    <aside className="w-[260px] min-w-[260px] bg-stone-950 text-stone-300 flex flex-col shrink-0 h-screen border-r border-stone-800/80 select-none">
      
      {/* Top Sidebar Header */}
      <div className="p-5 border-b border-stone-800/80 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 text-stone-100 flex items-center justify-center font-black text-sm shadow-sm">
            <span className="text-emerald-500 font-mono text-base font-bold">FP</span>
          </div>
          <div>
            <div className="font-sans font-bold text-stone-100 text-sm tracking-tight leading-tight">
              Feira Eu Amo Pet
            </div>
            <div className="text-[11px] text-stone-500 font-medium flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Painel Operacional
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links with Independent Smooth Scrollbar */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1 scrollbar-thin">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-stone-500">
          Processos Críticos
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
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all group ${
                active
                  ? 'bg-stone-800 text-white font-semibold border-l-2 border-emerald-500 pl-2.5 shadow-xs'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
              }`}
            >
              <div className="flex items-center gap-2.5 truncate">
                <Icon className={`w-4 h-4 shrink-0 transition-colors ${active ? 'text-emerald-400' : 'text-stone-400 group-hover:text-stone-200'}`} />
                <span className="truncate">{item.label}</span>
              </div>

              {item.badge && (
                <span className={`text-[10px] font-mono tabular-nums px-2 py-0.5 rounded-md ${
                  active 
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/80' 
                    : item.badgeColor || 'bg-stone-900 text-stone-400 group-hover:bg-stone-800'
                }`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Sidebar Footer with Quick Stats & Session */}
      <div className="p-3.5 border-t border-stone-800/80 bg-stone-950 space-y-2.5 shrink-0">
        
        {/* Booth Occupancy Mini Bar */}
        <div className="p-2.5 rounded-xl bg-stone-900/90 border border-stone-800/80">
          <div className="flex items-center justify-between text-xs">
            <span className="text-stone-400 text-[11px] font-medium">Ocupação Pavilhão:</span>
            <span className="font-bold text-amber-400 font-mono tabular-nums text-xs">
              {Math.round((occupiedBooths / totalBooths) * 100)}%
            </span>
          </div>
          <div className="w-full bg-stone-800 h-1 rounded-full overflow-hidden mt-1.5">
            <div
              className="bg-amber-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${(occupiedBooths / totalBooths) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* User Session Info */}
        {user && (
          <div className="flex items-center justify-between p-2 rounded-xl bg-stone-900 border border-stone-800/80">
            <div className="min-w-0 pr-1">
              <div className="text-xs font-semibold text-stone-200 truncate">{user.username}</div>
              <div className="text-[10px] text-stone-500 font-medium truncate">
                {user.devMode ? 'Modo desenvolvimento' : 'Equipe autorizada'}
              </div>
            </div>
            <button
              onClick={() => { logout(); navigate('/login'); }}
              className="p-1.5 rounded-lg text-stone-400 hover:text-red-400 hover:bg-stone-800 transition-colors shrink-0"
              title="Encerrar sessão"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* View Public Site in New Tab */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-medium transition-all border border-stone-800 group"
          title="Abrir o site público oficial em nova aba"
        >
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ver Site Público</span>
          </div>
          <ExternalLink className="w-3 h-3 text-stone-500 group-hover:text-stone-300" />
        </a>
      </div>

    </aside>
  );
}

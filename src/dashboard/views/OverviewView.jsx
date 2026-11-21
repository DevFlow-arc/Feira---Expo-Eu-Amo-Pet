import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Users,
  Award,
  DollarSign,
  Heart,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  MapPin,
  ArrowRight,
  ExternalLink,
  Landmark,
  ShieldCheck
} from 'lucide-react';

export default function OverviewView() {
  const { data } = useApp();
  const { generalInfo, sponsorshipTiers, municipalChecklist, biosafetyChecklist } = data;

  const totalSponsorshipPotential = sponsorshipTiers.reduce((acc, t) => acc + (t.price * t.availableSlots), 0);
  const totalSponsorshipClosed = sponsorshipTiers.reduce((acc, t) => acc + (t.price * t.filledSlots), 0);
  const pendingMun = municipalChecklist.filter(i => i.status !== 'concluido').length;
  const pendingBio = biosafetyChecklist.filter(i => i.status !== 'concluido').length;

  return (
    <div className="space-y-7 animate-fade-in">
      
      {/* Top Banner Context: Mudança de Prefeitura & Retorno do Projeto */}
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-800 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Nova Fase Desbloqueada • Diálogo Aberto com a Prefeitura
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
            Painel Executivo da Retomada: {generalInfo.eventName}
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">
            Monitoramento estratégico de todas as frentes necessárias para transformar o projeto embrionário do André na maior feira pet do Norte Fluminense, liderada pela <strong>MD Mercado Digital</strong> e <strong>Manfertech</strong>.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs text-stone-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              {generalInfo.venueName} ({generalInfo.city})
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              {generalInfo.targetDate}
            </span>
          </div>
        </div>
      </div>

      {/* 4 Master KPI Cards with tabular-nums */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* KPI 1: Público */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs card-hover">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Público Presencial
            </span>
            <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-stone-900 font-mono tabular-nums mt-2">
            5.000
          </div>
          <div className="text-xs text-stone-500 mt-1 flex items-center justify-between">
            <span>Meta de Visitantes</span>
            <span className="text-emerald-700 font-bold font-mono tabular-nums">100k alcance</span>
          </div>
          <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden mt-3">
            <div className="bg-orange-500 h-full rounded-full w-[36%]"></div>
          </div>
        </div>

        {/* KPI 2: Estandes */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs card-hover">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Ocupação Estandes
            </span>
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-stone-900 font-mono tabular-nums mt-2">
            {generalInfo.occupiedBoothsCount} / {generalInfo.totalBoothsCount}
          </div>
          <div className="text-xs text-stone-500 mt-1 flex items-center justify-between">
            <span>{generalInfo.totalBoothsCount - generalInfo.occupiedBoothsCount} disponíveis</span>
            <span className="text-amber-700 font-bold font-mono tabular-nums">
              {Math.round((generalInfo.occupiedBoothsCount / generalInfo.totalBoothsCount) * 100)}%
            </span>
          </div>
          <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden mt-3">
            <div 
              className="bg-amber-500 h-full rounded-full"
              style={{ width: `${(generalInfo.occupiedBoothsCount / generalInfo.totalBoothsCount) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* KPI 3: Patrocínios */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs card-hover">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Captação Cotas
            </span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-stone-900 font-mono tabular-nums mt-2">
            R$ {totalSponsorshipClosed.toLocaleString('pt-BR')}
          </div>
          <div className="text-xs text-stone-500 mt-1 flex items-center justify-between">
            <span>Meta: R$ {totalSponsorshipPotential.toLocaleString('pt-BR')}</span>
            <span className="text-emerald-700 font-bold font-mono tabular-nums">
              {Math.round((totalSponsorshipClosed / totalSponsorshipPotential) * 100)}%
            </span>
          </div>
          <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden mt-3">
            <div 
              className="bg-emerald-600 h-full rounded-full"
              style={{ width: `${(totalSponsorshipClosed / totalSponsorshipPotential) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* KPI 4: Adoções */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs card-hover">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Adoção Responsável
            </span>
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-rose-500" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-stone-900 font-mono tabular-nums mt-2">
            {generalInfo.targetAdoptions}
          </div>
          <div className="text-xs text-stone-500 mt-1 flex items-center justify-between">
            <span>Vidas acolhidas</span>
            <span className="text-rose-600 font-bold font-mono tabular-nums">CCZ + ONGs</span>
          </div>
          <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden mt-3">
            <div className="bg-rose-500 h-full rounded-full w-[100%]"></div>
          </div>
        </div>

      </div>

      {/* Critical Action Statuses & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Card: Alvarás & Prefeitura */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
                <Landmark className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-900">
                  Prefeitura & Trâmites Governamentais
                </h3>
                <p className="text-[11px] text-stone-500">
                  Alvarás, Posturas, Zoonoses (CCZ) e Guarda Municipal
                </p>
              </div>
            </div>
            <Link
              to="/dashboard/prefeitura"
              className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
            >
              Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed">
            O André esbarrou na burocracia do Código de Posturas da prefeitura passada. Agora, com a transição eleitoral e novo prefeito, as portas foram abertas.
          </p>

          <div className="space-y-2">
            {municipalChecklist.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200/60 text-xs">
                <span className="font-medium text-stone-800 truncate pr-2">{item.title}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono shrink-0 ${
                  item.status === 'concluido' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {item.status === 'concluido' ? 'Concluído' : 'Em Andamento'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card: Biosseguridade & Sanidade Animal */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-900">
                  Sanidade Animal & Biosseguridade
                </h3>
                <p className="text-[11px] text-stone-500">
                  CRMV, Emissão de GTAs, Vacinas e Protocolos Sanitários
                </p>
              </div>
            </div>
            <Link
              to="/dashboard/sanidade"
              className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
            >
              Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed">
            Estrutura regulatória inspirada nos modelos do IMA e regulamentos da FEIPET. Exigência estrita de RT e controle vacinal no CAEX.
          </p>

          <div className="space-y-2">
            {biosafetyChecklist.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200/60 text-xs">
                <span className="font-medium text-stone-800 truncate pr-2">{item.title}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono shrink-0 ${
                  item.status === 'concluido' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {item.status === 'concluido' ? 'Concluído' : 'Em Andamento'}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

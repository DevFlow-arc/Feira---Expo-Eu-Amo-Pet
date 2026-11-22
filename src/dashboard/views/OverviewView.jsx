import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import BrandHeartPaw from '../../components/BrandHeartPaw';
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
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function OverviewView() {
  const { data } = useApp();
  const { generalInfo, sponsorshipTiers, municipalChecklist, biosafetyChecklist } = data;

  const totalSponsorshipPotential = sponsorshipTiers.reduce((acc, t) => acc + (t.price * t.availableSlots), 0);
  const totalSponsorshipClosed = sponsorshipTiers.reduce((acc, t) => acc + (t.price * t.filledSlots), 0);
  const pendingMun = municipalChecklist.filter(i => i.status !== 'concluido').length;
  const pendingBio = biosafetyChecklist.filter(i => i.status !== 'concluido').length;

  return (
    <div className="space-y-7 animate-in fade-in duration-300">
      
      {/* Top Banner Context: Mudança de Prefeitura & Retorno do Projeto com Identidade Visual */}
      <div className="bg-gradient-to-br from-[#202f6b] via-[#1a2559] to-[#2c1a52] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#2d3a7c] relative overflow-hidden">
        
        {/* Subtle Decorative Brand Paw in Background */}
        <div className="absolute -bottom-8 -right-8 w-48 h-48 opacity-10 pointer-events-none select-none rotate-12">
          <BrandHeartPaw className="w-full h-full" color="#ffffff" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#cbe33d] text-[#161e47] text-xs font-black uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#202f6b] animate-ping"></span>
            Nova Fase Desbloqueada • Diálogo Aberto com a Prefeitura
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Painel Executivo da Retomada: <span className="text-[#ffc600]">{generalInfo.eventName}</span>
          </h2>

          <p className="text-sm text-indigo-100/90 leading-relaxed font-medium">
            Monitoramento estratégico de todas as frentes necessárias para transformar o projeto embrionário do André na maior feira pet do Norte Fluminense, liderada pela <strong>MD Mercado Digital</strong> e <strong>Manfertech</strong>.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-indigo-200">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-[#f9418c]" />
              {generalInfo.venueName} ({generalInfo.city})
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-[#ffc600]" />
              {generalInfo.targetDate}
            </span>
          </div>
        </div>
      </div>

      {/* 4 Master KPI Cards with Brand Visual Identity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* KPI 1: Público */}
        <div className="bg-white rounded-3xl p-5 border border-[#e5dfd3] shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#f9418c]" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-stone-500 uppercase tracking-wider">
              Público Presencial
            </span>
            <div className="w-10 h-10 rounded-2xl bg-[#f9418c]/10 text-[#f9418c] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-[#202f6b] font-mono tabular-nums mt-3 tracking-tight">
            5.000
          </div>
          <div className="text-xs text-stone-500 mt-1 flex items-center justify-between font-bold">
            <span>Meta de Visitantes</span>
            <span className="text-[#f9418c] font-black font-mono tabular-nums">100k alcance</span>
          </div>
          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mt-3 p-0.5">
            <div className="bg-[#f9418c] h-full rounded-full w-[36%] transition-all"></div>
          </div>
        </div>

        {/* KPI 2: Estandes */}
        <div className="bg-white rounded-3xl p-5 border border-[#e5dfd3] shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#ffc600]" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-stone-500 uppercase tracking-wider">
              Ocupação Estandes
            </span>
            <div className="w-10 h-10 rounded-2xl bg-[#ffc600]/15 text-[#946a00] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-[#202f6b] font-mono tabular-nums mt-3 tracking-tight">
            {generalInfo.occupiedBoothsCount} <span className="text-stone-400 text-xl font-normal">/ {generalInfo.totalBoothsCount}</span>
          </div>
          <div className="text-xs text-stone-500 mt-1 flex items-center justify-between font-bold">
            <span>{generalInfo.totalBoothsCount - generalInfo.occupiedBoothsCount} disponíveis</span>
            <span className="text-[#b8860b] font-black font-mono tabular-nums">
              {Math.round((generalInfo.occupiedBoothsCount / generalInfo.totalBoothsCount) * 100)}%
            </span>
          </div>
          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mt-3 p-0.5">
            <div 
              className="bg-[#ffc600] h-full rounded-full transition-all"
              style={{ width: `${(generalInfo.occupiedBoothsCount / generalInfo.totalBoothsCount) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* KPI 3: Patrocínios */}
        <div className="bg-white rounded-3xl p-5 border border-[#e5dfd3] shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#8c43dc]" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-stone-500 uppercase tracking-wider">
              Captação Cotas
            </span>
            <div className="w-10 h-10 rounded-2xl bg-[#8c43dc]/10 text-[#8c43dc] flex items-center justify-center font-bold">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-[#202f6b] font-mono tabular-nums mt-3 tracking-tight">
            R$ {totalSponsorshipClosed.toLocaleString('pt-BR')}
          </div>
          <div className="text-xs text-stone-500 mt-1 flex items-center justify-between font-bold">
            <span>Meta: R$ {totalSponsorshipPotential.toLocaleString('pt-BR')}</span>
            <span className="text-[#8c43dc] font-black font-mono tabular-nums">
              {Math.round((totalSponsorshipClosed / totalSponsorshipPotential) * 100)}%
            </span>
          </div>
          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mt-3 p-0.5">
            <div 
              className="bg-[#8c43dc] h-full rounded-full transition-all"
              style={{ width: `${(totalSponsorshipClosed / totalSponsorshipPotential) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* KPI 4: Adoções */}
        <div className="bg-white rounded-3xl p-5 border border-[#e5dfd3] shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#f43f5e]" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-stone-500 uppercase tracking-wider">
              Adoção Responsável
            </span>
            <div className="w-10 h-10 rounded-2xl bg-[#f43f5e]/10 text-[#f43f5e] flex items-center justify-center font-bold">
              <Heart className="w-5 h-5 fill-[#f43f5e]" />
            </div>
          </div>
          <div className="text-3xl font-black text-[#202f6b] font-mono tabular-nums mt-3 tracking-tight">
            {generalInfo.targetAdoptions}
          </div>
          <div className="text-xs text-stone-500 mt-1 flex items-center justify-between font-bold">
            <span>Vidas acolhidas</span>
            <span className="text-[#f43f5e] font-black font-mono tabular-nums">CCZ + ONGs</span>
          </div>
          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mt-3 p-0.5">
            <div className="bg-[#f43f5e] h-full rounded-full w-[100%] transition-all"></div>
          </div>
        </div>

      </div>

      {/* Critical Action Statuses & Alerts with Ergonomic Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Card: Alvarás & Prefeitura */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e5dfd3] shadow-sm hover:shadow-md transition-all space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#202f6b]">
                  Prefeitura & Trâmites Governamentais
                </h3>
                <p className="text-xs font-bold text-stone-400">
                  Alvarás, Posturas, Zoonoses (CCZ) e Guarda Municipal
                </p>
              </div>
            </div>
            <Link
              to="/dashboard/prefeitura"
              className="text-xs font-black text-[#f9418c] hover:text-[#d82a72] transition-colors flex items-center gap-1.5"
            >
              Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed font-medium">
            O André esbarrou na burocracia do Código de Posturas da prefeitura passada. Agora, com a transição eleitoral e novo prefeito, as portas foram abertas.
          </p>

          <div className="space-y-2.5 pt-1">
            {municipalChecklist.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 rounded-2xl bg-[#f8f5ee] border border-stone-200/60 text-xs">
                <span className="font-bold text-stone-800 truncate pr-2">{item.title}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black font-mono shrink-0 ${
                  item.status === 'concluido' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {item.status === 'concluido' ? 'Concluído' : 'Em Andamento'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card: Biosseguridade & Sanidade Animal */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e5dfd3] shadow-sm hover:shadow-md transition-all space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#202f6b]">
                  Sanidade Animal & Biosseguridade
                </h3>
                <p className="text-xs font-bold text-stone-400">
                  CRMV, Emissão de GTAs, Vacinas e Protocolos Sanitários
                </p>
              </div>
            </div>
            <Link
              to="/dashboard/sanidade"
              className="text-xs font-black text-[#8c43dc] hover:text-[#6f2eb8] transition-colors flex items-center gap-1.5"
            >
              Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed font-medium">
            Estrutura regulatória inspirada nos modelos do IMA e regulamentos da FEIPET. Exigência estrita de RT e controle vacinal no CAEX.
          </p>

          <div className="space-y-2.5 pt-1">
            {biosafetyChecklist.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 rounded-2xl bg-[#f8f5ee] border border-stone-200/60 text-xs">
                <span className="font-bold text-stone-800 truncate pr-2">{item.title}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black font-mono shrink-0 ${
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

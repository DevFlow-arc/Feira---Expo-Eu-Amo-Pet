import React from 'react';
import { TrendingUp, Globe2, Home, HeartHandshake } from 'lucide-react';

export default function MarketStats() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white border-y border-pet-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-pet-terracotta bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Oportunidade & Crescimento
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            O Mercado Pet no Brasil e a Força do Norte Fluminense
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Dados oficiais da ABINPET e Euromonitor revelam por que a Feira Eu Amo Pet é a maior vitrine comercial e estratégica para marcas do segmento.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-pet-sand border border-pet-border/80 hover:border-pet-terracotta/40 transition-colors card-hover">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-pet-orange flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-display">
              R$ 76,3 Bi
            </div>
            <h3 className="text-sm font-bold text-slate-800 mt-1">
              Faturamento Nacional
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Crescimento anual superior a 13%, impulsionado pela alimentação premium e serviços especializados de saúde.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-pet-sand border border-pet-border/80 hover:border-pet-terracotta/40 transition-colors card-hover">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <Globe2 className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-display">
              Top 3 Mundial
            </div>
            <h3 className="text-sm font-bold text-slate-800 mt-1">
              Posição Global do Brasil
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              O Brasil representa cerca de 4,95% de todo o mercado mundial de produtos e insumos para animais.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-pet-sand border border-pet-border/80 hover:border-pet-terracotta/40 transition-colors card-hover">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
              <Home className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-display">
              48% dos Lares
            </div>
            <h3 className="text-sm font-bold text-slate-800 mt-1">
              Tutores Apaixonados
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Quase metade das residências brasileiras possuem pets como membros efetivos da família, gerando consumo contínuo.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-pet-sand border border-pet-border/80 hover:border-pet-terracotta/40 transition-colors card-hover">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-display">
              35% a mais
            </div>
            <h3 className="text-sm font-bold text-slate-800 mt-1">
              Conversão de Vendas
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Média de aumento nas vendas diretas e fechamento de contratos para marcas presentes em feiras regionais presenciais.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

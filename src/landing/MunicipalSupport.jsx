import React from 'react';
import { Landmark, ShieldCheck, HeartPulse, Building2, Truck, Award } from 'lucide-react';

export default function MunicipalSupport() {
  return (
    <section className="py-16 md:py-24 bg-pet-sand border-b border-pet-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Header left */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
              Apoio Institucional & Parcerias
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Uma Aliança Histórica com a Cidade de Campos
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Com o apoio da nova gestão municipal e das secretarias de governo, a Feira Eu Amo Pet consolidou a estrutura legal e de infraestrutura necessária para acolher mais de 5.000 pessoas em total segurança.
            </p>

            <div className="pt-2 text-xs text-slate-500 font-medium">
              Parceria Público-Privada com foco em Causa Animal, Turismo e Fomento ao Empreendedorismo Local.
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-2xl bg-white border border-pet-border shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                Centro de Controle de Zoonoses (CCZ)
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Presença confirmada do Castramóvel oficial, palestras preventivas sobre posse responsável e triagem veterinária no recinto.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-pet-border shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                Guarda Municipal & Trânsito
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Operação especial de ordenamento viário e segurança preventiva nos acessos da Av. Presidente Vargas e Parque de Exposições.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-pet-border shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                Secretaria de Desenvolvimento & Turismo
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Inclusão do evento na grade oficial de turismo do município, fomentando a rede hoteleira, gastronômica e o comércio lojista.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-pet-border shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-pet-terracotta flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                Fundação Rural de Campos
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Estrutura de pavilhões amplos, áreas verdes para recreação de cães e estacionamento próprio para centenas de automóveis.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

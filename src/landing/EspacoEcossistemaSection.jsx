import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Maximize2, 
  Store, 
  Award, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function EspacoEcossistemaSection() {
  const { eventInfo, triggerCelebration } = useApp();

  const handleWhatsapp = (tipo) => {
    triggerCelebration();
    const phone = "5522997885784";
    let text = "";
    if (tipo === 'livre') {
      text = "Olá Maycon! Vim pelo site da Feira Eu Amo Pet e gostaria de receber a planta e informações sobre ÁREA LIVRE (a partir de 15m²) para montagem personalizada.";
    } else if (tipo === 'pronto') {
      text = "Olá Maycon! Gostaria de saber detalhes sobre o ESTANDE PRONTO com montagem homologada pela Manfertech (elétrica trifásica, carpete e testeira).";
    } else {
      text = "Olá Maycon! Tenho interesse em conhecer as COTAS DE PATROCÍNIO (Máster, Naming Rights de Arenas e Copa de Groomers).";
    }
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="espacos" className="py-20 md:py-28 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Modeled from petfaires.com.br - Seção 2) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-stone-600" />
            Oportunidades de Participação Comercial
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 mt-4 tracking-tight">
            Escolha seu espaço no ecossistema
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed">
            Formatos comerciais flexíveis planejados para fabricantes nacionais, distribuidores regionais e prestadores de serviços do mercado pet e veterinário.
          </p>
        </div>

        {/* 3 Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Área Livre */}
          <div className="rounded-2xl bg-white border border-stone-200 p-8 shadow-xs hover:border-stone-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold mb-6">
                <Maximize2 className="w-6 h-6 text-stone-700" />
              </div>
              
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                A partir de 15 m²
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                Área Livre
              </h3>
              <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                Chão livre para o projeto cenográfico da sua marca, com a montadora de sua preferência ou equipe própria homologada.
              </p>

              <div className="mt-6 pt-6 border-t border-stone-100 space-y-2.5 text-xs text-stone-700">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Liberdade total de projeto cenográfico e arquitetura</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pontos de energia trifásica Steck 32A com DR</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ideal para grandes marcas de ração, veículos e franquias</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <button
                type="button"
                onClick={() => handleWhatsapp('livre')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quero Área Livre</span>
              </button>
            </div>
          </div>

          {/* Card 2: Estande Pronto (Destaque) */}
          <div className="rounded-2xl bg-stone-900 border-2 border-stone-900 p-8 shadow-xl text-stone-100 flex flex-col justify-between relative scale-[1.02]">
            <div className="absolute -top-3 right-6 bg-emerald-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
              Mais Prático
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-stone-800 text-stone-200 flex items-center justify-center font-bold mb-6">
                <Store className="w-6 h-6 text-emerald-400" />
              </div>
              
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                A partir de 15 m² ou 30 m²
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Estande Pronto
              </h3>
              <p className="text-xs text-stone-300 mt-3 leading-relaxed">
                Estrutura pronta homologada pela Manfertech: paredes modulares, carpete, testeira com seu logotipo, energia e iluminação LED fria. É chegar e vender.
              </p>

              <div className="mt-6 pt-6 border-t border-stone-800 space-y-2.5 text-xs text-stone-300">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Montagem básica 100% pronta sem custo extra</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Testeira padronizada com nome da sua empresa</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Mesa de atendimento, cadeiras e tomada exclusiva</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800">
              <button
                type="button"
                onClick={() => handleWhatsapp('pronto')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-stone-100 text-stone-950 text-xs font-bold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-stone-900" />
                <span>Quero um Estande Pronto</span>
              </button>
            </div>
          </div>

          {/* Card 3: Patrocínio Oficial */}
          <div className="rounded-2xl bg-white border border-stone-200 p-8 shadow-xs hover:border-stone-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold mb-6">
                <Award className="w-6 h-6 text-amber-700" />
              </div>
              
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                Cotas & Naming Rights
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                Patrocínio
              </h3>
              <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                Cotas para o evento geral, Arena VET 360, Batalha de Groomers e Feira de Adoção. Sua marca no centro das atenções em todas as peças de comunicação.
              </p>

              <div className="mt-6 pt-6 border-t border-stone-100 space-y-2.5 text-xs text-stone-700">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Logotipo em destaque em outdoors, pórticos e crachás</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Palestra exclusiva no Congresso VET 360</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Distribuição de brindes e ativações em toda a feira</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <button
                type="button"
                onClick={() => handleWhatsapp('patrocinio')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quero Patrocinar</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

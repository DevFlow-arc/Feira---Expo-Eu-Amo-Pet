import React from 'react';
import { useApp } from '../context/AppContext';
import { Award, Check, MessageCircle } from 'lucide-react';

export default function SponsorshipTiers() {
  const { data, sponsorshipTiers, triggerCelebration } = useApp();

  const tiers = sponsorshipTiers || data?.sponsorshipTiers || [];

  const handleSelectTier = (tier) => {
    triggerCelebration();
    const phone = "5522997885784";
    const price = typeof tier.price === 'number'
      ? tier.price.toLocaleString('pt-BR')
      : tier.price;
    const text = encodeURIComponent(
      `Olá Maycon! Tenho interesse na *${tier.name}* (R$ ${price}) para a Feira Eu Amo Pet. Gostaria de receber a proposta detalhada e reservar nosso espaço.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const popularIdx = 1; // Sênior is highlighted

  return (
    <section id="patrocinio" className="py-20 md:py-28 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-600 bg-stone-200 px-3 py-1 rounded-md border border-stone-300">
            Oportunidades Comerciais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-950 mt-3 tracking-tight">
            Cotas de Patrocínio & Espaços para Expositores
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Garanta a presença da sua marca no maior encontro pet do interior fluminense. Atendimento direto e personalizado com a diretoria comercial.
          </p>
        </div>

        {/* Tier Cards — Pattern from EpicPaws pricing-table-v2.css */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, idx) => {
            const isPopular = idx === popularIdx;
            const price = typeof tier.price === 'number'
              ? `R$ ${tier.price.toLocaleString('pt-BR')}`
              : tier.price;
            const benefits = tier.benefits || [];
            const spotsLeft = (tier.availableSlots || tier.spots) - (tier.filledSlots || 0);

            return (
              <div
                key={tier.id}
                className={`flex flex-col rounded-2xl border transition-all duration-200 ${
                  isPopular
                    ? 'border-stone-900 bg-stone-900 text-stone-50 shadow-lg scale-[1.02]'
                    : 'border-stone-200 bg-white text-stone-900 hover:border-stone-400 hover:shadow-md'
                }`}
              >
                {/* Card Header */}
                <div className={`p-6 rounded-t-2xl border-b ${isPopular ? 'border-stone-700' : 'border-stone-100'}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${isPopular ? 'text-stone-400' : 'text-stone-500'}`}>
                        {tier.badge || tier.id}
                      </span>
                      <h3 className="text-xl font-extrabold tracking-tight mt-0.5">
                        {tier.name}
                      </h3>
                    </div>
                    {isPopular && (
                      <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-emerald-500 text-white whitespace-nowrap">
                        Mais Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mt-4">
                    <div className="text-3xl font-extrabold font-mono">
                      {price}
                    </div>
                    <div className={`text-xs font-medium mt-1 ${isPopular ? 'text-stone-400' : 'text-stone-500'}`}>
                      {spotsLeft > 0
                        ? `${spotsLeft} vaga${spotsLeft !== 1 ? 's' : ''} disponíve${spotsLeft !== 1 ? 'is' : 'l'}`
                        : 'Sob consulta comercial'
                      }
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="p-6 flex-1 space-y-3">
                  <p className={`text-xs leading-relaxed ${isPopular ? 'text-stone-300' : 'text-stone-600'}`}>
                    {tier.description}
                  </p>
                  <div className="space-y-2 pt-2">
                    {benefits.slice(0, 5).map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        <span className={`text-xs ${isPopular ? 'text-stone-300' : 'text-stone-700'}`}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleSelectTier(tier)}
                    className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${
                      isPopular
                        ? 'bg-white text-stone-900 hover:bg-stone-100'
                        : 'bg-stone-900 text-white hover:bg-stone-800'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Solicitar Proposta via WhatsApp
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-xs text-stone-500 mt-10 max-w-xl mx-auto">
          Todos os valores são negociáveis para pacotes combinados e contra-propostas. Entre em contato com a equipe MD Mercado Digital para proposta personalizada.
        </p>
      </div>
    </section>
  );
}

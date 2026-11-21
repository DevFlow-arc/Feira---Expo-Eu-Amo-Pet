import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldAlert, 
  CheckCircle, 
  MapPin, 
  Ticket, 
  Heart,
  Stethoscope,
  Building
} from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1); // Default second open (Regras de Animais)

  const faqs = [
    {
      icon: Ticket,
      question: 'Quem pode participar da Feira Eu Amo Pet e como funciona o ingresso?',
      answer: 'O evento foi planejado para acolher tanto o público geral e famílias apaixonadas por animais quanto os profissionais do mercado pet. O acesso à área de feira, pavilhões de expositores, praça gastronômica e circuito de adoção é 100% GRATUITO mediante credenciamento antecipado no site. As salas de atualização técnica do Congresso VET em Foco possuem credenciamento próprio com certificação de horas complementares.'
    },
    {
      icon: ShieldAlert,
      question: 'Posso levar meu cão ou gato? Quais são as regras sanitárias obrigatórias?',
      answer: 'Sim, o evento é pet-friendly com protocolo de biosseguridade homologado! O acesso de animais ocorre EXCLUSIVAMENTE pelo Portão 2 (Triagem Sanitária CAEX), com funcionamento rigoroso das 12h às 17h. O tutor deve apresentar: 1) Carteira de vacinação com antirrábica e polivalente (V8/V10) atualizadas; 2) Atestado de sanidade assinado por médico veterinário emitido em até 15 dias; 3) Uso contínuo de coleira e guia (focinheira obrigatória para raças de grande porte ou temperamento reativo); 4) Assinatura do Termo de Responsabilidade no portão.'
    },
    {
      icon: Stethoscope,
      question: 'Como funciona o Congresso VET em Foco e a emissão de certificados?',
      answer: 'O Congresso acontece nos 3 dias de feira em auditório climatizado com 4 trilhas de conhecimento: Dermatologia, Cirurgia/Emergência, Gestão de Clínicas e Nutrição. Médicos veterinários com CRMV ativo e acadêmicos recebem certificado oficial de 20 horas complementares emitido digitalmente após o evento com autenticação de presença.'
    },
    {
      icon: Heart,
      question: 'Quais os requisitos para adotar um animal na Feira de Adoção do CCZ?',
      answer: 'Em parceria com o Centro de Controle de Zoonoses (CCZ) de Campos e protetores da região, teremos mais de 150 cães e gatos microchipados, vacinados e castrados. Para adotar, o interessado deve ter mais de 18 anos, apresentar documento oficial com foto, comprovante de residência atualizado, passar por uma breve entrevista de posse responsável e assinar o Termo de Adoção e Guarda Responsável.'
    },
    {
      icon: MapPin,
      question: 'Onde será realizado o evento e há estacionamento no local?',
      answer: 'A feira será realizada no Parque de Exposições da Fundação Rural de Campos dos Goytacazes (Av. Presidente Vargas, s/n - Pq. Pecuária). O local conta com amplo bolsão de estacionamento pavimentado para mais de 800 veículos, esquema especial de orientação de tráfego com apoio da Guarda Municipal e fácil acesso via transporte público.'
    },
    {
      icon: Building,
      question: 'Minha empresa deseja expor ou patrocinar. Como garantir um estande?',
      answer: 'As empresas interessadas podem preencher o formulário na seção "Quero Expor" deste site ou entrar em contato direto com a coordenação comercial da MD Mercado Digital. Os espaços contam com montagem básica inclusa (energia trifásica Steck 32A, disjuntor DR a 1,80m, iluminação LED fria e testeira com logotipo). As cotas são limitadas à capacidade física de 52 estandes do pavilhão.'
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#f5f3ef] border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Modeled from feirasuperpet.com.br/perguntas-frequentes/) */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-stone-600" />
            Central de Dúvidas & Regulamento
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-950 mt-4 tracking-tight">
            Perguntas Frequentes sobre a Feira
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Tire todas as suas dúvidas sobre horários, triagem veterinária de animais, credenciamento gratuito e participação no evento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const Icon = faq.icon;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 bg-white ${
                  isOpen ? 'border-stone-400 shadow-sm' : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 select-none focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      isOpen ? 'bg-stone-900 text-stone-100' : 'bg-stone-100 text-stone-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`p-1 rounded-lg shrink-0 text-stone-400 ${isOpen ? 'text-stone-900' : ''}`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-stone-100 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-11">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-stone-200 text-xs text-stone-600">
          Ainda ficou com alguma dúvida sobre regulamento ou acesso de caravanas?{' '}
          <a
            href="https://wa.me/5522997885784?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20a%20Feira%20Eu%20Amo%20Pet."
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-emerald-800 hover:text-emerald-700 underline underline-offset-4 ml-1"
          >
            Fale com a equipe organizadora no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

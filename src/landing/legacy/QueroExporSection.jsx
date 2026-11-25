import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Download, 
  Send, 
  BadgeCheck, 
  Store,
  Layers,
  Sparkles
} from 'lucide-react';

export default function QueroExporSection() {
  const { eventInfo, showToast, triggerCelebration } = useApp();
  const [formData, setFormData] = useState({
    empresa: '',
    responsavel: '',
    email: '',
    telefone: '',
    segmento: 'Rações e Nutrição',
    tamanhoDesejado: '30m² (Cota Sênior)'
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.empresa || !formData.email || !formData.telefone) {
      showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }
    setEnviado(true);
    triggerCelebration();
    showToast('Solicitação de estande recebida! A equipe comercial entrará em contato em até 24h.');
  };

  const handleWhatsappDirect = () => {
    const phone = "5522997885784";
    const text = encodeURIComponent(
      `Olá Maycon! Gostaria de receber a planta oficial e tabela de valores para expor na Feira Eu Amo Pet com a empresa *${formData.empresa || 'minha empresa'}*.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="quero-expor" className="py-20 md:py-28 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Modeled from feirasuperpet.com.br/quero-expor/) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Store className="w-3.5 h-3.5 text-amber-400" />
            Pavilhão Comercial B2B • Setor Pet
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            A Feira Eu Amo Pet faz sentido para a sua empresa?
          </h2>
          <p className="text-sm sm:text-base text-stone-400 mt-4 leading-relaxed">
            Mais do que números de público, entregamos relevância comercial. Conectamos sua marca diretamente a quem decide, compra e movimenta o mercado pet em todo o interior do Estado do Rio de Janeiro.
          </p>
        </div>

        {/* 3 Value Columns: O Perfil Comprador */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-lg mb-4 border border-amber-500/20">
                85%
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Tomadores de Decisão Direta
              </h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Público qualificado composto por proprietários de clínicas, hospitais veterinários, distribuidores, gestores de pet shops e centros de estética animal com poder de compra imediato.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-700/60 text-[11px] font-medium text-amber-300/90 flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-amber-400" />
              Geração de contratos no local do evento
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-lg mb-4 border border-emerald-500/20">
                52
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Estandes Modulares Padronizados
              </h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Infraestrutura com energia industrial trifásica Steck 32A com terra às 6h, disjuntor DR a 1,80m, iluminação LED fria, carpete de alto tráfego e testeira personalizada com a sua marca.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-700/60 text-[11px] font-medium text-emerald-300/90 flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-emerald-400" />
              Manual do expositor rigorosamente homologado
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-lg mb-4 border border-blue-500/20">
                100k+
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Impacto de Marca Integrado
              </h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Cobertura multicanal através da liderança de mídia MD Mercado Digital: geolocalização no raio de 100km, assessoria de imprensa no Norte Fluminense e sampling estratégico para 35 mil pessoas.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-700/60 text-[11px] font-medium text-blue-300/90 flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-blue-400" />
              Retorno sobre investimento comprovado
            </div>
          </div>

        </div>

        {/* Depoimentos Modelados da Indústria Pet */}
        <div className="p-8 rounded-3xl bg-stone-950 border border-stone-800 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">
              Reconhecimento do Mercado
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
              "O expositor é nosso melhor marketing: confira a visão de quem constrói o setor"
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-stone-900 border border-stone-800">
              <p className="text-xs text-stone-300 italic leading-relaxed">
                "O formato com congresso veterinário integrado garante que o público técnico passe obrigatoriamente pelos estandes. Fechamos pedidos para abastecer clínicas da região por meses."
              </p>
              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="font-bold text-stone-200">Distribuidora Farma Vet</span>
                <span className="text-stone-500 text-[11px]">Nutrição & Medicamentos</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-stone-900 border border-stone-800">
              <p className="text-xs text-stone-300 italic leading-relaxed">
                "A localização no Parque da Fundação Rural em Campos é estratégica: tem estacionamento amplo, segurança e fácil acesso para compradores de Macaé, Itaperuna e São Fidélis."
              </p>
              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="font-bold text-stone-200">Equipamentos Pet & Grooming</span>
                <span className="text-stone-500 text-[11px]">Sopradores & Mesas</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-stone-900 border border-stone-800">
              <p className="text-xs text-stone-300 italic leading-relaxed">
                "A seriedade na fiscalização sanitária e na montagem elétrica passa credibilidade imediata. Não é um evento improvisado, é uma feira com padrão de grandes capitais."
              </p>
              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="font-bold text-stone-200">Rede de Lojas Pet Norte</span>
                <span className="text-stone-500 text-[11px]">Varejo & Serviços</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Interativo: Solicitar Planta e Proposta Comercial */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-stone-800 to-stone-900 border border-stone-700 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/80">
                Reserva de Espaço Comercial
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Receba a Planta do Pavilhão e o Manual do Expositor
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Consulte os estandes disponíveis, mapa de fluxo principal de visitantes e as condições especiais para contratos fechados na fase de pré-lançamento.
              </p>

              <div className="space-y-2 pt-2 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Plantas em PDF com cotas e medidas reais</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Regulamento técnico e manual de montagem</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Parcelamento comercial direto com a promotora</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsappDirect}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  <Send className="w-3.5 h-3.5" />
                  Prefere falar agora no WhatsApp com a equipe?
                </button>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-7 bg-stone-950 p-6 sm:p-8 rounded-2xl border border-stone-800">
              {enviado ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Solicitação Encaminhada!</h4>
                  <p className="text-xs text-stone-400 max-w-sm mx-auto">
                    Enviamos os dados para a coordenação comercial da Manfertech e MD Mercado Digital. Nossa equipe responderá em breve.
                  </p>
                  <button
                    onClick={() => setEnviado(false)}
                    className="text-xs text-stone-400 hover:text-white underline mt-2"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-400 mb-1">
                        Nome da Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Ração Premier ou Clínica Vet"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs placeholder:text-stone-600 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-400 mb-1">
                        Responsável Comercial *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Seu nome"
                        value={formData.responsavel}
                        onChange={(e) => setFormData({ ...formData, responsavel: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs placeholder:text-stone-600 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-400 mb-1">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="comercial@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs placeholder:text-stone-600 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-400 mb-1">
                        WhatsApp / Telefone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(22) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs placeholder:text-stone-600 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-400 mb-1">
                        Segmento de Atuação
                      </label>
                      <select
                        value={formData.segmento}
                        onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="Rações e Nutrição">Rações, Petiscos & Nutrição</option>
                        <option value="Farmácia e Saúde Veterinária">Farmácia, Vacinas & Saúde Vet</option>
                        <option value="Equipamentos e Banho e Tosa">Equipamentos, Banho & Tosa</option>
                        <option value="Acessórios, Brinquedos e Moda">Acessórios, Camas & Coleiras</option>
                        <option value="Serviços, Planos e Educação">Serviços, Planos de Saúde & Cursos</option>
                        <option value="Outros">Outros Segmentos</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-400 mb-1">
                        Formato Desejado de Espaço
                      </label>
                      <select
                        value={formData.tamanhoDesejado}
                        onChange={(e) => setFormData({ ...formData, tamanhoDesejado: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="60m² (Cota Máster)">60m² — Estande Master (Ilha Central)</option>
                        <option value="30m² (Cota Sênior)">30m² — Estande Sênior (Corredor Principal)</option>
                        <option value="15m² (Cota Júnior)">15m² — Estande Modular (Entrada Estratégica)</option>
                        <option value="Apenas Merchandising">Apenas Merchandising / Quero Patrocinar Arena</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shadow-md mt-2"
                  >
                    <span>Solicitar Tabela de Preços e Mapa do Pavilhão</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

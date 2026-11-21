import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  DollarSign,
  Award,
  Sparkles,
  Mail,
  Copy,
  Check,
  Building2,
  FileText,
  Save,
  CheckCircle2,
  Users,
  Store,
  Phone,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';

export default function CommercialView() {
  const { data, sponsorshipTiers, updateSponsorshipTier, showToast } = useApp();
  const tiers = sponsorshipTiers || data.sponsorshipTiers || [];
  const { emailCadence, generalInfo } = data;

  const [activeTab, setActiveTab] = useState('cotas'); // 'cotas' | 'leads' | 'cadencia'
  const [copiedId, setCopiedId] = useState(null);

  // Initial Exhibitor Leads (Modeled from "Quero Expor")
  const [exhibitorLeads, setExhibitorLeads] = useState([
    {
      id: 1,
      empresa: 'Distribuidora Pet Norte Fluminense',
      contato: 'Carlos Eduardo Mendes',
      telefone: '(22) 99881-4321',
      email: 'carlos@petnorteflu.com.br',
      segmento: 'Rações Super Premium & Petiscos',
      tamanho: '30m² (Cota Sênior)',
      status: 'Proposta Enviada',
      data: '20/11/2026',
      valorEstimado: 'R$ 12.000'
    },
    {
      id: 2,
      empresa: 'Clínica & Hospital Vet Campos',
      contato: 'Dra. Fernanda Lacerda',
      telefone: '(22) 99723-8811',
      email: 'contato@vetcampos.med.br',
      segmento: 'Medicina Veterinária & Diagnóstico',
      tamanho: '15m² (Cota Júnior)',
      status: 'Contrato Assinado',
      data: '19/11/2026',
      valorEstimado: 'R$ 4.500'
    },
    {
      id: 3,
      empresa: 'Equipamentos Grooming & Banho',
      contato: 'Roberto Alvarenga',
      telefone: '(21) 98711-5544',
      email: 'roberto@groomingbrasil.com.br',
      segmento: 'Máquinas de Tosa, Sopradores e Banheiras',
      tamanho: '60m² (Cota Máster)',
      status: 'Em Negociação',
      data: '20/11/2026',
      valorEstimado: 'R$ 25.000'
    },
    {
      id: 4,
      empresa: 'Nutrição Natural Petz Gourmet',
      contato: 'Aline Peçanha',
      telefone: '(22) 99233-1090',
      email: 'comercial@petzgourmet.com.br',
      segmento: 'Alimentação Natural & Petiscos Desidratados',
      tamanho: '15m² (Cota Júnior)',
      status: 'Novo Lead',
      data: '20/11/2026',
      valorEstimado: 'R$ 4.500'
    }
  ]);

  const handlePriceChange = (id, newPrice) => {
    updateSponsorshipTier(id, { price: Number(newPrice) });
  };

  const handleSlotsChange = (id, field, val) => {
    updateSponsorshipTier(id, { [field]: Number(val) });
  };

  const copyEmailContent = (email) => {
    const fullText = `Assunto: ${email.subject}\n\n${email.content}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(email.id);
    showToast(`E-mail "${email.tag}" copiado para a área de transferência!`);
    setTimeout(() => setCopiedId(null), 3000);
  };

  const handleWhatsappLead = (lead) => {
    const cleanPhone = lead.telefone.replace(/\D/g, '');
    const text = encodeURIComponent(
      `Olá ${lead.contato}! Sou Maycon Douglas, da organização da Feira Eu Amo Pet. Recebemos sua solicitação de estande de ${lead.tamanho} para a ${lead.empresa} e preparei nossa planta oficial com as condições especiais.`
    );
    window.open(`https://wa.me/55${cleanPhone}?text=${text}`, '_blank');
  };

  const updateLeadStatus = (id, newStatus) => {
    setExhibitorLeads(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l));
    showToast('Status do expositor atualizado!');
  };

  const totalPotencial = tiers.reduce((acc, t) => acc + (t.price * (t.availableSlots || t.spots || 0)), 0);
  const totalArrecadado = tiers.reduce((acc, t) => acc + (t.price * (t.filledSlots || 0)), 0);

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Captação de Expositores & Patrocínios
          </span>
          <h2 className="font-serif text-2xl lg:text-3xl font-extrabold text-stone-900 mt-2 tracking-tight">
            Gestão Comercial, Cotas & Leads "Quero Expor"
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Valores de patrocínio 100% editáveis. Alterações refletem em tempo real na Landing Page e na calculadora de retorno dos expositores.
          </p>
        </div>

        {/* Quick Metrics Badge */}
        <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs flex items-center gap-5 text-xs">
          <div>
            <div className="text-[11px] font-semibold text-stone-500">Meta Arrecadação:</div>
            <div className="text-sm font-extrabold text-stone-900 font-mono">
              R$ {totalPotencial.toLocaleString('pt-BR')}
            </div>
          </div>
          <div className="h-8 w-px bg-stone-200"></div>
          <div>
            <div className="text-[11px] font-semibold text-stone-500">Confirmado:</div>
            <div className="text-sm font-extrabold text-emerald-700 font-mono">
              R$ {totalArrecadado.toLocaleString('pt-BR')}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs de Navegação Comercial */}
      <div className="flex border-b border-stone-200 gap-2">
        <button
          onClick={() => setActiveTab('cotas')}
          className={`pb-3 px-4 text-xs font-bold border-b-2 transition-all ${
            activeTab === 'cotas'
              ? 'border-stone-900 text-stone-900'
              : 'border-transparent text-stone-500 hover:text-stone-800'
          }`}
        >
          Tabela de Cotas & Preços
        </button>
        <button
          onClick={() => setActiveTab('leads')}
          className={`pb-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'leads'
              ? 'border-stone-900 text-stone-900'
              : 'border-transparent text-stone-500 hover:text-stone-800'
          }`}
        >
          <span>Leads "Quero Expor"</span>
          <span className="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
            {exhibitorLeads.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab('cadencia')}
          className={`pb-3 px-4 text-xs font-bold border-b-2 transition-all ${
            activeTab === 'cadencia'
              ? 'border-stone-900 text-stone-900'
              : 'border-transparent text-stone-500 hover:text-stone-800'
          }`}
        >
          Modelos de Abordagem & E-mail
        </button>
      </div>

      {/* CONTEÚDO 1: Cotas e Preços */}
      {activeTab === 'cotas' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    {tier.badge || tier.id}
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-500">
                    {tier.filledSlots || 0} / {tier.availableSlots || tier.spots || 0} vendidas
                  </span>
                </div>

                <h3 className="text-base font-bold text-stone-900">
                  {tier.name}
                </h3>

                <div className="mt-4 p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <label className="block text-[11px] font-bold text-stone-700">
                    Valor Comercial da Cota (R$):
                  </label>
                  <input
                    type="number"
                    value={tier.price}
                    onChange={(e) => handlePriceChange(tier.id, e.target.value)}
                    className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-sm font-bold text-stone-900 font-mono"
                  />
                  <span className="text-[10px] text-stone-500 block">
                    Atualiza automaticamente a Landing Page.
                  </span>
                </div>

                <div className="mt-4 space-y-1.5 text-xs text-stone-600">
                  <div className="text-[11px] font-bold text-stone-700 uppercase tracking-wider">
                    Contrapartidas Inclusas:
                  </div>
                  {(tier.benefits || []).slice(0, 4).map((b, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="text-[11px] text-stone-600 leading-tight">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500">Slots Disponíveis:</span>
                <input
                  type="number"
                  value={tier.availableSlots || tier.spots || 0}
                  onChange={(e) => handleSlotsChange(tier.id, 'availableSlots', e.target.value)}
                  className="w-16 px-2 py-1 border border-stone-300 rounded text-center text-xs font-bold"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CONTEÚDO 2: Pipeline de Leads "Quero Expor" */}
      {activeTab === 'leads' && (
        <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-50/60">
            <div>
              <h3 className="text-sm font-bold text-stone-900">
                Interessados em Estandes e Parcerias B2B
              </h3>
              <p className="text-xs text-stone-500">
                Solicitações recebidas através do formulário "Quero Expor" e contatos da equipe comercial
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                Taxa de Conversão: 42%
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-stone-700">
              <thead className="bg-stone-100 text-stone-600 font-bold uppercase tracking-wider border-b border-stone-200">
                <tr>
                  <th className="px-4 py-3">Empresa / Marca</th>
                  <th className="px-4 py-3">Responsável</th>
                  <th className="px-4 py-3">Segmento</th>
                  <th className="px-4 py-3">Espaço Pretendido</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Ações Rápidas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {exhibitorLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-stone-50/80 transition-colors">
                    <td className="px-4 py-3.5">
                      <div className="font-bold text-stone-900">{lead.empresa}</div>
                      <div className="text-[11px] text-stone-400">{lead.email}</div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div>{lead.contato}</div>
                      <div className="text-[11px] text-stone-500 font-mono">{lead.telefone}</div>
                    </td>
                    <td className="px-4 py-3.5 text-stone-600">
                      {lead.segmento}
                    </td>
                    <td className="px-4 py-3.5 font-medium text-stone-800">
                      <div>{lead.tamanho}</div>
                      <div className="text-[10px] text-emerald-700 font-bold">{lead.valorEstimado}</div>
                    </td>
                    <td className="px-4 py-3.5">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                        className={`text-[11px] font-bold px-2 py-1 rounded-md border focus:outline-hidden ${
                          lead.status === 'Contrato Assinado'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : lead.status === 'Proposta Enviada'
                            ? 'bg-blue-50 text-blue-800 border-blue-200'
                            : lead.status === 'Em Negociação'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : 'bg-stone-100 text-stone-700 border-stone-300'
                        }`}
                      >
                        <option value="Novo Lead">Novo Lead</option>
                        <option value="Proposta Enviada">Proposta Enviada</option>
                        <option value="Em Negociação">Em Negociação</option>
                        <option value="Contrato Assinado">Contrato Assinado</option>
                        <option value="Declinado">Declinado</option>
                      </select>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <button
                        onClick={() => handleWhatsappLead(lead)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-all shadow-2xs"
                        title="Abrir WhatsApp com proposta"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chamar</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CONTEÚDO 3: Cadência de E-mails / WhatsApp */}
      {activeTab === 'cadencia' && (
        <div className="space-y-4">
          <div className="p-4 bg-stone-100 rounded-xl border border-stone-200 text-xs text-stone-700">
            <strong>Cadência Estratégica MD Mercado Digital:</strong> Modelos padronizados com gatilhos de prova social, escassez de estandes e benefícios fiscais e de branding para a Manfertech.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(emailCadence || []).map((email) => (
              <div
                key={email.id}
                className="p-5 bg-white rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                      {email.day} • {email.tag}
                    </span>
                    <button
                      onClick={() => copyEmailContent(email)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-stone-700 hover:text-stone-900 border border-stone-200 px-2.5 py-1 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors"
                    >
                      {copiedId === email.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h4 className="text-xs font-bold text-stone-900">
                    {email.subject}
                  </h4>

                  <div className="mt-2 p-3 bg-stone-50 rounded-lg border border-stone-200/80 text-xs text-stone-600 whitespace-pre-line leading-relaxed max-h-36 overflow-y-auto font-sans">
                    {email.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Rodapé Jurídico & Operacional */}
      <div className="p-5 bg-white rounded-2xl border border-stone-200 shadow-xs flex items-center justify-between text-xs text-stone-600">
        <div className="flex items-center gap-3">
          <Building2 className="w-5 h-5 text-stone-500" />
          <div>
            <span className="font-bold text-stone-900">Promotora Responsável: Manfertech Ltda</span>
            <span className="block text-[11px] text-stone-500">CNPJ 05.931.820/0001-10 • Gestão e Marketing: MD Mercado Digital</span>
          </div>
        </div>
        <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
          CNAEs 82.30-0-01 e 77.39-0-03 Homologados
        </span>
      </div>

    </div>
  );
}

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
    if (showToast) showToast(`E-mail "${email.tag}" copiado para a área de transferência!`);
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
    if (showToast) showToast('Status do expositor atualizado!');
  };

  const totalPotencial = tiers.reduce((acc, t) => acc + (t.price * (t.availableSlots || t.spots || 0)), 0);
  const totalArrecadado = tiers.reduce((acc, t) => acc + (t.price * (t.filledSlots || 0)), 0);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-[#161e47] bg-[#cbe33d] px-3.5 py-1 rounded-full shadow-xs">
            Captação de Expositores & Patrocínios
          </span>
          <h2 className="text-2xl lg:text-3xl font-black text-[#202f6b] mt-2.5 tracking-tight">
            Gestão Comercial, Cotas & Leads "Quero Expor"
          </h2>
          <p className="text-xs font-medium text-stone-500 mt-1">
            Valores de patrocínio 100% editáveis. Alterações refletem em tempo real no E-book e na Landing Page.
          </p>
        </div>

        {/* Quick Metrics Badge */}
        <div className="p-3.5 rounded-2xl bg-white border border-[#e5dfd3] shadow-sm flex items-center gap-5 text-xs">
          <div>
            <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Meta Total:</div>
            <div className="text-sm font-black text-[#202f6b] font-mono">
              R$ {totalPotencial.toLocaleString('pt-BR')}
            </div>
          </div>
          <div className="h-8 w-px bg-stone-200"></div>
          <div>
            <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Confirmado:</div>
            <div className="text-sm font-black text-emerald-700 font-mono">
              R$ {totalArrecadado.toLocaleString('pt-BR')}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs de Navegação Comercial */}
      <div className="flex border-b border-[#e5dfd3] gap-2">
        <button
          onClick={() => setActiveTab('cotas')}
          className={`pb-3 px-5 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${
            activeTab === 'cotas'
              ? 'border-[#f9418c] text-[#f9418c]'
              : 'border-transparent text-stone-500 hover:text-[#202f6b]'
          }`}
        >
          Tabela de Cotas & Preços
        </button>
        <button
          onClick={() => setActiveTab('leads')}
          className={`pb-3 px-5 text-xs font-black uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'leads'
              ? 'border-[#f9418c] text-[#f9418c]'
              : 'border-transparent text-stone-500 hover:text-[#202f6b]'
          }`}
        >
          <span>Leads "Quero Expor"</span>
          <span className="px-2 py-0.5 rounded-full bg-[#ffc600] text-[#161e47] text-[10px] font-black font-mono">
            {exhibitorLeads.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab('cadencia')}
          className={`pb-3 px-5 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${
            activeTab === 'cadencia'
              ? 'border-[#f9418c] text-[#f9418c]'
              : 'border-transparent text-stone-500 hover:text-[#202f6b]'
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
              className="bg-white rounded-3xl border border-[#e5dfd3] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#202f6b] to-[#f9418c]" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-stone-400">
                    {tier.badge || tier.id}
                  </span>
                  <span className="text-xs font-mono font-black text-[#8c43dc] bg-[#8c43dc]/10 px-2.5 py-0.5 rounded-full">
                    {tier.filledSlots || 0} de {tier.availableSlots || tier.spots || 0} preenchidas
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#202f6b] tracking-tight">
                  {tier.name}
                </h3>
                <p className="text-xs text-stone-500 mt-1 mb-5 font-medium leading-relaxed">
                  {tier.description}
                </p>

                {/* Preço Editável */}
                <div className="p-3.5 rounded-2xl bg-[#f8f5ee] border border-stone-200/80 mb-5">
                  <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">
                    Valor da Cota (R$)
                  </label>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-black text-[#202f6b]">R$</span>
                    <input
                      type="number"
                      value={tier.price}
                      onChange={(e) => handlePriceChange(tier.id, e.target.value)}
                      className="w-full bg-white px-3 py-1.5 rounded-xl border border-stone-300 font-mono font-black text-sm text-[#202f6b] focus:outline-none focus:ring-2 focus:ring-[#f9418c]"
                    />
                  </div>
                </div>

                {/* Vagas Editáveis */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">
                      Vagas Totais
                    </label>
                    <input
                      type="number"
                      value={tier.availableSlots || tier.spots || 0}
                      onChange={(e) => handleSlotsChange(tier.id, 'availableSlots', e.target.value)}
                      className="w-full bg-white px-3 py-1.5 rounded-xl border border-stone-300 font-mono font-bold text-xs text-[#202f6b] focus:outline-none focus:ring-2 focus:ring-[#f9418c]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">
                      Contratos Fechados
                    </label>
                    <input
                      type="number"
                      value={tier.filledSlots || 0}
                      onChange={(e) => handleSlotsChange(tier.id, 'filledSlots', e.target.value)}
                      className="w-full bg-white px-3 py-1.5 rounded-xl border border-stone-300 font-mono font-bold text-xs text-emerald-700 focus:outline-none focus:ring-2 focus:ring-[#f9418c]"
                    />
                  </div>
                </div>

                {/* Benefícios */}
                <div className="space-y-2 border-t border-stone-100 pt-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block mb-2">
                    Entregáveis Oficiais:
                  </span>
                  {tier.perks && tier.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-600 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#f9418c] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CONTEÚDO 2: Leads Quero Expor */}
      {activeTab === 'leads' && (
        <div className="bg-white rounded-3xl border border-[#e5dfd3] shadow-sm overflow-hidden">
          <div className="p-6 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-black text-[#202f6b]">
                Empresas & Expositores Interessados
              </h3>
              <p className="text-xs text-stone-500 font-medium mt-0.5">
                Contatos recebidos via Landing Page e formulário "Quero Expor".
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-stone-500 bg-[#f8f5ee] px-3 py-1 rounded-full">
              Total: {exhibitorLeads.length} contatos
            </span>
          </div>

          <div className="divide-y divide-stone-100 overflow-x-auto">
            {exhibitorLeads.map((lead) => (
              <div key={lead.id} className="p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-[#f8f5ee]/50 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-sm text-[#202f6b]">{lead.empresa}</span>
                    <span className="text-[10px] font-bold text-stone-400">• {lead.segmento}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 font-medium">
                    <span>Contato: <strong>{lead.contato}</strong></span>
                    <span>•</span>
                    <span>{lead.telefone}</span>
                    <span>•</span>
                    <span>{lead.tamanho}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <select
                    value={lead.status}
                    onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                    className="text-xs font-bold px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#f9418c]"
                  >
                    <option value="Novo Lead">Novo Lead</option>
                    <option value="Proposta Enviada">Proposta Enviada</option>
                    <option value="Em Negociação">Em Negociação</option>
                    <option value="Contrato Assinado">Contrato Assinado</option>
                  </select>

                  <button
                    onClick={() => handleWhatsappLead(lead)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CONTEÚDO 3: Cadência de E-mails */}
      {activeTab === 'cadencia' && (
        <div className="space-y-5">
          {emailCadence && emailCadence.map((cad) => (
            <div key={cad.id} className="bg-white rounded-3xl border border-[#e5dfd3] p-6 shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-[#8c43dc] bg-[#8c43dc]/10 px-3 py-1 rounded-full uppercase">
                    {cad.tag}
                  </span>
                  <span className="text-xs font-bold text-stone-400">• Disparo {cad.day}</span>
                </div>
                <button
                  onClick={() => copyEmailContent(cad)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#202f6b] hover:bg-[#151c44] text-white text-xs font-bold transition-all shadow-xs"
                >
                  {copiedId === cad.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === cad.id ? 'Copiado!' : 'Copiar Texto'}</span>
                </button>
              </div>

              <div>
                <div className="text-xs font-black text-stone-400 uppercase tracking-wider mb-1">Assunto:</div>
                <div className="text-sm font-bold text-[#202f6b]">{cad.subject}</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8f5ee] border border-stone-200/80 text-xs text-stone-700 font-mono whitespace-pre-wrap leading-relaxed">
                {cad.content}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  DollarSign,
  Award,
  Plus,
  Trash2,
  Download,
  Copy,
  Check,
  Phone,
  MessageCircle,
  Mail,
  Filter,
  CheckCircle2,
  X
} from 'lucide-react';

export default function CommercialView() {
  const {
    data,
    sponsorshipTiers,
    updateSponsorshipTier,
    leads,
    addLead,
    updateLead,
    deleteLead,
    exportLeadsCSV,
    showToast
  } = useApp();

  const tiers = sponsorshipTiers || data.sponsorshipTiers || [];
  const { emailCadence } = data;

  const [activeTab, setActiveTab] = useState('leads'); // 'leads' | 'cotas' | 'cadencia'
  const [statusFilter, setStatusFilter] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form for new lead
  const [newLeadForm, setNewLeadForm] = useState({
    empresa: '',
    contato: '',
    telefone: '',
    email: '',
    segmento: '',
    cota: 'Cota Júnior (15m²)',
    valor: 4500,
    status: 'Novo Lead'
  });

  const totalPotencial = tiers.reduce((acc, t) => acc + (t.price * (t.availableSlots || t.spots || 0)), 0);
  const totalArrecadado = tiers.reduce((acc, t) => acc + (t.price * (t.filledSlots || 0)), 0);

  const filteredLeads = leads.filter(l => {
    if (statusFilter === 'all') return true;
    return l.status === statusFilter;
  });

  const handleCreateLead = (e) => {
    e.preventDefault();
    if (!newLeadForm.empresa || !newLeadForm.contato) return;
    addLead(newLeadForm);
    setNewLeadForm({
      empresa: '',
      contato: '',
      telefone: '',
      email: '',
      segmento: '',
      cota: 'Cota Júnior (15m²)',
      valor: 4500,
      status: 'Novo Lead'
    });
    setShowAddModal(false);
  };

  const handleWhatsapp = (lead) => {
    const cleanPhone = lead.telefone.replace(/\D/g, '');
    const text = encodeURIComponent(
      `Olá ${lead.contato}! Aqui é da organização da Feira Eu Amo Pet. Estamos formalizando as reservas para ${lead.cota} da ${lead.empresa}. Podemos enviar o contrato e o mapa do pavilhão?`
    );
    window.open(`https://wa.me/55${cleanPhone}?text=${text}`, '_blank');
  };

  const copyEmail = (email) => {
    const text = `Assunto: ${email.subject}\n\n${email.content}`;
    navigator.clipboard.writeText(text);
    setCopiedId(email.id);
    showToast('Modelo de e-mail copiado.');
    setTimeout(() => setCopiedId(null), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <h1 className="text-xl font-bold text-[#202f6b] tracking-tight">
            Gestão Comercial & Patrocínios
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Pipeline de expositores, cotas de patrocínio e propostas comerciais.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={exportLeadsCSV}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Exportar CSV
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#202f6b] hover:bg-[#182452] text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-[#ffc600]" />
            Novo Expositor
          </button>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex border-b border-slate-200 gap-2">
        <button
          onClick={() => setActiveTab('leads')}
          className={`pb-3 px-3 text-xs font-semibold transition-all border-b-2 flex items-center gap-2 ${
            activeTab === 'leads'
              ? 'border-[#f9418c] text-[#202f6b]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Pipeline de Expositores</span>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {leads.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('cotas')}
          className={`pb-3 px-3 text-xs font-semibold transition-all border-b-2 flex items-center gap-2 ${
            activeTab === 'cotas'
              ? 'border-[#f9418c] text-[#202f6b]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Tabela de Cotas & Valores</span>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            R$ {totalArrecadado.toLocaleString('pt-BR')}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('cadencia')}
          className={`pb-3 px-3 text-xs font-semibold transition-all border-b-2 flex items-center gap-2 ${
            activeTab === 'cadencia'
              ? 'border-[#f9418c] text-[#202f6b]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Scripts & Cadência de Vendas</span>
        </button>
      </div>

      {/* TAB 1: PIPELINE DE LEADS */}
      {activeTab === 'leads' && (
        <div className="space-y-4">
          
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-medium">
              <span className="text-slate-400 mr-1 text-[11px] font-semibold uppercase">Status:</span>
              {[
                { id: 'all', label: 'Todos' },
                { id: 'Novo Lead', label: 'Novos' },
                { id: 'Em Negociação', label: 'Em Negociação' },
                { id: 'Proposta Enviada', label: 'Proposta Enviada' },
                { id: 'Contrato Assinado', label: 'Fechados' }
              ].map(st => (
                <button
                  key={st.id}
                  onClick={() => setStatusFilter(st.id)}
                  className={`px-3 py-1 rounded-xl text-xs transition-colors ${
                    statusFilter === st.id
                      ? 'bg-[#202f6b] text-white font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>

            <span className="text-xs text-slate-400 font-mono">
              Mostrando {filteredLeads.length} de {leads.length} expositores
            </span>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3.5 pl-5">Empresa / Contato</th>
                    <th className="p-3.5">Segmento</th>
                    <th className="p-3.5">Cota & Valor</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5">Data</th>
                    <th className="p-3.5 pr-5 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredLeads.map(lead => (
                    <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3.5 pl-5">
                        <div className="font-bold text-[#202f6b]">{lead.empresa}</div>
                        <div className="text-[11px] text-slate-400">{lead.contato} • {lead.telefone}</div>
                      </td>
                      <td className="p-3.5 text-slate-600">
                        {lead.segmento}
                      </td>
                      <td className="p-3.5">
                        <div className="font-semibold text-slate-800">{lead.cota}</div>
                        <div className="font-mono text-[11px] text-emerald-700 font-bold">
                          R$ {Number(lead.valor || 0).toLocaleString('pt-BR')}
                        </div>
                      </td>
                      <td className="p-3.5">
                        <select
                          value={lead.status}
                          onChange={(e) => updateLead(lead.id, { status: e.target.value })}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-xl border focus:outline-hidden ${
                            lead.status === 'Contrato Assinado'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : lead.status === 'Proposta Enviada'
                              ? 'bg-sky-50 text-sky-800 border-sky-200'
                              : lead.status === 'Em Negociação'
                              ? 'bg-amber-50 text-amber-800 border-amber-200'
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}
                        >
                          <option value="Novo Lead">Novo Lead</option>
                          <option value="Em Negociação">Em Negociação</option>
                          <option value="Proposta Enviada">Proposta Enviada</option>
                          <option value="Contrato Assinado">Contrato Assinado</option>
                          <option value="Declinado">Declinado</option>
                        </select>
                      </td>
                      <td className="p-3.5 font-mono text-slate-400 text-[11px]">
                        {lead.data}
                      </td>
                      <td className="p-3.5 pr-5 text-right space-x-1.5 whitespace-nowrap">
                        <button
                          onClick={() => handleWhatsapp(lead)}
                          className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                          title="WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                          title="Remover"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredLeads.length === 0 && (
                    <tr>
                      <td colSpan="6" className="p-8 text-center text-slate-400">
                        Nenhum expositor encontrado com o filtro selecionado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: COTAS DE PATROCÍNIO */}
      {activeTab === 'cotas' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map(tier => {
              const spots = tier.availableSlots || tier.spots || 0;
              const filled = tier.filledSlots || 0;
              const subtotal = tier.price * filled;

              return (
                <div key={tier.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Cota</span>
                      <h3 className="text-base font-bold text-[#202f6b]">{tier.name}</h3>
                    </div>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {filled}/{spots} vagas
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="text-slate-500 font-semibold block mb-1">Preço Unitário (R$)</label>
                      <input
                        type="number"
                        value={tier.price}
                        onChange={(e) => updateSponsorshipTier(tier.id, { price: Number(e.target.value) })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-xl font-mono font-bold text-slate-800 text-sm focus:ring-2 focus:ring-[#f9418c]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-slate-500 font-semibold block mb-1">Vagas Totais</label>
                        <input
                          type="number"
                          value={spots}
                          onChange={(e) => updateSponsorshipTier(tier.id, { availableSlots: Number(e.target.value) })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-xl font-mono text-xs focus:ring-2 focus:ring-[#f9418c]"
                        />
                      </div>
                      <div>
                        <label className="text-slate-500 font-semibold block mb-1">Preenchidas</label>
                        <input
                          type="number"
                          value={filled}
                          onChange={(e) => updateSponsorshipTier(tier.id, { filledSlots: Number(e.target.value) })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-xl font-mono font-bold text-emerald-700 text-xs focus:ring-2 focus:ring-[#f9418c]"
                        />
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-500 font-mono">
                      <span>Arrecadado:</span>
                      <span className="font-bold text-slate-800">R$ {subtotal.toLocaleString('pt-BR')}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: SCRIPTS E CADÊNCIA */}
      {activeTab === 'cadencia' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emailCadence.map(item => (
            <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-mono text-slate-400 font-semibold">{item.day}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#202f6b]">{item.subject}</h4>
                <p className="text-xs text-slate-600 mt-2 whitespace-pre-line leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 font-mono text-[11px]">
                  {item.content}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => copyEmail(item)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedId === item.id ? 'Copiado!' : 'Copiar Script'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL: NOVO LEAD */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-[#202f6b]">Cadastrar Novo Expositor</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateLead} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Nome da Empresa</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Pet Food Brasil"
                  value={newLeadForm.empresa}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, empresa: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Contato / Responsável</label>
                  <input
                    type="text"
                    required
                    placeholder="Nome"
                    value={newLeadForm.contato}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, contato: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">WhatsApp</label>
                  <input
                    type="text"
                    required
                    placeholder="(22) 99999-9999"
                    value={newLeadForm.telefone}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, telefone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Segmento</label>
                <input
                  type="text"
                  placeholder="Ex: Rações, Acessórios, Clínicas"
                  value={newLeadForm.segmento}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, segmento: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Cota de Interesse</label>
                  <select
                    value={newLeadForm.cota}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, cota: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c] bg-white"
                  >
                    <option value="Cota Máster (60m²)">Cota Máster (60m²)</option>
                    <option value="Cota Sênior (30m²)">Cota Sênior (30m²)</option>
                    <option value="Cota Júnior (15m²)">Cota Júnior (15m²)</option>
                    <option value="Estande Modular">Estande Modular</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Valor Estimado (R$)</label>
                  <input
                    type="number"
                    value={newLeadForm.valor}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, valor: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3.5 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#202f6b] hover:bg-[#182452] text-white font-semibold"
                >
                  Salvar Expositor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

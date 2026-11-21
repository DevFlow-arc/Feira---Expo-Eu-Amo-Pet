import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Settings, Save, RotateCcw, Building, Calendar, DollarSign, 
  MapPin, CheckCircle, ShieldCheck, Users, Sparkles, RefreshCw
} from 'lucide-react';

export default function SettingsView() {
  const { eventInfo, updateEventInfo, sponsorshipTiers, setSponsorshipTiers, addToast } = useApp();

  const [formData, setFormData] = useState({ ...eventInfo });
  const [tiersData, setTiersData] = useState([...sponsorshipTiers]);
  const [isSaved, setIsSaved] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setIsSaved(false);
  };

  const handleTierChange = (index, field, value) => {
    setTiersData(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
    setIsSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateEventInfo(formData);
    setSponsorshipTiers(tiersData);
    setIsSaved(true);
    addToast('Todas as configurações e valores de cotas foram atualizados com sucesso!', 'success');
  };

  const handleResetDefaults = () => {
    if (window.confirm('Tem certeza que deseja restaurar as configurações padrão iniciais?')) {
      localStorage.removeItem('feira_pet_event_info');
      localStorage.removeItem('feira_pet_sponsorship_tiers');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Settings className="w-3.5 h-3.5" />
            Painel de Controle Central
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            Configurações Globais do Evento
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Altere datas, local, metas e valores das cotas de patrocínio. Os dados atualizam a Landing Page em tempo real.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleResetDefaults}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restaurar Padrões
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow"
          >
            <Save className="w-4 h-4" />
            Salvar Alterações
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Bloco 1: Informações Gerais do Evento */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Calendar className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">Identificação, Datas e Local do Evento</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Nome Oficial do Evento</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Slogan / Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => handleInputChange('tagline', e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Janela de Data Estimada</label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-semibold text-emerald-700"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">Ex: 14 a 16 de Novembro de 2025 ou 2º Semestre 2025</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Município e Estado</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Nome do Local / Pavilhão</label>
              <input
                type="text"
                value={formData.venue}
                onChange={(e) => handleInputChange('venue', e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Endereço Completo</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Bloco 2: Valores das Cotas de Patrocínio (100% Editáveis Manualmente) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-600" />
              <div>
                <h3 className="text-base font-bold text-slate-900">Valores e Configuração das Cotas de Patrocínio</h3>
                <p className="text-xs text-slate-500">Editáveis manualmente para adaptar à estratégia comercial e negociação de propostas</p>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg">
              Sincronização Ativa na LP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiersData.map((tier, idx) => (
              <div 
                key={tier.id}
                className={`p-4 rounded-xl border-2 transition-all ${
                  tier.popular ? 'border-emerald-500 bg-emerald-50/20' : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Cota {tier.id}
                  </span>
                  {tier.popular && (
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-600 text-white rounded-full">
                      Destaque
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Título da Cota</label>
                    <input
                      type="text"
                      value={tier.name}
                      onChange={(e) => handleTierChange(idx, 'name', e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-sm font-bold bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Valor Comercial (R$)</label>
                    <input
                      type="text"
                      value={tier.price}
                      onChange={(e) => handleTierChange(idx, 'price', e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-slate-300 rounded-lg text-sm font-extrabold text-slate-900 bg-white"
                    />
                    <span className="text-[10px] text-slate-500 mt-0.5 block">Ex: R$ 25.000 ou Sob Consulta</span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Vagas / Cotas Disponíveis</label>
                    <input
                      type="text"
                      value={tier.spots}
                      onChange={(e) => handleTierChange(idx, 'spots', e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Descrição Comercial</label>
                    <textarea
                      rows="2"
                      value={tier.description}
                      onChange={(e) => handleTierChange(idx, 'description', e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs bg-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 3: Metas e Indicadores de Volume */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Users className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">Metas de Público e Impacto Social</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Meta de Visitantes</label>
              <input
                type="number"
                value={formData.expectedAttendees}
                onChange={(e) => handleInputChange('expectedAttendees', Number(e.target.value))}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">Meta estimada baseada em edições anteriores</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Meta de Adoções Responsáveis</label>
              <input
                type="number"
                value={formData.targetAdoptions}
                onChange={(e) => handleInputChange('targetAdoptions', Number(e.target.value))}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">Em parceria com CCZ e ONGs de Campos</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Meta de Estandes Comercializados</label>
              <input
                type="number"
                value={formData.exhibitorCount}
                onChange={(e) => handleInputChange('exhibitorCount', Number(e.target.value))}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">Capacidade total do pavilhão</span>
            </div>
          </div>
        </div>

        {/* Bloco 4: Entidades Organizadoras e Responsáveis Legais */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Building className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">Entidades Organizadoras & Parceiros Oficiais</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold text-slate-800 uppercase mb-2">Empresa Promotora Legal</h4>
              <p className="text-sm font-semibold text-slate-900">Manfertech Manutenção e Montagens Industriais Ltda</p>
              <p className="text-xs text-slate-600 mt-1">CNPJ: 05.931.820/0001-10 (Alteração JUCERJA 24/01/2024)</p>
              <p className="text-xs text-slate-600">Responsável: André Ferreira Machado</p>
            </div>

            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200">
              <h4 className="text-xs font-bold text-emerald-800 uppercase mb-2">Estratégia, Marketing & Comercial</h4>
              <p className="text-sm font-semibold text-slate-900">MD Mercado Digital & Agência Parceira</p>
              <p className="text-xs text-slate-600 mt-1">Liderança de Comunicação: Maycon Douglas</p>
              <p className="text-xs text-slate-600">Metodologia: Funil Pirata AARRR & Captação Ativa</p>
            </div>
          </div>
        </div>

        {/* Action Button Bottom */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
          {isSaved && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 mr-2">
              <CheckCircle className="w-4 h-4" /> Alterações sincronizadas com a Landing Page!
            </span>
          )}
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg"
          >
            <Save className="w-4 h-4" />
            Salvar Configurações Globais
          </button>
        </div>
      </form>
    </div>
  );
}

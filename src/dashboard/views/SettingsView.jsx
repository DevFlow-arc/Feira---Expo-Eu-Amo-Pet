import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Settings, Save, RotateCcw, Building, Calendar, DollarSign, 
  MapPin, CheckCircle, ShieldCheck, Users, Sparkles, RefreshCw,
  Sliders, Award
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
    <div className="space-y-8 max-w-6xl mx-auto animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-3xl p-6 sm:p-8 border border-[#e5dfd3] shadow-xs relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 rounded-full bg-[#202f6b]/5 pointer-events-none blur-xl" />
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#202f6b]/5 text-[#202f6b] text-xs font-bold uppercase tracking-wider border border-[#202f6b]/15">
            <Sliders className="w-3.5 h-3.5 text-[#f9418c]" />
            Painel Central de Parâmetros
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#202f6b] tracking-tight">
            Configurações Globais do Evento
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Gerencie datas oficiais, localização, metas de público e valores das cotas comerciais. As alterações refletem instantaneamente no site público e nos materiais de captação.
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10 shrink-0">
          <button
            type="button"
            onClick={handleResetDefaults}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-[#e5dfd3] rounded-2xl hover:bg-[#f8f5ee] transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restaurar
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#202f6b] hover:bg-[#182452] text-white rounded-2xl text-sm font-bold transition-all shadow-md hover:shadow-lg"
          >
            <Save className="w-4 h-4 text-[#ffc600]" />
            Salvar Tudo
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Bloco 1: Informações Gerais do Evento */}
        <div className="bg-white border border-[#e5dfd3] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-[#f2eee5]">
            <div className="w-10 h-10 rounded-2xl bg-[#ffc600]/20 text-amber-800 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#202f6b]">Identificação, Datas e Local do Evento</h3>
              <p className="text-xs text-slate-500">Parâmetros essenciais exibidos no cabeçalho e rodapé de todos os pontos de contato</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-[#202f6b] mb-1.5">Nome Oficial do Evento</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-2.5 border border-[#e5dfd3] rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#f9418c] focus:border-[#f9418c] bg-[#f8f5ee]/40 font-bold text-[#202f6b]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#202f6b] mb-1.5">Slogan / Tagline Institucional</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => handleInputChange('tagline', e.target.value)}
                className="w-full px-4 py-2.5 border border-[#e5dfd3] rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#f9418c] focus:border-[#f9418c] bg-[#f8f5ee]/40 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#202f6b] mb-1.5">Janela de Data Estimada</label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-4 py-2.5 border border-[#e5dfd3] rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#f9418c] focus:border-[#f9418c] bg-[#f8f5ee]/40 font-extrabold text-[#f9418c]"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">Ex: Em Breve em 2027 • Data a Definir ou 2º Semestre 2027</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#202f6b] mb-1.5">Município e Região</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-4 py-2.5 border border-[#e5dfd3] rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#f9418c] focus:border-[#f9418c] bg-[#f8f5ee]/40 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#202f6b] mb-1.5">Local / Pavilhão de Eventos</label>
              <input
                type="text"
                value={formData.venue}
                onChange={(e) => handleInputChange('venue', e.target.value)}
                className="w-full px-4 py-2.5 border border-[#e5dfd3] rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#f9418c] focus:border-[#f9418c] bg-[#f8f5ee]/40 font-bold text-[#202f6b]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#202f6b] mb-1.5">Endereço / Observação Territorial</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-4 py-2.5 border border-[#e5dfd3] rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#f9418c] focus:border-[#f9418c] bg-[#f8f5ee]/40 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Bloco 2: Valores das Cotas de Patrocínio (100% Editáveis Manualmente) */}
        <div className="bg-white border border-[#e5dfd3] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#f2eee5] gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#f9418c]/10 text-[#f9418c] flex items-center justify-center font-bold">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#202f6b]">Valores & Gestão das Cotas de Patrocínio</h3>
                <p className="text-xs text-slate-500">Editáveis dinamicamente para ajustar a régua de negociação com grandes marcas</p>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 bg-[#cbe33d]/30 text-lime-900 border border-[#cbe33d] rounded-full self-start sm:self-auto">
              Sincronização Ativa na LP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiersData.map((tier, idx) => (
              <div 
                key={tier.id}
                className={`p-5 rounded-3xl border-2 transition-all relative overflow-hidden ${
                  tier.popular 
                    ? 'border-[#f9418c] bg-[#f9418c]/5 shadow-sm' 
                    : 'border-[#e5dfd3] bg-[#f8f5ee]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#202f6b]">
                    Cota {tier.id}
                  </span>
                  {tier.popular && (
                    <span className="text-[10px] font-bold px-2.5 py-0.5 bg-[#f9418c] text-white rounded-full shadow-2xs">
                      Cota Master Destaque
                    </span>
                  )}
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Título da Cota</label>
                    <input
                      type="text"
                      value={tier.name}
                      onChange={(e) => handleTierChange(idx, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-[#e5dfd3] rounded-xl text-sm font-bold bg-white text-[#202f6b] focus:ring-2 focus:ring-[#f9418c]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Valor Comercial (R$)</label>
                    <input
                      type="text"
                      value={tier.price}
                      onChange={(e) => handleTierChange(idx, 'price', e.target.value)}
                      className="w-full px-3 py-2 border border-[#e5dfd3] rounded-xl text-sm font-extrabold text-[#202f6b] bg-white focus:ring-2 focus:ring-[#f9418c]"
                    />
                    <span className="text-[10px] text-slate-500 mt-0.5 block">Ex: R$ 25.000 ou Sob Consulta</span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Vagas / Cotas Disponíveis</label>
                    <input
                      type="text"
                      value={tier.spots}
                      onChange={(e) => handleTierChange(idx, 'spots', e.target.value)}
                      className="w-full px-3 py-2 border border-[#e5dfd3] rounded-xl text-xs bg-white focus:ring-2 focus:ring-[#f9418c]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Descrição Comercial</label>
                    <textarea
                      rows="2"
                      value={tier.description}
                      onChange={(e) => handleTierChange(idx, 'description', e.target.value)}
                      className="w-full px-3 py-2 border border-[#e5dfd3] rounded-xl text-xs bg-white focus:ring-2 focus:ring-[#f9418c]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 3: Metas e Indicadores de Volume */}
        <div className="bg-white border border-[#e5dfd3] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-[#f2eee5]">
            <div className="w-10 h-10 rounded-2xl bg-[#8c43dc]/10 text-[#8c43dc] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#202f6b]">Metas Operacionais & Impacto Social</h3>
              <p className="text-xs text-slate-500">Métricas-chave acompanhadas pelos parceiros institucionais e prefeituras</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-[#202f6b] mb-1.5">Meta de Visitantes Presenciais</label>
              <input
                type="number"
                value={formData.expectedAttendees}
                onChange={(e) => handleInputChange('expectedAttendees', Number(e.target.value))}
                className="w-full px-4 py-2.5 border border-[#e5dfd3] rounded-2xl text-sm font-bold text-[#202f6b] bg-[#f8f5ee]/40 focus:ring-2 focus:ring-[#f9418c]"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">Projeção conservadora com base na capacidade</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#202f6b] mb-1.5">Meta de Adoções Responsáveis</label>
              <input
                type="number"
                value={formData.targetAdoptions}
                onChange={(e) => handleInputChange('targetAdoptions', Number(e.target.value))}
                className="w-full px-4 py-2.5 border border-[#e5dfd3] rounded-2xl text-sm font-bold text-[#202f6b] bg-[#f8f5ee]/40 focus:ring-2 focus:ring-[#f9418c]"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">Circuito conjunto CCZ e ONGs protetoras</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#202f6b] mb-1.5">Meta de Estandes Comercializados</label>
              <input
                type="number"
                value={formData.exhibitorCount}
                onChange={(e) => handleInputChange('exhibitorCount', Number(e.target.value))}
                className="w-full px-4 py-2.5 border border-[#e5dfd3] rounded-2xl text-sm font-bold text-[#202f6b] bg-[#f8f5ee]/40 focus:ring-2 focus:ring-[#f9418c]"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">Capacidade total do layout de estandes</span>
            </div>
          </div>
        </div>

        {/* Bloco 4: Entidades Organizadoras e Responsáveis Legais */}
        <div className="bg-white border border-[#e5dfd3] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-[#f2eee5]">
            <div className="w-10 h-10 rounded-2xl bg-[#cbe33d]/30 text-lime-900 flex items-center justify-center font-bold">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#202f6b]">Entidades Organizadoras & Governança</h3>
              <p className="text-xs text-slate-500">Estrutura jurídica, promotora legal e liderança estratégica</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 bg-[#f8f5ee]/80 rounded-2xl border border-[#e5dfd3]">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#ffc600]/20 text-amber-900 border border-[#ffc600]/30 mb-2">
                Empresa Promotora Legal
              </div>
              <p className="text-sm font-extrabold text-[#202f6b]">Manfertech Manutenção e Montagens Industriais Ltda</p>
              <p className="text-xs text-slate-600 mt-1">CNPJ: 05.931.820/0001-10 (Alteração JUCERJA 24/01/2024)</p>
              <p className="text-xs text-slate-600">Representante Legal: André Ferreira Machado</p>
            </div>

            <div className="p-5 bg-[#f8f5ee]/80 rounded-2xl border border-[#e5dfd3]">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#f9418c]/10 text-[#f9418c] border border-[#f9418c]/20 mb-2">
                Estratégia, Marketing & Comercial
              </div>
              <p className="text-sm font-extrabold text-[#202f6b]">MD Mercado Digital & Agência Parceira</p>
              <p className="text-xs text-slate-600 mt-1">Liderança de Comunicação: Maycon Douglas</p>
              <p className="text-xs text-slate-600">Metodologia: Funil Pirata AARRR & Captação Ativa de Patrocínios</p>
            </div>
          </div>
        </div>

        {/* Action Button Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white border border-[#e5dfd3] rounded-3xl shadow-xs">
          <div>
            {isSaved ? (
              <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600">
                <CheckCircle className="w-4 h-4" /> Alterações salvas e sincronizadas em tempo real!
              </span>
            ) : (
              <span className="text-xs text-slate-500">
                Lembre-se de salvar para que as atualizações tenham efeito imediato em toda a plataforma.
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#202f6b] hover:bg-[#182452] text-white rounded-2xl text-sm font-bold transition-all shadow-md hover:shadow-lg"
          >
            <Save className="w-4 h-4 text-[#ffc600]" />
            Salvar Configurações Globais
          </button>
        </div>
      </form>
    </div>
  );
}

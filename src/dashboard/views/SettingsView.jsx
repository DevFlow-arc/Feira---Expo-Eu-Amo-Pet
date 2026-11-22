import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Save, RotateCcw, Building, Calendar, DollarSign, Users, Check } from 'lucide-react';

export default function SettingsView() {
  const { eventInfo, updateEventInfo, sponsorshipTiers, setSponsorshipTiers, resetToDefaults, showToast } = useApp();

  const [formData, setFormData] = useState({ ...eventInfo });
  const [tiersData, setTiersData] = useState([...sponsorshipTiers]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTierChange = (index, field, value) => {
    setTiersData(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateEventInfo(formData);
    setSponsorshipTiers(tiersData);
    showToast('Configurações salvas e sincronizadas.');
  };

  return (
    <div className="space-y-6 max-w-5xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <h1 className="text-xl font-bold text-[#202f6b] tracking-tight">
            Configurações Globais do Evento
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Parâmetros do evento e valores padrão sincronizados com toda a plataforma.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={resetToDefaults}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restaurar Padrões
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#202f6b] hover:bg-[#182452] text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Save className="w-3.5 h-3.5 text-[#ffc600]" />
            Salvar Alterações
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-5">
        
        {/* Bloco 1: Identificação e Datas */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-[#202f6b]">Identificação, Datas e Local</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Nome Oficial</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c] font-semibold text-slate-800"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Slogan / Subtítulo</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => handleInputChange('tagline', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Janela de Data</label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c] font-bold text-[#f9418c]"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Município e Região</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Pavilhão / Local</label>
              <input
                type="text"
                value={formData.venue}
                onChange={(e) => handleInputChange('venue', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Endereço Mapeado</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f9418c]"
              />
            </div>
          </div>
        </div>

        {/* Bloco 2: Metas Operacionais */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-[#202f6b]">Metas Operacionais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Meta de Visitantes</label>
              <input
                type="number"
                value={formData.expectedAttendees}
                onChange={(e) => handleInputChange('expectedAttendees', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl font-mono font-bold text-slate-800 focus:ring-2 focus:ring-[#f9418c]"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Meta de Adoções (CCZ)</label>
              <input
                type="number"
                value={formData.targetAdoptions}
                onChange={(e) => handleInputChange('targetAdoptions', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl font-mono font-bold text-slate-800 focus:ring-2 focus:ring-[#f9418c]"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Total de Estandes no Pavilhão</label>
              <input
                type="number"
                value={formData.exhibitorCount}
                onChange={(e) => handleInputChange('exhibitorCount', e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl font-mono font-bold text-slate-800 focus:ring-2 focus:ring-[#f9418c]"
              />
            </div>
          </div>
        </div>

        {/* Bloco 3: Entidades Organizadoras */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-[#202f6b]">Entidades Organizadoras & Governança</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] font-bold uppercase text-slate-400">Promotora Legal</span>
              <p className="font-bold text-[#202f6b]">Manfertech Manutenção e Montagens Industriais Ltda</p>
              <p className="text-slate-500 text-[11px]">CNPJ: 05.931.820/0001-10 • Resp: André Ferreira Machado</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] font-bold uppercase text-slate-400">Estratégia & Comercial</span>
              <p className="font-bold text-[#202f6b]">MD Mercado Digital</p>
              <p className="text-slate-500 text-[11px]">Liderança de Marketing e Comercial: Maycon Douglas</p>
            </div>
          </div>
        </div>

        {/* Bottom Save Bar */}
        <div className="flex justify-end p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#202f6b] hover:bg-[#182452] text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Save className="w-3.5 h-3.5 text-[#ffc600]" />
            Salvar Configurações
          </button>
        </div>

      </form>
    </div>
  );
}

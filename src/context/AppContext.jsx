import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialData } from '../data/initialData';
import { INITIAL_BOOTHS } from '../data/floorPlanData';

const AppContext = createContext();

const STORAGE_KEY = 'feira_pet_platform_data_v4';
const BOOTHS_STORAGE_KEY = 'feira_pet_floor_plan_booths_v1';

const DEFAULT_LEADS = [
  {
    id: 'lead-1',
    empresa: 'Distribuidora Pet Norte Fluminense',
    contato: 'Carlos Eduardo Mendes',
    telefone: '(22) 99881-4321',
    email: 'carlos@petnorteflu.com.br',
    segmento: 'Rações Super Premium & Petiscos',
    cota: 'Cota Sênior (30m²)',
    status: 'Proposta Enviada',
    valor: 12000,
    data: '20/11/2026'
  },
  {
    id: 'lead-2',
    empresa: 'Clínica & Hospital Vet Campos',
    contato: 'Dra. Fernanda Lacerda',
    telefone: '(22) 99723-8811',
    email: 'contato@vetcampos.med.br',
    segmento: 'Medicina Veterinária & Diagnóstico',
    cota: 'Cota Júnior (15m²)',
    status: 'Contrato Assinado',
    valor: 4500,
    data: '19/11/2026'
  },
  {
    id: 'lead-3',
    empresa: 'Equipamentos Grooming & Banho',
    contato: 'Roberto Alvarenga',
    telefone: '(21) 98711-5544',
    email: 'roberto@groomingbrasil.com.br',
    segmento: 'Máquinas de Tosa & Secadores',
    cota: 'Cota Máster (60m²)',
    status: 'Em Negociação',
    valor: 25000,
    data: '20/11/2026'
  },
  {
    id: 'lead-4',
    empresa: 'Nutrição Natural Petz Gourmet',
    contato: 'Aline Peçanha',
    telefone: '(22) 99233-1090',
    email: 'comercial@petzgourmet.com.br',
    segmento: 'Alimentação Natural & Petiscos',
    cota: 'Cota Júnior (15m²)',
    status: 'Novo Lead',
    valor: 4500,
    data: '20/11/2026'
  }
];

export function AppProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (!parsed.leads) parsed.leads = DEFAULT_LEADS;
        return {
          ...initialData,
          ...parsed,
          generalInfo: { ...initialData.generalInfo, ...(parsed.generalInfo || {}) },
          infrastructureSpecs: { ...initialData.infrastructureSpecs, ...(parsed.infrastructureSpecs || {}) },
          municipalChecklist: parsed.municipalChecklist || initialData.municipalChecklist,
          biosafetyChecklist: parsed.biosafetyChecklist || initialData.biosafetyChecklist,
          sponsorshipTiers: parsed.sponsorshipTiers || initialData.sponsorshipTiers,
        };
      }
    } catch (e) {
      console.warn('localStorage read error:', e);
    }
    return { ...initialData, leads: DEFAULT_LEADS };
  });

  const [activeDashboardTab, setActiveDashboardTab] = useState('overview');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [toast, setToast] = useState(null);

  // ─── Floor Plan Booths State (Synced with localStorage) ─────────────────────
  const [boothsList, setBoothsList] = useState(() => {
    try {
      const stored = localStorage.getItem(BOOTHS_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('localStorage read booths error:', e);
    }
    return INITIAL_BOOTHS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(BOOTHS_STORAGE_KEY, JSON.stringify(boothsList));
    } catch (e) {
      console.warn('localStorage write booths error:', e);
    }
  }, [boothsList]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('localStorage write error:', e);
    }
  }, [data]);

  // Toast helper
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };
  const addToast = showToast;

  // Event info adapter
  const eventInfo = {
    name: data.generalInfo.eventName,
    tagline: data.generalInfo.tagline,
    date: data.generalInfo.targetDate,
    city: data.generalInfo.city,
    venue: data.generalInfo.venueName,
    address: data.generalInfo.address,
    expectedAttendees: data.generalInfo.expectedAttendees,
    targetAdoptions: data.generalInfo.targetAdoptions,
    exhibitorCount: data.generalInfo.totalBoothsCount,
    occupiedBooths: data.generalInfo.occupiedBoothsCount || 18,
    year: '2027',
  };

  const updateEventInfo = (updates) => {
    setData(prev => ({
      ...prev,
      generalInfo: {
        ...prev.generalInfo,
        ...(updates.name !== undefined && { eventName: updates.name }),
        ...(updates.tagline !== undefined && { tagline: updates.tagline }),
        ...(updates.date !== undefined && { targetDate: updates.date }),
        ...(updates.city !== undefined && { city: updates.city }),
        ...(updates.venue !== undefined && { venueName: updates.venue }),
        ...(updates.address !== undefined && { address: updates.address }),
        ...(updates.expectedAttendees !== undefined && { expectedAttendees: Number(updates.expectedAttendees) }),
        ...(updates.targetAdoptions !== undefined && { targetAdoptions: Number(updates.targetAdoptions) }),
        ...(updates.exhibitorCount !== undefined && { totalBoothsCount: Number(updates.exhibitorCount) }),
        ...(updates.occupiedBooths !== undefined && { occupiedBoothsCount: Number(updates.occupiedBooths) }),
      }
    }));
    showToast('Configurações salvas.');
  };

  // ─── Leads & Comercial ───────────────────────────────────────────────────
  const leads = data.leads || DEFAULT_LEADS;

  const addLead = (newLead) => {
    const leadWithId = {
      ...newLead,
      id: `lead-${Date.now()}`,
      data: new Date().toLocaleDateString('pt-BR'),
      status: newLead.status || 'Novo Lead'
    };
    setData(prev => ({
      ...prev,
      leads: [leadWithId, ...(prev.leads || DEFAULT_LEADS)]
    }));
    showToast('Lead cadastrado com sucesso.');
  };

  const updateLead = (id, updates) => {
    setData(prev => ({
      ...prev,
      leads: (prev.leads || DEFAULT_LEADS).map(lead =>
        lead.id === id ? { ...lead, ...updates } : lead
      )
    }));
    showToast('Status do expositor atualizado.');
  };

  const deleteLead = (id) => {
    setData(prev => ({
      ...prev,
      leads: (prev.leads || DEFAULT_LEADS).filter(lead => lead.id !== id)
    }));
    showToast('Expositor removido.');
  };

  const exportLeadsCSV = () => {
    const headers = ['ID', 'Empresa', 'Contato', 'Telefone', 'Email', 'Segmento', 'Cota', 'Valor (R$)', 'Status', 'Data'];
    const rows = (data.leads || DEFAULT_LEADS).map(l => [
      l.id,
      `"${l.empresa}"`,
      `"${l.contato}"`,
      `"${l.telefone}"`,
      `"${l.email}"`,
      `"${l.segmento}"`,
      `"${l.cota}"`,
      l.valor,
      `"${l.status}"`,
      l.data
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `leads-feira-eu-amo-pet-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('CSV exportado com sucesso.');
  };

  // ─── Sponsorship Tiers ────────────────────────────────────────────────────
  const sponsorshipTiers = data.sponsorshipTiers;

  const setSponsorshipTiers = (tiers) => {
    setData(prev => ({ ...prev, sponsorshipTiers: tiers }));
    showToast('Cotas de patrocínio salvas.');
  };

  const updateSponsorshipTier = (id, updates) => {
    setData(prev => ({
      ...prev,
      sponsorshipTiers: prev.sponsorshipTiers.map(t =>
        t.id === id ? { ...t, ...updates } : t
      )
    }));
    showToast('Cota de patrocínio atualizada.');
  };

  // ─── Municipal Checklist ──────────────────────────────────────────────────
  const municipalChecklist = data.municipalChecklist || initialData.municipalChecklist || [];
  const biosafetyChecklist = data.biosafetyChecklist || initialData.biosafetyChecklist || [];
  const infrastructureSpecs = data.infrastructureSpecs || initialData.infrastructureSpecs || {};

  const updateMunicipalChecklist = (id, updates) => {
    setData(prev => ({
      ...prev,
      municipalChecklist: prev.municipalChecklist.map(item =>
        item.id === id ? { ...item, ...updates } : item
      )
    }));
    showToast('Status da exigência municipal atualizado.');
  };

  const addMunicipalItem = (item) => {
    const newItem = {
      id: `mun-${Date.now()}`,
      ...item,
      status: item.status || 'pendente'
    };
    setData(prev => ({
      ...prev,
      municipalChecklist: [...prev.municipalChecklist, newItem]
    }));
    showToast('Nova exigência municipal adicionada.');
  };

  // ─── Biosafety Checklist ──────────────────────────────────────────────────
  const updateBiosafetyChecklist = (id, updates) => {
    setData(prev => ({
      ...prev,
      biosafetyChecklist: prev.biosafetyChecklist.map(item =>
        item.id === id ? { ...item, ...updates } : item
      )
    }));
    showToast('Item de biosseguridade atualizado.');
  };

  // ─── Infrastructure / Booths ──────────────────────────────────────────────
  const booths = data.booths || [];

  const updateBooth = (id, updates) => {
    setBoothsList(prev => prev.map(b => b.id === id ? { ...b, ...updates } : b));
    showToast(`Estande ${id} atualizado.`);
  };

  const resetBooths = () => {
    setBoothsList(INITIAL_BOOTHS);
    localStorage.removeItem(BOOTHS_STORAGE_KEY);
    showToast('Planta baixa restaurada para o padrão.');
  };

  const updateBoothsBreakdown = (index, updates) => {
    setData(prev => {
      const nextBreakdown = [...(prev.infrastructureSpecs?.boothsBreakdown || [])];
      nextBreakdown[index] = { ...nextBreakdown[index], ...updates };
      // Also update total occupied count
      const totalBooked = nextBreakdown.reduce((acc, b) => acc + (b.booked || 0), 0);
      return {
        ...prev,
        generalInfo: { ...prev.generalInfo, occupiedBoothsCount: totalBooked },
        infrastructureSpecs: { ...prev.infrastructureSpecs, boothsBreakdown: nextBreakdown }
      };
    });
    showToast('Dados de estandes salvos.');
  };

  // ─── Event Schedule ───────────────────────────────────────────────────────
  const schedule = data.schedule || [
    {
      day: 1,
      title: 'Sexta-Feira',
      items: [
        { id: 1, time: '10:00', title: 'Abertura & Credenciamento de Expositores', location: 'Palco Principal', description: 'Entrada oficial de marcas e conferência técnica.' },
        { id: 2, time: '12:00', title: 'Triagem Sanitária CAEX', location: 'Portão 2', description: 'Conferência de vacinas e atestados para animais inscritos.' },
        { id: 3, time: '14:00', title: 'Painel VET 360: Saúde e Nutrição', location: 'Arena VET 360', description: 'Ciclo de palestras para veterinários e lojistas.' },
        { id: 4, time: '16:00', title: 'Abertura Espaço Adoção CCZ', location: 'Espaço CCZ', description: 'Início da feira de adoção ética com animais vacinados.' },
        { id: 5, time: '17:00', title: 'Fechamento Triagem Sanitária CAEX', location: 'Portão 2', description: 'Encerramento de acesso de animais externos.' }
      ]
    },
    {
      day: 2,
      title: 'Sábado',
      items: [
        { id: 6, time: '10:00', title: 'Abertura dos Pavilhões ao Público', location: 'Entrada Principal', description: 'Abertura geral dos estandes comerciais.' },
        { id: 7, time: '11:00', title: 'Demonstração Prática de Adestramento', location: 'Arena Agility', description: 'Técnicas de obediência e comportamento canino.' },
        { id: 8, time: '12:00', title: 'Triagem Sanitária CAEX', location: 'Portão 2', description: 'Recepção de animais para desfiles do fim de semana.' },
        { id: 9, time: '14:00', title: 'Ação Castramóvel CCZ', location: 'Espaço CCZ', description: 'Orientações sanitárias e microchipagem gratuita.' },
        { id: 10, time: '17:00', title: 'Encerramento Triagem CAEX', location: 'Portão 2', description: 'Fechamento diário do portão de triagem.' }
      ]
    },
    {
      day: 3,
      title: 'Domingo',
      items: [
        { id: 11, time: '10:00', title: 'Abertura do Último Dia de Feira', location: 'Entrada Principal', description: 'Recepção ao público e expositores.' },
        { id: 12, time: '14:00', title: 'Concurso Pet Fantasia & Dog Influencer', location: 'Palco Principal', description: 'Desfile temático com premiação aos vencedores.' },
        { id: 13, time: '16:30', title: 'Cerimônia de Premiação dos Estandes', location: 'Palco Principal', description: 'Troféus para marcas destaque da edição.' },
        { id: 14, time: '20:00', title: 'Encerramento Oficial da Feira', location: 'Pavilhão', description: 'Fechamento da feira e balanço preliminar.' }
      ]
    }
  ];

  const addScheduleItem = (dayNumber, item) => {
    setData(prev => {
      const currentSchedule = prev.schedule || schedule;
      const updatedSchedule = currentSchedule.map(d => {
        if (d.day === dayNumber) {
          return {
            ...d,
            items: [...d.items, { ...item, id: Date.now() }].sort((a, b) => a.time.localeCompare(b.time))
          };
        }
        return d;
      });
      return { ...prev, schedule: updatedSchedule };
    });
    showToast('Atração adicionada à programação.');
  };

  const deleteScheduleItem = (dayNumber, itemId) => {
    setData(prev => {
      const currentSchedule = prev.schedule || schedule;
      const updatedSchedule = currentSchedule.map(d => {
        if (d.day === dayNumber) {
          return {
            ...d,
            items: d.items.filter(i => i.id !== itemId)
          };
        }
        return d;
      });
      return { ...prev, schedule: updatedSchedule };
    });
    showToast('Atração removida.');
  };

  // Reset helper
  const resetToDefaults = () => {
    if (window.confirm('Restaurar dados para a configuração padrão?')) {
      setData({ ...initialData, leads: DEFAULT_LEADS });
      localStorage.removeItem(STORAGE_KEY);
      showToast('Dados restaurados.');
    }
  };

  return (
    <AppContext.Provider
      value={{
        data,
        eventInfo,
        updateEventInfo,
        leads,
        addLead,
        updateLead,
        deleteLead,
        exportLeadsCSV,
        sponsorshipTiers,
        setSponsorshipTiers,
        updateSponsorshipTier,
        schedule,
        addScheduleItem,
        deleteScheduleItem,
        booths,
        boothsList,
        updateBooth,
        resetBooths,
        municipalChecklist,
        biosafetyChecklist,
        infrastructureSpecs,
        updateMunicipalChecklist,
        addMunicipalItem,
        updateBiosafetyChecklist,
        updateBoothsBreakdown,
        activeDashboardTab,
        setActiveDashboardTab,
        lightboxImage,
        setLightboxImage,
        toast,
        showToast,
        addToast,
        resetToDefaults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp deve ser usado dentro de um AppProvider');
  return context;
}

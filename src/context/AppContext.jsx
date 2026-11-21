import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialData } from '../data/initialData';
import confetti from 'canvas-confetti';

const AppContext = createContext();

const STORAGE_KEY = 'feira_pet_platform_data_v3';

export function AppProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('localStorage read error:', e);
    }
    return initialData;
  });

  const [activeDashboardTab, setActiveDashboardTab] = useState('overview');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('localStorage write error:', e);
    }
  }, [data]);

  // ─── Toast / Notification helpers ─────────────────────────────────────────
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };
  // addToast is an alias used by some components
  const addToast = showToast;

  // ─── Confetti celebration ──────────────────────────────────────────────────
  const triggerCelebration = () => {
    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch (e) { /* optional */ }
  };

  // ─── Event Info (alias for data.generalInfo) ──────────────────────────────
  // Exposes a flat, alias-friendly object for components that use eventInfo.*
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
    year: '2027',
  };

  const updateEventInfo = (updates) => {
    setData(prev => ({
      ...prev,
      generalInfo: {
        ...prev.generalInfo,
        // Map flat eventInfo fields back to generalInfo shape
        ...(updates.name !== undefined && { eventName: updates.name }),
        ...(updates.tagline !== undefined && { tagline: updates.tagline }),
        ...(updates.date !== undefined && { targetDate: updates.date }),
        ...(updates.city !== undefined && { city: updates.city }),
        ...(updates.venue !== undefined && { venueName: updates.venue }),
        ...(updates.address !== undefined && { address: updates.address }),
        ...(updates.expectedAttendees !== undefined && { expectedAttendees: updates.expectedAttendees }),
        ...(updates.targetAdoptions !== undefined && { targetAdoptions: updates.targetAdoptions }),
        ...(updates.exhibitorCount !== undefined && { totalBoothsCount: updates.exhibitorCount }),
      }
    }));
    showToast('Configurações do evento salvas com sucesso!');
  };

  // ─── Sponsorship Tiers ────────────────────────────────────────────────────
  const sponsorshipTiers = data.sponsorshipTiers;

  const setSponsorshipTiers = (tiers) => {
    setData(prev => ({ ...prev, sponsorshipTiers: tiers }));
    showToast('Cotas de patrocínio atualizadas!');
  };

  const updateSponsorshipTier = (id, updates) => {
    setData(prev => ({
      ...prev,
      sponsorshipTiers: prev.sponsorshipTiers.map(t =>
        t.id === id ? { ...t, ...updates } : t
      )
    }));
    showToast('Cota de patrocínio atualizada!');
  };

  // ─── Municipal Checklist ──────────────────────────────────────────────────
  const updateMunicipalChecklist = (id, updates) => {
    setData(prev => ({
      ...prev,
      municipalChecklist: prev.municipalChecklist.map(item =>
        item.id === id ? { ...item, ...updates } : item
      )
    }));
    showToast('Status do checklist municipal atualizado!');
  };

  // ─── Biosafety Checklist ──────────────────────────────────────────────────
  const updateBiosafetyChecklist = (id, updates) => {
    setData(prev => ({
      ...prev,
      biosafetyChecklist: prev.biosafetyChecklist.map(item =>
        item.id === id ? { ...item, ...updates } : item
      )
    }));
    showToast('Item de sanidade animal atualizado!');
  };

  // ─── Infrastructure / Booths ──────────────────────────────────────────────
  const booths = data.booths || [];

  const updateBoothsBreakdown = (index, updates) => {
    setData(prev => {
      const nextBreakdown = [...(prev.infrastructureSpecs?.boothsBreakdown || [])];
      nextBreakdown[index] = { ...nextBreakdown[index], ...updates };
      return {
        ...prev,
        infrastructureSpecs: { ...prev.infrastructureSpecs, boothsBreakdown: nextBreakdown }
      };
    });
    showToast('Alocação de estandes atualizada!');
  };

  // ─── Event Schedule (3-day program) ──────────────────────────────────────
  const schedule = data.schedule || [
    {
      day: 1,
      title: 'Sexta-Feira',
      items: [
        { id: 1, time: '10:00', title: 'Abertura Oficial & Credenciamento de Expositores', location: 'Palco Principal', description: 'Abertura com autoridades municipais, corte da fita e discurso do organizador.' },
        { id: 2, time: '12:00', title: 'Início Triagem Sanitária CAEX', location: 'Portão 2 — CAEX', description: 'Triagem veterinária obrigatória para tutores que trazem animais. Atestado sanitário exigido (validade 15 dias).' },
        { id: 3, time: '14:00', title: 'Painel VET 360: Bem-Estar e Saúde do Pet Urbano', location: 'Arena VET 360', description: 'Rodada de palestras com médicos veterinários de Campos e região.' },
        { id: 4, time: '16:00', title: 'Iniciativa de Adoção Responsável CCZ — Abertura', location: 'Espaço Adoção CCZ', description: 'Apresentação dos animais disponíveis para adoção e processo de cadastro de tutores.' },
        { id: 5, time: '17:00', title: 'Encerramento Triagem CAEX', location: 'Portão 2', description: 'Encerramento do período de acesso de animais externos ao pavilhão.' },
        { id: 6, time: '19:00', title: 'Show Especial & Música ao Vivo', location: 'Palco Principal', description: 'Atração musical de abertura com DJ e artistas locais.' },
      ]
    },
    {
      day: 2,
      title: 'Sábado',
      items: [
        { id: 7, time: '10:00', title: 'Abertura do Pavilhão ao Público Geral', location: 'Entrada Principal', description: 'Abertura das portas com música ambiente e recepção ao público.' },
        { id: 8, time: '11:00', title: 'Workshop: Primeiros Socorros para Pets', location: 'Arena VET 360', description: 'Demonstração prática com kit de emergência para tutores.' },
        { id: 9, time: '12:00', title: 'Triagem CAEX — Abertura', location: 'Portão 2 — CAEX', description: 'Acesso a animais dos participantes previamente inscritos.' },
        { id: 10, time: '13:00', title: 'Castramóvel CCZ — Procedimentos', location: 'Espaço Adoção CCZ', description: 'Castração cirúrgica gratuita e microchipagem de animais selecionados pelo CCZ.' },
        { id: 11, time: '15:00', title: 'Campeonato de Agility & Dog Run', location: 'Arena Agility Outdoor', description: 'Competição aberta de raças. Prêmios para os 3 primeiros colocados em cada categoria.' },
        { id: 12, time: '17:00', title: 'Encerramento Triagem CAEX', location: 'Portão 2', description: 'Recolhimento dos comprovantes de triagem e orientação aos tutores.' },
        { id: 13, time: '19:00', title: 'Rodada de Negócios B2B — Encontro de Distribuidores', location: 'Sala de Networking VIP', description: 'Encontro fechado entre fornecedores, distribuidores e representantes de marcas.' },
      ]
    },
    {
      day: 3,
      title: 'Domingo',
      items: [
        { id: 14, time: '10:00', title: 'Abertura Final — Último Dia de Feira', location: 'Entrada Principal', description: 'Abertura com anúncio de números parciais de visitantes e adoções.' },
        { id: 15, time: '11:00', title: 'Concurso Pet Fantasia', location: 'Palco Principal', description: 'Pets fantasiados desfilam para o público e corpo de jurados. Categorias Cão, Gato e Outros.' },
        { id: 16, time: '12:00', title: 'Triagem CAEX — Abertura (Último Dia)', location: 'Portão 2 — CAEX', description: 'Último bloco de triagem veterinária para acesso de animais externos.' },
        { id: 17, time: '14:00', title: 'Concurso Dog Influencer do Ano', location: 'Palco Principal', description: 'Votação aberta ao público nas redes sociais e ao vivo. Transmissão ao vivo no Instagram.' },
        { id: 18, time: '16:00', title: 'Cerimônia de Premiação & Troféus Expositores', location: 'Palco Principal', description: 'Entrega de troféus para Melhor Estande, Destaque em Atendimento e Maior Número de Adoções.' },
        { id: 19, time: '17:00', title: 'Encerramento Triagem CAEX — Final', location: 'Portão 2', description: 'Encerramento definitivo do acesso de animais externos ao pavilhão.' },
        { id: 20, time: '20:00', title: 'Encerramento Oficial da Feira', location: 'Palco Principal', description: 'Discurso de encerramento, anúncio dos números finais e convite para a próxima edição.' },
      ]
    }
  ];

  // ─── Reset to defaults ────────────────────────────────────────────────────
  const resetToDefaults = () => {
    if (window.confirm('Tem certeza de que deseja restaurar os dados originais?')) {
      setData(initialData);
      localStorage.removeItem(STORAGE_KEY);
      showToast('Dados restaurados para o padrão original.', 'info');
    }
  };

  return (
    <AppContext.Provider
      value={{
        // Raw data (legacy consumers)
        data,

        // Structured event info (new components)
        eventInfo,
        updateEventInfo,

        // Sponsorship
        sponsorshipTiers,
        setSponsorshipTiers,
        updateSponsorshipTier,

        // Schedule & booths
        schedule,
        booths,

        // Checklists
        updateMunicipalChecklist,
        updateBiosafetyChecklist,
        updateBoothsBreakdown,

        // Navigation state (kept for legacy components)
        activeDashboardTab,
        setActiveDashboardTab,

        // UI state
        lightboxImage,
        setLightboxImage,

        // Notifications
        toast,
        showToast,
        addToast,

        // Fun
        triggerCelebration,

        // Reset
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

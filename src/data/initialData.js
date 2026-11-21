export const initialData = {
  generalInfo: {
    eventName: "Feira Eu Amo Pet",
    edition: "Edição 2027",
    tagline: "O Maior Encontro Pet, Negócios e Causa Animal de Macaé, Região dos Lagos e Norte Fluminense",
    venueName: "Macaé & Região dos Lagos (Polo Estratégico em Definição Técnica)",
    city: "Macaé e Região dos Lagos - RJ",
    address: "Polo de Grandes Eventos Mapeado • Macaé e Região dos Lagos - RJ",
    targetDate: "Em Breve em 2027 • Data a Definir",
    timeSchedule: "Sexta a Domingo • 10h às 21h",
    organizerAgency: "MD Mercado Digital (Maycon Douglas)",
    promoterCompany: "Manfertech Manutenção e Montagens Industriais Ltda",
    targetPublicEstimate: 120000,
    expectedAttendees: 15000,
    targetAdoptions: 200,
    targetSponsorshipRevenue: 150000,
    totalBoothsCount: 60,
    occupiedBoothsCount: 18,
    freeTicketAdmission: true,
    vipTicketPrice: 45.00
  },

  sponsorshipTiers: [
    {
      id: "master",
      name: "Cota Máster (Exclusiva)",
      badge: "Patrocinador Oficial",
      price: 25000,
      availableSlots: 1,
      filledSlots: 0,
      description: "Posição central e exclusiva como patrocinador apresentador oficial da Feira Eu Amo Pet em todas as mídias e espaços.",
      benefits: [
        "Estande de 60m² com localização nobre na entrada principal",
        "Logotipo com destaque máximo em todos os outdoors, pórticos e crachás",
        "Palestra exclusiva de 45 minutos no auditório principal (VET 360)",
        "Inserção diária de spot sonoro institucional no som ambiente",
        "Campanhas dedicadas de co-branding nas redes sociais e tráfego pago",
        "20 credenciais VIP com acesso livre à Sala de Imprensa e Lounge VIP",
        "Direito de distribuição de brindes e ativações em qualquer ponto da feira"
      ]
    },
    {
      id: "senior",
      name: "Cota Sênior",
      badge: "Grande Visibilidade",
      price: 12000,
      availableSlots: 4,
      filledSlots: 1,
      description: "Ideal para grandes marcas, distribuidores de ração, medicamentos e redes hospitalares veterinárias.",
      benefits: [
        "Estande de 30m² em corredor de alto fluxo",
        "Logotipo em destaque no backdrop de fotos, banners e site oficial",
        "Apresentação de case ou workshop técnico de 25 minutos",
        "Participação em disparos de e-mail marketing para expositores e visitantes",
        "10 credenciais VIP com acesso ao Lounge de Networking",
        "Ação promocional e sorteios patrocinados nas redes sociais da feira"
      ]
    },
    {
      id: "junior",
      name: "Cota Júnior",
      badge: "Entrada Estratégica",
      price: 4500,
      availableSlots: 10,
      filledSlots: 4,
      description: "Excelente para pet shops locais, clínicas especializadas, adestradores e fornecedores regionais de insumos.",
      benefits: [
        "Estande modular de 15m² completo com tomada e iluminação",
        "Logotipo na seção de apoiadores do site oficial e guia do visitante",
        "Menção especial nos Stories e Reels oficiais do evento",
        "05 credenciais de expositor para equipe de vendas",
        "Direito de comercialização direta de produtos no estande"
      ]
    }
  ],

  municipalChecklist: [
    {
      id: "mun-1",
      category: "Prefeitura & Fazenda",
      title: "Alvará Provisório de Evento (SEDEC / Fazenda)",
      description: "Protocolo do pedido de alvará temporário para feira comercial com base no Código de Posturas de Campos dos Goytacazes.",
      status: "em_andamento",
      responsible: "André (Manfertech)",
      priority: "alta",
      deadline: "30 dias antes do evento",
      notes: "Facilitado pelo novo diálogo aberto com a atual gestão municipal."
    },
    {
      id: "mun-2",
      category: "Causa Animal & Saúde",
      title: "Termo de Cooperação CCZ (Centro de Controle de Zoonoses)",
      description: "Cessão do Castramóvel municipal e ponto de vacinação antirrábica gratuita durante os 3 dias.",
      status: "concluido",
      responsible: "Maycon Douglas & Equipe",
      priority: "alta",
      deadline: "Alinhado",
      notes: "Forte aceitação pela Secretaria de Saúde por atingir meta de saúde pública."
    },
    {
      id: "mun-3",
      category: "Espaço & Solo",
      title: "Cessão e Locação do Parque de Exposições",
      description: "Contrato de reserva das áreas de pavilhão, arena aberta de agility e praça de alimentação na Fundação Rural.",
      status: "concluido",
      responsible: "André",
      priority: "alta",
      deadline: "Garantido",
      notes: "Área de fácil acesso com estacionamento para mais de 800 veículos."
    },
    {
      id: "mun-4",
      category: "Segurança & Trânsito",
      title: "Apoio Guarda Municipal e Batalhão de Trânsito",
      description: "Esquema especial de tráfego, sinalização de entrada/saída na Av. Pres. Vargas e viaturas preventivas.",
      status: "em_andamento",
      responsible: "André",
      priority: "media",
      deadline: "15 dias antes",
      notes: "Ofício já redigido para despacho governamental."
    },
    {
      id: "mun-5",
      category: "Turismo & Fomento",
      title: "Inclusão no Calendário Turístico e Oficial do Município",
      description: "Chancela oficial da Prefeitura que apoia na isenção de taxas e atração de público regional.",
      status: "em_andamento",
      responsible: "Maycon Douglas",
      priority: "media",
      deadline: "Em tramitação",
      notes: "Apresentação institucional enviada ao Secretário de Desenvolvimento."
    }
  ],

  biosafetyChecklist: [
    {
      id: "bio-1",
      title: "Nomeação de Médico Veterinário Responsável Técnico (RT)",
      description: "Registro de Anotação de Responsabilidade Técnica (ART) junto ao CRMV-RJ para o evento.",
      status: "concluido",
      doctorName: "Dr. Roberto Mendonça - CRMV-RJ 14.892",
      notes: "Responsável pelo plantão do CAEX (12h às 17h) e triagem de animais."
    },
    {
      id: "bio-2",
      title: "Credenciamento para Emissão e Recepção de GTAs",
      description: "Guia de Trânsito Animal obrigatória para circulação de aves e animais oriundos de outros municípios/estados.",
      status: "em_andamento",
      notes: "Modelado conforme instruções de defesa agropecuária."
    },
    {
      id: "bio-3",
      title: "Triagem Sanitária e Atestados Vacinais",
      description: "Exigência de atestado de saúde expedido até 15 dias antes e comprovante de vacinas antirrábica e polivalente.",
      status: "em_andamento",
      notes: "Checklist com termo de responsabilidade civil para cada tutor."
    },
    {
      id: "bio-4",
      title: "Instalação de Sala de Isolamento e Protocolo de Desinfecção",
      description: "Espaço reservado para manejo emergencial de animais com sinais clínicos infecciosos e desinfecção periódica.",
      status: "pendente",
      notes: "Equipamentos de proteção individual (EPIs) e produtos sanitizantes homologados."
    }
  ],

  infrastructureSpecs: {
    electrical: {
      voltage: "220V Monofásica e 380V Trifásica (60Hz)",
      plugType: "Tomada Industrial Tipo Steck 5 Pinos / 32A com Terra às 6h",
      regulations: "Conformidade obrigatória com NBR 5410 e NR-10",
      cables: "Cabos novos isolamento 750V ou Cabo PP. Proibido cabo paralelo e benjamins",
      breakerBoxes: "Quadros elétricos de distribuição (CD) externos a 1,80m do piso com disjuntor DR"
    },
    fireSafety: {
      status: "Projeto de Prevenção e Combate a Incêndio aprovado (AVCB)",
      extinguishersCount: 28,
      emergencyExits: 4,
      hallwayWidthMin: "3,00 metros desobstruídos"
    },
    boothsBreakdown: [
      { type: "Grande (Especial)", size: "60m² a 80m²", total: 6, booked: 2, pricePerUnit: 18000 },
      { type: "Médio", size: "30m² (6x5m)", total: 24, booked: 9, pricePerUnit: 9500 },
      { type: "Pequeno (Modular)", size: "15m² (5x3m)", total: 30, booked: 11, pricePerUnit: 5200 }
    ]
  },

  marketingFunnel: {
    stages: [
      {
        stage: "1. Aquisição",
        focus: "Meta Ads, Google Ads, TikTok e Relações Públicas Regionais",
        kpi: "100.000 pessoas alcançadas no Norte Fluminense",
        status: "Ativo",
        metrics: "R$ 0,18 CPC médio • 42.000 visualizações de vídeo"
      },
      {
        stage: "2. Ativação",
        focus: "Landing Page interativa, pré-cadastro com ingresso gratuito e sorteios",
        kpi: "5.000 leads cadastrados com número de WhatsApp",
        status: "Ativo",
        metrics: "1.840 inscritos confirmados (36,8% da meta)"
      },
      {
        stage: "3. Retenção",
        focus: "Comunidade VIP no WhatsApp e e-mails com contagem regressiva",
        kpi: "80% de taxa de abertura e presença de público",
        status: "Em andamento",
        metrics: "4 grupos lotados de tutores engajados"
      },
      {
        stage: "4. Receita",
        focus: "Venda de Cotas de Patrocínio, Ingressos VIP e Estandes Comerciais",
        kpi: "R$ 135.000 em patrocínios + R$ 180.000 em estandes",
        status: "Em negociação",
        metrics: "R$ 54.000 já faturados / confirmados"
      },
      {
        stage: "5. Recomendação",
        focus: "Concursos pet compartilháveis nas redes e indicação de amigos",
        kpi: "Meta de 35% de novos cadastros gerados organicamente",
        status: "Planejado",
        metrics: "Sorteio do Kit Pet Lover com mais de 800 menções"
      }
    ],
    sixWeeksPlan: [
      { week: 1, theme: "Lançamento e Expectativa", focus: "Teasers, anúncio oficial da data e abertura de inscrições gratuitas" },
      { week: 2, theme: "Detalhamento da Feira", focus: "Apresentação dos espaços de adoção, exóticos, agility e brinquedos" },
      { week: 3, theme: "Engajamento com o Público", focus: "Concurso 'Seu Pet na Feira', relatos de adoções e enquetes no Instagram" },
      { week: 4, theme: "Destaque dos Expositores", focus: "Apresentação das marcas parceiras, lançamentos e descontos exclusivos" },
      { week: 5, theme: "Contagem Regressiva", focus: "Divulgação do mapa oficial, horários de palestras e lembretes de vacinação" },
      { week: 6, theme: "Últimos Ajustes & Ao Vivo", focus: "Bastidores da montagem na Fundação Rural e cobertura em tempo real" }
    ]
  },

  emailCadence: [
    {
      id: 1,
      day: "Segunda-feira",
      subject: "Descubra a Maior Oportunidade no Mercado Pet do Norte Fluminense! 🐾",
      tag: "Apresentação da Oportunidade",
      content: "Olá [Nome do Destinatário],\n\nO mercado pet brasileiro ultrapassou R$ 70 bilhões em faturamento, e Campos dos Goytacazes receberá o evento mais aguardado do setor: a Feira & Expo Eu Amo Pet.\n\nEssa é a oportunidade definitiva para:\n- Ampliar o faturamento e visibilidade da sua marca;\n- Conectar-se com mais de 5.000 tutores e apaixonados por animais;\n- Posicionar sua empresa ao lado da maior causa animal da região.\n\nPreparamos uma apresentação exclusiva para sua empresa. Que tal reservarmos 15 minutos esta semana para um alinhamento?"
    },
    {
      id: 2,
      day: "Quarta-feira",
      subject: "Por que sua empresa não pode ficar de fora deste marco? 🐕",
      tag: "Benefícios Comerciais",
      content: "Olá [Nome do Destinatário],\n\nVocê sabia que mais de 48% dos lares brasileiros possuem pelo menos um animal de estimação? Na Feira Eu Amo Pet, seu negócio estará no epicentro do consumo qualificado da região.\n\nBenefícios exclusivos para patrocinadores:\n✔️ Estande exclusivo em corredor de alto fluxo;\n✔️ Exposição em massa nas campanhas digitais e outdoors da cidade;\n✔️ Contato direto com tomadores de decisão, veterinários e tutores fiéis.\n\nPodemos enviar o detalhamento dos espaços disponíveis?"
    },
    {
      id: 3,
      day: "Sexta-feira",
      subject: "Grandes marcas já estão garantindo presença. E a sua empresa? 🐾",
      tag: "Prova Social & Escassez",
      content: "Olá [Nome do Destinatário],\n\nCom a confirmação da parceria com o poder público e as principais instituições da causa animal, a procura por estandes acelerou significativamente esta semana.\n\nRestam poucas posições estratégicas na planta baixa do pavilhão principal. Não deixe sua marca perder a prioridade de escolha do espaço.\n\nClique no link abaixo para falarmos diretamente no WhatsApp da coordenação comercial!"
    },
    {
      id: 4,
      day: "Segunda-feira (Follow-up)",
      subject: "Última chamada: Reserva de estandes para a Feira Eu Amo Pet",
      tag: "Call to Action Direto",
      content: "Olá [Nome do Destinatário],\n\nEstamos fechando a grade oficial do mapa de patrocinadores desta edição. Queremos muito ter sua marca representada com o destaque que ela merece.\n\nSe tiver 5 minutos hoje, podemos fazer uma chamada rápida para apresentar a melhor condição disponível para o seu porte de negócio."
    }
  ],

  attractionsList: [
    {
      id: "desfiles",
      title: "Concursos e Desfiles de Pets",
      category: "Entretenimento",
      description: "Desfiles temáticos de fantasias, simpatia e melhor relacionamento tutor-pet, com premiação oficial e troféus.",
      image: "/assets/gallery/Leonardo_Diffusion_XL_An_elegant_pet_fashion_show_runway_with_0.jpg",
      highlight: "Troféus e Kits Exclusivos"
    },
    {
      id: "adocao",
      title: "Espaço Adote um Amor",
      category: "Causa Animal",
      description: "Área ampla e climatizada em parceria com o CCZ e ONGs de Campos, promovendo a adoção ética e consciente de cães e gatos.",
      image: "/assets/gallery/Leonardo_Diffusion_XL_An_engaging_pet_adoption_area_featuring_1.jpg",
      highlight: "Meta: 150 vidas transformadas"
    },
    {
      id: "exoticos",
      title: "Espaço Animais Exóticos & Educação",
      category: "Conhecimento",
      description: "Exibição educativa e segura com biólogos e veterinários de répteis, serpentes e pequenos mamíferos devidamente autorizados.",
      image: "/assets/gallery/Leonardo_Diffusion_XL_An_interactive_space_showcasing_exotic_a_0.jpg",
      highlight: "Biólogos e Educadores Ambientais"
    },
    {
      id: "agility",
      title: "Arena Agility & Playground Pet",
      category: "Lazer Ativo",
      description: "Circuito de obstáculos com instrutores profissionais para seu cão gastar energia e brincar com total segurança.",
      image: "/assets/gallery/Leonardo_Diffusion_XL_An_outdoor_dog_agility_competition_arena_0.jpg",
      highlight: "Monitores Especializados"
    },
    {
      id: "workshops",
      title: "Seminário VET 360 & Workshops",
      category: "Capacitação",
      description: "Palestras com médicos veterinários renomados, dicas de adestramento e boas práticas de gestão para lojistas.",
      image: "/assets/gallery/Leonardo_Diffusion_XL_A_bright_and_interactive_workshop_for_ch_0.jpg",
      highlight: "Certificado de Participação"
    },
    {
      id: "castramovel",
      title: "Castramóvel & Vacinação Gratuita",
      category: "Saúde Pública",
      description: "Ação de utilidade pública em parceria com a Prefeitura, oferecendo agendamento e orientações sanitárias aos tutores.",
      image: "/assets/gallery/Leonardo_Diffusion_XL_A_clean_and_professional_visual_represen_0.jpg",
      highlight: "Apoio Municipal Oficial"
    }
  ],

  galleryImages: [
    {
      id: 1,
      title: "Passarela de Desfile Pet",
      category: "Desfiles",
      src: "/assets/gallery/Leonardo_Diffusion_XL_An_elegant_pet_fashion_show_runway_with_0.jpg",
      caption: "Concurso de melhor fantasia e simpatia canina"
    },
    {
      id: 2,
      title: "Área de Adoção Humanizada",
      category: "Adoção",
      src: "/assets/gallery/Leonardo_Diffusion_XL_An_engaging_pet_adoption_area_featuring_1.jpg",
      caption: "Espaço de acolhimento em parceria com ONGs e CCZ"
    },
    {
      id: 3,
      title: "Espaço de Animais Exóticos",
      category: "Exóticos",
      src: "/assets/gallery/Leonardo_Diffusion_XL_An_interactive_space_showcasing_exotic_a_0.jpg",
      caption: "Apresentação didática e educação ambiental"
    },
    {
      id: 4,
      title: "Arena Agility ao Ar Livre",
      category: "Agility",
      src: "/assets/gallery/Leonardo_Diffusion_XL_An_outdoor_dog_agility_competition_arena_0.jpg",
      caption: "Competição amigável e treinamento interativo"
    },
    {
      id: 5,
      title: "Workshop de Cuidados Pet",
      category: "Educação",
      src: "/assets/gallery/Leonardo_Diffusion_XL_A_bright_and_interactive_workshop_for_ch_0.jpg",
      caption: "Sessões dinâmicas de primeiros socorros e nutrição"
    },
    {
      id: 6,
      title: "Pavilhão e Estandes de Expositores",
      category: "Exposição",
      src: "/assets/gallery/Leonardo_Diffusion_XL_A_clean_and_professional_design_showcasi_0.jpg",
      caption: "Estrutura moderna planejada para máxima visibilidade"
    },
    {
      id: 7,
      title: "Afluência e Movimentação Familiar",
      category: "Público",
      src: "/assets/gallery/Leonardo_Diffusion_XL_A_busy_pet_event_with_a_large_crowd_of_p_0.jpg",
      caption: "Ambiente pet-friendly seguro para toda a família"
    },
    {
      id: 8,
      title: "Planta Baixa e Cenografia 3D",
      category: "Estrutura",
      src: "/assets/gallery/Leonardo_Diffusion_XL_A_clear_floor_plan_illustration_of_the_e_0.jpg",
      caption: "Distribuição inteligente de estandes e corredores amplos"
    }
  ]
};

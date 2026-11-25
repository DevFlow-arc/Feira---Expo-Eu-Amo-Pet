# 🐾 Product Requirements Document (PRD)
## Plataforma Feira & Expo Eu Amo Pet 2027

---

### Metadados do Documento
- **Projeto:** Plataforma Digital Oficial – Feira & Expo Eu Amo Pet 2027
- **Versão:** 1.0.0
- **Status:** Em Produção / Homologado
- **Data de Aprovação:** Novembro de 2026
- **Responsável Geral:** Maycon Douglas (Direção Comercial & Executiva)
- **Organização:** Feira & Expo Eu Amo Pet
- **Ambiente de Produção:** [feira-eu-amo-pet.vercel.app](https://feira-eu-amo-pet.vercel.app)
- **Repositório Oficial:** [github.com/DevFlow-arc/Feira---Expo-Eu-Amo-Pet](https://github.com/DevFlow-arc/Feira---Expo-Eu-Amo-Pet)

---

## 1. Sumário Executivo & Visão Geral

A **Feira & Expo Eu Amo Pet 2027** é o principal e mais abrangente ecossistema de entretenimento, negócios, capacitação e inovação do mercado pet em **Macaé, Campos dos Goytacazes e Região dos Lagos**. 

A **Plataforma Digital Oficial** foi desenvolvida para atender a duas missões essenciais e simultâneas:
1. **Portal Público B2C (Landing Page Festival):** Proporcionar uma experiência visual imersiva e de alto impacto para tutores e amantes de pets, promovendo atrações, credenciamento antecipado gratuito, conscientização social e adoção responsável.
2. **Plataforma B2B & Dashboard Comercial:** Operar como hub estratégico de captação de expositores, comercialização de cotas de patrocínio, visualização interativa da planta de estandes, download de dossiês e manuais técnicos e gestão operacional do evento.

---

## 2. Contexto de Mercado & Justificativa Estratégica

### 2.1 O Mercado Pet no Brasil e no Mundo
- O Brasil consolidou-se como o **3º maior mercado pet global em faturamento**, com crescimento consistente de dois dígitos ao ano.
- Mais de 60% dos orçamentos familiares dedicados aos pets são direcionados a produtos premium, saúde preventiva, alimentação natural e serviços especializados.

### 2.2 O Polo Macaé & Região dos Lagos
- Região com alto poder aquisitivo per capita, impulsionada pelo ecossistema de energia, turismo e serviços.
- Carência de eventos estruturados em grande escala que unam toda a cadeia produtiva (fabricantes, distribuidores, médicos-veterinários, lojistas e tutores).
- **Local Escolhido:** Parque de Exposições / Fundação Rural, com capacidade para mais de 15.000 visitantes e centenas de animais simultaneamente.

---

## 3. Personas & Jornadas do Usuário

| Persona | Perfil | Principal Objetivo na Plataforma | Jornada Crítica |
|---|---|---|---|
| **Ana Carolina (Tutor B2C)** | 32 anos, tutora de 2 cães, apaixonada por eventos pet-friendly. | Descobrir a programação, atrações gratuitas e garantir ingressos antecipados. | Acessa Hero -> Vê Atrações -> Clica em "Ingresso Antecipado" -> Preenche modal -> Recebe confirmação imediata. |
| **Dr. Roberto (Médico Veterinário B2B)** | 45 anos, proprietário de clínica veterinária e hospital pet. | Conhecer a programação técnico-científica e workshops de saúde animal. | Navega até a seção de Atrações e Manuais -> Avalia grade de palestras -> Inscreve sua equipe. |
| **Carlos Mendes (Diretor Comercial B2B)** | 48 anos, fabricante de rações e acessórios premium. | Adquirir cota de patrocínio ou reservar estande estratégico na feira. | Acessa "Dossiê 2027" -> Baixa o PDF oficial -> Clica em "Reserve seu Estande" -> Visualiza planta -> Solicita proposta comercial. |
| **Maycon Douglas (Administrador / Operações)** | Gestão comercial, operacional e de infraestrutura. | Acompanhar ocupação da planta, leads comerciais e métricas institucionais. | Acessa `/login` -> Entra no Dashboard -> Visualiza mapa de estandes, pipeline de patrocinadores e biossegurança. |

---

## 4. Arquitetura do Sistema & Módulos da Plataforma

```
┌────────────────────────────────────────────────────────────────────────┐
│                   PLATAFORMA FEIRA & EXPO EU AMO PET                   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
           ┌────────────────────────┴────────────────────────┐
           ▼                                                 ▼
┌─────────────────────────────────┐       ┌─────────────────────────────────┐
│     PORTAL PÚBLICO (LANDING)    │       │     DASHBOARD ADMINISTRATIVO    │
│  - Hero Canônica Tropical       │       │  - Autenticação e Segurança     │
│  - 15 Seções Modulares Ativas   │       │  - Gestão de Estandes / Planta  │
│  - Modal de Leads Interativo    │       │  - Painel Comercial & Leads     │
│  - Downloads de Dossiê e Manuais│       │  - Biossegurança & Infra        │
│  - Toast Notifications          │       │  - Marketing & Programação      │
└─────────────────────────────────┘       └─────────────────────────────────┘
```

### 4.1 Módulo 1: Portal Público (Landing Page Festival)
Localizado em `src/landing/sections/`, organizado em 15 seções em ordem de narrativa e conversão:
1. **`FestivalHero`:** Header integrado com navegação desktop, logotipo oficial transparente, coqueiro tropical responsivo, colagem da multidão recortada com vista panorâmica das montanhas, mascote Gato com boné e óculos rosa na proporção oficial de 15vw e pills de métricas (+15.000 visitantes, 8 atrações, 3 dias).
2. **`FestivalAbout`:** Apresentação conceitual do evento em Macaé e Região dos Lagos, colagens vintage de pets e destaques de gastronomia, playground e desfiles.
3. **`FestivalPurpose`:** Pilares institucionais: Missão, Visão 2027 e Valores essenciais com estética de adesivos e carimbos.
4. **`FestivalMercadoPet`:** Painel estatístico sobre o mercado nacional e regional, volume de negócios e oportunidades.
5. **`FestivalTemTudo`:** Grid visual demonstrando a diversidade do evento (moda, nutrição, adoção, estética, saúde).
6. **`FestivalAtracoes`:** Cards detalhados com as 8 grandes atrações confirmadas (Concursos, Desfiles, Workshops VET, Área Kids, Agility).
7. **`FestivalEdicoes`:** Linha do tempo dos polos realizados e crescimento histórico.
8. **`FestivalInfraestrutura`:** Detalhamento da arena coberta, praça de alimentação, estacionamento e acessibilidade.
9. **`FestivalVideo`:** Player de vídeo com teaser e cobertura oficial de edições passadas.
10. **`FestivalPatrocinio`:** Apresentação das Cotas de Patrocínio (Diamante, Ouro, Prata, Bronze) e benefícios de marca.
11. **`FestivalApoiadores`:** Grade de logotipos de parceiros institucionais, mídia e órgãos públicos.
12. **`FestivalManuaisSection`:** Acesso direto ao regulamento de montagem, biossegurança sanitária e orientações ao expositor.
13. **`FestivalEbook`:** Download interativo do Dossiê Oficial 2027 e Mídia Kit em PDF.
14. **`FestivalFaq`:** Accordion expansível com as perguntas e respostas mais frequentes de visitantes e marcas.
15. **`FestivalContato`:** Cards oficiais de atendimento: WhatsApp direto (22) 99788-5784, e-mail comercial e Instagram oficial `@euamopetfeiraexpo`.
16. **`FestivalFooter`:** Rodapé com créditos institucionais, links rápidos de ancoragem e direitos autorais.

### 4.2 Módulo 2: Motor de Inscrição & Conversão de Leads
- **Modal Unificado:** Modal com abas inteligentes (`Visitante` vs `Expositor / Patrocinador`).
- **Validação em Tempo Real:** Validação de formato de WhatsApp com DDD e e-mail corporativo.
- **Feedback ao Usuário:** Notificações flutuantes customizadas via componente `Toast`.

### 4.3 Módulo 3: Dashboard Administrativo & Comercial
Localizado em `src/dashboard/`:
- **`OverviewView`:** Indicadores-chave de desempenho (leads captados, estandes reservados, previsão de faturamento).
- **`CommercialView`:** Visualizador dinâmico da planta de estandes com status em tempo real (Disponível, Reservado, Confirmado).
- **`BiosafetyView`:** Checklist de exigências sanitárias e controle veterinário para animais na feira.
- **`InfrastructureView`:** Gestão técnica de montagem, elétrica, credenciamento e segurança patrimonial.
- **`MarketingView`:** Acompanhamento de campanhas de mídia, alcance no Instagram e materiais publicitários.
- **`ProgramView`:** Cronograma de horários dos palcos e palestras técnicas.
- **`SettingsView`:** Parâmetros gerais da edição e configuração de dados do evento.

### 4.4 Módulo 4: Autenticação & Proteção de Rotas
Localizado em `src/auth/`:
- **`AuthContext`:** Gerenciamento de estado de sessão e permissões.
- **`ProtectedRoute`:** Proteção das rotas `/dashboard/*`, redirecionando usuários não autenticados para `/login`.

---

## 5. Requisitos Funcionais (RF)

| ID | Requisito Funcional | Módulo | Prioridade |
|---|---|---|---|
| **RF01** | O sistema deve exibir a Landing Page com carregamento rápido e design canônico tropical. | Landing | P0 |
| **RF02** | O usuário deve conseguir solicitar ingresso gratuito antecipado via modal com nome, WhatsApp e e-mail. | Conversão | P0 |
| **RF03** | O expositor deve conseguir manifestar interesse comercial informando empresa, porte e cota pretendida. | Conversão | P0 |
| **RF04** | O sistema deve permitir o download do Dossiê 2027 e dos Manuais Técnicos do Expositor. | Landing | P1 |
| **RF05** | O sistema deve direcionar o usuário para o Instagram oficial `@euamopetfeiraexpo` em todas as chamadas de redes sociais. | Social | P0 |
| **RF06** | O sistema deve permitir contato direto via WhatsApp comercial pré-configurado com mensagem contextual. | Contato | P0 |
| **RF07** | O sistema deve proteger as rotas administrativas exigindo login de administrador. | Auth | P0 |
| **RF08** | O dashboard deve renderizar a planta baixa interativa de estandes mapeada a partir de `floorPlanData.js`. | Dashboard | P1 |
| **RF09** | O administrador deve conseguir visualizar detalhes e status de cada estande comercial. | Dashboard | P1 |
| **RF10** | A navegação da landing deve suportar rolagem suave por âncoras (`#o-festival`, `#mercado`, `#atracoes`, `#contato`). | Landing | P1 |

---

## 6. Requisitos Não Funcionais (RNF)

| ID | Requisito Não Funcional | Critério de Aceite |
|---|---|---|
| **RNF01** | **Performance (Core Web Vitals)** | LCP < 2.5s, FID < 100ms, CLS < 0.1 em conexões 4G móveis. |
| **RNF02** | **Responsividade Integral** | Comportamento fluido e adaptativo de 320px (smartphones) a 2560px (monitores Ultrawide). |
| **RNF03** | **Compatibilidade Cross-Browser** | Suporte total aos motores Chromium (Chrome/Edge/Brave), WebKit (Safari iOS/macOS) e Gecko (Firefox). |
| **RNF04** | **Segurança & Credenciais** | Nenhuma chave de API ou segredo hardcoded no código; uso exclusivo de variáveis `.env`. |
| **RNF05** | **Build & Modularidade** | Build Vite sem erros ou warnings de JSX/CSS; bundle compactado com gzip. |
| **RNF06** | **Ergonomia Visual Anti-Slop** | Proporções fiéis à identidade visual da Feira Eu Amo Pet (sem templates genéricos, cores e tipografia proprietárias). |
| **RNF07** | **Acessibilidade (a11y)** | Rótulos `aria-label`, contraste adequado de texto sobre fundos coloridos e navegação funcional por teclado. |

---

## 7. Stack Tecnológica & Especificação de Infraestrutura

- **Linguagem Principal:** JavaScript (ESNext / JSX)
- **Framework Frontend:** React 18
- **Bundler & Build Tool:** Vite 5
- **Roteamento:** React Router DOM 6
- **Estilização:** Tailwind CSS v3 + CSS Canônico Customizado (`festivalpet.css`)
- **Ícones:** Lucide React
- **Backend Operacional:** Node.js + Express (em `backend/`)
- **Hospedagem & Deploy:** Vercel (Frontend SPA + Serverless functions)
- **Controle de Versão:** Git + GitHub (Repositório Privado / Branch `main`)

---

## 8. Hierarquia e Organização de Arquivos

```
src/
├── auth/                       # Contexto e telas de autenticação
├── components/                 # Componentes globais compartilhados
│   ├── Layout/                 # Header e Footer da aplicação
│   └── ui/                     # Toast, Modais, Ícones vetoriais
├── context/                    # Estado global da aplicação (AppContext)
├── dashboard/                  # Telas e layouts do painel administrativo
│   └── views/                  # Visões operacionais (Comercial, Overview, etc.)
├── data/                       # Datasets estáticos, planta baixa e mock data
├── landing/                    # Módulo do portal público
│   ├── LandingPage.jsx         # Orquestrador oficial da landing page
│   ├── sections/               # 15 seções ativas em produção
│   └── legacy/                 # 18 seções legadas arquivadas com segurança
└── styles/                     # Folha de estilos central canônica
```

---

## 9. Roadmap de Evolução (2026 - 2027)

- **Fase 1 (Novembro/2026) - Concluída:** Refatoração da Hero canônica, integração de links de redes sociais (`@euamopetfeiraexpo`), organização de pastas e documentação PRD/README.
- **Fase 2 (Q1/2027):** Integração com gateway de CRM (armazenamento automático de leads em banco de dados).
- **Fase 3 (Q2/2027):** Emissão de vouchers de ingressos com QR Code individualizado para leitura na portaria.
- **Fase 4 (Q3/2027):** Módulo de contratação digital de estandes com assinatura eletrônica de contratos para expositores.
- **Fase 5 (Data do Evento em 2027):** Modo "Evento Ao Vivo" com transmissão de palestras e mapa de localização de estandes em tempo real para os visitantes.

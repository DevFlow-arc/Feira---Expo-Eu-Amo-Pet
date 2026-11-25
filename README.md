<div align="center">

# 🐾 Feira & Expo Eu Amo Pet 2027
### O Maior Encontro Pet de Macaé, Campos e Região dos Lagos • RJ

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deploy](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)](https://feira-eu-amo-pet.vercel.app)
[![License](https://img.shields.io/badge/License-Proprietary-pink?style=for-the-badge)](LICENSE)

**Plataforma Digital Oficial de Experiência, Credenciamento e Gestão Comercial**

[🌐 Ver Homologação Online](https://feira-eu-amo-pet.vercel.app) • [📄 Ler PRD Oficial](docs/PRD.md) • [📸 Instagram Oficial (@euamopetfeiraexpo)](https://www.instagram.com/euamopetfeiraexpo/)

---

</div>

## 📌 Visão Geral do Projeto

A **Plataforma Feira & Expo Eu Amo Pet 2027** é o hub digital central do evento mais relevante do mercado pet no interior do estado do Rio de Janeiro. 

Desenvolvida com foco em **alta fidelidade visual (anti-slop)**, ergonomia responsiva e alta performance, a aplicação entrega simultaneamente:
1. **Portal Público do Festival (Landing Page):** Experiência narrativa com colagens, estética tropical canônica de papel rasgado, mascote proprietário, agenda de atrações, download de dossiês e credenciamento gratuito para visitantes e marcas.
2. **Dashboard Operacional & Comercial:** Painel administrativo interno para a comissão organizadora gerenciar reservas de estandes em planta baixa interativa, controle sanitário de biossegurança, infraestrutura de montagem e métricas de patrocínio.

---

## 🗂️ Nova Estrutura & Hierarquia de Pastas

A arquitetura de arquivos foi refatorada e modularizada seguindo as melhores práticas de Clean Code e Domain-Driven Design:

```
plataforma-feira-pet/
├── docs/                           # 📄 Documentação Oficial do Projeto
│   └── PRD.md                      # Product Requirements Document detalhado
├── public/
│   └── assets/
│       ├── branding/               # Logotipos oficiais transparentes
│       └── festival/               # Fotos oficiais, recortes, mascotes e colagens
├── src/
│   ├── auth/                       # 🔐 Autenticação e Rotas Protegidas
│   │   ├── AuthContext.jsx         # Provedor global de autenticação
│   │   ├── LoginPage.jsx           # Tela de acesso administrativo
│   │   └── ProtectedRoute.jsx      # Guardião de rotas privadas
│   ├── components/                 # 🧩 Componentes Compartilhados
│   │   ├── Layout/                 # Header, Footer global
│   │   └── ui/                     # Toast, LightboxModal, SVGs proprietários
│   ├── context/                    # 🌐 Estado Global da Aplicação
│   │   └── AppContext.jsx          # Configurações do evento e notificações
│   ├── dashboard/                  # 📊 Painel Administrativo Operacional
│   │   ├── DashboardLayout.jsx     # Layout mestre com barra lateral
│   │   ├── Sidebar.jsx             # Navegação interna do dashboard
│   │   └── views/                  # 8 Visões operacionais (Comercial, Infra, etc.)
│   ├── data/                       # 💾 Datasets e Modelagem de Dados
│   │   ├── floorPlanData.js        # Mapeamento interativo dos estandes
│   │   └── initialData.js          # Base unificada de atrações e informações
│   ├── landing/                    # 🎪 Portal Público (Landing Page)
│   │   ├── LandingPage.jsx         # Orquestrador oficial da landing
│   │   ├── sections/               # ⚡ 15 Seções Ativas em Produção
│   │   │   ├── FestivalHero.jsx    # Hero Canônica Tropical
│   │   │   ├── FestivalAbout.jsx   # Conceito do evento e colagens
│   │   │   ├── FestivalPurpose.jsx # Missão, Visão e Valores
│   │   │   ├── FestivalMercadoPet.jsx # Dados do mercado Macaé/Região
│   │   │   ├── FestivalTemTudo.jsx # Diversidade do festival
│   │   │   ├── FestivalAtracoes.jsx # 8 Grandes Atrações confirmadas
│   │   │   ├── FestivalEdicoes.jsx # Histórico e polos realizados
│   │   │   ├── FestivalInfraestrutura.jsx # Estrutura do Parque
│   │   │   ├── FestivalVideo.jsx   # Vídeo institucional
│   │   │   ├── FestivalPatrocinio.jsx # Cotas de patrocínio
│   │   │   ├── FestivalApoiadores.jsx # Marcas e apoiadores
│   │   │   ├── FestivalManuaisSection.jsx # Manuais técnicos do expositor
│   │   │   ├── FestivalEbook.jsx   # Download do Dossiê 2027
│   │   │   ├── FestivalFaq.jsx     # Perguntas frequentes interativas
│   │   │   ├── FestivalContato.jsx # Canais oficiais de atendimento
│   │   │   └── FestivalFooter.jsx  # Rodapé com âncoras e créditos
│   │   └── legacy/                 # 📦 18 Seções Legadas Arquivadas com Segurança
│   └── styles/                     # 🎨 Estilos Globais
│       └── festivalpet.css         # Folha canônica otimizada (4283 linhas)
├── backend/                        # 🖥️ API Opcional em Node.js / Express
│   ├── server.js                   # Servidor de serviços e webhooks
│   └── package.json
├── index.html                      # Ponto de entrada SPA com fontes Google pré-carregadas
├── package.json                    # Dependências e scripts npm
├── vite.config.js                  # Configurações do Vite
└── vercel.json                     # Regras de roteamento SPA da Vercel
```

---

## 🚀 Instalação e Execução Local

### Pré-requisitos
- **Node.js:** Versão `>= 18.0.0`
- **npm:** Versão `>= 9.0.0`

### 1. Clonar o Repositório
```bash
git clone https://github.com/DevFlow-arc/Feira---Expo-Eu-Amo-Pet.git
cd plataforma-feira-pet
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Rodar em Ambiente de Desenvolvimento
```bash
npm run dev
```
Acesse a aplicação no seu navegador em `http://localhost:5173`.

### 4. Compilar para Produção (Build)
```bash
npm run build
```
O Vite irá validar a integridade dos módulos, otimizar o bundle e gerar os artefatos estáticos na pasta `dist/`.

### 5. Pré-visualizar o Build de Produção Localmente
```bash
npm run preview
```

---

## 🎨 Design System & Identidade Visual

A plataforma utiliza um sistema de design proprietário e intencional, evitando clichês visuais genéricos de IA:

### Paleta de Cores Oficial
| Cor | Hex | Aplicação Principal |
|:---|:---|:---|
| **Rosa Festival** | `#f9418c` | CTAs de conversão, badges de destaque, adesivos e detalhes |
| **Azul Marinho Nobre** | `#202f6b` | Tipografia principal, botões de ação e títulos |
| **Verde Lima Tropical** | `#cbe33d` | Tags de ano, cards de dias e contrastes alegres |
| **Roxo Real** | `#8c43dc` | Cards de público, badges de atrações |
| **Bege Papel Kraft** | `#f8f1e5` | Fundo canônico de colagem estilo papel envelhecido |
| **Amarelo Sol** | `#ffc600` | Estrelas decorativas e elementos de calor |

### Tipografia
- **Títulos e Destaques:** `"Protest Strike", sans-serif` & `"Anton", sans-serif`
- **Textos e Leitura:** `"Nunito", sans-serif` (600, 700, 800, 900) & `"Poppins", sans-serif`

---

## 📱 Responsividade e Ergonomia Mobile

- **Hero Canônica:** No mobile, exibe um coqueiro contínuo de borda vertical, mascote do gato perfeitamente escalonado em `clamp(135px, 38vw, 175px)` sem invadir as áreas de leitura, cards de métricas em coluna compacta e texto em formato de adesivo sem corte de palavras.
- **Desktop:** Coqueiro e folhagens tropicais nativas no fundo panorâmico, gato mascote em escala exata de 15vw com óculos e boné rosa, e espaço para as montanhas de Macaé / Rio de Janeiro visíveis atrás dos cards.

---

## 🌐 Deploy Contínuo (CI/CD)

O deploy é **100% automatizado** via integração contínua na **Vercel**:
- Todo `push` ou merge aceito na branch `main` dispara automaticamente o pipeline de build e deploy em segundos.
- URL Canônica de Produção: [feira-eu-amo-pet.vercel.app](https://feira-eu-amo-pet.vercel.app)

---

## 📞 Contatos Oficiais & Redes Sociais

- **Instagram:** [@euamopetfeiraexpo](https://www.instagram.com/euamopetfeiraexpo/)
- **WhatsApp Oficial:** [(22) 99788-5784](https://wa.me/5522997885784)
- **E-mail Comercial:** comercial@feiraeuamopet.com.br
- **Local:** Macaé & Região dos Lagos / Parque de Exposições • Rio de Janeiro

---

<div align="center">
<sub>Feira & Expo Eu Amo Pet 2027 • Todos os direitos reservados.</sub>
</div>

# Feira & Expo Eu Amo Pet 2027 • Macaé & Região dos Lagos

Plataforma oficial da **Feira & Expo Eu Amo Pet 2027** — Macaé e Região dos Lagos, RJ.
Inclui a Landing Page de alta fidelidade visual (estilo festivalpet.com.br) e o Painel Operacional (Dashboard) para gestão de estandes, cotas de patrocínio, sanidade animal e programação.

---

## 🚀 Arquitetura & Deploy Duplo na Vercel

O projeto foi arquitetado para suportar **dois deploys independentes a partir do mesmo repositório**:

| Projeto Vercel | Domínio Sugerido | Finalidade | Comportamento na Raiz (`/`) |
| :--- | :--- | :--- | :--- |
| **Landing Page** | `feira-eu-amo-pet.vercel.app` | Site oficial público para visitantes, marcas e expositores | Exibe a Landing Page completa |
| **Dashboard Operacional** | `dashboard-feira-eu-amo-pet.vercel.app` | Painel de controle interno da comissão organizadora | Redireciona automaticamente para `/login` ou `/dashboard` |

### Detecção Inteligente de Projeto
O roteador em `src/App.jsx` detecta automaticamente se a instância é o Dashboard ou a Landing Page através de:
1. Variável de ambiente: `VITE_APP_MODE=dashboard` (ou `landing`)
2. Ou automaticamente via nome do domínio (qualquer domínio contendo `dashboard`, `painel` ou `admin` ativa o modo painel imediatamente).

---

## 📦 Estrutura de Pastas

```
plataforma-feira-pet/
├── vercel.json                 # Roteamento SPA oficial para Vercel
├── package.json
├── vite.config.js
├── index.html
├── public/
│   ├── assets/
│   │   ├── branding/           # Logos oficiais transparentes e ícones vetoriais
│   │   ├── festival/           # Colagens, colunas e fotos de alta fidelidade
│   │   └── docs/               # Capas renderizadas dos e-books em alta resolução
│   └── docs/                   # PDFs oficiais (Dossiê Comercial e Apresentação Geral)
├── src/
│   ├── auth/                   # Autenticação e proteção de rotas
│   ├── components/             # Componentes reutilizáveis (ex: BrandHeartPaw SVG)
│   ├── context/                # Estado global (AppContext)
│   ├── data/                   # Base de dados unificada (initialData.js)
│   ├── dashboard/              # Painel Operacional da equipe
│   │   ├── DashboardLayout.jsx
│   │   └── views/              # 8 visões operacionais (Comercial, Sanidade, etc.)
│   ├── landing/                # Landing Page Oficial 2027
│   │   ├── FestivalHero.jsx
│   │   ├── FestivalAbout.jsx
│   │   ├── FestivalPurpose.jsx
│   │   ├── FestivalAttractions.jsx
│   │   ├── FestivalEditions.jsx
│   │   ├── FestivalVideo.jsx
│   │   ├── FestivalApoiadores.jsx
│   │   ├── FestivalEbook.jsx   # Captação de leads e distribuição de PDFs
│   │   ├── FestivalFaq.jsx
│   │   └── FestivalFooter.jsx
│   └── styles/
│       └── festivalpet.css     # Diagramação canônica 1:1
└── backend/                    # API Node.js Express (porta 3100)
```

---

## 🛠️ Comandos Locais

```bash
# Instalar dependências
npm install

# Rodar Frontend em modo de desenvolvimento
npm run dev

# Compilar para produção
npm run build
```

---

## 🔒 Variáveis de Ambiente (Opcionais)

- `VITE_APP_MODE`: defina como `dashboard` no projeto Vercel do painel, ou deixe vazio/`landing` no projeto da landing page.
- `VITE_API_URL`: URL da API backend (se hospedada separadamente).

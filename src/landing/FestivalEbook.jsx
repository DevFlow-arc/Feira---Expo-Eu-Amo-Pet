import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Award, Store, Stethoscope, HeartHandshake, Download, CheckCircle2, FileText, ArrowRight, Sparkles } from 'lucide-react';

export default function FestivalEbook() {
  const { notify, triggerCelebration } = useApp();
  const [downloaded, setDownloaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [perfil, setPerfil] = useState('patrocinador');
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    empresa: ''
  });

  // Determina o PDF correto com base no perfil selecionado
  const isB2B = perfil === 'patrocinador' || perfil === 'expositor';

  const docConfig = isB2B ? {
    tipo: 'comercial',
    titulo: 'Livro de Apresentação & Mídia Kit Comercial 2027',
    badge: 'DOSSIÊ COMERCIAL 2027 • 46 PÁGINAS',
    nomeArquivo: 'Livro-de-Apresentacao-Para-Patrocinadores-Feira-Pet-2027.pdf',
    pdfUrl: '/docs/Livro-de-Apresentacao-Para-Patrocinadores-Feira-Pet-2027.pdf',
    capaPng: '/assets/docs/capa-livro-patrocinadores.png',
    capaWebp: '/assets/docs/capa-livro-patrocinadores.webp',
    destaques: [
      'Cotas Máster, Sênior e Júnior com exclusividade',
      'Planta baixa detalhada e metragens de estandes',
      'Plano de mídia integrado (TV, Rádio, Out-of-Home)',
      'Ações promocionais no palco principal e arena'
    ],
    msgPublico: perfil === 'patrocinador'
      ? 'Dossiê estratégico com cotas exclusivas de patrocínio, ações de naming rights e estimativa de retorno de mídia de 5x o investimento.'
      : 'Guia completo para expositores com metragens de estandes, infraestrutura, fluxo de visitantes e manual comercial.'
  } : {
    tipo: 'geral',
    titulo: 'Apresentação Geral & Guia da Feira Eu Amo Pet 2027',
    badge: 'GUIA OFICIAL DO EVENTO • 23 PÁGINAS',
    nomeArquivo: 'Apresentacao-Geral-Feira-Eu-Amo-Pet-2027.pdf',
    pdfUrl: '/docs/Apresentacao-Geral-Feira-Eu-Amo-Pet-2027.pdf',
    capaPng: '/assets/docs/capa-apresentacao-geral.png',
    capaWebp: '/assets/docs/capa-apresentacao-geral.webp',
    destaques: [
      'Programação completa dos 3 dias de festival',
      'Arena Conhecimento & Congresso Veterinário Fluminense',
      'Espaço Adoção Responsável, Castramóvel e CCZ',
      'Playground Pet, Desfile Pet Fantasia e Praça Gastronômica'
    ],
    msgPublico: perfil === 'veterinario'
      ? 'Apresentação com cronograma da Arena Conhecimento, palestras técnicas e workshops com especialistas veterinários renomados.'
      : 'Guia completo para tutores e famílias curtirem os 3 dias de festival com seus pets em Macaé e Região dos Lagos.'
  };

  const handleDownload = (e) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.whatsapp.trim() || !formData.email.trim()) {
      if (notify) notify('Por favor, preencha nome, WhatsApp e e-mail para liberar o material.', 'error');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setDownloaded(true);
      if (triggerCelebration) triggerCelebration();
      if (notify) {
        notify(`Download liberado: ${docConfig.titulo}!`, 'success');
      }

      // Dispara o download automático do PDF correto após submissão dos dados
      const link = document.createElement('a');
      link.href = docConfig.pdfUrl;
      link.download = docConfig.nomeArquivo;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 600);
  };

  return (
    <section id="ebook" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f8f1e5] overflow-hidden border-t-2 border-b-2 border-stone-200/60" style={{ scrollMarginTop: '90px' }}>

      {/* Faixa Superior com Gradiente da Identidade Visual */}
      <div className="absolute top-0 left-0 w-full h-3.5 bg-gradient-to-r from-[#f9418c] via-[#ffc600] to-[#8c43dc]" />

      {/* Ícone Decorativo Oficial da Marca (Coração com Patinha) 100% Transparente em Marca d'Água */}
      <div className="absolute -top-6 -right-6 w-36 h-36 opacity-10 pointer-events-none select-none rotate-12">
        <img
          src="/assets/branding/coracao-patinha-puro.png"
          alt="Patinha Feira Eu Amo Pet"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Cabeçalho da Seção com as Fontes Oficiais do Site */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span
            className="inline-block px-5 py-1.5 rounded-full bg-[#8c43dc] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md -rotate-1 mb-4"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            MATERIAL EXCLUSIVO 2027 • DOWNLOAD GRATUITO
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#202f6b] uppercase tracking-tight leading-tight"
            style={{ fontFamily: '"Protest Strike", sans-serif' }}
          >
            LIVRO DE APRESENTAÇÃO <br className="hidden sm:inline" />
            <span className="text-[#f9418c]">&amp; MÍDIA KIT OFICIAL</span>
          </h2>

          <div className="w-48 h-2.5 bg-[#ffc600] rounded-full mx-auto my-4 -rotate-1" />

          <p
            className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            Receba o material completo da <strong>Feira Eu Amo Pet 2027</strong> desenhado especialmente para o seu perfil em Macaé e Região dos Lagos. Conheça as oportunidades comerciais de patrocínio, metragens de estandes ou a programação oficial para o público e profissionais.
          </p>
        </div>

        {/* Grid Principal: Capa Completa sem Bordas Cortadas + Formulário de Captura */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Coluna da Esquerda: Capa Oficial do Ebook Completa, sem bordas recortando (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">

            <div className="relative group flex flex-col items-center w-full max-w-sm">

              {/* Badge Flutuante no Topo */}
              <div className="mb-3 flex items-center justify-center gap-2">
                <span
                  className="px-4 py-1 rounded-full bg-[#202f6b] text-[#ffc600] text-xs font-black uppercase tracking-wider shadow-md border border-white/20 flex items-center gap-1.5"
                  style={{ fontFamily: '"Nunito", sans-serif' }}
                >
                  <FileText className="w-3.5 h-3.5 text-[#ffc600]" />
                  {docConfig.badge}
                </span>
              </div>

              {/* Capa Real Completa do Ebook - Sem bordas limitando, aspecto livre para visualização 100% integral */}
              <div className="relative rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-[1.02] group-hover:-rotate-1 bg-stone-900 overflow-hidden border border-stone-200">
                <img
                  src={docConfig.capaWebp}
                  alt={docConfig.titulo}
                  className="w-full h-auto max-h-[520px] object-contain rounded-2xl block"
                  onError={(e) => {
                    if (e.target.src.indexOf('.webp') !== -1) {
                      e.target.src = docConfig.capaPng;
                    }
                  }}
                />
                {/* Brilho Sutil de Revista na Superfície */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/15 pointer-events-none rounded-2xl" />
              </div>

              {/* Destaques do Conteúdo Logo Abaixo da Capa */}
              <div
                className="w-full mt-5 p-4 rounded-2xl bg-white shadow-md border border-stone-200 space-y-2 text-xs text-stone-700"
                style={{ fontFamily: '"Nunito", sans-serif' }}
              >
                <p className="font-black text-[#202f6b] text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#f9418c]" />
                  O que você encontrará neste arquivo:
                </p>
                {docConfig.destaques.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#8c43dc] font-black text-sm leading-none mt-0.5">✓</span>
                    <span className="leading-snug font-medium">{item}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Coluna da Direita: Seleção de Perfil e Formulário de Captura Obrigatório (7 cols) */}
          <div className="lg:col-span-7">

            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-stone-200">

              {/* Header do Form com Fonte Protest Strike */}
              <div className="mb-6">
                <span
                  className="text-xs font-black uppercase tracking-wider text-[#f9418c] block mb-1"
                  style={{ fontFamily: '"Nunito", sans-serif' }}
                >
                  PASSO 1: SELECIONE SEU PERFIL
                </span>
                <h3
                  className="text-2xl sm:text-3xl text-[#202f6b] uppercase tracking-tight"
                  style={{ fontFamily: '"Protest Strike", sans-serif' }}
                >
                  {isB2B ? 'Baixe o Dossiê Comercial 2027' : 'Baixe a Apresentação Oficial 2027'}
                </h3>
                <p
                  className="text-xs sm:text-sm text-stone-600 mt-1.5 font-medium"
                  style={{ fontFamily: '"Nunito", sans-serif' }}
                >
                  Preencha seus dados para liberar o PDF oficial direcionado para suas necessidades no evento.
                </p>
              </div>

              {/* Abas dos 4 Perfis com Ícones Profissionais SVG */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                {[
                  { id: 'patrocinador', label: 'Patrocinador', icon: Award, desc: 'Cotas & Visibilidade' },
                  { id: 'expositor', label: 'Expositor', icon: Store, desc: 'Estandes & Vendas' },
                  { id: 'veterinario', label: 'Veterinário', icon: Stethoscope, desc: 'Congresso & Workshops' },
                  { id: 'visitante', label: 'Tutor / Visitante', icon: HeartHandshake, desc: 'Atrações & Ingressos' },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const active = perfil === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setPerfil(tab.id);
                        setDownloaded(false);
                      }}
                      className={`p-3 rounded-2xl text-left border-2 transition-all flex flex-col justify-between ${active
                        ? 'border-[#f9418c] bg-[#f9418c]/10 text-[#202f6b] shadow-md ring-2 ring-[#f9418c]/30'
                        : 'border-stone-200 hover:border-stone-300 bg-stone-50 text-stone-600'
                        }`}
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${active ? 'bg-[#f9418c] text-white' : 'bg-stone-200 text-stone-600'
                        }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span
                          className="text-xs font-black block leading-tight uppercase"
                          style={{ fontFamily: '"Nunito", sans-serif' }}
                        >
                          {tab.label}
                        </span>
                        <span
                          className="text-[10px] text-stone-500 block leading-tight mt-0.5"
                          style={{ fontFamily: '"Nunito", sans-serif' }}
                        >
                          {tab.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Mensagem Explicativa Dinâmica para o Perfil Selecionado */}
              <div
                className="mb-6 p-4 rounded-2xl bg-[#202f6b]/5 border-l-4 border-[#202f6b] text-xs text-[#202f6b]"
                style={{ fontFamily: '"Nunito", sans-serif' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-black uppercase tracking-wider text-[11px] text-[#f9418c]">
                    Material Designado: {docConfig.nomeArquivo}
                  </span>
                </div>
                <p className="leading-relaxed">
                  {docConfig.msgPublico}
                </p>
              </div>

              {/* Formulário Obrigatório de Captura de Dados */}
              {!downloaded ? (
                <form onSubmit={handleDownload} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1"
                        style={{ fontFamily: '"Nunito", sans-serif' }}
                      >
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f9418c] focus:bg-white"
                        style={{ fontFamily: '"Nunito", sans-serif' }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1"
                        style={{ fontFamily: '"Nunito", sans-serif' }}
                      >
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(22) 99999-9999"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f9418c] focus:bg-white"
                        style={{ fontFamily: '"Nunito", sans-serif' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1"
                        style={{ fontFamily: '"Nunito", sans-serif' }}
                      >
                        E-mail Principal *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contato@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f9418c] focus:bg-white"
                        style={{ fontFamily: '"Nunito", sans-serif' }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1"
                        style={{ fontFamily: '"Nunito", sans-serif' }}
                      >
                        {isB2B ? 'Empresa / Marca' : 'Cidade / Município'}
                      </label>
                      <input
                        type="text"
                        placeholder={isB2B ? 'Ex: PetShop & Clínica Veterinária' : 'Ex: Macaé / Região dos Lagos'}
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f9418c] focus:bg-white"
                        style={{ fontFamily: '"Nunito", sans-serif' }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-2xl bg-[#f9418c] hover:bg-[#e6197e] text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-pink-500/25 transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 mt-2"
                    style={{ fontFamily: '"Nunito", sans-serif' }}
                  >
                    {loading ? (
                      <span>Liberando Material Oficial...</span>
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        <span>Baixar {isB2B ? 'Dossiê Comercial (PDF)' : 'Apresentação Geral (PDF)'}</span>
                      </>
                    )}
                  </button>

                  <p
                    className="text-[11px] text-center text-stone-500 mt-2 font-medium"
                    style={{ fontFamily: '"Nunito", sans-serif' }}
                  >
                    🔒 Seus dados estão 100% seguros com a Feira Eu Amo Pet. O download inicia imediatamente após o envio.
                  </p>
                </form>
              ) : (
                <div className="text-center py-6 px-4 bg-emerald-50 rounded-2xl border-2 border-emerald-300 space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-black shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4
                      className="text-2xl text-[#202f6b] uppercase tracking-tight"
                      style={{ fontFamily: '"Protest Strike", sans-serif' }}
                    >
                      Download Concluído com Sucesso!
                    </h4>
                    <p
                      className="text-xs sm:text-sm text-stone-600 mt-1 max-w-md mx-auto"
                      style={{ fontFamily: '"Nunito", sans-serif' }}
                    >
                      O arquivo <strong>{docConfig.nomeArquivo}</strong> foi baixado em seu dispositivo.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={docConfig.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs font-bold uppercase tracking-wider hover:bg-stone-50 shadow-sm"
                      style={{ fontFamily: '"Nunito", sans-serif' }}
                    >
                      Abrir PDF no Navegador
                    </a>
                    <a
                      href={`https://wa.me/5522997885784?text=Ol%C3%A1%20Maycon%20Douglas!%20Acabei%20de%20baixar%20o%20${encodeURIComponent(docConfig.titulo)}%20da%20Feira%20Pet%202027%20e%20gostaria%20de%20conversar%20como%20${perfil}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#1ebd59] text-white text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-2"
                      style={{ fontFamily: '"Nunito", sans-serif' }}
                    >
                      <span>Falar no WhatsApp com Maycon Douglas</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

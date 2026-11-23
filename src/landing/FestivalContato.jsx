import React from 'react';
import { MessageCircle, Mail, Instagram, MapPin, Building2, PhoneCall, Sparkles } from 'lucide-react';

export default function FestivalContato() {
  return (
    <section id="contato" className="fp-contato-section relative overflow-hidden py-16 sm:py-24" style={{ scrollMarginTop: '90px' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span
            className="inline-block px-5 py-1.5 rounded-full bg-[#ffc600] text-[#202f6b] text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm -rotate-1 mb-4"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            CANAL OFICIAL DE ATENDIMENTO • EDIÇÃO 2027
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#202f6b] uppercase tracking-tight leading-tight"
            style={{ fontFamily: '"Protest Strike", sans-serif' }}
          >
            GARANTA O ESPAÇO DA SUA MARCA <br className="hidden sm:inline" />
            <span className="text-[#f9418c]">NO MAIOR ENCONTRO PET REGIONAL</span>
          </h2>

          <div className="w-36 h-2 bg-[#8c43dc] rounded-full mx-auto my-4 -rotate-1" />

          <p
            className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            As vagas para estandes comerciais e cotas com exclusividade de categoria são limitadas. Converse agora mesmo com a equipe executiva para receber a planta de estandes disponíveis e a proposta sob medida.
          </p>
        </div>

        {/* 3 Contact Direct Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">

          {/* 1. WhatsApp Comercial */}
          <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border-2 border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#25d366]/15 text-[#128c7e] flex items-center justify-center mb-5">
                <MessageCircle className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#128c7e] bg-[#25d366]/10 px-2.5 py-0.5 rounded-md inline-block mb-2">
                RESPOSTA IMEDIATA
              </span>
              <h3
                className="text-lg sm:text-xl font-bold text-[#202f6b] mb-1"
                style={{ fontFamily: '"Nunito", sans-serif' }}
              >
                WhatsApp Comercial
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                Atendimento direto com Maycon Douglas (Estratégia &amp; Comercial MD Mercado Digital).
              </p>
              <div className="text-sm font-black text-stone-900 font-mono">
                (22) 99788-5784
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <a
                href="https://wa.me/5522997885784?text=Ol%C3%A1%20Maycon%20Douglas!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20comerciais%20sobre%20a%20Feira%20Eu%20Amo%20Pet%202027."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 2. E-mail Comercial */}
          <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border-2 border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#f9418c]/15 text-[#f9418c] flex items-center justify-center mb-5">
                <Mail className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#f9418c] bg-[#f9418c]/10 px-2.5 py-0.5 rounded-md inline-block mb-2">
                PROPOSTAS &amp; MEDIA KIT
              </span>
              <h3
                className="text-lg sm:text-xl font-bold text-[#202f6b] mb-1"
                style={{ fontFamily: '"Nunito", sans-serif' }}
              >
                E-mail Corporativo
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                Envio formal de propostas de patrocínio, contratos de montadoras e parcerias institucionais.
              </p>
              <div className="text-xs sm:text-sm font-black text-stone-900 break-all font-mono">
                comercial@feiraeuamopet.com.br
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <a
                href="mailto:comercial@feiraeuamopet.com.br?subject=Interesse%20Comercial%20-%20Feira%20Eu%20Amo%20Pet%202027"
                className="w-full py-3.5 rounded-xl bg-[#202f6b] hover:bg-[#152048] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar E-mail Oficial</span>
              </a>
            </div>
          </div>

          {/* 3. Instagram Oficial */}
          <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border-2 border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#8c43dc]/15 text-[#8c43dc] flex items-center justify-center mb-5">
                <Instagram className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#8c43dc] bg-[#8c43dc]/10 px-2.5 py-0.5 rounded-md inline-block mb-2">
                REDE SOCIAL OFICIAL
              </span>
              <h3
                className="text-lg sm:text-xl font-bold text-[#202f6b] mb-1"
                style={{ fontFamily: '"Nunito", sans-serif' }}
              >
                Instagram do Evento
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                Acompanhe as divulgações, marcas confirmadas, atrações e os bastidores do festival.
              </p>
              <div className="text-sm font-black text-stone-900 font-mono">
                @feira.euamopet
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <a
                href="https://www.instagram.com/feira.euamopet/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#8c43dc] hover:bg-[#7733c2] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Seguir no Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Promoter Institutional Signoff */}
        <div className="bg-[#202f6b]/5 border border-[#202f6b]/15 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-[#202f6b] shrink-0" />
            <div>
              <span className="text-xs text-stone-500 font-bold uppercase tracking-wide block">
                ORGANIZAÇÃO &amp; REALIZAÇÃO PROMOTORA
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#202f6b]">
                Manfertech Manut. Mont. Ind. Ltda (CNPJ: 05.931.820/0001-10) • MD Mercado Digital
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#f9418c]">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Macaé &amp; Região dos Lagos • Edição 2027</span>
          </div>
        </div>

      </div>
    </section>
  );
}

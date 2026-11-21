import React from 'react';

export default function FestivalFooter() {
  const year = new Date().getFullYear();

  return (
    <div id="fp-footer">
      <div className="fpf-inner">
        <div className="fpf-col fpf-logo">
          <img
            decoding="async"
            src="/assets/branding/logo-eu-amo-pet-transparente-oficial.png"
            alt="Feira Eu Amo Pet"
            loading="lazy"
            style={{ maxHeight: '68px', width: 'auto', objectFit: 'contain' }}
          />
        </div>

        <span className="fpf-divider" aria-hidden="true"></span>

        <div className="fpf-col fpf-copy">
          <p>© {year} Feira Eu Amo Pet. Todos os direitos reservados.</p>
          <p style={{ fontSize: '11px', marginTop: '6px', color: '#555b85', lineHeight: 1.5 }}>
            <strong>Realização Promotora:</strong> Manfertech Manut. Mont. Ind. Ltda (CNPJ: 05.931.820/0001-10) • <strong>Estratégia &amp; Comercial:</strong> MD Mercado Digital (Maycon Douglas)
          </p>
          <p style={{ fontSize: '10px', marginTop: '4px', color: '#777da7' }}>
            Apoio Oficial: Prefeitura de Campos dos Goytacazes &bull; Fundação Rural de Campos &bull; Centro de Controle de Zoonoses (CCZ)
          </p>
        </div>

        <span className="fpf-divider" aria-hidden="true"></span>

        <div className="fpf-col fpf-social">
          <a
            href="https://wa.me/5522997885784"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da Organização"
            title="WhatsApp Comercial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/festival.pet/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Oficial"
            title="Instagram Oficial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

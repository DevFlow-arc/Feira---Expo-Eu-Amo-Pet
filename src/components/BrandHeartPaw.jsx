import React from 'react';

/**
 * BrandHeartPaw — Ícone oficial Eu Amo Pet
 * Coração vermelho coral (#F43F5E) com patinha branca centralizada.
 * Usa apenas SVG inline, sem dependência de arquivo de imagem.
 * Props:
 *   className — classes Tailwind (padrão: "w-full h-full")
 *   style     — estilos inline extras
 *   color     — cor do coração (padrão: "#F43F5E" coral/vermelho)
 */
export default function BrandHeartPaw({
  className = 'w-full h-full',
  style,
  color = '#F43F5E',
}) {
  return (
    <svg
      viewBox="0 0 100 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Coração suave e simétrico — idêntico ao da logo original */}
      <path
        d="M50 90
           C46 86 6 56 6 30
           C6 13 19 3 34 3
           C42 3 47 8 50 13
           C53 8 58 3 66 3
           C81 3 94 13 94 30
           C94 56 54 86 50 90 Z"
        fill={color}
      />

      {/* 4 dedos/bolinhas — brancos — idênticos ao ícone da logo */}
      <ellipse cx="31" cy="34" rx="5.5" ry="7.5" transform="rotate(-22 31 34)" fill="#fff" />
      <ellipse cx="43" cy="25" rx="5.8" ry="7.8" transform="rotate(-6 43 25)"  fill="#fff" />
      <ellipse cx="57" cy="25" rx="5.8" ry="7.8" transform="rotate(6 57 25)"   fill="#fff" />
      <ellipse cx="69" cy="34" rx="5.5" ry="7.5" transform="rotate(22 69 34)"  fill="#fff" />

      {/* Almofada central / palma — branca */}
      <path
        d="M50 44
           C41 44 31 50 32 61
           C33 70 42 72 50 68
           C58 72 67 70 68 61
           C69 50 59 44 50 44 Z"
        fill="#fff"
      />
    </svg>
  );
}

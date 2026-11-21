/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pet: {
          terracotta: '#E05A47',
          orange: '#FF8A3D',
          amber: '#F59E0B',
          teal: '#1B998B',
          forest: '#1E6B52',
          slate: '#2E4057',
          navy: '#1F2937',
          sand: '#FAF8F5',
          cream: '#FFFDF9',
          border: '#E8E3DA'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Cabinet Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      }
    },
  },
  plugins: [],
}

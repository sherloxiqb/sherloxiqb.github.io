/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
        PlayfairDisplay: "'Playfair Display', serif",
        FiraMono: "'Fira Mono', monospace",
      },
      colors: {
        primary: '#AF4E39',
        secondary: '#64748b',
        dark: '#0f172a',
        lightred: '#FAF2F0',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};

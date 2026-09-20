/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        temple: {
          50: '#fff7e6',
          100: '#ffe7b8',
          200: '#f7cb72',
          300: '#eeaa37',
          400: '#d88a1e',
          500: '#b96a16',
          600: '#8f4314',
          700: '#693019',
          800: '#3b2418',
          900: '#211915'
        },
        leaf: '#3f7a52',
        rose: '#a8324d',
        ink: '#1f1a17'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(47, 30, 20, 0.12)'
      }
    }
  },
  plugins: []
};

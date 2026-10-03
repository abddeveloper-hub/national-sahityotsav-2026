/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        festival: {
          dark: '#080B14',
          card: '#0F1628',
          border: '#1E2945',
          gold: {
            light: '#F8DF8B',
            DEFAULT: '#D4AF37',
            dark: '#A67C1E',
          },
          saffron: {
            DEFAULT: '#E65100',
            glow: '#FF7043'
          },
          maroon: {
            DEFAULT: '#881337',
            deep: '#4C0519'
          },
          peacock: {
            DEFAULT: '#0284C7',
            dark: '#0369A1',
            teal: '#0D9488'
          }
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

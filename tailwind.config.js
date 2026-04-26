/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sora"', '"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        base: {
          900: '#06080d',
          800: '#0a0f18',
          700: '#101827'
        }
      },
      boxShadow: {
        card: '0 24px 40px -30px rgba(255, 191, 102, 0.35), 0 8px 24px -16px rgba(42, 157, 244, 0.22)',
        glow: '0 0 0 1px rgba(255, 194, 112, 0.28), 0 0 24px rgba(255, 175, 92, 0.24)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.75' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 4.5s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

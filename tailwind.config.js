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
        card: '0 18px 32px -24px rgba(24, 24, 27, 0.28), 0 6px 16px -12px rgba(148, 163, 184, 0.32)',
        glow: '0 0 0 1px rgba(251, 191, 36, 0.34), 0 0 18px rgba(251, 191, 36, 0.26)'
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

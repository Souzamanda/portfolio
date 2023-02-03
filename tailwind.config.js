/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      backgroundImage: {
        app: 'url(/app-bg.png)'
      },

      colors: {
        teal: {
          500: '#0CECDD',
          600: '#0CCA98'
        },
        yellow: {
          500: '#FFF338'
        },
        purple: {
          500:'#C400FF',
          700:'#331940',
        }
      }
    },
  },
  plugins: [],
}

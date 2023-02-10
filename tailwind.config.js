/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Karla, sans-serif'
      },

      backgroundImage: {
        app: 'url(/app-bg.png)'
      },

      backgroundSize: {
        '50': '50%'
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
          600: '#5E366A',
          700:'#331940',
        }
      },

      textShadow: {
        DEFAULT: '6px 3px 15px #C400FF',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    
    require('@tailwindcss/forms'),
  ],
}

/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          1: '#ECF4F0',
          2: '#75C29F',
          3: '#52B286',
          4: '#40916C',
          5: '#306E52',
          6: '#214A37',
          7: '#081C15',
        },
      },
    },
  },
  plugins: [],
}

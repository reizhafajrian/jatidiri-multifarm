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
        neutral: {
          1: '#F6F6F6',
          2: '#E3E8EF',
          3: '#C4C4C4',
          4: '#7B7B7B',
          5: '#25282B',
        },
        error: '#CE0000',
        success: {
          1: '#16B364',
          2: '#0F752E',
          3: '#E1F7E8',
        },
        warning: '#FCDF8D',
      },
      boxShadow: {
        header: '0px 0px 5px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

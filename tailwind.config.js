/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors:{
      transparent: 'transparent',
      white: colors.white,
      black: colors.black,
      green: colors.green,
      'Light_Blue': '#78A6C9',
      'Primary': '#E65C4F',
      'Primary_1': '#F54B64',
      'Primary_2': '#F78361',
      'Secondary': '#33678A',
      'Light': '#EAEFF3',
      'Secondary_2': '#344A5F'
    },
    extend: {
      animation: {
        bounce: 'bounce 0.3s ease-in-out 5',
      },
      fontFamily: {
        font_1: ['DynaPuff'],
        font_2: ['Kanit'],
        font_3: ['Signika'],
        font_4: ['Teko'],
      },
    },  
  },
  plugins: [],
}

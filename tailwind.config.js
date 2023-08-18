/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nav-border': '#9747FF',
        'light-white': '#050816',
        'light-white-100': '#151030',
        'light-white-200': '#100d25',
        'light-white-300': '#090325',
        'light-white-400': '#090325',
        'light-white-500': '#090325',
         gray: '#4D4A4A',
        'gray-100': '#3d3d4e',
        'black-100': '#252525',
        'primary-purple': '#9747FF',
        'gray-50': '#D9D9D9',
 
      },
      boxShadow: {
        menu: '0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          azul: '#003366',
          azulClaro: '#004080',
          cinza: '#F5F5F5',
          borda: '#CCCCCC',
          texto: '#333333',
          aviso: '#D32F2F',
          alerta: '#FBC02D',
        },
      },
      fontFamily: {
        light: ['Arial', 'sans-serif'],
        lightTitle: ['Arial Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}


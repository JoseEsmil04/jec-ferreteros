/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "herramientas.html",
    "nosotros.html",
    "contacto.html",
    "./public/**/*.{vue,js,ts,jsx,tsx}"
],
  theme: {
    extend: {},
    colors: {
      'verdoso': '#16A085',
      'azul-claro': '#1546c2',
      'azul-oscuro': '#0f2145',
      'gris-azulado': '#D0DEF5',
      'gris-claro': '#F0F0F0',
      'gris-oscuro': '#878787',
      'rojo': '#f73f39',
      'blanco': '#FFFFFF'
    },
    fontFamily: {
      acme: ['Acme', 'sans-serif'],
      signika: ['Signika Negative', 'sans-serif'],
    }
  },
  plugins: [],
}


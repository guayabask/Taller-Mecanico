/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkgray': '#505050',
        'grayGuayabo': '#474747',
        'rojoFooter': '#A72914',
        'naranjaBoton': '#FF5B37',
        'grisRoss': "#D9D9D9",
      },
    },
  },
  plugins: [],
}
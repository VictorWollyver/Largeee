/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D90368',
        contrastLow: '#B2B2B2',
        fontWhite: '#F7F7F7',
        sobreTom: '#2E001C',
        sobreTomLight: '#EC9CCD'

      }
    },
  },
  plugins: [],
}

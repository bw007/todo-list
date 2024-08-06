/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': 'Montserrat'
    }
  },
  plugins: [require('tailwindcss-primeui')]
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'Gradient-text': 'bg-gradient-to-r from-[#3A8EF6]  to-[#6F3AFA] bg-clip-text text-transparent',
      },
      fontFamily : {
        'popins' :  ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [ require('tailwindcss-gradients'), require("daisyui")],
}

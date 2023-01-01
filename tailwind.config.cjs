/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        greycliffbold: ['GreycliffCF-Bold'] ,
        greycliffmed: ['GreycliffCF-Medium'] ,
        greycliffreg: ['GreycliffCF-Regular'] ,
      }
    }
  },
  plugins: [require("daisyui")],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coffee': "url('https://source.unsplash.com/1600x900/?coffee,cafe')",
        // 'custom-bg' : "url('/images/background/bg-coffee.jpg')"
        'custom-bg' : "url('/images/background/home-bg3.jpg')"
      },
      colors:{
        oliveBlack: "#292f28",
        olive: "#35392f",
        beige: "#d0c8ba",
        brown: "#4d382e",
        blueGray: "#2c3335",
        grey: "#8a8781",
        greyBlue: "#4f746f",
        lightBlueGray: "#353c3c",
        midBlueGray: "#2c3334",
        darkBlueGray: "#272e2e",
        washedGrey: '#6e6b5f',
        oliveBG: "#212828",

      },
      fontFamily:{
        sans: ['Sugar-Magic-Font']
      },
      
    },
  },
  plugins: [],
};

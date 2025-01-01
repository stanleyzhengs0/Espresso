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
        'custom-bg' : "url('/coffee-bg1.jpg')"
      },
      colors:{
        oliveBlack: "#292f28",
        olive: "#35392f",
        beige: "#dac5ab",
        brown: "#4d382e",
        blueGray: "#2c3335",
        grey: "#8a8781",
        greyBlue: "#4f746f",
        lightBlueGray: "#353c3c",
        midBlueGray: "#2c3334",
        darkBlueGray: "#272e2e"

      },
      fontFamily:{
        sans: ['Sugar-Magic-Font']
      },
      
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home:"url('/src/assets/images/bg_homepage1.svg')",
        },
      colors: {
        primary:{
          black:"#211814",
          white:"#F1F1EF",
        },      
        
        secondary:{
          blue:"#236DF6",
          orange: "#FA5A28",
          yellow:"#FFBE0C",
          lightgreen:"#E8FEF1",
          lightyellow:"#FFF9D5",
          lightblue:"#D3E2FD",
        },
        text:{
          black:"#211814",
          Placeholder:"#878787"
        },
        outline:{
          gray:"#D5D5D5",
        },        
      }
    },
  },
  plugins: [],
}


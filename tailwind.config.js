/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        awal:"url('/src/assets/image/BG.svg')",
        logo:"url('/src/assets/icon/Logo_zoo.svg')",
        onboarding:"url('/src/assets/image/bg_section2.svg')",
        },
      colors: {
        primary:{
          black:"#211814",
          green:"#145858",
          white:"#F1F1EF",
        },      
        
        secondary:{
          yellow:"#F7B318",
          lightgreen:"#E8FEF1",
          lightgray:"#F0F5F5",
        },
        text:{
          black:"#211814",
          Placeholder:"#878787"
        },
        outline:{
          gray:"#D5D5D5",
        },  
        dropShadow: {
          '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
          '4xl': [
              '0 35px 35px rgba(0, 0, 0, 0.25)',
              '0 45px 65px rgba(0, 0, 0, 0.15)'
          ]
        }      
      }
    },
  },
  plugins: [],
}


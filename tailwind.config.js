/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      primary: "#002366",
      secondary: "#FFD700",
      tertiary: "#FFFFFF",
        black: "#1B1B1B",
          overlay: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
        background: "url('./assets/images/RID_0407.jpg') no-repeat cover center"
        
     },
    },
  },
  plugins: [],
}


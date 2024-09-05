/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //colors
      colors: {
        primary: "#2BB5FF",
        secondary: "#EF863E",
        light: "#fdfdfd",
        dark: "#1e293b",
        mid: "#3c5276"
      },
    },
      
  },
  darkMode: 'selector',
  plugins: [],
}


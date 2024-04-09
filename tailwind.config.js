/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#5B21B6",
        secondary: "#000000",
        third: "#4B5563",
        fourth: "#4C1D95",
      },
      backgroundColor: {
        primary: "FFFFFF",
        secondary: "C7D2D6",
        third: "#F5F3FF",
        fourth: "#FCD34D"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset': '3px -3px 84px 80px rgba(255,255,255,0.97) inset',
      }, zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
    darkTheme: "light",
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  screens: {
    "sm": "320px",
    "sm1": "400px",
    "sm2": "480px",
    "sm3": "640px",
    "md": "768px",
    "md2": "960px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px",
  },
  plugins: [
  ],
}

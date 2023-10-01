/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    safelist: ['animate-[drop-in_0.5s]', 'animate-[drop-out_0.5s]'],
  },
  plugins: [],
}
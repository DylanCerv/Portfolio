/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-np-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
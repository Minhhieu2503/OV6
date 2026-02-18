/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#050B14',
        'neon-blue': '#00D2FF',
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      dropShadow: {
        'glow': '0 0 20px rgba(0, 210, 255, 0.5)',
      }
    },
  },
  plugins: [],
}


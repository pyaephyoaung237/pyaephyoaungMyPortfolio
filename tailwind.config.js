/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f8',
          100: '#d4dcef',
          200: '#a9b9df',
          300: '#7e96cf',
          400: '#4a63a8',
          500: '#1f2f5c',
          600: '#182548',
          700: '#121c37',
          800: '#0c1326',
          900: '#060914',
        },
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}

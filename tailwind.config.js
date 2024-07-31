/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: 'slide 30s linear infinite',
      },
    },
  },
  plugins: [],
}


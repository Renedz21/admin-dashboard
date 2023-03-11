/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#11101d",
      },
      letterSpacing: {
        widest: "80px",
      }
    },
  },
  plugins: [],
}

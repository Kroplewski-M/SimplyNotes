/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EBCB8B",
        secondary: "#333333",
        lightBrown: "#C1A37B",
      },
    },
    fontFamily: {
      main: ["Itim", "cursive"],
    },
  },
  plugins: [],
};

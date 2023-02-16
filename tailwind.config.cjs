/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0080FF",
        secondary: "#333333",
        lightBrown: "#C1A37B",
        prompts: "#0060DD",
      },
    },
    fontFamily: {
      main: ["Itim", "cursive"],
    },
  },
  plugins: [],
};

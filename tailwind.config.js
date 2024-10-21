/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bg: "rgb(254, 250, 240)",
      bg2: "rgb(221, 221, 204)",
      brown: "rgb(64, 63, 43)",
      yellow: "#f1efbc",
      darkgreen: "#383726",
      white: "#fff",
      black: "#000",
    },
    fontFamily: {
      playwrite: '"Playwrite GB S", cursive',
      sans: '"Karla", sans-serif',
    },
    maxWidth: {
      desktop: "1300px",
    },
    screens: {
      "546px": "546px",
      "984px": "984px",
      "694px": "694px",
      "450px": "450px",
      "1000px": "1000px",
      md: "728px",
    },
  },
  plugins: [],
};

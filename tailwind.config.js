/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "976px",
      "2lg": "1280px", //macbook
      xl: "1440px",
    },
    fontFamily: {
      Poppins: ["Poppins"],
      OpenSans: ["OpenSans"],
      Jost: ["Jost"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        merahtua: "#5D2510",
        merah: "#8A1616",
        krim: "#EDE1D2",
        krimtua: "#C4B8B0",
        biru: "#47b2e4",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

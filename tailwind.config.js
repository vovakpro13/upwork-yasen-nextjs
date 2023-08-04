/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#51C14F",
        secondary: "#44937D",
        gold: "#B3A779",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        donpoligrafbum: ["var(--font-donpoligrafbum)"],
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      keyframes: {
        handRotate: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },
      animation: {
        handRotate: "handRotate 2s ease-in-out infinite",
      },
    },
    transitionTimingFunction: {
      "in-expo": "cubic-bezier(0.3, 1, 0.7, 1)",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        ".green-underline": {
          textDecoration: "underline",
          "text-decoration-color": "#44937D",
        },
        ".gold-underline": {
          textDecoration: "underline",
          "text-decoration-color": "#B3A779",
        },
      };
      addUtilities(extendUnderline);
    },
  ],
};

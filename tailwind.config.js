module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "text-color": "#FEF9FF",
      "text-color-dark": "#000000",
      "main-color": "#091114",
      "my-orange": "#FF7F2B",
      "header-footer-color": "#132E32",
      "light-violet": "#E0E4FC",
      white: "#FFFFFF",
    },
    extend: {
      "font-family": {
        myFont: ["Poppins", "sans-serif"],
      },
      keyframes: {
        myFadeIn: {
          "0%": {
            opacity: 0,
            display: "flex",
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
        myFadeOut: {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 0,
            display: "none",
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};

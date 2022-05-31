module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      "font-family": {
        myFont: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "spin-dot": {
          "0%,100% ": {
            "box-shadow":
              "0 -18px 0 0 #ffffff, 12.72984px -12.72984px 0 0 #ffffff, 18px 0 0 0 #ffffff, 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0)",
          },
          "12.5% ": {
            "box-shadow":
              "0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 0 #ffffff, 18px 0 0 0 #ffffff, 12.72984px 12.72984px 0 0 #ffffff, 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0)",
          },
          "25% ": {
            "box-shadow":
              "0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 #ffffff, 12.72984px 12.72984px 0 0 #ffffff, 0 18px 0 0 #ffffff, -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0)",
          },
          "37.5% ": {
            "box-shadow":
              "0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 0 #ffffff, 0 18px 0 0 #ffffff, -12.72984px 12.72984px 0 0 #ffffff, -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0)",
          },
          "50% ": {
            "box-shadow":
              "0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 #ffffff, -12.72984px 12.72984px 0 0 #ffffff, -18px 0 0 0 #ffffff, -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0)",
          },
          "62.5% ": {
            "box-shadow":
              "0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 #ffffff, -18px 0 0 0 #ffffff, -12.72984px -12.72984px 0 0 #ffffff",
          },
          "75% ": {
            "box-shadow":
              "0 -18px 0 0 #ffffff, 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 0 #ffffff, -12.72984px -12.72984px 0 0 #ffffff",
          },
          "87.5% ": {
            "box-shadow":
              "0 -18px 0 0 #ffffff, 12.72984px -12.72984px 0 0 #ffffff, 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 0 #ffffff",
          },
        },
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
        "loop-scroll": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(calc(-100% + 500px))",
          },
        },
        "m-loop-scroll": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(calc(-100% + 300px))",
          },
        },
      },
      animation: {
        "spin-dot": "spin-dot 1.5s infinite linear",
        "loop-scroll": "loop-scroll 50s infinite ease-in-out",
        "m-loop-scroll": "m-loop-scroll 50s infinite ease-in-out",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};

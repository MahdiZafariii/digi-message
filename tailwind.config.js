/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "34px",
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: {
          50: "#E7EEF3",
          100: "#D0DDE8",
          200: "#B8CCDC",
          300: "#A0BBD0",
          400: "#88AAC4",
          500: "#7199B9",
          600: "#5988AD",
          700: "#4177A1",
          800: "#2A6696",
          900: "#12558A",
        },
        gray: {
          50: "#E7E8E8",
          100: "#D0D0D0",
          200: "#B9B9B9",
          300: "#A1A1A2",
          400: "#898A8B",
          500: "#727373",
          600: "#5B5B5C",
          700: "#434445",
          800: "#2C2C2D",
          900: "#141516",
        },
      },
    },
  },
  plugins: [],
};

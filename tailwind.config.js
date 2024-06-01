/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontSize: {
        xxs: "0.6rem",
      },
      colors: {
        primary: "#006769",
        secondary: "#64748b",
        dark: "#0f172a",
        light: "rgb(241 245 249)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

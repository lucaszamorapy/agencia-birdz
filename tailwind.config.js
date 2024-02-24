/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1220px",
        "2xl": "1220px",
      },
      colors: {
        yellowBirdz: "#FFCF00",
        yellowHover: "#D9B000",
        blackBirdz: "#242424",
        grayBirdz: "#3C3C3C",
      },
    },
  },
  plugins: [],
};

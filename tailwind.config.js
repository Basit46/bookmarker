/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Primary: ["Work Sans", "sans-serif"],
        Helvetica: ["HelveticaNowText Regular", "sans-serif"],
      },
      screens: {
        vsm: "450px",
        xmd: "900px",
      },
    },
  },
  plugins: [],
};

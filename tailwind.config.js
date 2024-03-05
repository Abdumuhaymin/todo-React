/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      width: {
        lg: "1440px",
      },
      colors: {
        bgMain: "#122A24",
        input: "#698167",
        title: "#D0C481",
      },
      padding: {
        input: "20px 320px 20px 15px",
      },
    },
  },
  plugins: [],
};

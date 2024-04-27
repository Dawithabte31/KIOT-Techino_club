/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#63E6EB",
        "secondary": "#043B52",
        "tertiary": "#7B7B7B",
        blue: "#9A7AF1",
      },
      boxShadow: {
        '3xl': '0 10px 50px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};

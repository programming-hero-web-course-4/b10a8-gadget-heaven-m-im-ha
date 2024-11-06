/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Purple: "#9538E2",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

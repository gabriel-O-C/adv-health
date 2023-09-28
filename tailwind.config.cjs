/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],

  theme: {
    extend: {
      colors: {
        black_rgba: "rgba(0, 0, 0, 0.6)",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};

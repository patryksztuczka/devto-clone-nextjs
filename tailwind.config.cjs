/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "rgb(59, 73, 223)",
      },
      boxShadow: {
        header: "0 1px 1px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

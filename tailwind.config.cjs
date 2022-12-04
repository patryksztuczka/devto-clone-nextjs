/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "rgb(59, 73, 223)",

        grey: "rgb(245, 245, 245)",
        greyCard: "rgb(250, 250, 250)",
        borderGrey: "#d6d6d7",

        lightBlue: "rgba(59, 73, 223, 0.1)",
        overlay: "rgba(9, 9, 9, 0.5)",
      },
      boxShadow: {
        header: "0 1px 1px 0 rgba(0, 0, 0, 0.1)",
        dropdown:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.1);",
        card: "0 0 0 1px rgba(23, 23, 23, 0.05)",
      },
    },
  },
  plugins: [],
};

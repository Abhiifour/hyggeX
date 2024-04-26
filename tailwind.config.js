/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grad1: "rgba(6, 40, 110, 1)",
        grad2: "rgba(22, 78, 192, 1)",
        textColor: "rgba(58, 55, 64, 1)",
        quickLinks: "rgba(105, 102, 113, 1)",
        bluetext: "rgba(6, 40, 110, 1)",
        display1: "rgba(5, 26, 145, 1)",
        display2: "rgba(6, 28, 147, 1)",
        display3: "rgba(34, 132, 241, 1)",
        display4: "rgba(31, 128, 235, 1)",
        whitetext: "rgba(255, 255, 255, 1)",
        shadowcolor: "rgba(8, 56, 153, 0.4)",
        borderGrad: "rgba(33, 126, 236, 1)",
        borderGrad2: "rgba(8, 34, 153, 1)",
      },
      fontFamily: {
        inter: "inter",
        montserrat: "montserrat",
        lato: "lato",
      },
      screens: {
        sm: { min: "0px", max: "600px" },
      },
    },
  },
  plugins: [],
};

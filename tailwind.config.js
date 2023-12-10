const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        russonOne: ["Russon One"],
        inter: ["Inter"],
        petitFormal: ["Petit Formal Script"]
      },
      colors: {
        dark: "#0d1117",
      }
    },
    backgroundImage: {
      wrapperBg: "url('assets/images/wrapperBackground.svg')",
    },
    container: {
      screens: {
        sm: "640px",
        md: "767px",
        lg: "1140px",
        xl: "1440px",
        "2xl": "1800px", //custom breakpoint
      },
    },
  },
  plugins: [],
});
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        PNFBackground:
          "linear-gradient(180deg, rgba(9, 9, 9, 0.60) 0%, #09161F 100%), url('./src/img/not-found.webp')",
      },
    },
  },
  plugins: [],
});

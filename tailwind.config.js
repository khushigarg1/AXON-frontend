/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        darkGreen: "#16423C",
        mediumGreen: "#6A9C89",
        lightGreen: "#C4DAD2",
        offWhite: "#E9EFEC",
      },
    },
  },
  plugins: [],
};

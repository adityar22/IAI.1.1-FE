/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#285598",
        "orange": "#FC9E19",
        "white": "#fafafa",
      },
      fontFamily: {
        'poppins': ['"Poppins"'],
      },
    },
  },
  plugins: [],
}


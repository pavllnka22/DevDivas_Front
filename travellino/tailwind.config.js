/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        travelBlue: '#0077b6',
        travelLight: '#90e0ef',
      },
      fontFamily: {

      },
    },
  },
  plugins: [],
}

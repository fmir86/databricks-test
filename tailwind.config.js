/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    maxWidth:{
      "1095": "68.4375rem"
    },
    colors:{
      black: '#000000',
      white: '#FFFFFF',
      lightgray: '#C4C4C4',
      bluesky: '#0B92F1',
      darkgray: '#222427;'
    }
        
  },
  plugins: [],
}
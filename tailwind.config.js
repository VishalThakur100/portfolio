/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#000000',
        'secondary': '#1a1a1a',
      },
      textColor: {
        'primary': '#ffffff',
        'secondary': '#ea580c',
      },
    },
  },
  plugins: [],
}


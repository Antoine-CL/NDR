/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5F8D78',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F3F4F6', 
          foreground: '#1F2937',
        },
        accent: {
          DEFAULT: '#D4A373', 
          foreground: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

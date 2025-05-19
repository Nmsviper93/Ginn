/** @type {import('tailwindcss').Config} */
export default {
  // Configure which files Tailwind should scan for classes
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Custom color palette
      colors: {
        primary: {
          teal: '#1A6B62',
          gold: '#E9C46A',
          blue: '#264653'
        }
      }
    },
  },
  plugins: [],
};
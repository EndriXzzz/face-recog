/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'dark': '#18181B',
      'primary': '#0D99FF',
      'gray': '#3D3D3D',
      'transparent': 'rgba(0, 0, 0, 0)'
    },
    screens: {
      'xl': { 'raw': '(max-width: 1440px)' },
      'lg': { 'raw': '(max-width: 1024px)' },
      'md': { 'raw': '(max-width: 768px)' },
      'sl': { 'raw': '(max-width: 425px)' },
      'sm': { 'raw': '(max-width: 375px)' },
      'xs': { 'raw': '(max-width: 320px)' },
      'h-md': { 'raw': '(max-height: 700px)' }
    },
    extend: {
      backgroundImage: {
        'init-system': "url('/images/InitiatingSystem1.gif')",
        'diagonal-patterns': "repeating-linear-gradient(40deg, #3d3d3d 20px, #3d3d3d 20px, rgba(0, 0, 0, 0) 20px, #3d3d3d 20px, rgba(0, 0, 0, 0) 40px)"
      }
    }
  },
  plugins: [],
}
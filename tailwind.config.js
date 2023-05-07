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
    }
  },
  plugins: [],
}
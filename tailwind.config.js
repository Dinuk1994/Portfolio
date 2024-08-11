/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#34353A',
        'bg-color-2' : '#31333B',
        'font-color': '#FFC86B',
        'coral': '#FF6F61',
        'navy-Blue': '#003366',
        'soft-Pink': '#FFC1CC',
        'lime-green': '#32CD32',
        'lavender': '#E6E6FA',
        'cyan': '#E0FFFF',
        'light-gray': '#D3D3D3',
        'pale-blue': '#AFEEEE',
        'mint-green': '#98FF98',
        'beige': '#F5F5DC',
      },
      fontFamily: {
        'exo-2': ['Exo 2', 'sans-serif'],
      },
      screens: {
        'older-mobile': { 'raw': 'screen and (device-aspect-ratio: 40/71)' },
        'mobile': { 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '1223px' },
        'tablet-or-mobile': { 'max': '1224px' },
        'desktop-or-laptop': { 'min': '1224px' },
        'in-portrait': { 'raw': '(orientation: portrait)' },
        'retina': { 'raw': '(min-resolution: 2dppx)' },
      },
      animation: {
        'typing-sequence': 'typing-sequence 5s infinite',
        'typing-sequence-delay': 'typing-sequence-delay 5s infinite',
        'border-color-cycle': 'border-color-cycle 5s infinite',
      },
      keyframes: {
        'typing-sequence': {
          '0%, 40%': { opacity: 1 },
          '50%, 90%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'typing-sequence-delay': {
          '0%, 40%': { opacity: 0 },
          '50%, 90%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'border-color-cycle': {
          '10%': { borderColor: '#D3D3D3' }, 
          '25%': { borderColor: '#AFEEEE' }, 
          '40%': { borderColor: '#FFC1CC' }, 
          '55%': { borderColor: '#98FF98' }, 
          '65%': { borderColor: '#32CD32' }, 
          '85%': { borderColor: '#E6E6FA' }, 
          '100%': { borderColor: '#E0FFFF' }, 
        },
      },
    },
  },
  plugins: [],
}

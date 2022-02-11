module.exports = {
  content: [
    './index.html',
    './main.js',
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',

    },
    fontFamily: {
      'Pacifico': ['Pacifico', 'cursive'],
      'Marker': ['Permanent Marker', 'cursive'],
      'Kaushan': ['Kaushan Script', 'cursive'],
      'Roboto': ['Roboto Slab', 'serif'],

    },
    extend: {
      colors: {
        'bg-manga': '#F59E0B',
        'bg-shoes': '#00afb9'
      }
    },
  },
  plugins: [],
}



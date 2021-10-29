module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // Some useful comment
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'Poppins': ['"Poppins"', 'serif'],
      'Inter': ['"Inter"', 'serif'],
    },
    extend: {
      fontFamily: ['Poppins', 'Inter', ],
    },
    lineHeight: {
      'extra-loose': '2.5',
      '11': '3rem',
      '12': '4rem',
    },
    listStyleType: {
      none: 'none',
      square: 'square',
      roman: 'upper-roman',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

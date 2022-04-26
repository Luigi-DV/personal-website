const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      green: colors.green,
      blue: colors.blue,
      gray: colors.neutral,
      indigo: colors.indigo,
      pink: colors.pink,
      red: colors.rose,
      emerald: colors.emerald,
      orange: colors.orange,
      yellow: colors.yellow,
      cyan: colors.cyan,
      purple: colors.purple,
      slate: colors.slate,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      amber: colors.amber,
      lime: colors.lime,
      teal: colors.teal,
      sky: colors.sky,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      'primary-color': '#4f46e5',
      'secondary-color': '#2dd4bf',
      'vue-primary-color': '#41B883',
      'vue-secondary-color': '#34495e',
      'react-primary-color': '#00d8ff',
      'react-secondary-color': '#222222',
      'laravel-primary-color': '#f55247',
      'laravel-secondary-color': '#6C6C6C',
      'node-primary-color': '#3C873A',
      'node-secondary-color': '#303030'
    }
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ]
}

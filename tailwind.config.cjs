const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const primaryColor = '#999';
const withOpacityValue =
  (varName) =>
  ({ opacityValue }) =>
    opacityValue === undefined
      ? `hsl(var(--${varName}))`
      : `hsla(var(--${varName}) / ${opacityValue})`;

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};

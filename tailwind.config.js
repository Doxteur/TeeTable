/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#141414',
        secondary: '#1C1E20',
        secondaryclear: '#0E0E1099',
        tertiary: '#111116',
        quaternary: '#1C1C24',
        transition: '#1E1E24',
        success: '#28A745',
        danger: '#dc2626',
      },
    },
  },
  variants: {},
  plugins: [require('preline/plugin')],
};

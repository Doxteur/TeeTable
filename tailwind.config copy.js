module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
          primary: "#4422EF",
          secondary: "#0E0E10",
          secondaryclear: "#0E0E1099",
          tertiary: "#111116",
          quaternary: "#1C1C24",
          transition: "#1E1E24",
          success: "#28A745",
      },
  },
  },
  variants: {},
  plugins: [
    require('preline/plugin'),
  ],
};

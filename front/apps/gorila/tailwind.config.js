module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: 'rgb(74, 222, 128)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

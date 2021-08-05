module.exports = {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      inputBorder: "#ced4da",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

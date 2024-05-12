/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "425px" },
    },
  },
  plugins: [],
};

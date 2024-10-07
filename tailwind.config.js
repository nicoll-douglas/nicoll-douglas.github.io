/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./site-map.html",
    "./links.html",
    "./cars.html",
    "./favourite-places.html",
    "./mr-robot.html",
    "./minecraft-builds.html",
    "./coding-resources.html",
    "./collages.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', "serif"],
        cursive: ["cursive", "serif"],
      },
      screens: {
        xs: { max: "425px" },
        sm: { max: "640px" },
        md: { max: "768px" },
        lg: { max: "1024px" },
        xl: { max: "1280px" },
        "2xl": { max: "1536px" },
        "3xl": { max: "1700px" },
      },
    },
  },
  plugins: [],
};

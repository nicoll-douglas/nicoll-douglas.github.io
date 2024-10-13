import { defineConfig } from "vite";
import path from "path";

const root = path.resolve(__dirname, "src");

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./index.html",
        cars: "./cars.html",
        links: "./links.html",
        collages: "./collages.html",
        "site-map": "./site-map.html",
        // "favourite-places": "./favourite-places.html",
        "mr-robot": "./mr-robot.html",
        // "minecraft-builds": "./minecraft-builds.html",
        "coding-resources": "./coding-resources.html",
        projects: "./projects.html",
        music: "./music.html",
      },
    },
  },
  resolve: {
    alias: {
      "@": root,
      "@img": path.resolve(root, "assets/images/common"),
    },
  },
});

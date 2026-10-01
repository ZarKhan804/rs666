export default {
  routes: [
    "/",
    "/about-us",
    "/blog",
    "/contact",
    "/download",
  ],

  outDir: "static-pages",

  serveDir: "dist",

  flatOutput: false,

  buildCommand: "npm run build",

  viewport: {
    width: 1200,
    height: 800,
  },
};
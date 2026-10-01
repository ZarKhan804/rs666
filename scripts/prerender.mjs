import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const serverDir = path.join(distDir, "server");

const routes = [
  "/",
  "/about-us",
  "/blog",
  "/contact",
  "/download",
];

const template = fs.readFileSync(
  path.join(distDir, "index.html"),
  "utf-8"
);

const serverEntry = path.join(serverDir, "entry-server.js");

const { render } = await import(
  pathToFileURL(serverEntry).href
);

for (const route of routes) {
  const { html, helmet } = render(route);

  const headTags = [
    helmet.title?.toString(),
    helmet.meta?.toString(),
    helmet.link?.toString(),
    helmet.script?.toString(),
    helmet.noscript?.toString(),
    helmet.style?.toString(),
  ]
    .filter(Boolean)
    .join("\n");

  const finalHtml = template
    .replace("</head>", `${headTags}\n</head>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

  const outputDir =
    route === "/"
      ? distDir
      : path.join(distDir, route.slice(1));

  fs.mkdirSync(outputDir, { recursive: true });

  const outputFile = path.join(outputDir, "index.html");

  fs.writeFileSync(outputFile, finalHtml, "utf-8");

  console.log(`✓ Generated: ${route}`);
}

console.log("✓ All pages prerendered successfully.");

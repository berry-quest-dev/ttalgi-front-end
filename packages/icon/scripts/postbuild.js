const fs = require("fs");
const path = require("path");

const src = path.resolve(__dirname, "svgr-template.js");
const dest = path.resolve(__dirname, "../build/svgr-template.js");

fs.copyFileSync(src, dest);
console.log("📦 Copied svgr-template.js to build/");

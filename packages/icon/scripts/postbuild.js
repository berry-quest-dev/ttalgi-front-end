const fs = require("fs");
const path = require("path");

const src = path.resolve(__dirname, "template.js");
const dest = path.resolve(__dirname, "../build/template.js");

fs.copyFileSync(src, dest);
console.log("📦 Copied template.js to build/");

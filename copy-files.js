// copy-files.js
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "packages/image/favicon.ico");
const dest = path.join(__dirname, "apps/web/public/favicon.ico");

fs.copyFileSync(src, dest);
console.log("✅ favicon.ico copied successfully!");

const fs = require("fs");
const path = require("path");

const tplSrc = path.resolve(__dirname, "template.js");
const tplDest = path.resolve(__dirname, "../build/template.js");
const svgrrcSrc = path.resolve(__dirname, ".svgrrc.js");
const svgrrcDest = path.resolve(__dirname, "../build/.svgrrc.js");

fs.copyFileSync(tplSrc, tplDest);
fs.copyFileSync(svgrrcSrc, svgrrcDest);
console.log("📦 Copied files to build/");

const path = require("path");
const { execSync } = require("child_process");

function generateIconsWithCli(): void {
  const SVG_DIR = path.resolve(__dirname, "../svg");
  const OUT_DIR = path.resolve(__dirname, "../src");

  console.log("🚀 Generating React components using @svgr/cli...");
  execSync(
    `npx @svgr/cli@8.1.0 --template ./build/template.js --config-file ./build/.svgrrc.js ${SVG_DIR}/*.svg --out-dir ${OUT_DIR} --ext tsx`,
    { stdio: "inherit" }
  );
  console.log("✅ SVG to React component generation complete with CLI!");
}

generateIconsWithCli();

export {};

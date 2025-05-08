const fs = require("fs");
const path = require("path");
const { transform } = require("@svgr/core");

function pascalCase(name: string): string {
  return name
    .replace(/(^\w|-\w)/g, (c: string) => c.replace("-", "").toUpperCase())
    .replace(/\.svg$/, "");
}

async function generateIcon(file: string): Promise<void> {
  const SVG_DIR = path.resolve(__dirname, "../svg");
  const OUT_DIR = path.resolve(__dirname, "../src");

  const filePath = path.join(SVG_DIR, file);
  const svgCode = fs.readFileSync(filePath, "utf8");
  const componentName = pascalCase(file);

  const tsx = await transform(
    svgCode,
    {
      icon: true,
      typescript: true,
      jsxRuntime: "automatic",
      prettier: true,
      svgo: true,
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
    },
    { componentName }
  );

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const outputPath = path.join(OUT_DIR, `${componentName}.tsx`);
  fs.writeFileSync(outputPath, tsx, "utf8");
  console.log(`✅ Generated: ${componentName}.tsx`);
}

function run(): void {
  const SVG_DIR = path.resolve(__dirname, "../svg");
  const files: string[] = fs.readdirSync(SVG_DIR).filter((f: string) => f.endsWith(".svg"));
  Promise.all(files.map(generateIcon));
}

run();

export {};

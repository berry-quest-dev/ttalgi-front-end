import fs from "fs/promises";
import path from "path";
import fg from "fast-glob";
import { transform } from "@svgr/core";
import { fileURLToPath } from "url";
import customTemplate from "./customTemplate";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICON_ROOT = path.resolve(__dirname, "../");
const ICON_SRC = path.resolve(__dirname, "../svgs");
const ICON_OUTPUT = path.resolve(__dirname, "../components");

const run = async () => {
  const files = await fg("**/*.svg", { cwd: ICON_SRC });

  await fs.mkdir(ICON_OUTPUT, { recursive: true });

  const indexExports: string[] = [];

  for (const file of files) {
    const svgPath = path.join(ICON_SRC, file);
    const svgCode = await fs.readFile(svgPath, "utf8");

    const componentName = path
      .basename(file, ".svg")
      .replace(/(^[a-z])|([-_][a-z])/g, (match) => match.replace(/[-_]/, "").toUpperCase());

    try {
      const tsxCode = await transform(
        svgCode,
        {
          typescript: true,
          icon: true,
          jsxRuntime: "automatic",
          prettier: true,
          plugins: ["@svgr/plugin-jsx"],
          replaceAttrValues: {
            "#000": "currentColor",
            "#000000": "currentColor",
          },
          template: customTemplate as any,
        },
        { componentName }
      );

      const outputPath = path.join(ICON_OUTPUT, `${componentName}.tsx`);
      await fs.writeFile(outputPath, tsxCode, "utf8");
      indexExports.push(
        `export { default as ${componentName} } from './components/${componentName}';`
      );
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
  await fs.writeFile(path.join(ICON_ROOT, "index.ts"), indexExports.join("\n"), "utf-8");
};

run().catch((err) => {
  console.error("Error generating icons:", err);
  process.exit(1);
});

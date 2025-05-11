const chokidar = require("chokidar");
const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");

const svgPath = path.resolve(__dirname, "../svg");
const srcPath = path.resolve(__dirname, "../src");
const indexPath = path.resolve(srcPath, "index.ts");

console.log("👀 Watching for SVG changes...");

chokidar
  .watch(svgPath, { persistent: true })
  .on("add", handleGenerate)
  .on("change", handleGenerate)
  .on("unlink", handleDelete);

function handleGenerate(file: string): void {
  console.log(`🔄 Added or updated: ${path.basename(file)}`);
  exec(
    "pnpm generate",
    { cwd: path.resolve(__dirname, "..") },
    (err: Error | null, stdout: string, stderr: string) => {
      if (err) console.error(stderr);
      else console.log(stdout);
    }
  );
}

function pascalCase(name: string): string {
  return name
    .replace(/(^\w|-\w)/g, (c: string) => c.replace("-", "").toUpperCase())
    .replace(/\.svg$/, "");
}

function handleDelete(file: string): void {
  const filename = path.basename(file);
  const componentName = pascalCase(filename);
  const componentPath = path.resolve(srcPath, `${componentName}.tsx`);

  if (fs.existsSync(componentPath)) {
    fs.unlinkSync(componentPath);
    console.log(`🗑️ Deleted component: ${componentName}.tsx`);
  }

  if (fs.existsSync(indexPath)) {
    const lines = fs.readFileSync(indexPath, "utf8").split("\n");
    const newLines = lines.filter(
      (line: string) => !line.includes(`{ default as Icon${componentName} }`)
    );
    fs.writeFileSync(indexPath, newLines.join("\n"), "utf8");
    console.log(`🗑️ Cleaned index.ts entry for: ${componentName}`);
  }
}

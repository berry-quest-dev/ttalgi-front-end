const chokidar = require("chokidar");
const path = require("path");
const { exec } = require("child_process");

const svgPath: string = path.resolve(__dirname, "../svg");

console.log("👀 Watching for SVG changes...");

chokidar
  .watch(svgPath, { persistent: true })
  .on("add", runGenerate)
  .on("change", runGenerate)
  .on("unlink", runGenerate);

function runGenerate(file: string): void {
  console.log(`🔄 Change detected: ${file}`);
  exec(
    "pnpm generate",
    { cwd: path.resolve(__dirname, "..") },
    (err: Error | null, stdout: string, stderr: string) => {
      if (err) {
        console.error(stderr);
        return;
      }
      console.log(stdout);
    }
  );
}

export {};

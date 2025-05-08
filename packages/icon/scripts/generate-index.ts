const fs = require("fs");
const path = require("path");

const SRC_DIR = path.resolve(__dirname, "../src");
const INDEX_PATH = path.join(SRC_DIR, "index.ts");

function getComponentName(file: string): string {
  return file.replace(/\.tsx$/, "");
}

function generateIndexFile(): void {
  if (!fs.existsSync(SRC_DIR)) {
    console.error("❌ src 디렉토리가 없습니다.");
    process.exit(1);
  }

  const files = fs
    .readdirSync(SRC_DIR)
    .filter((f: string) => f.endsWith(".tsx") && f !== "index.ts");

  const exports = files
    .map((file: string) => {
      const name = getComponentName(file);
      return `export { default as ${name} } from './${name}';`;
    })
    .join("\n");

  fs.writeFileSync(INDEX_PATH, exports + "\n", "utf8");
  console.log("✅ index.ts 생성 완료");
}

generateIndexFile();

export {};

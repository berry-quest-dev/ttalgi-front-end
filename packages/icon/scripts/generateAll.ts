const { execSync } = require("child_process");
const path = require("path");

const CWD = path.resolve(__dirname, "..");

try {
  execSync("node build/generate.js", { cwd: CWD, stdio: "inherit" });
  execSync("node build/generateIndex.js", { cwd: CWD, stdio: "inherit" });
  console.log("✅ 전체 자동 생성 완료");
} catch (err) {
  console.error("❌ 자동 생성 중 에러 발생:", err);
}

export {};

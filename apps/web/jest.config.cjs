const baseConfig = require("../../packages/config/jest.config.base.cjs");

module.exports = {
  ...baseConfig,
  displayName: "web",
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

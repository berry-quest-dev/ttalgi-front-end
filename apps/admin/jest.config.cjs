const baseConfig = require("../../packages/config/jest.config.cjs");

module.exports = {
  ...baseConfig,
  displayName: "admin",
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

const baseConfig = require("../../packages/config/jest.config.base.cjs");

module.exports = {
  ...baseConfig,
  displayName: "admin",
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testMatch: ["**/src/**/*.test.js"], // Include test files in src/tests
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
};

module.exports = config;

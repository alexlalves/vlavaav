module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: [
    '<rootDir>/tests/**/*.spec.(js|jsx|ts|tsx)',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/tests/jest-after-env.ts',
  ],
};

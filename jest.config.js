module.exports = {
  preset: 'react-native',
  // testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest-setup.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!react-native)/'],
};

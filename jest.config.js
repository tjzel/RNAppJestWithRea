module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest-setup.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!react-native)/'],
};

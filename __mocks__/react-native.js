// Rename or delete this file to disable this mock.
jest.doMock('react-native', () => {
  // this passes the test;
  return jest.requireActual('react-native');

  // this makes all undefined correctly;
  // return undefined;
});

module.exports = require('react-native');

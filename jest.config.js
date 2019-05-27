/**
 * @jestconfig
 * Some configs to jest ignore folders on test
 */

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/api/', '<rootDir>/node_modules/'],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
  }
}
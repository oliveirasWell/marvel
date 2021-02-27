module.exports = {
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  sourceRoot: './packages/src',
  coveragePathIgnorePatterns: [
    '<rootDir>/packages/(?:.+?)/lib/',
    '<rootDir>/packages/(?:.+?)/node_modules/',
    '<rootDir>/node_modules/',
    '\\*resultsTestResource.js$',
  ],
  coverageReporters: ['html', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 25,
      lines: 25,
      statements: 25,
    },
  },
  transform: {
    '^.+\\.json5$': 'json5-jest',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  testPathIgnorePatterns: [
    '<rootDir>/packages/(?:.+?)/lib/',
    '<rootDir>/packages/(?:.+?)/node_modules/',
    '<rootDir>/cypress/',
    '\\*.(css|jpg|png|scss|less|sass)$',
    '\\*resultsTestResource.js$',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  moduleFileExtensions: ['json', 'js', 'ts', 'tsx'],
  moduleDirectories: [
    'node_modules',
    'packages/shared/node_modules',
    'packages/react-ui/node_modules',
    'packages/react-ui/src',
    'packages/shared/src',
  ],
};

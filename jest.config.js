module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/packages'],
  testEnvironment: 'node',
  globals: {
    __PLATFORM__: true,
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
    __SERVER__: true,
  },
  setupFilesAfterEnv: ['<rootDir>/scripts/jestSetup.js'],
  moduleNameMapper: {
    '\\.scss$': '<rootDir>/__mocks__/styleMock.js',
    '^react($|/.+)': '<rootDir>/node_modules/react$1', // makes sure all React imports are running off of the one in this package.
  },
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@nykaa)',
  ],
};

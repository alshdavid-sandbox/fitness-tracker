module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,js,tsx,jsx}'
  ],
  coverageDirectory: 'reports/coverage',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/../../mocks/jestFileMock.js',
    '\\.(css|less)$': '<rootDir>/../../mocks/jestStyleMock.js',
    '^lodash-es$': 'lodash',
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  reporters: [
    'default'
  ],
  testRegex: '.*\\.spec\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!lodash-es)'
  ]
}
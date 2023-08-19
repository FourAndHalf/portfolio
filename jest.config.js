module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    },
};  
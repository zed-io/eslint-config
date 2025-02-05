module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['unused-imports', 'import'],
  rules: {
    'no-unused-vars': 'off', // Turned off in favor of unused-imports rule
    "@typescript-eslint/no-unused-vars": "off", // Replaced by unused-imports
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': "error",
    'import/order': "error",
    'import/no-unused-modules': [1, { unusedExports: true }],
  },
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
}; 
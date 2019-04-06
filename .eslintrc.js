module.exports = {
  extends: 'standard',
  root: true,
  env: {
    node: true,
    commonjs: true,
    es6: true,
    jquery: false,
    jest: true,
    jasmine: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'padded-blocks': ['error', { switches: 'always' }],
    'strict': ['error'],
    'no-unused-vars': ['warn', { varsIgnorePattern: '^_$' }],
  },
}

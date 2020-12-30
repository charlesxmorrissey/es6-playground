'use strict'

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],

  env: {
    browser: true,
    es6: true,
    jest: true,
  },

  globals: {
    expect: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: true,
    },
  },

  rules: {
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 2,
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
}

// @ts-check
const { defineConfig } = require('eslint-define-config')
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = defineConfig({
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: ['@vill-v'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
})

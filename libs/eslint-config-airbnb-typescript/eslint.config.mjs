import airbnbBase from '@pasteltech/eslint-config-airbnb-base'
import eslintConfigPrettier from 'eslint-config-prettier'
import base from './base.mjs'

export default [
  {
    ignores: ['node_modules'],
  },
  ...airbnbBase.configs.base,
  ...base,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
]

import base from '@pasteltech/eslint-config-base'
import globals from 'globals'

export default [
  ...base.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  },
]

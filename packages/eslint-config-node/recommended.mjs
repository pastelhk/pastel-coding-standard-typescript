import base from '@pasteltech/eslint-config-base'
import globals from 'globals'

export const recommended = [
  ...base.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]

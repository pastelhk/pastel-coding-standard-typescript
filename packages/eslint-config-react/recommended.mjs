import airbnb from '@pasteltech/eslint-config-airbnb'
import base from '@pasteltech/eslint-config-base'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export const recommended = [
  react.configs.flat.recommended,
  ...airbnb.configs.react,
  ...base.configs.recommended,
  react.configs.flat['jsx-runtime'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      'react-hooks': reactHooks,
    },

    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },

    rules: {
      'react/destructuring-assignment': [
        'error',
        'always',
        {
          ignoreClassFields: true,
        },
      ],

      'react/jsx-props-no-spreading': ['warn'],
      'react/prop-types': 'off',
      'react/self-closing-comp': 'error',
      'react/display-name': 'error',
      'react/jsx-filename-extension': [
        'error',
        { allow: 'as-needed', extensions: ['.tsx'] },
      ],
      'react/require-default-props': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
]

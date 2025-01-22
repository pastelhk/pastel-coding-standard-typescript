import airbnb from '@pasteltech/eslint-config-airbnb'
import base from '@pasteltech/eslint-config-base'
import react from 'eslint-plugin-react'
import globals from 'globals'

export default [
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  ...airbnb.configs.recommended,
  ...base.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
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
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/display-name': 'error',

      'no-restricted-syntax': [
        'error',
        {
          selector: "MemberExpression[property.name='at']",
          message:
            '.at is not available in older version of browsers. Use bracket notation instead',
        },
      ],

      'import/no-internal-modules': [
        'error',
        {
          allow: ['@mui/**', 'react-dom/*'],
        },
      ],
    },
  },
]

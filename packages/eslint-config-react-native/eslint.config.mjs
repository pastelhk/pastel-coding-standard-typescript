import reactNative from 'eslint-plugin-react-native'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends('@pasteltech/eslint-config-react'),
  {
    plugins: {
      'react-native': reactNative,
    },

    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },

    rules: {
      'import/no-internal-modules': [
        'error',
        {
          allow: ['styled-components/native'],
        },
      ],

      'react-native/no-inline-styles': 'error',
      'react-native/no-single-element-style-arrays': 'error',

      'react-native/split-platform-components': [
        'error',
        {
          androidPathRegex: '\\.android.(js|jsx|ts|tsx)$',
          iosPathRegex: '\\.ios.(js|jsx|ts|tsx)$',
        },
      ],

      'react-native/no-raw-text': 'error',
      'react-native/no-color-literals': 'error',

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'styled-components',
              importNames: ['default', 'styled'],
              message: 'Use styled from styled-components/native ',
            },
            {
              name: 'react-native-gesture-handler',
              importNames: [
                'TouchableOpacity',
                'TouchableHighlight',
                'FlatList',
              ],
              message:
                'Avoid using Touchables from react-native-gesture-handler',
            },
            {
              name: 'react-i18next',
              importNames: ['useTranslation'],
              message: 'Use useTranslation from @pastellink/i18n-react ',
            },
          ],
        },
      ],
    },
  },
]

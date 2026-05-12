import react from '@pasteltech/eslint-config-react'
import reactNative from 'eslint-plugin-react-native'
import globals from 'globals'

export const recommended = [
  ...react.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        __DEV__: false,
        __fbBatchedBridgeConfig: false,
        ErrorUtils: false,
        // Disable browser-only globals inherited via react preset.
        window: 'off',
        document: 'off',
      },
    },

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
          ],
        },
      ],
    },
  },
]

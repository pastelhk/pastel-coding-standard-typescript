module.exports = {
  extends: ['@pasteltech/eslint-config-react'],
  plugins: ['react-native'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'react-native/no-inline-styles': 'error',
    'react-native/no-single-element-style-arrays': 'warn',
    'react-native/split-platform-components': [
      'error',
      {
        androidPathRegex: '\\.android.(js|jsx|ts|tsx)$',
        iosPathRegex: '\\.ios.(js|jsx|ts|tsx)$',
      },
    ],
    'react-native/no-raw-text': 'warn',
    'react-native/no-color-literals': 'warn',
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
            importNames: ['TouchableOpacity', 'TouchableHighlight', 'FlatList'],
            message: 'Avoid using Touchables from react-native-gesture-handler',
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
}

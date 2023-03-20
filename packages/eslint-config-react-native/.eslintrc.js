module.exports = {
  extends: ['@pastellink/eslint-config-react'],
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
  },
}

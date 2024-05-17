module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb-typescript',
    '@pasteltech/eslint-config-base',
  ],
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'react/destructuring-assignment': [
      'error',
      'always',
      { ignoreClassFields: true },
    ],
    'react/jsx-props-no-spreading': ['warn'],
    'react/prop-types': 'off', // ? using typescript for type checking
    'react/self-closing-comp': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'no-restricted-syntax': [
      'warn',
      {
        selector: "MemberExpression[property.name='at']",
        message: '.at is not available in older version of browsers. Use bracket notation instead',
      },
    ],
  },
}

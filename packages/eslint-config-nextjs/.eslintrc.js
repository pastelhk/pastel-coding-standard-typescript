module.exports = {
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    '@pasteltech/eslint-config-react',
  ],
  rules: {
    'import/no-internal-modules': [
      'error',
      {
        allow: ['react-dom/*', 'next/*'],
      },
    ],
  },
  overrides: [
    {
      files: ['src/app/**'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
      },
    },
  ],
}

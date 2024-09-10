const nextDefaultExportFilenames = [
  'default',
  'error',
  'instrumentation',
  'layout',
  'mdx-components',
  'middleware',
  'not-found',
  'page',
  'route',
  'template',
]

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
        allow: ['@mui/**', 'next/**', 'next-i18n-router/**'],
      },
    ],
  },
  overrides: [
    {
      files: [
        ...nextDefaultExportFilenames.map((it) => `src/app/**/${it}.tsx`),
        'next.config.*',
        '18nConfig.ts',
      ],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
      },
    },
  ],
}

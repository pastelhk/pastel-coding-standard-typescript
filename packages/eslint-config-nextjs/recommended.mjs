import next from '@next/eslint-plugin-next'
import react from '@pasteltech/eslint-config-react'

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

export default [
  {
    ...next.configs.recommended,
    plugins: {
      '@next/next': next,
    },
  },
  // ? re-implement eslint-configs-next/core-web-vitals since it includes "extends" at 15.1.5
  {
    rules: next.configs['core-web-vitals'].rules,
  },
  ...react.configs.recommended,
  {
    rules: {
      'import/no-internal-modules': [
        'error',
        {
          allow: ['@mui/**', 'next/**', 'next-i18n-router/**'],
        },
      ],
    },
  },
  {
    files: [
      ...nextDefaultExportFilenames.map((it) => `src/app/**/${it}.tsx`),
      '**/next.config.*',
      '**/18nConfig.ts',
    ],

    rules: {
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'error',
    },
  },
]

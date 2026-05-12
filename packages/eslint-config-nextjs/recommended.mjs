import next from '@next/eslint-plugin-next'
import react from '@pasteltech/eslint-config-react'

const nextDefaultExportFilenames = [
  'default',
  'error',
  'forbidden',
  'instrumentation',
  'layout',
  'loading',
  'mdx-components',
  'middleware',
  'not-found',
  'page',
  'route',
  'template',
  'unauthorized',
]

export const recommended = [
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
    files: [
      // src/app/** layout for projects using the src directory
      ...nextDefaultExportFilenames.map((it) => `src/app/**/${it}.tsx`),
      // app/** layout for projects without a src directory
      ...nextDefaultExportFilenames.map((it) => `app/**/${it}.tsx`),
      '**/next.config.*',
    ],

    rules: {
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'error',
    },
  },
]

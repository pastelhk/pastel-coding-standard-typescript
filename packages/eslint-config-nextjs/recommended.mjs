import { FlatCompat } from '@eslint/eslintrc'
import react from '@pasteltech/eslint-config-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
})

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
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
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

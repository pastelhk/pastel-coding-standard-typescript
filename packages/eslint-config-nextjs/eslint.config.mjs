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
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    '@pasteltech/eslint-config-react',
  ),
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
      'src/app/**/default.tsx',
      'src/app/**/error.tsx',
      'src/app/**/instrumentation.tsx',
      'src/app/**/layout.tsx',
      'src/app/**/mdx-components.tsx',
      'src/app/**/middleware.tsx',
      'src/app/**/not-found.tsx',
      'src/app/**/page.tsx',
      'src/app/**/route.tsx',
      'src/app/**/template.tsx',
      '**/next.config.*',
      '**/18nConfig.ts',
    ],

    rules: {
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'error',
    },
  },
]

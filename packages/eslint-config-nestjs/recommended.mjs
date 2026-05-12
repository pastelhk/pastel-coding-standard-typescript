import node from '@pasteltech/eslint-config-node'

export const recommended = [
  ...node.configs.recommended,
  {
    rules: {
      // NestJS services and controllers use explicit public/private/protected
      // for clarity; this is idiomatic in class-heavy architectures.
      '@typescript-eslint/explicit-member-accessibility': 'error',
    },
  },
  {
    files: ['**/*.dto.ts'],
    rules: {
      'max-classes-per-file': 'off',
    },
  },
]

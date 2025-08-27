import node from '@pasteltech/eslint-config-node'

export default [
  ...node.configs.recommended,
  {
    files: ['*.dto.ts'],
    rules: {
      'max-classes-per-file': 'off',
    },
  },
]

import js from '@eslint/js'
import airbnb from '@pasteltech/eslint-config-airbnb-base'
import airbnbTypescript from '@pasteltech/eslint-config-airbnb-typescript'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier/recommended'

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  ...airbnb.configs.base,
  ...airbnbTypescript.configs.base,
  prettier,
  {
    ignores: [
      '**/dist',
      '**/node_modules',
      'coverage/*',
      '**/vite.config.ts',
      '**/webpack.config.js',
      '**/babel.config.js',
      '**/metro.config.js',
    ],
  },
  {
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },

    rules: {
      'no-console': 'off',
      'no-nested-ternary': 'error',
      'class-methods-use-this': 'off',

      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['self'],
        },
      ],

      'no-empty': [
        'error',
        {
          allowEmptyCatch: true,
        },
      ],

      'no-await-in-loop': 'error',
      'no-else-return': 'error',
      'node/global-require': 'off',
      '@stylistic/semi': ['error', 'never'],

      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: [
            'arrowFunctions',
            'functions',
            'methods',
            'private-constructors',
            'protected-constructors',
          ],
        },
      ],

      '@typescript-eslint/explicit-member-accessibility': 'error',

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'import',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'parameter',
          format: ['PascalCase'],

          filter: {
            regex: '(Component|Factory|Class)$',
            match: true,
          },

          leadingUnderscore: 'allow',
        },
        {
          selector: 'property',
          format: ['camelCase', 'snake_case', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: [
            'classProperty',
            'objectLiteralProperty',
            'typeProperty',
            'classMethod',
            'objectLiteralMethod',
            'typeMethod',
            'accessor',
            'enumMember',
          ],
          format: null,
          modifiers: ['requiresQuotes'],
        },
        {
          selector: 'variable',
          modifiers: ['destructured'],
          format: null,
        },
      ],

      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-optional-chain': ['error'],
      '@typescript-eslint/prefer-nullish-coalescing': ['error'],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-floating-promises': [
        'error',
        {
          ignoreIIFE: true,
        },
      ],

      'import/prefer-default-export': 'off',
      'import/no-default-export': 'error',
      'import/no-anonymous-default-export': 'error',
      'import/no-internal-modules': 'error',
      'import/no-self-import': 'error',
      'import/namespace': 'off',

      'import/no-cycle': [
        'error',
        {
          maxDepth: 3,
        },
      ],

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.*',
            '**/__tests__/*',
            '**/setup-tests.ts',
            '**/*.spec.*',
          ],
        },
      ],
    },
  },
  {
    files: ['eslint.config.*'],
    rules: {
      'import/no-anonymous-default-export': 'off',
      'import/no-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-named-export': 'error',
      '@typescript-eslint/naming-convention': 'off',
    },
  },
]

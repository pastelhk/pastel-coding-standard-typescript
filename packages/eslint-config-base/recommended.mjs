import js from '@eslint/js'
import airbnb from '@pasteltech/eslint-config-airbnb-base'
import airbnbTypescript from '@pasteltech/eslint-config-airbnb-typescript'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier/recommended'
import sonarjs from 'eslint-plugin-sonarjs'
import unicorn from 'eslint-plugin-unicorn'

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  ...airbnb.configs.base,
  ...airbnbTypescript.configs.base,
  unicorn.configs.recommended,
  {
    rules: {
      // Breaks Express/NestJS handler signatures: req, res, err, ctx etc. are idiomatic
      'unicorn/prevent-abbreviations': 'off',
      // null is used by contract in many APIs (ORMs, JSON, library return types)
      'unicorn/no-null': 'off',
      // .reduce() is idiomatic for building objects, summing, and transforming; judge case-by-case
      'unicorn/no-array-reduce': 'off',
      // Enforce kebab-case for all files across all platforms (avoids case-sensitivity bugs on macOS/Windows)
      'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    },
  },
  sonarjs.configs.recommended,
  {
    rules: {
      // sonarjs/no-nested-conditional supersedes no-nested-ternary; keeping both
      // causes unicorn/prefer-ternary auto-fix to produce unfixable nested-ternary errors.
      'no-nested-ternary': 'off',

      // Defer to @typescript-eslint/no-unused-vars which has our custom ^_ ignore pattern.
      // sonarjs version does not honour that pattern and double-reports the same symbol.
      'sonarjs/no-unused-vars': 'off',

      // Already enforced by no-fallthrough in js.configs.recommended.
      'sonarjs/no-fallthrough': 'off',

      // Defer to no-param-reassign which is configured with ignorePropertyModificationsFor.
      // sonarjs version does not honour the 'self' exception.
      'sonarjs/no-parameter-reassignment': 'off',

      // Already caught by import plugin + TypeScript verbatimModuleSyntax.
      'sonarjs/unused-import': 'off',
    },
  },
  prettier,
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/coverage/**',
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
      'n/global-require': 'off',
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

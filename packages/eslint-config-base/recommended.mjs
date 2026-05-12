import js from '@eslint/js'
import airbnb from '@pasteltech/eslint-config-airbnb-base'
import airbnbTypescript from '@pasteltech/eslint-config-airbnb-typescript'
import prettier from 'eslint-config-prettier/flat'
import barrelFiles from 'eslint-plugin-barrel-files'
import importPlugin from 'eslint-plugin-import'
import unicorn from 'eslint-plugin-unicorn'

export const recommended = [
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
      // n/global-require is off (dynamic require is allowed); unicorn/prefer-module would
      // conflict by banning require() at the same time. Keep them in sync.
      'unicorn/prefer-module': 'off',
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
    plugins: {
      'barrel-files': barrelFiles,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },

    rules: {
      'no-console': 'warn',
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
      // @stylistic/semi is intentionally omitted: eslint-config-prettier (bundled with
      // eslint-plugin-prettier/recommended) disables it; Prettier owns semicolon formatting.

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

      '@typescript-eslint/prefer-optional-chain': ['error'],
      '@typescript-eslint/prefer-nullish-coalescing': ['error'],
      // Warn rather than error: there are legitimate any escape hatches (third-party types,
      // gradual migration), but unreviewed any defeats TypeScript's purpose.
      '@typescript-eslint/no-explicit-any': 'warn',
      // The ! operator suppresses nullability checks; a warning prompts explicit handling.
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],

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
      // Allow `void promise()` as the explicit fire-and-forget escape hatch for
      // @typescript-eslint/no-floating-promises. Without this the two rules conflict.
      'no-void': ['error', { allowAsStatement: true }],

      'import/prefer-default-export': 'off',
      'import/no-default-export': 'error',
      'import/no-anonymous-default-export': 'error',
      // Turned off: use package.json "exports" field to enforce public API boundaries
      // for published packages (Node + TypeScript enforce it for all consumers).
      // Keeping this on forces barrel exports in app code, which is an antipattern.
      'import/no-internal-modules': 'off',
      'import/no-self-import': 'error',
      'import/namespace': 'off',

      'import/no-cycle': 'error',

      // Selectively inherit airbnb's no-restricted-syntax: keep ForIn and LabeledStatement;
      // drop ForOfStatement (regenerator-runtime rationale is obsolete in modern ES modules)
      // and WithStatement (already a syntax error in strict mode / TypeScript).
      // Add SequenceExpression (comma operator — almost always a bug) and TSEnumDeclaration
      // (use `as const` objects instead; enums have numeric footguns and isolatedModules issues).
      'no-restricted-syntax': [
        'error',
        ...airbnb.configs.style
          .flatMap((c) => c.rules?.['no-restricted-syntax']?.slice(1) ?? [])
          .filter((entry) => entry?.selector !== 'ForOfStatement'),
        {
          selector: 'SequenceExpression',
          message:
            'The comma operator is almost always a bug. Use separate statements instead.',
        },
        {
          selector: 'TSEnumDeclaration',
          message:
            'Avoid TypeScript enums — use `as const` objects instead. Enums have numeric footguns, reverse-mapping overhead, and break with isolatedModules.',
        },
      ],

      // Barrel file prevention — see configs.packageEntry for the opt-in override.
      // Flags files that are purely re-exports (pure barrel files).
      'barrel-files/avoid-barrel-files': 'warn',
      // Flags `export * from` — wildcard re-exports prevent tree-shaking and expose internals.
      'barrel-files/avoid-re-export-all': 'error',

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.*',
            '**/__tests__/*',
            '**/setup-tests.ts',
            '**/*.spec.*',
            '**/*.e2e.*',
            '**/*.stories.*',
            '**/*.mock.*',
            '**/vitest.config.*',
            '**/jest.config.*',
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
  {
    files: ['**/*.test.*', '**/*.spec.*', '**/__tests__/**'],
    rules: {
      // Inline helper functions colocated with their test are intentional and improve
      // readability. Moving them to module scope would scatter context away from the test.
      'unicorn/consistent-function-scoping': 'off',
    },
  },
]

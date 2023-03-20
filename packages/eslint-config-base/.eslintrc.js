module.exports = {
  plugins: ['@typescript-eslint', 'jest'],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'airbnb-typescript/base',
    'prettier',
  ],
  env: {
    'jest/globals': true,
  },
  ignorePatterns: ['.eslintrc.js', 'coverage/*'],
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    AbortController: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    ErrorUtils: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    FileReader: false,
    FormData: false,
    global: false,
    Headers: false,
    Intl: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    queueMicrotask: true,
    URL: false,
    URLSearchParams: false,
    WebSocket: true,
    window: false,
    XMLHttpRequest: false,
  },
  rules: {
    'no-console': 'off',
    'no-nested-ternary': 'warn',
    'class-methods-use-this': 'warn',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['self'] },
    ],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-await-in-loop': 'warn',

    'node/global-require': 'off',

    '@typescript-eslint/semi': ['error', 'never'],
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
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    '@typescript-eslint/naming-convention': [
      'warn',
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
        selector: 'parameter',
        format: ['camelCase'],
      },
      {
        selector: 'parameter',
        format: ['PascalCase'],
        suffix: ['Component'],
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
    ],
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/prefer-optional-chain': ['error'],
    '@typescript-eslint/prefer-nullish-coalescing': ['error'],

    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-anonymous-default-export': 'warn',
    'import/no-internal-modules': [
      'warn',
      { allow: ['styled-components/native'] },
    ],
    'import/no-self-import': 'error',
    'import/namespace': 'off',

    // ? ignore as computation expensive. Turn it on when resolving cyclic dependency issues
    'import/no-cycle': ['error', { maxDepth: 3 }],
  },
}

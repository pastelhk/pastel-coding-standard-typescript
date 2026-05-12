import airbnb from '@pasteltech/eslint-config-airbnb-base'
import barrelFiles from 'eslint-plugin-barrel-files'

/**
 * Opt-in override for package entry / index files.
 *
 * Spread this after `recommended` when your package uses `export * from`
 * as shorthand in index files rather than explicit named re-exports:
 *
 * ```js
 * import base from '@pasteltech/eslint-config-base'
 * export default [
 *   ...base.configs.recommended,
 *   ...base.configs.packageEntry,   // add this line
 * ]
 * ```
 *
 * For index.ts, index.mjs, index.js files:
 * - `barrel-files/avoid-barrel-files` is turned off (pure re-export files are intentional)
 * - `barrel-files/avoid-re-export-all` is turned off (`export * from` is allowed)
 * - `no-restricted-syntax` drops ExportAllDeclaration while keeping all airbnb entries
 */
export default [
  {
    files: ['**/index.ts', '**/index.mjs', '**/index.js'],
    plugins: {
      'barrel-files': barrelFiles,
    },
    rules: {
      // Index files in published packages are intentional barrels.
      'barrel-files/avoid-barrel-files': 'off',
      'barrel-files/avoid-re-export-all': 'off',
      // Restore no-restricted-syntax without ExportAllDeclaration.
      // Airbnb entries are read dynamically so they stay in sync with the lib.
      'no-restricted-syntax': [
        'error',
        ...airbnb.configs.style.flatMap(
          (c) => c.rules?.['no-restricted-syntax']?.slice(1) ?? [],
        ),
      ],
    },
  },
]

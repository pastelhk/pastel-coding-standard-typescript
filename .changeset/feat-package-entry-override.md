---
'@pasteltech/eslint-config-base': minor
---

Add `configs.packageEntry` opt-in override for package index/entry files.

Projects that use `export * from` shorthand in their `index.ts` entry files can now opt in to relax the `ExportAllDeclaration` restriction for those files only:

```js
import base from '@pasteltech/eslint-config-base'

export default [
  ...base.configs.recommended,
  ...base.configs.packageEntry, // unlocks export * from in index.* files
]
```

Only `ExportAllDeclaration` is unlocked, and only for files matching `**/index.ts`, `**/index.mjs`, `**/index.js`. All other `no-restricted-syntax` entries (ForIn, ForOf, LabeledStatement, WithStatement) remain enforced everywhere.

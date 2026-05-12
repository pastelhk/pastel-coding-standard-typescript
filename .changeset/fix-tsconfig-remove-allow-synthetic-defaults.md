---
'@pasteltech/tsconfig-base': patch
---

Remove redundant `allowSyntheticDefaultImports: true`. When `verbatimModuleSyntax` is enabled, TypeScript 5.x implicitly enables synthetic default imports and ignores this flag entirely.

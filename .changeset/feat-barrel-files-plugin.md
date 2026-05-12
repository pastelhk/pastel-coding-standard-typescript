---
'@pasteltech/eslint-config-base': minor
---

Add `eslint-plugin-barrel-files` for dedicated barrel export detection.

**Two new rules in `recommended`:**

- `barrel-files/avoid-barrel-files: warn` — flags files whose entire content is re-exports (pure barrel files). Warn rather than error because the diagnosis is straightforward: split the barrel into direct imports at each call site.
- `barrel-files/avoid-re-export-all: error` — flags `export * from '...'` (wildcard re-exports). Replaces the previous `no-restricted-syntax` AST selector approach with a dedicated rule that produces clearer error messages. Behaviour is identical.

**`no-restricted-syntax` is simplified**: The `ExportAllDeclaration` AST selector entry is removed since `barrel-files/avoid-re-export-all` now covers it. The airbnb entries (ForIn, ForOf, LabeledStatement, WithStatement) are preserved.

**`configs.packageEntry` updated**: Both barrel-files rules are turned off for `**/index.{ts,mjs,js}` files so published package entry files are not flagged. The `no-restricted-syntax` override (without ExportAllDeclaration) is retained for consistency.

---
'@pasteltech/eslint-config-base': minor
---

Ban wildcard re-exports (`export * from`) via `no-restricted-syntax`.

`ExportAllDeclaration` is the most harmful barrel pattern:

- Exports everything including private/internal symbols
- Prevents tree-shaking (bundlers cannot statically analyse what is used)
- Common source of hidden circular dependencies

Named re-exports (`export { X } from '...'`) are intentionally left allowed — they are explicit and legitimate in published package entry files.

The existing airbnb `no-restricted-syntax` entries (ForIn, ForOf, LabeledStatement, WithStatement) are preserved by reading them dynamically from the airbnb config at parse time.

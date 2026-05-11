---
'@pasteltech/tsconfig-base': major
---

**BREAKING**: Replace `isolatedModules`, `esModuleInterop`, and `allowSyntheticDefaultImports` with `verbatimModuleSyntax`. All consuming projects must use explicit `import type` syntax for type-only imports. Remove `useDefineForClassFields` (redundant default in TypeScript 5.x).

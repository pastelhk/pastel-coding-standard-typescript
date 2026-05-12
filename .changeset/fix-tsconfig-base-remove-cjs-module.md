---
'@pasteltech/tsconfig-base': minor
---

Remove `"module": "commonjs"` from `tsconfig-base`.

**Why**: `module: "commonjs"` paired with `verbatimModuleSyntax: true` (also in base) causes confusion: `verbatimModuleSyntax` is designed for explicit ESM/CJS interop and behaves unexpectedly as a global default. More importantly, every consuming config already sets its own `module` value (`commonjs` in tsconfig-node, `ESNext` in tsconfig-react, `nodenext` in tsconfig-node/esm), so the base value was always an overridden default.

**Migration**: No change required for most consumers. If you use `tsconfig-base` directly without a consuming preset, add `"module": "commonjs"` (or your preferred module format) to your project's `tsconfig.json`.

Also improves the inline comment for `moduleResolution` to reference the correct modern alternatives.

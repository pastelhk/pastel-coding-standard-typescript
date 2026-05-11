---
'@pasteltech/tsconfig-node': major
---

**BREAKING**: Add `tsconfig.esm.json` variant for ESM projects (`module: "nodenext"`, `moduleResolution: "nodenext"`, `erasableSyntaxOnly: true`). Projects referencing the package via exports must use the explicit `/tsconfig` or `/tsconfig.esm` path.

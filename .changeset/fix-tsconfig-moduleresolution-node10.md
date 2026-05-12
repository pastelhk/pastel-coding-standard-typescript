---
'@pasteltech/tsconfig-base': patch
---

Rename `moduleResolution` from `"node"` to `"node10"`. Functionally identical — TypeScript 5.x treats them the same — but `"node10"` is the canonical name in modern TypeScript docs and avoids confusion with `"nodenext"`.

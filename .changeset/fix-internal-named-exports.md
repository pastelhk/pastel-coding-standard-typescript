---
'@pasteltech/eslint-config-base': patch
'@pasteltech/eslint-config-node': patch
'@pasteltech/eslint-config-nestjs': patch
'@pasteltech/eslint-config-react': patch
'@pasteltech/eslint-config-nextjs': patch
'@pasteltech/eslint-config-react-native': patch
---

Convert internal `recommended.mjs` and `package-entry.mjs` files to named exports.

The `import/no-default-export` rule (enforced in `recommended`) applies to all project source files. These are internal modules consumed only by their own `index.mjs` — not public entry points — so they should follow the same convention.

Each `index.mjs` (the public default export) is updated to use a named import:

```js
// before
import recommended from './recommended.mjs'

// after
import { recommended } from './recommended.mjs'
```

The public `export default { configs: { recommended } }` shape in each `index.mjs` is unchanged — no impact on consumers.

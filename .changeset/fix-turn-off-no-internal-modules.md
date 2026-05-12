---
'@pasteltech/eslint-config-base': minor
'@pasteltech/eslint-config-react': patch
'@pasteltech/eslint-config-nextjs': patch
'@pasteltech/eslint-config-react-native': patch
---

Turn off `import/no-internal-modules` and remove its per-package allow-list overrides.

**Why**: The rule was intended to prevent deep imports into third-party packages, but it achieves the opposite effect in practice — it forces barrel `index.ts` files in application code, which is an antipattern (harms tree-shaking, promotes circular dependencies, slows builds).

The correct mechanism for protecting a **published package's** public API is the `"exports"` field in `package.json`. Node.js and TypeScript both enforce it natively for all consumers in all repos — not just within this repo's ESLint scope.

**Migration**: Remove any `import/no-internal-modules` overrides from your project's ESLint config. Use `"exports"` in `package.json` to declare what is and isn't part of your public API.

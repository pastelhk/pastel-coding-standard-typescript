---
'@pasteltech/eslint-config-base': minor
---

Three cross-check fixes to `eslint-config-base`:

**1. Fix `unicorn/prefer-module` conflict with `n/global-require`**
`n/global-require: 'off'` explicitly permits dynamic `require()` calls. `unicorn/prefer-module` (enabled by `unicorn.configs.recommended`) simultaneously forbids them. Added `unicorn/prefer-module: 'off'` to keep the two in sync — if dynamic require is allowed, the unicorn rule must not contradict it.

**2. Remove redundant `@stylistic/semi`**
`eslint-plugin-prettier/recommended` includes `eslint-config-prettier`, which disables all `@stylistic` rules that conflict with Prettier. Re-enabling `@stylistic/semi` in a later config block caused double-reporting of the same semicolon violations. Removed it; Prettier owns semicolon formatting exclusively.

**3. Add `@typescript-eslint/no-explicit-any` and `@typescript-eslint/no-non-null-assertion` warnings**
`airbnb-typescript` does not extend `@typescript-eslint/recommended`, so these rules were not inherited. Both are set to `'warn'` rather than `'error'`:

- `any` has legitimate escape hatches (third-party types, gradual migration), but unreviewed `any` defeats TypeScript's value.
- The `!` non-null assertion operator silently bypasses nullability; a warning prompts teams to handle the case explicitly.

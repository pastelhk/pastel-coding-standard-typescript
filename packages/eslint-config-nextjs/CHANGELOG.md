# Change Log

## 1.3.4

### Patch Changes

- [`4e57f0e`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/4e57f0ed2f7e675b21a3732071b6bacdab9b568f) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - refactor(eslint-config-nextjs): Move @next/eslint-plugin-next to peer dependencies

- Updated dependencies []:
  - @pasteltech/eslint-config-react@1.3.4

## 1.3.3

### Patch Changes

- Updated dependencies []:
  - @pasteltech/eslint-config-react@1.3.3

## 1.3.2

### Patch Changes

- [`7838b74`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/7838b74d9213fd61c628ef53b12092aed4671399) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Convert internal `recommended.mjs` and `package-entry.mjs` files to named exports.

  The `import/no-default-export` rule (enforced in `recommended`) applies to all project source files. These are internal modules consumed only by their own `index.mjs` — not public entry points — so they should follow the same convention.

  Each `index.mjs` (the public default export) is updated to use a named import:

  ```js
  // before
  import recommended from './recommended.mjs'

  // after
  import { recommended } from './recommended.mjs'
  ```

  The public `export default { configs: { recommended } }` shape in each `index.mjs` is unchanged — no impact on consumers.

- [`8fc1fbc`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/8fc1fbc7de91343327fd790f951f2712c2e1ad7d) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Broaden the default-export file override in the Next.js preset.
  - **Add Next 15 special files**: `forbidden.tsx` and `unauthorized.tsx` were introduced in Next.js 15 as new App Router conventions; they require a default export but were missing from the allowlist.
  - **Cover projects without `src/`**: The glob `src/app/**/{file}.tsx` only matched projects using a `src` directory. Add a parallel `app/**/{file}.tsx` pattern so teams that put `app/` at the repository root also get the override.

- [`c9e4db7`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/c9e4db7034734a7b1dbe82dfd243133163a928cd) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Add `loading` to the Next.js App Router default-export filename allowlist so `loading.tsx` files correctly receive the `import/prefer-default-export` override.

- [`5186634`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/51866341dfd6ed4f8a0f5e60ad333ca4db6daecb) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Fix i18n config filename glob (`18nConfig` → `i18nConfig`) in Next.js preset and correct React Native preset meta package name.

- [`e359c05`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/e359c05d10edfab251f612e5234a5bb762febae2) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Remove organisation-internal references from shared public presets.
  - **react-native**: Remove `react-i18next → @pastellink/i18n-react` restriction. This rule referenced a private org package, making the shared config non-portable for teams not using that package.
  - **nextjs**: Remove `i18nConfig.ts` from the default-export file allowlist. This was a project-specific filename that leaked into the shared standard.

- [`9caacc5`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/9caacc509b8e0a06102c08d8c34abf609e123945) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Turn off `import/no-internal-modules` and remove its per-package allow-list overrides.

  **Why**: The rule was intended to prevent deep imports into third-party packages, but it achieves the opposite effect in practice — it forces barrel `index.ts` files in application code, which is an antipattern (harms tree-shaking, promotes circular dependencies, slows builds).

  The correct mechanism for protecting a **published package's** public API is the `"exports"` field in `package.json`. Node.js and TypeScript both enforce it natively for all consumers in all repos — not just within this repo's ESLint scope.

  **Migration**: Remove any `import/no-internal-modules` overrides from your project's ESLint config. Use `"exports"` in `package.json` to declare what is and isn't part of your public API.

- Updated dependencies [[`7838b74`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/7838b74d9213fd61c628ef53b12092aed4671399), [`b3bb0f9`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/b3bb0f9a3fc8fe337e2a1eafa0cb66fa489be122), [`1ec0cb6`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/1ec0cb6e8a153097a18a0a4a2f9e36771914cb91), [`9e9fb79`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/9e9fb79bfe9026bdcb26410bd1293a36ebfc2b0d), [`9caacc5`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/9caacc509b8e0a06102c08d8c34abf609e123945)]:
  - @pasteltech/eslint-config-react@1.3.2

## 1.3.1

### Patch Changes

- Updated dependencies []:
  - @pasteltech/eslint-config-react@1.3.1

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.3.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-nextjs@1.2.6...@pasteltech/eslint-config-nextjs@1.3.0) (2025-08-27)

### Bug Fixes

- **eslint/nextjs:** align internal modules import with react ([1848e75](https://github.com/pasteltech/pastel-ts-coding-standard/commit/1848e75bb04835b5541bdfe16de4e2e6ee923737))

## [1.2.6](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-nextjs@1.2.5...@pasteltech/eslint-config-nextjs@1.2.6) (2025-01-24)

**Note:** Version bump only for package @pasteltech/eslint-config-nextjs

## [1.2.5](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-nextjs@1.2.4...@pasteltech/eslint-config-nextjs@1.2.5) (2025-01-24)

**Note:** Version bump only for package @pasteltech/eslint-config-nextjs

## [1.2.4](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-nextjs@1.2.3...@pasteltech/eslint-config-nextjs@1.2.4) (2025-01-22)

**Note:** Version bump only for package @pasteltech/eslint-config-nextjs

## [1.2.3](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-nextjs@1.2.2...@pasteltech/eslint-config-nextjs@1.2.3) (2025-01-22)

### Bug Fixes

- **eslint:** verify rules and fix issues reported by eslint-find-rules ([fcdc38b](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fcdc38bbaaba391c89baa5ac4a19a179a3ef42ca))

## 1.2.2 (2025-01-22)

### Bug Fixes

- **eslint/next:** use configs from plugin ([3af037d](https://github.com/pasteltech/pastel-ts-coding-standard/commit/3af037d08ca4d2c06b756a5b3eeacaf9d9e5d001))

## 1.2.1 (2025-01-22)

### Bug Fixes

- **eslint/next:** fix eslint next config ([46f27cf](https://github.com/pasteltech/pastel-ts-coding-standard/commit/46f27cf8b0d6addddb032a17452383537a80550e))

# 1.2.0 (2025-01-22)

### Features

- **eslint:** migrate to eslint v9 ([5d57eed](https://github.com/pasteltech/pastel-ts-coding-standard/commit/5d57eedd1e9feea218b954804f73b148d36ba641))

## 1.1.1 (2025-01-13)

# 1.1.0 (2025-01-13)

### Features

- add nextjs support ([10a2ca0](https://github.com/pasteltech/pastel-ts-coding-standard/commit/10a2ca0cf013daf293310b30b22457b30ff32669))

## [1.2.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.2.0...v1.2.1) (2025-01-22)

### Bug Fixes

- **eslint/next:** fix eslint next config ([46f27cf](https://github.com/pasteltech/pastel-ts-coding-standard/commit/46f27cf8b0d6addddb032a17452383537a80550e))

# [1.2.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.1...v1.2.0) (2025-01-22)

### Features

- **eslint:** migrate to eslint v9 ([5d57eed](https://github.com/pasteltech/pastel-ts-coding-standard/commit/5d57eedd1e9feea218b954804f73b148d36ba641))

## [1.1.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.0...v1.1.1) (2025-01-13)

**Note:** Version bump only for package @pasteltech/eslint-config-nextjs

# [1.1.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.1...v1.1.0) (2025-01-13)

### Features

- add nextjs support ([10a2ca0](https://github.com/pasteltech/pastel-ts-coding-standard/commit/10a2ca0cf013daf293310b30b22457b30ff32669))

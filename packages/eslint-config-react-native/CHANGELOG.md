# Change Log

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

- [`5186634`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/51866341dfd6ed4f8a0f5e60ad333ca4db6daecb) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Fix i18n config filename glob (`18nConfig` → `i18nConfig`) in Next.js preset and correct React Native preset meta package name.

- [`5c7f83a`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/5c7f83a5980a5450600e2b12408a7e697c5be925) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Apply React Native runtime globals and disable browser-only globals (`window`, `document`) inherited from the React preset.

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

# [1.3.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react-native@1.2.5...@pasteltech/eslint-config-react-native@1.3.0) (2025-08-27)

**Note:** Version bump only for package @pasteltech/eslint-config-react-native

## [1.2.5](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react-native@1.2.4...@pasteltech/eslint-config-react-native@1.2.5) (2025-01-24)

**Note:** Version bump only for package @pasteltech/eslint-config-react-native

## [1.2.4](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react-native@1.2.3...@pasteltech/eslint-config-react-native@1.2.4) (2025-01-24)

### Features

- **react, react-native:** allow import hookform internal module ([#14](https://github.com/pasteltech/pastel-ts-coding-standard/issues/14)) ([ab41d66](https://github.com/pasteltech/pastel-ts-coding-standard/commit/ab41d6627da1a0b7b1a1e002adb283d8fba4bd9d))

## [1.2.3](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react-native@1.2.2...@pasteltech/eslint-config-react-native@1.2.3) (2025-01-22)

**Note:** Version bump only for package @pasteltech/eslint-config-react-native

## [1.2.2](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react-native@0.3.0...@pasteltech/eslint-config-react-native@1.2.2) (2025-01-22)

## 1.2.1 (2025-01-22)

# 1.2.0 (2025-01-22)

### Features

- **eslint:** migrate to eslint v9 ([5d57eed](https://github.com/pasteltech/pastel-ts-coding-standard/commit/5d57eedd1e9feea218b954804f73b148d36ba641))

## 1.1.1 (2025-01-13)

# 1.1.0 (2025-01-13)

### Features

- escalate warnings from error with update on naming convention ([6847d4f](https://github.com/pasteltech/pastel-ts-coding-standard/commit/6847d4f1e2b23ac83bddf7485f0e119b525bcd43))

## 1.0.1 (2024-08-27)

# 1.0.0 (2024-05-17)

## 0.6.2 (2024-05-17)

# 0.6.0 (2024-05-17)

### Features

- update tsconfig with reference to latest boilerplates ([c477663](https://github.com/pasteltech/pastel-ts-coding-standard/commit/c477663063c38160d665045c148122fd80e169ac))

# 0.5.0 (2024-05-17)

## [1.2.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.2.0...v1.2.1) (2025-01-22)

**Note:** Version bump only for package @pasteltech/eslint-config-react-native

# [1.2.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.1...v1.2.0) (2025-01-22)

### Features

- **eslint:** migrate to eslint v9 ([5d57eed](https://github.com/pasteltech/pastel-ts-coding-standard/commit/5d57eedd1e9feea218b954804f73b148d36ba641))

## [1.1.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.0...v1.1.1) (2025-01-13)

**Note:** Version bump only for package @pasteltech/eslint-config-react-native

# [1.1.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.1...v1.1.0) (2025-01-13)

### Features

- escalate warnings from error with update on naming convention ([6847d4f](https://github.com/pasteltech/pastel-ts-coding-standard/commit/6847d4f1e2b23ac83bddf7485f0e119b525bcd43))

## [1.0.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.0...v1.0.1) (2024-08-27)

**Note:** Version bump only for package @pasteltech/eslint-config-react-native

# [1.0.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.2...v1.0.0) (2024-05-17)

**Note:** Version bump only for package @pasteltech/eslint-config-react-native

## [0.6.2](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.1...v0.6.2) (2024-05-17)

**Note:** Version bump only for package @pasteltech/eslint-config-react-native

# [0.6.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.5.0...v0.6.0) (2024-05-17)

### Features

- update tsconfig with reference to latest boilerplates ([c477663](https://github.com/pasteltech/pastel-ts-coding-standard/commit/c477663063c38160d665045c148122fd80e169ac))

# 0.5.0 (2024-05-17)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

# [0.3.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react-native@0.2.0...@pasteltech/eslint-config-react-native@0.3.0) (2023-12-11)

**Note:** Version bump only for package @pasteltech/eslint-config-react-native

# 0.2.0 (2023-08-02)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

## [0.1.4](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react-native@0.1.3...@pasteltech/eslint-config-react-native@0.1.4) (2023-04-04)

**Note:** Version bump only for package @pasteltech/eslint-config-react-native

## [0.1.3](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react-native@0.1.2...@pasteltech/eslint-config-react-native@0.1.3) (2023-03-28)

**Note:** Version bump only for package @pasteltech/eslint-config-react-native

## [0.1.2](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react-native@0.1.1...@pasteltech/eslint-config-react-native@0.1.2) (2023-03-28)

**Note:** Version bump only for package @pasteltech/eslint-config-react-native

## [0.1.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react-native@0.1.0...@pasteltech/eslint-config-react-native@0.1.1) (2023-03-22)

**Note:** Version bump only for package @pasteltech/eslint-config-react-native

# 0.1.0 (2023-03-20)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

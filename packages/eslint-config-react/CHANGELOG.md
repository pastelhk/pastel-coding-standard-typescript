# Change Log

## 1.3.5

### Patch Changes

- [`84d95ad`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/84d95ad487fd7e37f8b95129aeb407cc7f2eaaa6) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - fix(eslint/react): use flat config on importing react hooks plugin

## 1.3.4

### Patch Changes

- Updated dependencies [[`d0ffed4`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/d0ffed47ab7d69b08f667465e5b736fcff9f1dc0)]:
  - @pasteltech/eslint-config-base@2.0.2

## 1.3.3

### Patch Changes

- Updated dependencies [[`8e35fa3`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/8e35fa321896398cef40d6a8012becb8a284216f), [`3d94e6c`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/3d94e6c0d776dbbf694322a8e7fd67a07ac0f672), [`30bbb96`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/30bbb960975841e4a22dcf34d796cffa80e20f8e), [`84d3b49`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/84d3b49dfbe5eba833748cc33750534b82c3f187), [`911f5c5`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/911f5c5afb655be87b3fa5e1b16a7fede8c815b9), [`cc58c70`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/cc58c70532c96b3baecb40af565ad936b9703a30), [`28e74f2`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/28e74f211f6431acd462109c58870b17c26eccfb), [`f5cc0b4`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/f5cc0b401aee5667f4b407b731e0c185d449781a)]:
  - @pasteltech/eslint-config-base@2.0.1

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

- [`b3bb0f9`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/b3bb0f9a3fc8fe337e2a1eafa0cb66fa489be122) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Move `eslint-plugin-jsx-a11y` from `eslint-config-base` to `eslint-config-react`. The base config has no JSX rules; jsx-a11y is only consumed via the `@pasteltech/eslint-config-airbnb` React rules, which are only loaded by the react preset.

- [`1ec0cb6`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/1ec0cb6e8a153097a18a0a4a2f9e36771914cb91) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Use modern module parser defaults for React preset.

- [`9e9fb79`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/9e9fb79bfe9026bdcb26410bd1293a36ebfc2b0d) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Pin `@pasteltech/eslint-config-airbnb` dependency to exact version per workspace syncpack policy. All other workspace cross-references use exact versions.

- [`9caacc5`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/9caacc509b8e0a06102c08d8c34abf609e123945) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Turn off `import/no-internal-modules` and remove its per-package allow-list overrides.

  **Why**: The rule was intended to prevent deep imports into third-party packages, but it achieves the opposite effect in practice — it forces barrel `index.ts` files in application code, which is an antipattern (harms tree-shaking, promotes circular dependencies, slows builds).

  The correct mechanism for protecting a **published package's** public API is the `"exports"` field in `package.json`. Node.js and TypeScript both enforce it natively for all consumers in all repos — not just within this repo's ESLint scope.

  **Migration**: Remove any `import/no-internal-modules` overrides from your project's ESLint config. Use `"exports"` in `package.json` to declare what is and isn't part of your public API.

- Updated dependencies [[`9bf5fea`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/9bf5feadd7de265ccdfbfe64ff9b18181d6e7a1b), [`ebf6996`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/ebf6996e439fb8d2af2b42b4f016342cab392ca1), [`ee7c5cc`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/ee7c5cca39938f751f5528e9b25fa4ba1b6c26d0), [`bf432b7`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/bf432b77f64e9df9f4f1690dac148f4a868f192b), [`c77d624`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/c77d6248d8507c0d5be22340f07df436b3a760f3), [`711a0a9`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/711a0a96e3d769c67fcbf1dddf668e4c62d0fa4b), [`c77d624`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/c77d6248d8507c0d5be22340f07df436b3a760f3), [`73c9ca5`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/73c9ca51051aa24aec9e9c4ee84db55de79f020f), [`2308273`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/2308273448e93501f5a6869d0e4f40c19ee848ce), [`e6c20d9`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/e6c20d9eb142347d0338cfdc5203dce2c77f8e34), [`68bf23d`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/68bf23da57ff205b75be3da803c4649cdab27cfc), [`5820794`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/5820794edade6b821d2036b620670e414288f069), [`7838b74`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/7838b74d9213fd61c628ef53b12092aed4671399), [`b3bb0f9`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/b3bb0f9a3fc8fe337e2a1eafa0cb66fa489be122), [`96a9fb2`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/96a9fb24b3f5736d30d91e01474dcae40f9db43a), [`e06c37d`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/e06c37d0b8bc1eda3c57a6238304221e635da2b1), [`cf27771`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/cf277718433579ba3267e0b9537c349f0411a28f), [`1aa72d2`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/1aa72d29bdd181b7b27f0433ff87df5847bf6304), [`8385057`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/83850576ee884ac189e0c701d98b45ace73f90d3), [`9caacc5`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/9caacc509b8e0a06102c08d8c34abf609e123945)]:
  - @pasteltech/eslint-config-base@2.0.0
  - @pasteltech/eslint-config-airbnb@20.1.2

## 1.3.1

### Patch Changes

- Updated dependencies [[`c9e53ea`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/c9e53ea7d5f4226b3a9b0f7ba4d8119de24fcdac), [`fbf734f`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/fbf734f551cf5e7d10be99fa64ecec5e4a3aae82), [`4f6f7d4`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/4f6f7d45110cf166d6ec89b076a171ddc445a1ce), [`8d2845b`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/8d2845b97bbdf353ff7beba745a4b8de88cdc197)]:
  - @pasteltech/eslint-config-base@1.3.1
  - @pasteltech/eslint-config-airbnb@20.1.1

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.3.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react@1.2.5...@pasteltech/eslint-config-react@1.3.0) (2025-08-27)

**Note:** Version bump only for package @pasteltech/eslint-config-react

## [1.2.5](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react@1.2.4...@pasteltech/eslint-config-react@1.2.5) (2025-01-24)

**Note:** Version bump only for package @pasteltech/eslint-config-react

## [1.2.4](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react@1.2.3...@pasteltech/eslint-config-react@1.2.4) (2025-01-24)

### Features

- **react, react-native:** allow import hookform internal module ([#14](https://github.com/pasteltech/pastel-ts-coding-standard/issues/14)) ([ab41d66](https://github.com/pasteltech/pastel-ts-coding-standard/commit/ab41d6627da1a0b7b1a1e002adb283d8fba4bd9d))

## [1.2.3](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react@1.2.2...@pasteltech/eslint-config-react@1.2.3) (2025-01-22)

### Bug Fixes

- **eslint/react:** update rules overwriting of react ([1468ae5](https://github.com/pasteltech/pastel-ts-coding-standard/commit/1468ae5ae0d364ab760944e71797f41bbe2025b6))

## [1.2.2](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react@0.3.0...@pasteltech/eslint-config-react@1.2.2) (2025-01-22)

### Bug Fixes

- **eslint:** verify rules and fix issues reported by eslint-find-rules ([fcdc38b](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fcdc38bbaaba391c89baa5ac4a19a179a3ef42ca))

## 1.2.1 (2025-01-22)

### Bug Fixes

- **eslint:** use flat config for eslint-config-react ([#11](https://github.com/pasteltech/pastel-ts-coding-standard/issues/11)) ([39cdc2a](https://github.com/pasteltech/pastel-ts-coding-standard/commit/39cdc2ae1a1c8f489f2b2595e93f2b11f35527f8))

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

- forbid at function in react ([#2](https://github.com/pasteltech/pastel-ts-coding-standard/issues/2)) ([9b5159f](https://github.com/pasteltech/pastel-ts-coding-standard/commit/9b5159f451159fc0da7dd10130d3714555768cf9))
- update tsconfig with reference to latest boilerplates ([c477663](https://github.com/pasteltech/pastel-ts-coding-standard/commit/c477663063c38160d665045c148122fd80e169ac))

# 0.5.0 (2024-05-17)

## [1.2.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.2.0...v1.2.1) (2025-01-22)

### Bug Fixes

- **eslint:** use flat config for eslint-config-react ([#11](https://github.com/pasteltech/pastel-ts-coding-standard/issues/11)) ([39cdc2a](https://github.com/pasteltech/pastel-ts-coding-standard/commit/39cdc2ae1a1c8f489f2b2595e93f2b11f35527f8))

# [1.2.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.1...v1.2.0) (2025-01-22)

### Features

- **eslint:** migrate to eslint v9 ([5d57eed](https://github.com/pasteltech/pastel-ts-coding-standard/commit/5d57eedd1e9feea218b954804f73b148d36ba641))

## [1.1.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.0...v1.1.1) (2025-01-13)

**Note:** Version bump only for package @pasteltech/eslint-config-react

# [1.1.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.1...v1.1.0) (2025-01-13)

### Features

- escalate warnings from error with update on naming convention ([6847d4f](https://github.com/pasteltech/pastel-ts-coding-standard/commit/6847d4f1e2b23ac83bddf7485f0e119b525bcd43))

## [1.0.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.0...v1.0.1) (2024-08-27)

**Note:** Version bump only for package @pasteltech/eslint-config-react

# [1.0.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.2...v1.0.0) (2024-05-17)

**Note:** Version bump only for package @pasteltech/eslint-config-react

## [0.6.2](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.1...v0.6.2) (2024-05-17)

**Note:** Version bump only for package @pasteltech/eslint-config-react

# [0.6.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.5.0...v0.6.0) (2024-05-17)

### Features

- forbid at function in react ([#2](https://github.com/pasteltech/pastel-ts-coding-standard/issues/2)) ([9b5159f](https://github.com/pasteltech/pastel-ts-coding-standard/commit/9b5159f451159fc0da7dd10130d3714555768cf9))
- update tsconfig with reference to latest boilerplates ([c477663](https://github.com/pasteltech/pastel-ts-coding-standard/commit/c477663063c38160d665045c148122fd80e169ac))

# 0.5.0 (2024-05-17)

### Bug Fixes

- remove react component display name rule disable ([474f48a](https://github.com/pasteltech/pastel-ts-coding-standard/commit/474f48a488a3274f42a53c28897be3baf17403b7))

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

# [0.3.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react@0.2.0...@pasteltech/eslint-config-react@0.3.0) (2023-12-11)

**Note:** Version bump only for package @pasteltech/eslint-config-react

# 0.2.0 (2023-08-02)

### Bug Fixes

- remove react component display name rule disable ([474f48a](https://github.com/pasteltech/pastel-ts-coding-standard/commit/474f48a488a3274f42a53c28897be3baf17403b7))

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

## [0.1.4](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react@0.1.3...@pasteltech/eslint-config-react@0.1.4) (2023-04-04)

### Bug Fixes

- remove react component display name rule disable ([474f48a](https://github.com/pasteltech/pastel-ts-coding-standard/commit/474f48a488a3274f42a53c28897be3baf17403b7))

## [0.1.3](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react@0.1.2...@pasteltech/eslint-config-react@0.1.3) (2023-03-28)

**Note:** Version bump only for package @pasteltech/eslint-config-react

## [0.1.2](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react@0.1.1...@pasteltech/eslint-config-react@0.1.2) (2023-03-28)

**Note:** Version bump only for package @pasteltech/eslint-config-react

## [0.1.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-react@0.1.0...@pasteltech/eslint-config-react@0.1.1) (2023-03-22)

**Note:** Version bump only for package @pasteltech/eslint-config-react

# 0.1.0 (2023-03-20)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

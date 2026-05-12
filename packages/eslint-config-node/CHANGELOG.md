# Change Log

## 2.0.0

### Major Changes

- [`69ec610`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/69ec610a16cce9d9993abda91efa9d49c41cf1ab) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - **BREAKING**: Enforce `unicorn/filename-case` with `kebabCase`. All source files in Node.js and NestJS projects must use kebab-case naming.

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

- [`cf27771`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/cf277718433579ba3267e0b9537c349f0411a28f) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Normalize ignores and apply Node.js runtime globals in the node preset.

- [`82c239b`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/82c239b089dab3cd4db4d8108b4aefd86f0b3a35) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Remove redundant `unicorn/filename-case` rule already set identically in `eslint-config-base`.

- Updated dependencies [[`9bf5fea`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/9bf5feadd7de265ccdfbfe64ff9b18181d6e7a1b), [`ebf6996`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/ebf6996e439fb8d2af2b42b4f016342cab392ca1), [`ee7c5cc`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/ee7c5cca39938f751f5528e9b25fa4ba1b6c26d0), [`bf432b7`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/bf432b77f64e9df9f4f1690dac148f4a868f192b), [`c77d624`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/c77d6248d8507c0d5be22340f07df436b3a760f3), [`711a0a9`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/711a0a96e3d769c67fcbf1dddf668e4c62d0fa4b), [`c77d624`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/c77d6248d8507c0d5be22340f07df436b3a760f3), [`2308273`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/2308273448e93501f5a6869d0e4f40c19ee848ce), [`e6c20d9`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/e6c20d9eb142347d0338cfdc5203dce2c77f8e34), [`68bf23d`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/68bf23da57ff205b75be3da803c4649cdab27cfc), [`5820794`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/5820794edade6b821d2036b620670e414288f069), [`7838b74`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/7838b74d9213fd61c628ef53b12092aed4671399), [`b3bb0f9`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/b3bb0f9a3fc8fe337e2a1eafa0cb66fa489be122), [`96a9fb2`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/96a9fb24b3f5736d30d91e01474dcae40f9db43a), [`e06c37d`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/e06c37d0b8bc1eda3c57a6238304221e635da2b1), [`cf27771`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/cf277718433579ba3267e0b9537c349f0411a28f), [`1aa72d2`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/1aa72d29bdd181b7b27f0433ff87df5847bf6304), [`8385057`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/83850576ee884ac189e0c701d98b45ace73f90d3), [`9caacc5`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/9caacc509b8e0a06102c08d8c34abf609e123945)]:
  - @pasteltech/eslint-config-base@2.0.0

## 1.3.1

### Patch Changes

- Updated dependencies [[`c9e53ea`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/c9e53ea7d5f4226b3a9b0f7ba4d8119de24fcdac), [`8d2845b`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/8d2845b97bbdf353ff7beba745a4b8de88cdc197)]:
  - @pasteltech/eslint-config-base@1.3.1

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.3.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-node@1.2.5...@pasteltech/eslint-config-node@1.3.0) (2025-08-27)

**Note:** Version bump only for package @pasteltech/eslint-config-node

## [1.2.5](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-node@1.2.4...@pasteltech/eslint-config-node@1.2.5) (2025-01-24)

**Note:** Version bump only for package @pasteltech/eslint-config-node

## [1.2.4](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-node@1.2.3...@pasteltech/eslint-config-node@1.2.4) (2025-01-24)

**Note:** Version bump only for package @pasteltech/eslint-config-node

## [1.2.3](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-node@1.2.2...@pasteltech/eslint-config-node@1.2.3) (2025-01-22)

### Features

- **eslint/node:** use only built in for globals ([931ec33](https://github.com/pasteltech/pastel-ts-coding-standard/commit/931ec33bf0d552e6c2264fd28008b90c5a3cd0a7))

## [1.2.2](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-node@0.3.0...@pasteltech/eslint-config-node@1.2.2) (2025-01-22)

## 1.2.1 (2025-01-22)

# 1.2.0 (2025-01-22)

### Features

- **eslint:** migrate to eslint v9 ([5d57eed](https://github.com/pasteltech/pastel-ts-coding-standard/commit/5d57eedd1e9feea218b954804f73b148d36ba641))

## 1.1.1 (2025-01-13)

# 1.1.0 (2025-01-13)

## 1.0.1 (2024-08-27)

# 1.0.0 (2024-05-17)

## 0.6.2 (2024-05-17)

# 0.6.0 (2024-05-17)

### Features

- update tsconfig with reference to latest boilerplates ([c477663](https://github.com/pasteltech/pastel-ts-coding-standard/commit/c477663063c38160d665045c148122fd80e169ac))

# 0.5.0 (2024-05-17)

## [1.2.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.2.0...v1.2.1) (2025-01-22)

**Note:** Version bump only for package @pasteltech/eslint-config-node

# [1.2.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.1...v1.2.0) (2025-01-22)

### Features

- **eslint:** migrate to eslint v9 ([5d57eed](https://github.com/pasteltech/pastel-ts-coding-standard/commit/5d57eedd1e9feea218b954804f73b148d36ba641))

## [1.1.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.0...v1.1.1) (2025-01-13)

**Note:** Version bump only for package @pasteltech/eslint-config-node

# [1.1.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.1...v1.1.0) (2025-01-13)

**Note:** Version bump only for package @pasteltech/eslint-config-node

## [1.0.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.0...v1.0.1) (2024-08-27)

**Note:** Version bump only for package @pasteltech/eslint-config-node

# [1.0.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.2...v1.0.0) (2024-05-17)

**Note:** Version bump only for package @pasteltech/eslint-config-node

## [0.6.2](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.1...v0.6.2) (2024-05-17)

**Note:** Version bump only for package @pasteltech/eslint-config-node

# [0.6.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.5.0...v0.6.0) (2024-05-17)

### Features

- update tsconfig with reference to latest boilerplates ([c477663](https://github.com/pasteltech/pastel-ts-coding-standard/commit/c477663063c38160d665045c148122fd80e169ac))

# 0.5.0 (2024-05-17)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

# [0.3.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-node@0.2.0...@pasteltech/eslint-config-node@0.3.0) (2023-12-11)

**Note:** Version bump only for package @pasteltech/eslint-config-node

# 0.2.0 (2023-08-02)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

## [0.1.3](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-node@0.1.2...@pasteltech/eslint-config-node@0.1.3) (2023-03-28)

**Note:** Version bump only for package @pasteltech/eslint-config-node

## [0.1.2](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-node@0.1.1...@pasteltech/eslint-config-node@0.1.2) (2023-03-28)

**Note:** Version bump only for package @pasteltech/eslint-config-node

## [0.1.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-node@0.1.0...@pasteltech/eslint-config-node@0.1.1) (2023-03-22)

**Note:** Version bump only for package @pasteltech/eslint-config-node

# 0.1.0 (2023-03-20)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

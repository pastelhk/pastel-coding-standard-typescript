# Change Log

## 1.4.4

### Patch Changes

- Updated dependencies []:
  - @pasteltech/eslint-config-node@2.0.4

## 1.4.3

### Patch Changes

- Updated dependencies []:
  - @pasteltech/eslint-config-node@2.0.3

## 1.4.2

### Patch Changes

- Updated dependencies []:
  - @pasteltech/eslint-config-node@2.0.2

## 1.4.1

### Patch Changes

- Updated dependencies []:
  - @pasteltech/eslint-config-node@2.0.1

## 1.4.0

### Minor Changes

- [`5820794`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/5820794edade6b821d2036b620670e414288f069) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Move `@typescript-eslint/explicit-member-accessibility` from the base preset to the NestJS preset.

  **Breaking for base consumers**: `public`/`private`/`protected` modifiers are no longer required in non-NestJS projects. Modern TypeScript community guidance treats explicit `public` as noise; it is idiomatic only in class-heavy architectures (NestJS services, controllers, providers).

  **NestJS**: Rule is still enforced (now declared in `eslint-config-nestjs` rather than inherited from base).

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

- [`2affe96`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/2affe9663c27b55e11d11dd45f2fff946ce14c00) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Fix DTO override glob to apply `max-classes-per-file: off` in nested folders.

- Updated dependencies [[`69ec610`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/69ec610a16cce9d9993abda91efa9d49c41cf1ab), [`7838b74`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/7838b74d9213fd61c628ef53b12092aed4671399), [`cf27771`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/cf277718433579ba3267e0b9537c349f0411a28f), [`82c239b`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/82c239b089dab3cd4db4d8108b4aefd86f0b3a35)]:
  - @pasteltech/eslint-config-node@2.0.0

## 1.3.1

### Patch Changes

- Updated dependencies []:
  - @pasteltech/eslint-config-node@1.3.1

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.3.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-nestjs@1.2.5...@pasteltech/eslint-config-nestjs@1.3.0) (2025-08-27)

### Features

- **eslint/nestjs:** allow dto files to have multiple classes ([c51efc0](https://github.com/pasteltech/pastel-ts-coding-standard/commit/c51efc07e33c4a344e4f22f8bae4819b90e4a26a))

## [1.2.5](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-nestjs@1.2.4...@pasteltech/eslint-config-nestjs@1.2.5) (2025-01-24)

**Note:** Version bump only for package @pasteltech/eslint-config-nestjs

## [1.2.4](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-nestjs@1.2.3...@pasteltech/eslint-config-nestjs@1.2.4) (2025-01-24)

**Note:** Version bump only for package @pasteltech/eslint-config-nestjs

## [1.2.3](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-nestjs@1.2.2...@pasteltech/eslint-config-nestjs@1.2.3) (2025-01-22)

**Note:** Version bump only for package @pasteltech/eslint-config-nestjs

## 1.2.2 (2025-01-22)

## 1.2.1 (2025-01-22)

# 1.2.0 (2025-01-22)

### Features

- **eslint:** migrate to eslint v9 ([5d57eed](https://github.com/pasteltech/pastel-ts-coding-standard/commit/5d57eedd1e9feea218b954804f73b148d36ba641))

## 1.1.1 (2025-01-13)

# 1.1.0 (2025-01-13)

### Features

- add eslintrc for nestjs ([ae5f78f](https://github.com/pasteltech/pastel-ts-coding-standard/commit/ae5f78fc002bf35005e883461cfd9850b5fcc0c2))

## [1.2.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.2.0...v1.2.1) (2025-01-22)

**Note:** Version bump only for package @pasteltech/eslint-config-nestjs

# [1.2.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.1...v1.2.0) (2025-01-22)

### Features

- **eslint:** migrate to eslint v9 ([5d57eed](https://github.com/pasteltech/pastel-ts-coding-standard/commit/5d57eedd1e9feea218b954804f73b148d36ba641))

## [1.1.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.0...v1.1.1) (2025-01-13)

**Note:** Version bump only for package @pasteltech/eslint-config-nestjs

# [1.1.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.1...v1.1.0) (2025-01-13)

### Features

- add eslintrc for nestjs ([ae5f78f](https://github.com/pasteltech/pastel-ts-coding-standard/commit/ae5f78fc002bf35005e883461cfd9850b5fcc0c2))

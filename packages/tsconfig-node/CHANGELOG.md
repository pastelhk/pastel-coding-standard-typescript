# Change Log

## 2.0.0

### Major Changes

- [`2e7e02a`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/2e7e02adff57ea139c045c8af2f6b44e24762cc0) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - **BREAKING**: Add `tsconfig.esm.json` variant for ESM projects (`module: "nodenext"`, `moduleResolution: "nodenext"`, `erasableSyntaxOnly: true`). Projects referencing the package via exports must use the explicit `/tsconfig` or `/tsconfig.esm` path.

### Patch Changes

- [`f40e7a4`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/f40e7a4723a5f9504598c8c9df1500cf042108a4) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Add comment to `tsconfig.esm.json` warning NestJS users that `emitDecoratorMetadata` (required for NestJS DI) is incompatible with `erasableSyntaxOnly`. NestJS projects must use `tsconfig.json` (CJS variant).

- Updated dependencies [[`6170c70`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/6170c70b67de784f7993dbcda915b19c73d94916), [`8f5e178`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/8f5e178d459dbc70ecec45927fb4bda701726e92), [`6924938`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/69249388bf6db0d6f156687ff216c745f5d2b2d3), [`19cc17d`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/19cc17dcb3579f1314cd73c08f60eb4eef80707f)]:
  - @pasteltech/tsconfig-base@2.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.2.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.1...v1.2.0) (2025-01-22)

**Note:** Version bump only for package @pasteltech/tsconfig-node

# [1.1.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.1...v1.1.0) (2025-01-13)

**Note:** Version bump only for package @pasteltech/tsconfig-node

# [1.0.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.2...v1.0.0) (2024-05-17)

**Note:** Version bump only for package @pasteltech/tsconfig-node

# [0.6.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.5.0...v0.6.0) (2024-05-17)

**Note:** Version bump only for package @pasteltech/tsconfig-node

# 0.5.0 (2024-05-17)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

# 0.2.0 (2023-08-02)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

## [0.1.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/tsconfig-node@0.1.0...@pasteltech/tsconfig-node@0.1.1) (2023-03-22)

**Note:** Version bump only for package @pasteltech/tsconfig-node

# 0.1.0 (2023-03-20)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

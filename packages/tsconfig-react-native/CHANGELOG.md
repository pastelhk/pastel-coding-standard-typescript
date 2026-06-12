# Change Log

## 1.3.3

### Patch Changes

- Updated dependencies [[`3b9a97f`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/3b9a97f8d3a1b0e87371373f3f8c12b5d2b71b81), [`2927bef`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/2927bef6158563db91e7fbc29663c27db1e6602e)]:
  - @pasteltech/tsconfig-react@2.0.3

## 1.3.2

### Patch Changes

- Updated dependencies []:
  - @pasteltech/tsconfig-react@2.0.2

## 1.3.1

### Patch Changes

- [`a03620c`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/a03620c3438613583e80592bf869b1a7417e6ea3) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - refactor(tsconfig): streamline package extends and base module options

- Updated dependencies [[`a03620c`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/a03620c3438613583e80592bf869b1a7417e6ea3)]:
  - @pasteltech/tsconfig-react@2.0.1

## 1.3.0

### Minor Changes

- [`c56d4fa`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/c56d4fa711ffe3c7e5a60280ae16213ba3b7800d) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Simplify `lib` array from 12 granular entries to `["ES2022"]`. React Native's Hermes engine supports ES2022 natively since RN 0.74+.

### Patch Changes

- [`0aecb07`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/0aecb0703ac26949386e2d71ad9c17737ee3f08e) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Fix package description — was incorrectly copied from tsconfig-react.

- [`18c420e`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/18c420e0436853483bd06d1656e6b5023907ed95) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Update `target`/`lib` and `module` to reflect current ecosystem defaults.
  - **tsconfig-react**: Bump `target` and `lib` from `ES2020` to `ES2022`. Vite and modern React tooling has targeted ES2022 (class fields, top-level `await`, `.at()`) since 2023. `ES2020` was the old Vite template default.
  - **tsconfig-react-native**: Change `module` from `"es2015"` to `"esnext"`. The `es2015` value dates from the original RN CLI template circa 2018; Metro and the current React Native toolchain accept `esnext` and is consistent with the broader project convention.

- Updated dependencies [[`18c420e`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/18c420e0436853483bd06d1656e6b5023907ed95), [`a798c13`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/a798c13964fea6318f0b166b5fab063db35d2d25)]:
  - @pasteltech/tsconfig-react@2.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.2.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.1...v1.2.0) (2025-01-22)

**Note:** Version bump only for package @pasteltech/tsconfig-react-native

# [1.1.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.1...v1.1.0) (2025-01-13)

**Note:** Version bump only for package @pasteltech/tsconfig-react-native

# [1.0.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.2...v1.0.0) (2024-05-17)

**Note:** Version bump only for package @pasteltech/tsconfig-react-native

## [0.6.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.0...v0.6.1) (2024-05-17)

### Bug Fixes

- **tsconfig:** remove conflicting flag ([4aa9b95](https://github.com/pasteltech/pastel-ts-coding-standard/commit/4aa9b955d42548e3c0f89228b8690f4d6fb751a1))

# [0.6.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.5.0...v0.6.0) (2024-05-17)

### Features

- update tsconfig with reference to latest boilerplates ([c477663](https://github.com/pasteltech/pastel-ts-coding-standard/commit/c477663063c38160d665045c148122fd80e169ac))

# 0.5.0 (2024-05-17)

### Bug Fixes

- **tsconfig:** remove jest from tsconfig for react native ([6cf9b91](https://github.com/pasteltech/pastel-ts-coding-standard/commit/6cf9b9145c22b12b4f14728a0ba1797bd1204c8b))

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

# 0.2.0 (2023-08-02)

### Bug Fixes

- **tsconfig:** remove jest from tsconfig for react native ([6cf9b91](https://github.com/pasteltech/pastel-ts-coding-standard/commit/6cf9b9145c22b12b4f14728a0ba1797bd1204c8b))

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

## [0.1.2](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/tsconfig-react-native@0.1.1...@pasteltech/tsconfig-react-native@0.1.2) (2023-03-28)

### Bug Fixes

- **tsconfig:** remove jest from tsconfig for react native ([6cf9b91](https://github.com/pasteltech/pastel-ts-coding-standard/commit/6cf9b9145c22b12b4f14728a0ba1797bd1204c8b))

## [0.1.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/tsconfig-react-native@0.1.0...@pasteltech/tsconfig-react-native@0.1.1) (2023-03-22)

**Note:** Version bump only for package @pasteltech/tsconfig-react-native

# 0.1.0 (2023-03-20)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

# Change Log

## 3.0.0

### Major Changes

- [#45](https://github.com/pastelhk/pastel-ts-coding-standard/pull/45) [`ea47ca9`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/ea47ca95c52c54a43eda1e06cc050625cc5756b6) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - feat(tsconfig): overhaul tsconfig with ESM-first setup

### Patch Changes

- Updated dependencies [[`ea47ca9`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/ea47ca95c52c54a43eda1e06cc050625cc5756b6)]:
  - @pasteltech/tsconfig-base@3.0.0

## 2.0.3

### Patch Changes

- [`3b9a97f`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/3b9a97f8d3a1b0e87371373f3f8c12b5d2b71b81) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - feat(tsconfig): configure erasableSyntaxOnly except nestjs

- [`2927bef`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/2927bef6158563db91e7fbc29663c27db1e6602e) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - fix(tsconfig/react): cleanup unused options

- Updated dependencies [[`4f27ce4`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/4f27ce476883cfdbb6c6cc4d295fda2cdbbe72e8), [`e32441e`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/e32441e60d6ac73eb9a802b4a54bc05b292efe57), [`3b9a97f`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/3b9a97f8d3a1b0e87371373f3f8c12b5d2b71b81), [`8494821`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/8494821534ea03e9e474605aa4cb25f2b39d7dc9), [`fd9f700`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/fd9f700fa17691404fa9f1e44ffe9d46a6b52524)]:
  - @pasteltech/tsconfig-base@2.1.0

## 2.0.2

### Patch Changes

- Updated dependencies [[`7b25913`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/7b25913dc583f8060d91305811fb03ce4a277230)]:
  - @pasteltech/tsconfig-base@2.0.2

## 2.0.1

### Patch Changes

- [`a03620c`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/a03620c3438613583e80592bf869b1a7417e6ea3) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - refactor(tsconfig): streamline package extends and base module options

- Updated dependencies [[`a03620c`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/a03620c3438613583e80592bf869b1a7417e6ea3)]:
  - @pasteltech/tsconfig-base@2.0.1

## 2.0.0

### Major Changes

- [`a798c13`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/a798c13964fea6318f0b166b5fab063db35d2d25) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - **BREAKING**: Add `erasableSyntaxOnly: true`. Projects using `const enum` or TypeScript namespaces must migrate to regular `enum` or ES modules.

### Patch Changes

- [`18c420e`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/18c420e0436853483bd06d1656e6b5023907ed95) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Update `target`/`lib` and `module` to reflect current ecosystem defaults.
  - **tsconfig-react**: Bump `target` and `lib` from `ES2020` to `ES2022`. Vite and modern React tooling has targeted ES2022 (class fields, top-level `await`, `.at()`) since 2023. `ES2020` was the old Vite template default.
  - **tsconfig-react-native**: Change `module` from `"es2015"` to `"esnext"`. The `es2015` value dates from the original RN CLI template circa 2018; Metro and the current React Native toolchain accept `esnext` and is consistent with the broader project convention.

- Updated dependencies [[`6170c70`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/6170c70b67de784f7993dbcda915b19c73d94916), [`8f5e178`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/8f5e178d459dbc70ecec45927fb4bda701726e92), [`6924938`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/69249388bf6db0d6f156687ff216c745f5d2b2d3), [`19cc17d`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/19cc17dcb3579f1314cd73c08f60eb4eef80707f)]:
  - @pasteltech/tsconfig-base@2.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.2.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.1...v1.2.0) (2025-01-22)

**Note:** Version bump only for package @pasteltech/tsconfig-react

# [1.1.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.1...v1.1.0) (2025-01-13)

**Note:** Version bump only for package @pasteltech/tsconfig-react

# [1.0.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.2...v1.0.0) (2024-05-17)

**Note:** Version bump only for package @pasteltech/tsconfig-react

## [0.6.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.0...v0.6.1) (2024-05-17)

### Bug Fixes

- **tsconfig:** remove conflicting flag ([4aa9b95](https://github.com/pasteltech/pastel-ts-coding-standard/commit/4aa9b955d42548e3c0f89228b8690f4d6fb751a1))

# [0.6.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.5.0...v0.6.0) (2024-05-17)

### Features

- update tsconfig with reference to latest boilerplates ([c477663](https://github.com/pasteltech/pastel-ts-coding-standard/commit/c477663063c38160d665045c148122fd80e169ac))

# 0.5.0 (2024-05-17)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

# 0.2.0 (2023-08-02)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

## [0.1.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/tsconfig-react@0.1.0...@pasteltech/tsconfig-react@0.1.1) (2023-03-22)

**Note:** Version bump only for package @pasteltech/tsconfig-react

# 0.1.0 (2023-03-20)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

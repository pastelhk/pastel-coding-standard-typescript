# Change Log

## 2.0.2

### Patch Changes

- [`7b25913`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/7b25913dc583f8060d91305811fb03ce4a277230) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - feat(tsconfig): configure ESNext module defaults in base config

## 2.0.1

### Patch Changes

- [`a03620c`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/a03620c3438613583e80592bf869b1a7417e6ea3) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - refactor(tsconfig): streamline package extends and base module options

## 2.0.0

### Major Changes

- [`19cc17d`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/19cc17dcb3579f1314cd73c08f60eb4eef80707f) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - **BREAKING**: Replace `isolatedModules`, `esModuleInterop`, and `allowSyntheticDefaultImports` with `verbatimModuleSyntax`. All consuming projects must use explicit `import type` syntax for type-only imports. Remove `useDefineForClassFields` (redundant default in TypeScript 5.x).

### Minor Changes

- [`6170c70`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/6170c70b67de784f7993dbcda915b19c73d94916) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Remove `"module": "commonjs"` from `tsconfig-base`.

  **Why**: `module: "commonjs"` paired with `verbatimModuleSyntax: true` (also in base) causes confusion: `verbatimModuleSyntax` is designed for explicit ESM/CJS interop and behaves unexpectedly as a global default. More importantly, every consuming config already sets its own `module` value (`commonjs` in tsconfig-node, `ESNext` in tsconfig-react, `nodenext` in tsconfig-node/esm), so the base value was always an overridden default.

  **Migration**: No change required for most consumers. If you use `tsconfig-base` directly without a consuming preset, add `"module": "commonjs"` (or your preferred module format) to your project's `tsconfig.json`.

  Also improves the inline comment for `moduleResolution` to reference the correct modern alternatives.

### Patch Changes

- [`8f5e178`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/8f5e178d459dbc70ecec45927fb4bda701726e92) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Rename `moduleResolution` from `"node"` to `"node10"`. Functionally identical — TypeScript 5.x treats them the same — but `"node10"` is the canonical name in modern TypeScript docs and avoids confusion with `"nodenext"`.

- [`6924938`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/69249388bf6db0d6f156687ff216c745f5d2b2d3) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Remove redundant `allowSyntheticDefaultImports: true`. When `verbatimModuleSyntax` is enabled, TypeScript 5.x implicitly enables synthetic default imports and ignores this flag entirely.

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.2.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.1...v1.2.0) (2025-01-22)

**Note:** Version bump only for package @pasteltech/tsconfig-base

# [1.1.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.1...v1.1.0) (2025-01-13)

### Features

- escalate warnings from error with update on naming convention ([6847d4f](https://github.com/pasteltech/pastel-ts-coding-standard/commit/6847d4f1e2b23ac83bddf7485f0e119b525bcd43))

# [1.0.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.2...v1.0.0) (2024-05-17)

**Note:** Version bump only for package @pasteltech/tsconfig-base

# [0.6.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.5.0...v0.6.0) (2024-05-17)

### Features

- update tsconfig with reference to latest boilerplates ([c477663](https://github.com/pasteltech/pastel-ts-coding-standard/commit/c477663063c38160d665045c148122fd80e169ac))

# 0.5.0 (2024-05-17)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

# 0.2.0 (2023-08-02)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

# 0.1.0 (2023-03-20)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

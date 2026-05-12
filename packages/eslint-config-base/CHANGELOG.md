# Change Log

## 2.0.1

### Patch Changes

- [`8e35fa3`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/8e35fa321896398cef40d6a8012becb8a284216f) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - feat(eslint/base): enable type-aware linting for non-project JS/TS files

- [`3d94e6c`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/3d94e6c0d776dbbf694322a8e7fd67a07ac0f672) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - fix(eslint/base): use prettier config instead of plugin

- [`30bbb96`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/30bbb960975841e4a22dcf34d796cffa80e20f8e) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - feat(eslint/base): remove perfectionist

- [`84d3b49`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/84d3b49dfbe5eba833748cc33750534b82c3f187) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - feat(eslint/base): refine `no-restricted-syntax` for modern JS/TS

- [`911f5c5`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/911f5c5afb655be87b3fa5e1b16a7fede8c815b9) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - feat(eslint/base): allow void in statement in favour for @typescript-eslint/no-floating-promises

- [`cc58c70`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/cc58c70532c96b3baecb40af565ad936b9703a30) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - feat(eslint/base): allow inline helper functions in test files

- [`28e74f2`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/28e74f211f6431acd462109c58870b17c26eccfb) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - fix(eslint/base): fix missing import of barrel plugin

- [`f5cc0b4`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/f5cc0b401aee5667f4b407b731e0c185d449781a) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - feat(eslint/base): remove sonarjs in favour to sonarqube

## 2.0.0

### Major Changes

- [`9bf5fea`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/9bf5feadd7de265ccdfbfe64ff9b18181d6e7a1b) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - **BREAKING**: Add `eslint-plugin-perfectionist`. Replace `import/order` with `perfectionist/sort-imports`. Import order, named imports, interface members, object type members, union types, and enum members are now sorted as errors.

- [`ebf6996`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/ebf6996e439fb8d2af2b42b4f016342cab392ca1) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - **BREAKING**: Add `eslint-plugin-sonarjs` recommended rules. Functions exceeding cognitive complexity threshold or containing duplicate strings will fail lint.

- [`ee7c5cc`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/ee7c5cca39938f751f5528e9b25fa4ba1b6c26d0) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - **BREAKING**: Add `eslint-plugin-unicorn` with curated rules (all errors). Code using `forEach`, bracket-notation index access, `/g` regex replace, etc. will now fail lint.

- [`bf432b7`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/bf432b77f64e9df9f4f1690dac148f4a868f192b) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - **BREAKING**: Replace deprecated `eslint-plugin-node` with `eslint-plugin-n`. Projects with inline `node/*` rule overrides must update to `n/*`.

### Minor Changes

- [`c77d624`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/c77d6248d8507c0d5be22340f07df436b3a760f3) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Add `eslint-plugin-barrel-files` for dedicated barrel export detection.

  **Two new rules in `recommended`:**
  - `barrel-files/avoid-barrel-files: warn` — flags files whose entire content is re-exports (pure barrel files). Warn rather than error because the diagnosis is straightforward: split the barrel into direct imports at each call site.
  - `barrel-files/avoid-re-export-all: error` — flags `export * from '...'` (wildcard re-exports). Replaces the previous `no-restricted-syntax` AST selector approach with a dedicated rule that produces clearer error messages. Behaviour is identical.

  **`no-restricted-syntax` is simplified**: The `ExportAllDeclaration` AST selector entry is removed since `barrel-files/avoid-re-export-all` now covers it. The airbnb entries (ForIn, ForOf, LabeledStatement, WithStatement) are preserved.

  **`configs.packageEntry` updated**: Both barrel-files rules are turned off for `**/index.{ts,mjs,js}` files so published package entry files are not flagged. The `no-restricted-syntax` override (without ExportAllDeclaration) is retained for consistency.

- [`711a0a9`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/711a0a96e3d769c67fcbf1dddf668e4c62d0fa4b) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Add `@typescript-eslint/consistent-type-imports` rule (inline style) to enforce `import type` for type-only imports, aligning with `verbatimModuleSyntax` in tsconfig.

- [`c77d624`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/c77d6248d8507c0d5be22340f07df436b3a760f3) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Add `configs.packageEntry` opt-in override for package index/entry files.

  Projects that use `export * from` shorthand in their `index.ts` entry files can now opt in to relax the `ExportAllDeclaration` restriction for those files only:

  ```js
  import base from '@pasteltech/eslint-config-base'

  export default [
    ...base.configs.recommended,
    ...base.configs.packageEntry, // unlocks export * from in index.* files
  ]
  ```

  Only `ExportAllDeclaration` is unlocked, and only for files matching `**/index.ts`, `**/index.mjs`, `**/index.js`. All other `no-restricted-syntax` entries (ForIn, ForOf, LabeledStatement, WithStatement) remain enforced everywhere.

- [`2308273`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/2308273448e93501f5a6869d0e4f40c19ee848ce) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Ban wildcard re-exports (`export * from`) via `no-restricted-syntax`.

  `ExportAllDeclaration` is the most harmful barrel pattern:
  - Exports everything including private/internal symbols
  - Prevents tree-shaking (bundlers cannot statically analyse what is used)
  - Common source of hidden circular dependencies

  Named re-exports (`export { X } from '...'`) are intentionally left allowed — they are explicit and legitimate in published package entry files.

  The existing airbnb `no-restricted-syntax` entries (ForIn, ForOf, LabeledStatement, WithStatement) are preserved by reading them dynamically from the airbnb config at parse time.

- [`68bf23d`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/68bf23da57ff205b75be3da803c4649cdab27cfc) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Three cross-check fixes to `eslint-config-base`:

  **1. Fix `unicorn/prefer-module` conflict with `n/global-require`**
  `n/global-require: 'off'` explicitly permits dynamic `require()` calls. `unicorn/prefer-module` (enabled by `unicorn.configs.recommended`) simultaneously forbids them. Added `unicorn/prefer-module: 'off'` to keep the two in sync — if dynamic require is allowed, the unicorn rule must not contradict it.

  **2. Remove redundant `@stylistic/semi`**
  `eslint-plugin-prettier/recommended` includes `eslint-config-prettier`, which disables all `@stylistic` rules that conflict with Prettier. Re-enabling `@stylistic/semi` in a later config block caused double-reporting of the same semicolon violations. Removed it; Prettier owns semicolon formatting exclusively.

  **3. Add `@typescript-eslint/no-explicit-any` and `@typescript-eslint/no-non-null-assertion` warnings**
  `airbnb-typescript` does not extend `@typescript-eslint/recommended`, so these rules were not inherited. Both are set to `'warn'` rather than `'error'`:
  - `any` has legitimate escape hatches (third-party types, gradual migration), but unreviewed `any` defeats TypeScript's value.
  - The `!` non-null assertion operator silently bypasses nullability; a warning prompts teams to handle the case explicitly.

- [`5820794`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/5820794edade6b821d2036b620670e414288f069) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Move `@typescript-eslint/explicit-member-accessibility` from the base preset to the NestJS preset.

  **Breaking for base consumers**: `public`/`private`/`protected` modifiers are no longer required in non-NestJS projects. Modern TypeScript community guidance treats explicit `public` as noise; it is idiomatic only in class-heavy architectures (NestJS services, controllers, providers).

  **NestJS**: Rule is still enforced (now declared in `eslint-config-nestjs` rather than inherited from base).

- [`9caacc5`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/9caacc509b8e0a06102c08d8c34abf609e123945) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Turn off `import/no-internal-modules` and remove its per-package allow-list overrides.

  **Why**: The rule was intended to prevent deep imports into third-party packages, but it achieves the opposite effect in practice — it forces barrel `index.ts` files in application code, which is an antipattern (harms tree-shaking, promotes circular dependencies, slows builds).

  The correct mechanism for protecting a **published package's** public API is the `"exports"` field in `package.json`. Node.js and TypeScript both enforce it natively for all consumers in all repos — not just within this repo's ESLint scope.

  **Migration**: Remove any `import/no-internal-modules` overrides from your project's ESLint config. Use `"exports"` in `package.json` to declare what is and isn't part of your public API.

### Patch Changes

- [`e6c20d9`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/e6c20d9eb142347d0338cfdc5203dce2c77f8e34) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Broaden `import/no-extraneous-dependencies` devDependencies allowlist to include `*.e2e.*`, `*.stories.*`, `*.mock.*`, `vitest.config.*`, and `jest.config.*` patterns.

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

- [`96a9fb2`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/96a9fb24b3f5736d30d91e01474dcae40f9db43a) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Set `no-console` to `warn` to catch accidental console usage. Remove deprecated `@typescript-eslint/no-var-requires` (removed in v8; replaced by `no-require-imports`).

- [`e06c37d`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/e06c37d0b8bc1eda3c57a6238304221e635da2b1) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Remove `maxDepth: 3` cap from `import/no-cycle`. With a depth limit of 3, cycles longer than 3 hops pass silently, defeating the purpose of the rule. Removing the cap restores full cycle detection (the plugin default is unlimited depth).

- [`cf27771`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/cf277718433579ba3267e0b9537c349f0411a28f) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Normalize ignores and apply Node.js runtime globals in the node preset.

- [`1aa72d2`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/1aa72d29bdd181b7b27f0433ff87df5847bf6304) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Remove cross-runtime globals from base preset so each platform config provides its own globals.

- [`8385057`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/83850576ee884ac189e0c701d98b45ace73f90d3) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - Bump TypeScript peer dependency minimum from `>=5.6.0` to `>=5.8.0` to align with `verbatimModuleSyntax` and `erasableSyntaxOnly` requirements documented in the v2 changeset.

- Updated dependencies [[`73c9ca5`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/73c9ca51051aa24aec9e9c4ee84db55de79f020f)]:
  - @pasteltech/eslint-config-airbnb-typescript@19.1.2

## 1.3.1

### Patch Changes

- [`c9e53ea`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/c9e53ea7d5f4226b3a9b0f7ba4d8119de24fcdac) Thanks [@jimmyltsinn](https://github.com/jimmyltsinn)! - build(deps): support eslint v10 and above

- [#25](https://github.com/pastelhk/pastel-ts-coding-standard/pull/25) [`8d2845b`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/8d2845b97bbdf353ff7beba745a4b8de88cdc197) Thanks [@ctfdavis](https://github.com/ctfdavis)! - Add ignoreIIFE option to @typescript-eslint/no-floating-promises rule

- Updated dependencies [[`fbf734f`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/fbf734f551cf5e7d10be99fa64ecec5e4a3aae82), [`4f6f7d4`](https://github.com/pastelhk/pastel-ts-coding-standard/commit/4f6f7d45110cf166d6ec89b076a171ddc445a1ce)]:
  - @pasteltech/eslint-config-airbnb-base@16.1.1
  - @pasteltech/eslint-config-airbnb-typescript@19.1.1

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.3.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-base@1.2.5...@pasteltech/eslint-config-base@1.3.0) (2025-08-27)

### Features

- **eslint/base:** disallow floating promises ([d877a0a](https://github.com/pasteltech/pastel-ts-coding-standard/commit/d877a0ab2d9e5949c51c2b17b4d4a9a708fcf8ec))
- **eslint/base:** ignore naming convention check for quoted properties ([f76d19d](https://github.com/pasteltech/pastel-ts-coding-standard/commit/f76d19d39415e8e9a8c6e84e51e28f480ab505b5))
- **eslint/base:** skip naming convention check on destructed variables ([1ea04a5](https://github.com/pasteltech/pastel-ts-coding-standard/commit/1ea04a58b7e9513153b1fba3e4cd31531e1ecd7c))

## [1.2.5](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-base@1.2.4...@pasteltech/eslint-config-base@1.2.5) (2025-01-24)

### Reverts

- **eslint/base:** turn off no underscore dangle ([#18](https://github.com/pasteltech/pastel-ts-coding-standard/issues/18)) ([a8e532f](https://github.com/pasteltech/pastel-ts-coding-standard/commit/a8e532fb7f6426039f3d61a85f87fc92050573c0))

## [1.2.4](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-base@1.2.3...@pasteltech/eslint-config-base@1.2.4) (2025-01-24)

### Bug Fixes

- **eslint/base:** fix missing airbnb base config ([#15](https://github.com/pasteltech/pastel-ts-coding-standard/issues/15)) ([4a2f51e](https://github.com/pasteltech/pastel-ts-coding-standard/commit/4a2f51e5a27f766eecc736bd4ce111c8e4b5880f))

### Features

- **eslint/base:** add exemption rule for eslint config file ([#13](https://github.com/pasteltech/pastel-ts-coding-standard/issues/13)) ([d056aa8](https://github.com/pasteltech/pastel-ts-coding-standard/commit/d056aa8e60cf784cdfd58df03bec184d3146e8b0))
- **eslint/base:** allow dev dependencies for test files ([#16](https://github.com/pasteltech/pastel-ts-coding-standard/issues/16)) ([070fc54](https://github.com/pasteltech/pastel-ts-coding-standard/commit/070fc54ac6ed9a322d8f1f332d6ff536bf70213e))
- **eslint/base:** turn off no underscore dangle ([#17](https://github.com/pasteltech/pastel-ts-coding-standard/issues/17)) ([aeb819c](https://github.com/pasteltech/pastel-ts-coding-standard/commit/aeb819c1795337547c989652425f5cba398c9e7e))

## [1.2.3](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-base@1.2.2...@pasteltech/eslint-config-base@1.2.3) (2025-01-22)

**Note:** Version bump only for package @pasteltech/eslint-config-base

## [1.2.2](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-base@0.3.0...@pasteltech/eslint-config-base@1.2.2) (2025-01-22)

### Bug Fixes

- **eslint:** verify rules and fix issues reported by eslint-find-rules ([fcdc38b](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fcdc38bbaaba391c89baa5ac4a19a179a3ef42ca))

## 1.2.1 (2025-01-22)

### Bug Fixes

- **eslint/base:** add eslint-config-prettier as dependency ([34f5664](https://github.com/pasteltech/pastel-ts-coding-standard/commit/34f5664b3a02ec860e08a87cc3015c7e8d4a063a))

# 1.2.0 (2025-01-22)

### Features

- **eslint:** migrate to eslint v9 ([5d57eed](https://github.com/pasteltech/pastel-ts-coding-standard/commit/5d57eedd1e9feea218b954804f73b148d36ba641))

## 1.1.1 (2025-01-13)

### Bug Fixes

- restrict typescript version under 5.6.0 ([eb5b892](https://github.com/pasteltech/pastel-ts-coding-standard/commit/eb5b892ec1ec17f27735b74bd3b9e42708a2409c))

# 1.1.0 (2025-01-13)

### Features

- escalate warnings from error with update on naming convention ([6847d4f](https://github.com/pasteltech/pastel-ts-coding-standard/commit/6847d4f1e2b23ac83bddf7485f0e119b525bcd43))

## 1.0.1 (2024-08-27)

### Bug Fixes

- **eslint:** forbid console statement ([#7](https://github.com/pasteltech/pastel-ts-coding-standard/issues/7)) ([2d262c1](https://github.com/pasteltech/pastel-ts-coding-standard/commit/2d262c178420da3a061d41df2c4bc67973bfa161))
- **eslint:** relax naming convention ([#5](https://github.com/pasteltech/pastel-ts-coding-standard/issues/5)) ([9218e85](https://github.com/pasteltech/pastel-ts-coding-standard/commit/9218e85d251eac2b69c87e9219794cedbb3e091c))

### Features

- **eslint:** allow unused underscore ([#6](https://github.com/pasteltech/pastel-ts-coding-standard/issues/6)) ([7aa8b5a](https://github.com/pasteltech/pastel-ts-coding-standard/commit/7aa8b5a5e07184b4087958a8a0af2ca70c0c6ade))

# 1.0.0 (2024-05-17)

## 0.6.2 (2024-05-17)

### Bug Fixes

- **eslint-config-base:** correct invalid pattern on eslint extraneous dependencies rule ([#3](https://github.com/pasteltech/pastel-ts-coding-standard/issues/3)) ([a94d8ae](https://github.com/pasteltech/pastel-ts-coding-standard/commit/a94d8aefd4e2c86a5ce67578ee5d847a478230b9))

# 0.6.0 (2024-05-17)

### Features

- update tsconfig with reference to latest boilerplates ([c477663](https://github.com/pasteltech/pastel-ts-coding-standard/commit/c477663063c38160d665045c148122fd80e169ac))

# 0.5.0 (2024-05-17)

## [1.2.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.2.0...v1.2.1) (2025-01-22)

### Bug Fixes

- **eslint/base:** add eslint-config-prettier as dependency ([34f5664](https://github.com/pasteltech/pastel-ts-coding-standard/commit/34f5664b3a02ec860e08a87cc3015c7e8d4a063a))

# [1.2.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.1...v1.2.0) (2025-01-22)

### Features

- **eslint:** migrate to eslint v9 ([5d57eed](https://github.com/pasteltech/pastel-ts-coding-standard/commit/5d57eedd1e9feea218b954804f73b148d36ba641))

## [1.1.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.1.0...v1.1.1) (2025-01-13)

### Bug Fixes

- restrict typescript version under 5.6.0 ([eb5b892](https://github.com/pasteltech/pastel-ts-coding-standard/commit/eb5b892ec1ec17f27735b74bd3b9e42708a2409c))

# [1.1.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.1...v1.1.0) (2025-01-13)

### Features

- escalate warnings from error with update on naming convention ([6847d4f](https://github.com/pasteltech/pastel-ts-coding-standard/commit/6847d4f1e2b23ac83bddf7485f0e119b525bcd43))

## [1.0.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v1.0.0...v1.0.1) (2024-08-27)

### Bug Fixes

- **eslint:** forbid console statement ([#7](https://github.com/pasteltech/pastel-ts-coding-standard/issues/7)) ([2d262c1](https://github.com/pasteltech/pastel-ts-coding-standard/commit/2d262c178420da3a061d41df2c4bc67973bfa161))
- **eslint:** relax naming convention ([#5](https://github.com/pasteltech/pastel-ts-coding-standard/issues/5)) ([9218e85](https://github.com/pasteltech/pastel-ts-coding-standard/commit/9218e85d251eac2b69c87e9219794cedbb3e091c))

### Features

- **eslint:** allow unused underscore ([#6](https://github.com/pasteltech/pastel-ts-coding-standard/issues/6)) ([7aa8b5a](https://github.com/pasteltech/pastel-ts-coding-standard/commit/7aa8b5a5e07184b4087958a8a0af2ca70c0c6ade))

# [1.0.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.2...v1.0.0) (2024-05-17)

**Note:** Version bump only for package @pasteltech/eslint-config-base

## [0.6.2](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.6.1...v0.6.2) (2024-05-17)

### Bug Fixes

- **eslint-config-base:** correct invalid pattern on eslint extraneous dependencies rule ([#3](https://github.com/pasteltech/pastel-ts-coding-standard/issues/3)) ([a94d8ae](https://github.com/pasteltech/pastel-ts-coding-standard/commit/a94d8aefd4e2c86a5ce67578ee5d847a478230b9))

# [0.6.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/v0.5.0...v0.6.0) (2024-05-17)

### Features

- update tsconfig with reference to latest boilerplates ([c477663](https://github.com/pasteltech/pastel-ts-coding-standard/commit/c477663063c38160d665045c148122fd80e169ac))

# 0.5.0 (2024-05-17)

### Bug Fixes

- **eslint-config:** remove jest ([11de05a](https://github.com/pasteltech/pastel-ts-coding-standard/commit/11de05ab9af90e04fd47fe14cd590c4983e87220))
- **eslint-config:** update eslint-import-plugin for typescript support ([ae94397](https://github.com/pasteltech/pastel-ts-coding-standard/commit/ae94397dbbb5b700b17d493b8f21c62ce4acc0e5))

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))
- add no-else-return rule ([fe60d61](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fe60d61b7033ab359da5c04f2462c14dd5c1606a))
- **eslint:** disable rule class-methods-use-this ([6a3c247](https://github.com/pasteltech/pastel-ts-coding-standard/commit/6a3c24735ab89d807262d0ac8da8f23e014d378f))

# [0.3.0](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-base@0.2.0...@pasteltech/eslint-config-base@0.3.0) (2023-12-11)

### Features

- **eslint:** disable rule class-methods-use-this ([6a3c247](https://github.com/pasteltech/pastel-ts-coding-standard/commit/6a3c24735ab89d807262d0ac8da8f23e014d378f))

# 0.2.0 (2023-08-02)

### Bug Fixes

- **eslint-config:** remove jest ([11de05a](https://github.com/pasteltech/pastel-ts-coding-standard/commit/11de05ab9af90e04fd47fe14cd590c4983e87220))
- **eslint-config:** update eslint-import-plugin for typescript support ([ae94397](https://github.com/pasteltech/pastel-ts-coding-standard/commit/ae94397dbbb5b700b17d493b8f21c62ce4acc0e5))

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))
- add no-else-return rule ([fe60d61](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fe60d61b7033ab359da5c04f2462c14dd5c1606a))

## [0.1.3](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-base@0.1.2...@pasteltech/eslint-config-base@0.1.3) (2023-03-28)

### Bug Fixes

- **eslint-config:** remove jest ([11de05a](https://github.com/pasteltech/pastel-ts-coding-standard/commit/11de05ab9af90e04fd47fe14cd590c4983e87220))

## [0.1.2](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-base@0.1.1...@pasteltech/eslint-config-base@0.1.2) (2023-03-28)

### Bug Fixes

- **eslint-config:** update eslint-import-plugin for typescript support ([ae94397](https://github.com/pasteltech/pastel-ts-coding-standard/commit/ae94397dbbb5b700b17d493b8f21c62ce4acc0e5))

## [0.1.1](https://github.com/pasteltech/pastel-ts-coding-standard/compare/@pasteltech/eslint-config-base@0.1.0...@pasteltech/eslint-config-base@0.1.1) (2023-03-22)

**Note:** Version bump only for package @pasteltech/eslint-config-base

# 0.1.0 (2023-03-20)

### Features

- add initial configurations ([fdb0d58](https://github.com/pasteltech/pastel-ts-coding-standard/commit/fdb0d58d7a0bb85c80851aede7756b59a416f528))

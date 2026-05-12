---
'@pasteltech/tsconfig-react': patch
'@pasteltech/tsconfig-react-native': patch
---

Update `target`/`lib` and `module` to reflect current ecosystem defaults.

- **tsconfig-react**: Bump `target` and `lib` from `ES2020` to `ES2022`. Vite and modern React tooling has targeted ES2022 (class fields, top-level `await`, `.at()`) since 2023. `ES2020` was the old Vite template default.
- **tsconfig-react-native**: Change `module` from `"es2015"` to `"esnext"`. The `es2015` value dates from the original RN CLI template circa 2018; Metro and the current React Native toolchain accept `esnext` and is consistent with the broader project convention.

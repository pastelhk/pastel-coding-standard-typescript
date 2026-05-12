---
'@pasteltech/eslint-config-react-native': patch
'@pasteltech/eslint-config-nextjs': patch
---

Remove organisation-internal references from shared public presets.

- **react-native**: Remove `react-i18next → @pastellink/i18n-react` restriction. This rule referenced a private org package, making the shared config non-portable for teams not using that package.
- **nextjs**: Remove `i18nConfig.ts` from the default-export file allowlist. This was a project-specific filename that leaked into the shared standard.

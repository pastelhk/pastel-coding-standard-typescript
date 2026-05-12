---
'@pasteltech/eslint-config-base': patch
'@pasteltech/eslint-config-react': patch
---

Move `eslint-plugin-jsx-a11y` from `eslint-config-base` to `eslint-config-react`. The base config has no JSX rules; jsx-a11y is only consumed via the `@pasteltech/eslint-config-airbnb` React rules, which are only loaded by the react preset.

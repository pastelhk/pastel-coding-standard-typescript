---
'@pasteltech/eslint-config-base': minor
'@pasteltech/eslint-config-nestjs': minor
---

Move `@typescript-eslint/explicit-member-accessibility` from the base preset to the NestJS preset.

**Breaking for base consumers**: `public`/`private`/`protected` modifiers are no longer required in non-NestJS projects. Modern TypeScript community guidance treats explicit `public` as noise; it is idiomatic only in class-heavy architectures (NestJS services, controllers, providers).

**NestJS**: Rule is still enforced (now declared in `eslint-config-nestjs` rather than inherited from base).

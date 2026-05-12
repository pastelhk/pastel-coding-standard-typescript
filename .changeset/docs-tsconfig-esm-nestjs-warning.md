---
'@pasteltech/tsconfig-node': patch
---

Add comment to `tsconfig.esm.json` warning NestJS users that `emitDecoratorMetadata` (required for NestJS DI) is incompatible with `erasableSyntaxOnly`. NestJS projects must use `tsconfig.json` (CJS variant).

---
'@pasteltech/eslint-config-nextjs': patch
---

Broaden the default-export file override in the Next.js preset.

- **Add Next 15 special files**: `forbidden.tsx` and `unauthorized.tsx` were introduced in Next.js 15 as new App Router conventions; they require a default export but were missing from the allowlist.
- **Cover projects without `src/`**: The glob `src/app/**/{file}.tsx` only matched projects using a `src` directory. Add a parallel `app/**/{file}.tsx` pattern so teams that put `app/` at the repository root also get the override.

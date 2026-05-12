---
'@pasteltech/eslint-config-base': patch
---

Remove `maxDepth: 3` cap from `import/no-cycle`. With a depth limit of 3, cycles longer than 3 hops pass silently, defeating the purpose of the rule. Removing the cap restores full cycle detection (the plugin default is unlimited depth).

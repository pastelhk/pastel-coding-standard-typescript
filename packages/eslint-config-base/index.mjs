import { packageEntry } from './package-entry.mjs'
import pkg from './package.json' with { type: 'json' }
import { recommended } from './recommended.mjs'
import { tests } from './tests.mjs'

export default {
  meta: {
    name: '@pasteltech/eslint-config-base',
    version: pkg.version,
  },
  configs: {
    recommended,
    packageEntry,
    tests,
  },
}

import pkg from './package.json' with { type: 'json' }
import recommended from './recommended.mjs'

export default {
  meta: {
    name: '@pasteltech/eslint-config-base',
    version: pkg.version,
  },
  configs: {
    recommended,
  },
}

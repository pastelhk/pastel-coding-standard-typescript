import base from './base.mjs'
import pkg from './package.json' with { type: 'json' }
import react from './react.mjs'

export default {
  meta: {
    name: 'eslint-airbnb-typescript',
    version: pkg.version,
  },
  configs: {
    react,
    base,
  },
}

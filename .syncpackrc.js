// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  dependencyTypes: ['dev', 'prod'],
  filter: '.',
  indent: '  ',
  semverGroups: [],
  sortAz: [
    'contributors',
    'dependencies',
    'devDependencies',
    'keywords',
    'peerDependencies',
    'scripts',
  ],
  sortFirst: [
    'name',
    'description',
    'version',
    'type',
    'private',
    'author',
    'license',
    'repository',
    'homepage',
    'bugs',
    'workspaces',
    'scripts',
    'main',
    'module',
    'browser',
    'sideEffects',
    'types',
    'files',
    'eslintConfig',
    'prettier',
    'dependencies',
    'peerDependencies',
    'devDependencies',
  ],
  source: ['package.json', 'packages/*/package.json'],
  versionGroups: [
    {
      dependencies: ['@types/**'],
      dependencyTypes: ['!dev'],
      isBanned: true,
      label: '@types packages should only be under devDependencies',
    },
  ],
}

module.exports = config

export const tests = {
  files: ['__tests__/**/*.ts', '__tests__/**/*.tsx'],
  languageOptions: {
    parserOptions: {
      projectService: null,
      project: ['./__tests__/tsconfig.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
}

module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: 'packages/@ExperimentCourse11/angular/**',
      options: {
        semi: true,
      },
    },
  ],
}

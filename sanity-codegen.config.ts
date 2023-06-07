import { SanityCodegenConfig } from 'sanity-codegen';
// const { defaultBabelOptions } = require('sanity-codegen/cli')

const config: SanityCodegenConfig = {
  schemaPath: './sanity/schemas/schema',
  outputPath: './sanity/schemas/schema.ts',

  // NOTE: The CLI ships with a pre-configured babel config that shims out
  // the Sanity parts system. This babel config does not read from any
  // `.babelrc` or `babel.config.js`. You can only configure extra babel
  // options here.
//   babelOptions: require('./.babelrc.json'), // (optional)
};

export default config;
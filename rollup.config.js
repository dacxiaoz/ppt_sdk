import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const pkg = require('./package.json');

export default {
  input: `src/index.ts`,
  output: [
    {
      file: 'ppt_sdk.js',
      name: 'ppt_sdk',
      format: 'umd',
      sourcemap: false,
      freeze: false,
    },
  ],
  external: [],
  watch: {
    include: 'src/**',
  },
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      abortOnError: false,
      removeComments: false,
    }),
    resolve(),
    commonjs()
  ],
};

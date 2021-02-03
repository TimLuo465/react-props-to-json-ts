import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

const pkg = require('./package.json')

export default {
  input: `src/index.ts`,
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true, exports: "auto" },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    json(),
    typescript({
      rootDir: "src",
      outDir: "dist",
    }),
    commonjs(),
    resolve(),
  ],
}

import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  sourcemap: false,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  platform: 'browser',
  splitting: true,
  treeshake: true,
  target: 'es2015',
})

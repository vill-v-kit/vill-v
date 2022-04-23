import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  sourcemap: false,
  clean: true,
  dts: true,
  bundle: false,
  format: ['cjs', 'esm'],
  platform: 'browser',
  target: 'es2015',
})

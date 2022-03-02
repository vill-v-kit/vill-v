import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: false,
  clean: true,
  dts: true,
  splitting: false,
  format: ['cjs', 'esm'],
  platform: 'browser',
  target: 'esnext',
})

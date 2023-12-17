import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.cts'],
  outDir: 'lib',
  format: ['cjs'],
  dts: true,
  clean: true,
})

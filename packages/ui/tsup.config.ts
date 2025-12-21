import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  minify: true,
  outDir: 'dist',
  loader: {
    '.css': 'copy',
    '.scss': 'copy'
  },
  publicDir: false,
  onSuccess: 'echo "UI package built successfully!"'
})

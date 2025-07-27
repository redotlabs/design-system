import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src',
    '!src/**/*.test.*',
    '!src/**/*.stories.*',
    '!src/**/*.schema.*',
  ],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  outDir: 'dist',
  target: 'es2020',
});

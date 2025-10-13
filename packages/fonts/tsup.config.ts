import { defineConfig } from 'tsup';
import { readdirSync } from 'fs';
import { join } from 'path';

// src 디렉토리에서 폰트 폴더들을 찾아서 entry 객체 생성
const srcDir = './src';
const fontDirs = readdirSync(srcDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const entry = fontDirs.reduce(
  (acc, dir) => {
    acc[`${dir}/index`] = join(srcDir, dir, 'index.ts');
    return acc;
  },
  { index: join(srcDir, 'index.ts') }
);

export default defineConfig({
  entry,
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  outDir: 'dist',
  target: 'es2020',
});

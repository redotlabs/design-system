import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['packages/**/src/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    globals: true,
  },
});

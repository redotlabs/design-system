import { colors, typography } from '@redot/tokens';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './packages/ui/src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
      fontSize: typography.size,
      fontWeight: typography.weight,
    },
  },
  plugins: [],
} satisfies Config;

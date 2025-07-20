import { typography } from '@/tokens/typography';
import { colors } from './src/tokens/color';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize: typography.size,
      fontWeight: typography.weight,
    },
  },
  plugins: [],
} satisfies Config;

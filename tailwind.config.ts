import { typography, colors } from '@/tokens';
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

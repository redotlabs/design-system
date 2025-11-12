import { colors, typography } from '@redotlabs/tokens';
import { pretendard } from '@redotlabs/fonts/pretendard';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  content: [
    './packages/ui/src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.blue, // primary color를 blue로 설정
      },
      fontSize: typography.size,
      fontWeight: typography.weight,
      fontFamily: {
        pretendard: pretendard.family.split(', '),
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

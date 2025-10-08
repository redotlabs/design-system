# Redot Design System

<p align="center">
  <a href="https://github.com/redotlabs/design-system/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-ISC-blue.svg" alt="ISC License"></img>
  </a>
  <a href="https://img.shields.io/badge/pnpm-10.6.1-orange?logo=pnpm">
    <img src="https://img.shields.io/badge/pnpm-10.6.1-orange?logo=pnpm" alt="Package Manager"></img>
  </a>
  <a href="https://storybook.redot.me">
    <img src="https://img.shields.io/badge/Storybook-9.0.17-ff4785?logo=storybook" alt="Storybook"></img>
  </a>
  <a href="[https://storybook.redot.me](https://img.shields.io/badge/Vitest-3.2.4-green?logo=vitest)">
    <img src="https://img.shields.io/badge/Vitest-3.2.4-green?logo=vitest" alt="Tests"></img>
  </a>
</p>

A design system monorepo used in Redot's project. Provides UI components, design tokens, themes, utilities, and more.

---

## Packages(`Github packages`)

- [@redotlabs/ui](https://github.com/redotlabs/design-system/tree/main/packages/ui)
- [@redotlabs/tokens](https://github.com/redotlabs/design-system/tree/main/packages/tokens)
- [@redotlabs/themes](https://github.com/redotlabs/design-system/tree/main/packages/themes)
- [@redotlabs/utils](https://github.com/redotlabs/design-system/tree/main/packages/utils)
- [@redotlabs/sdui-renderer](https://github.com/redotlabs/design-system/tree/main/packages/sdui-renderer)

---

## Installation

### 1. Add `.npmrc` file to project

```bash
# .npmrc
@redotlabs:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${REDOT_PAT}
```

### 2. Add `REDOT_PAT` to environment variable

Please set GitHub Personal Access Token as an environment variable.

```bash
export REDOT_PAT=ghp_your_token_here
```

### 3. Installing the package

Install the required package.

```bash
pnpm install @redotlabs/ui @redotlabs/themes
```

---

## Usage

### Preferences

First, add theme providers and styles to the application.

```tsx
// main.tsx
import { ThemeProvider } from '@redotlabs/themes';

function App() {
  return (
    <ThemeProvider color="blue">
      <YourApp />
    </ThemeProvider>
  );
}
```

### Setting Tailwind

```ts
// tailwind.config.ts
import { colors, typography } from '@redotlabs/tokens';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          DEFAULT: 'var(--color-primary-600)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
      },
      fontSize: typography.size,
      fontWeight: typography.weight,
    },
  },
  plugins: [],
} satisfies Config;
```

```css
/* index.css or globals.css */
@import 'tailwindcss';
@config '../../tailwind.config.ts';
@source '../../node_modules/@redotlabs/ui';

/* other css... */
```

---

## License

ISC License

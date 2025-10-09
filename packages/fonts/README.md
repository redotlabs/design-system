# Font packages for Redot design system

## Included Fonts

- **Pretendard**: Supports weights 100-900

## Usage

### Using Pretendard Font

```typescript
// CSS is automatically included
import { pretendard } from '@redotlabs/fonts/pretendard';

// Use as CSS variable
console.log(pretendard.variable); // '--font-pretendard'

// Use as font-family string
console.log(pretendard.family);
// 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif'
```

### With Tailwind CSS

```javascript
// tailwind.config.js
import { pretendard } from '@redotlabs/fonts/pretendard';

export default {
  theme: {
    extend: {
      fontFamily: {
        pretendard: pretendard.family.split(', '),
      },
    },
  },
};
```

## Font Source

All fonts are served from Redot CDN (`https://cdn.redot.me/fonts/`).

## License

ISC

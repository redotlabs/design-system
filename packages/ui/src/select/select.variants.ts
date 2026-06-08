import { cva } from 'class-variance-authority';

export const selectVariantsOptions = {
  base: 'w-full border border-solid border-gray-300 justify-between bg-white text-gray-800 hover:bg-gray-100 active:bg-gray-200 disabled:bg-gray-100 disabled:text-gray-300 disabled:border-gray-300',

  variants: {
    size: {
      sm: 'gap-6',
      md: 'gap-6',
      lg: 'gap-6',
    },
  },

  defaultVariants: {
    size: 'md',
  } as const,
};

// Shared dropdown size tokens — single source of truth consumed by both the
// legacy combined variant and the granular Radix Content/Viewport variants.
const dropdownContentSize = {
  sm: 'rounded-lg',
  md: 'rounded-[10px]',
  lg: 'rounded-[10px]',
} as const;

const dropdownViewportSize = {
  sm: 'p-1 gap-1',
  md: 'p-1.5 gap-1',
  lg: 'p-2 gap-1',
} as const;

const dropdownOffsetSize = {
  sm: 'mt-1',
  md: 'mt-2',
  lg: 'mt-2',
} as const;

export const selectDropdownVariantsOptions = {
  base: 'absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden origin-top transition-all duration-200 ease-out',

  variants: {
    size: {
      sm: `${dropdownViewportSize.sm} ${dropdownContentSize.sm} ${dropdownOffsetSize.sm}`,
      md: `${dropdownViewportSize.md} ${dropdownContentSize.md} ${dropdownOffsetSize.md}`,
      lg: `${dropdownViewportSize.lg} ${dropdownContentSize.lg} ${dropdownOffsetSize.lg}`,
    },
  },

  defaultVariants: {
    size: 'md',
  } as const,
};

export const selectOptionVariantsOptions = {
  base: 'flex items-center w-full font-semibold transition-colors text-left text-gray-800',

  variants: {
    size: {
      sm: 'px-[18px] py-[5.5px] rounded-md text-sm',
      md: 'px-5 py-[5.5px] rounded-lg text-lg',
      lg: 'px-[22px] py-[5.5px] rounded-lg text-xl',
    },
  },

  defaultVariants: {
    size: 'md',
  } as const,
};

export const selectIconSizeMap = {
  sm: 22,
  md: 26,
  lg: 30,
} as const;

export const selectVariants = cva(selectVariantsOptions.base, {
  variants: selectVariantsOptions.variants,
  defaultVariants: selectVariantsOptions.defaultVariants,
});

export const selectDropdownVariants = cva(selectDropdownVariantsOptions.base, {
  variants: selectDropdownVariantsOptions.variants,
  defaultVariants: selectDropdownVariantsOptions.defaultVariants,
});

export const selectOptionVariants = cva(selectOptionVariantsOptions.base, {
  variants: selectOptionVariantsOptions.variants,
  defaultVariants: selectOptionVariantsOptions.defaultVariants,
});

/** Corner radius per size — apply to the Radix SelectContent container. */
export const selectContentSizeVariants = cva('', {
  variants: { size: dropdownContentSize },
  defaultVariants: { size: 'md' },
});

/** Padding + gap per size — apply to the Radix SelectViewport. */
export const selectViewportSizeVariants = cva('', {
  variants: { size: dropdownViewportSize },
  defaultVariants: { size: 'md' },
});

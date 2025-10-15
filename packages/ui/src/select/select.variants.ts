import { cva } from 'class-variance-authority';

export const selectVariantsOptions = {
  base: 'inline-flex items-center justify-between whitespace-nowrap font-semibold transition-colors cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed shrink-0 outline-none bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 focus-visible:border-primary-500 focus-visible:ring-1 focus-visible:ring-primary-500 disabled:bg-gray-100 disabled:text-gray-300',

  variants: {
    size: {
      sm: 'h-8 text-sm px-[18px] py-[5px] rounded-md gap-6',
      md: 'h-12 text-lg px-5 py-[13px] rounded-[10px] gap-6',
      lg: 'h-16 text-xl px-[22px] py-[7px] rounded-[10px] gap-6',
    },
  },

  defaultVariants: {
    size: 'md',
  } as const,
};

export const selectDropdownVariantsOptions = {
  base: 'absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden',

  variants: {
    size: {
      sm: 'p-1 gap-1 rounded-lg mt-1',
      md: 'p-1.5 gap-1 rounded-[10px] mt-2',
      lg: 'p-2 gap-1 rounded-[10px] mt-2',
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

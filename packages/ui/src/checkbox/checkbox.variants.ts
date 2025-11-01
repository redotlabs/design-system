import { cn } from '@redotlabs/utils';
import { cva } from 'class-variance-authority';

export const checkboxVariantsOptions = {
  base: cn(
    // default
    'appearance-none border-2 border-gray-300 transition-all cursor-pointer shrink-0 outline-none',
    // checked
    'checked:bg-primary-500 checked:border-primary-500',
    // disabled(default)
    'disabled:pointer-events-none',
    // disabled(not checked)
    'disabled:bg-gray-200 disabled:border-gray-300 disabled:text-gray-300',
    // disabled(checked)
    'disabled:checked:bg-primary-300 disabled:checked:border-primary-300 disabled:checked:text-white',
    // focus-visible
    'focus-visible:ring-primary-500 focus-visible:ring-2 focus-visible:not-checked:bg-primary-100'
  ),

  variants: {
    size: {
      sm: 'size-6 rounded-[6px]',
      md: 'size-7 rounded-[7px]',
      lg: 'size-8 rounded-[8px]',
    },
  },

  defaultVariants: {
    size: 'md',
  },
} as const;

export const checkboxWrapperVariants = cva(
  cn(
    'relative flex items-center group cursor-pointer transition-all',
    'has-[:disabled]:cursor-not-allowed',
    'not-has-[:disabled]:active:scale-98 not-has-[:disabled]:will-change-transform'
  )
);

export const checkboxVariants = cva(checkboxVariantsOptions.base, {
  variants: checkboxVariantsOptions.variants,
  defaultVariants: checkboxVariantsOptions.defaultVariants,
});

export const checkboxLabelVariants = cva(
  'font-medium group-has-[:disabled]:text-gray-300',
  {
    variants: {
      size: {
        sm: 'ml-1.5 text-sm',
        md: 'ml-2 text-base',
        lg: 'ml-2.5 text-lg',
      },
    },
  }
);

export const checkboxIconVariants = cva(
  'absolute pointer-events-none hidden group-has-[:checked]:block text-white',
  {
    variants: {
      size: {
        sm: 'size-3.5',
        md: 'size-4',
        lg: 'size-4.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

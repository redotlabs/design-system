import { cn } from '@redotlabs/utils';
import { cva } from 'class-variance-authority';

export const radioVariantsOptions = {
  base: cn(
    // default
    'relative appearance-none rounded-full border-2 border-gray-300 transition-all cursor-pointer shrink-0 outline-none',
    // checked
    'checked:border-primary-500',
    // disabled(default)
    'disabled:pointer-events-none',
    // disabled(not checked)
    'disabled:not-checked:bg-gray-200 disabled:border-gray-300 disabled:text-gray-300',
    // disabled(checked)
    'disabled:checked:border-primary-300 disabled:checked:text-white',
    // focus-visible
    'focus-visible:ring-primary-500 focus-visible:ring-2 focus-visible:not-checked:bg-primary-100',
    'before:content-[""] before:absolute before:inset-1 before:rounded-full before:bg-primary-500 before:opacity-0 before:transition-opacity before:duration-200 group-has-[:checked]:before:opacity-100 disabled:before:bg-primary-300'
  ),

  variants: {
    size: {
      sm: 'size-6',
      md: 'size-7',
      lg: 'size-8',
    },
  },

  defaultVariants: {
    size: 'md',
  },
} as const;

export const radioWrapperVariants = cva(
  cn(
    'flex items-center group cursor-pointer transition-all',
    'has-[:disabled]:cursor-not-allowed',
    'not-has-[:disabled]:active:scale-98 not-has-[:disabled]:will-change-transform'
  )
);

export const radioVariants = cva(radioVariantsOptions.base, {
  variants: radioVariantsOptions.variants,
  defaultVariants: radioVariantsOptions.defaultVariants,
});

export const radioLabelVariants = cva(
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

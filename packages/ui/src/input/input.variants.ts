import { cva } from 'class-variance-authority';
import { cn } from '@redotlabs/utils';

export const inputWrapperVariantsOptions = {
  base: cn(
    'flex items-center w-full bg-white border border-gray-300 rounded-md transition-[color,box-shadow] overflow-hidden',
    'focus-within:border-ring focus-within:ring-primary-500 focus-within:ring-[1px]',
    'has-[:invalid]:ring-red-500 has-[:invalid]:border-red-500 has-[[aria-invalid=true]]:ring-red-500 has-[[aria-invalid=true]]:border-red-500',
    'has-[:disabled]:[&_*]:pointer-events-none has-[:disabled]:cursor-not-allowed has-[:disabled]:bg-gray-100'
  ),

  variants: {
    size: {
      sm: 'h-8',
      md: 'h-12',
      lg: 'h-16',
    },
  },

  defaultVariants: {
    size: 'md',
  },
} as const;

export const inputVariantsOptions = {
  base: cn(
    'placeholder:text-gray-300 selection:bg-primary selection:text-primary-foreground bg-transparent border-none flex-1 min-w-0 outline-none',
    'disabled:text-gray-300'
  ),

  variants: {
    size: {
      sm: 'px-2.5 text-xs',
      md: 'px-3 text-base',
      lg: 'px-3.5 text-2xl',
    },
  },

  defaultVariants: {
    size: 'md',
  },
} as const;

export const inputContentVariantsOptions = {
  base: cn('flex items-center justify-center flex-shrink-0'),

  variants: {
    size: {
      sm: 'px-2',
      md: 'px-3',
      lg: 'px-3',
    },
  },

  defaultVariants: {
    size: 'md',
  },
} as const;

export const inputWrapperVariants = cva(inputWrapperVariantsOptions.base, {
  variants: inputWrapperVariantsOptions.variants,
  defaultVariants: inputWrapperVariantsOptions.defaultVariants,
});

export const inputVariants = cva(inputVariantsOptions.base, {
  variants: inputVariantsOptions.variants,
  defaultVariants: inputVariantsOptions.defaultVariants,
});

export const inputContentVariants = cva(inputContentVariantsOptions.base, {
  variants: inputContentVariantsOptions.variants,
  defaultVariants: inputContentVariantsOptions.defaultVariants,
});

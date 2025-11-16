import { cva } from 'class-variance-authority';
import { cn } from '@redotlabs/utils';

export const textareaVariantsOptions = {
  base: cn(
    'resize-none w-full bg-white border border-gray-300 rounded-md transition-[color,box-shadow] field-sizing-content min-h-16',
    'focus-within:border-ring focus-within:ring-primary-500 focus-within:ring-[1px]',
    'invalid:ring-red-500 invalid:border-red-500 [[aria-invalid=true]]:ring-red-500 [[aria-invalid=true]]:border-red-500',
    'disabled:cursor-not-allowed disabled:bg-gray-100',
    'placeholder:text-gray-300 selection:bg-primary selection:text-primary-foreground bg-transparent outline-none',
    'disabled:text-gray-300'
  ),

  variants: {
    size: {
      sm: 'px-2.5 py-2 text-xs',
      md: 'px-3 py-2.5 text-base',
      lg: 'px-3.5 py-3 text-2xl',
    },
  },

  defaultVariants: {
    size: 'md',
  },
} as const;

export const textareaVariants = cva(textareaVariantsOptions.base, {
  variants: textareaVariantsOptions.variants,
  defaultVariants: textareaVariantsOptions.defaultVariants,
});

import { cva } from 'class-variance-authority';

export const buttonVariantsOptions = {
  base: 'inline-flex items-center justify-center whitespace-nowrap border border-primary-200 rounded-md active:scale-97 transition-all cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',

  variants: {
    variant: {
      contained:
        'bg-primary-100 text-primary-700 hover:bg-primary-200 active:bg-primary-200 disabled:bg-primary-200 disabled:border-primary-200 disabled:text-primary-400',
      outlined:
        'border border-primary-200 text-primary-700 hover:text-primary-900 hover:bg-primary-100 active:bg-primary-100 disabled:border-primary-200 disabled:text-primary-400',
      text: 'border-none text-primary-700 disabled:text-primary-400',
    },
    size: {
      sm: 'min-h-8 h-8 max-h-8 text-sm px-4 py-1.5 gap-1',
      md: 'text-md px-5 py-2.5',
      lg: 'text-lg px-5 py-4 rounded-xl',
    },
  },

  defaultVariants: {
    variant: 'contained' as const,
    size: 'md' as const,
  },
};

export const buttonVariants = cva(buttonVariantsOptions.base, {
  variants: buttonVariantsOptions.variants,
  defaultVariants: buttonVariantsOptions.defaultVariants,
});

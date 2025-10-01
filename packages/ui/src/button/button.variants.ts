import { cva } from 'class-variance-authority';

export const buttonVariantsOptions = {
  base: 'inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2',

  variants: {
    variant: {
      contained:
        'bg-primary-500 text-white border-none hover:bg-primary-400 active:bg-primary-600 disabled:bg-primary-300',
      outlined:
        'border border-primary-500 text-primary-500 bg-transparent hover:border-primary-400 hover:text-primary-400 active:border-primary-600 active:text-primary-600 disabled:border-primary-300 disabled:text-primary-300',
      text: 'border-none text-primary-500 bg-transparent hover:text-primary-400 active:text-primary-600 disabled:text-primary-300',
    },
    size: {
      sm: 'h-8 text-sm px-[18px] py-[6px] rounded-md',
      md: 'h-12 text-lg px-5 py-2.5 rounded-lg',
      lg: 'h-16 text-xl px-[22px] py-[17px] rounded-lg',
    },
  },

  defaultVariants: {
    variant: 'contained',
    size: 'md',
  } as const,
};

export const buttonVariants = cva(buttonVariantsOptions.base, {
  variants: buttonVariantsOptions.variants,
  defaultVariants: buttonVariantsOptions.defaultVariants,
});

import { cva } from 'class-variance-authority';

export const buttonVariantsOptions = {
  base: 'inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all cursor-pointer disabled:cursor-not-allowed shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 not-disabled:active:scale-98 will-change-transform',

  variants: {
    variant: {
      contained: 'text-white border-none',
      outlined: 'border bg-transparent',
      text: 'border-none bg-transparent',
    },
    size: {
      sm: 'h-8 text-sm px-[18px] py-[6px] rounded-md',
      md: 'h-12 text-lg px-5 py-2.5 rounded-lg',
      lg: 'h-16 text-xl px-[22px] py-[17px] rounded-lg',
    },
    color: {
      default: '',
      secondary: '',
      info: '',
      success: '',
      warning: '',
      danger: '',
    },
  },

  compoundVariants: [
    // contained
    {
      variant: 'contained' as const,
      color: 'default' as const,
      className:
        'bg-primary-500 hover:bg-primary-400 active:bg-primary-600 disabled:bg-primary-300',
    },
    {
      variant: 'contained' as const,
      color: 'secondary' as const,
      className:
        'bg-gray-500 hover:bg-gray-400 active:bg-gray-600 disabled:bg-gray-300',
    },
    {
      variant: 'contained' as const,
      color: 'info' as const,
      className:
        'bg-blue-500 hover:bg-blue-400 active:bg-blue-600 disabled:bg-blue-300',
    },
    {
      variant: 'contained' as const,
      color: 'success' as const,
      className:
        'bg-green-500 hover:bg-green-400 active:bg-green-600 disabled:bg-green-300',
    },
    {
      variant: 'contained' as const,
      color: 'warning' as const,
      className:
        'bg-orange-500 hover:bg-orange-400 active:bg-orange-600 disabled:bg-orange-300',
    },
    {
      variant: 'contained' as const,
      color: 'danger' as const,
      className:
        'bg-red-500 hover:bg-red-400 active:bg-red-600 disabled:bg-red-300',
    },
    // outlined
    {
      variant: 'outlined' as const,
      color: 'default' as const,
      className:
        'border-primary-500 text-primary-500 hover:border-primary-400 hover:text-primary-400 active:border-primary-600 active:text-primary-600 disabled:border-primary-300 disabled:text-primary-300',
    },
    {
      variant: 'outlined' as const,
      color: 'secondary' as const,
      className:
        'border-gray-500 text-gray-500 hover:border-gray-400 hover:text-gray-400 active:border-gray-600 active:text-gray-600 disabled:border-gray-300 disabled:text-gray-300',
    },
    {
      variant: 'outlined' as const,
      color: 'info' as const,
      className:
        'border-blue-500 text-blue-500 hover:border-blue-400 hover:text-blue-400 active:border-blue-600 active:text-blue-600 disabled:border-blue-300 disabled:text-blue-300',
    },
    {
      variant: 'outlined' as const,
      color: 'success' as const,
      className:
        'border-green-500 text-green-500 hover:border-green-400 hover:text-green-400 active:border-green-600 active:text-green-600 disabled:border-green-300 disabled:text-green-300',
    },
    {
      variant: 'outlined' as const,
      color: 'warning' as const,
      className:
        'border-orange-500 text-orange-500 hover:border-orange-400 hover:text-orange-400 active:border-orange-600 active:text-orange-600 disabled:border-orange-300 disabled:text-orange-300',
    },
    {
      variant: 'outlined' as const,
      color: 'danger' as const,
      className:
        'border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 active:border-red-600 active:text-red-600 disabled:border-red-300 disabled:text-red-300',
    },
    // text
    {
      variant: 'text' as const,
      color: 'default' as const,
      className:
        'text-primary-500 hover:text-primary-400 active:text-primary-600 disabled:text-primary-300',
    },
    {
      variant: 'text' as const,
      color: 'secondary' as const,
      className:
        'text-gray-500 hover:text-gray-400 active:text-gray-600 disabled:text-gray-300',
    },
    {
      variant: 'text' as const,
      color: 'info' as const,
      className:
        'text-blue-500 hover:text-blue-400 active:text-blue-600 disabled:text-blue-300',
    },
    {
      variant: 'text' as const,
      color: 'success' as const,
      className:
        'text-green-500 hover:text-green-400 active:text-green-600 disabled:text-green-300',
    },
    {
      variant: 'text' as const,
      color: 'warning' as const,
      className:
        'text-orange-500 hover:text-orange-400 active:text-orange-600 disabled:text-orange-300',
    },
    {
      variant: 'text' as const,
      color: 'danger' as const,
      className:
        'text-red-500 hover:text-red-400 active:text-red-600 disabled:text-red-300',
    },
  ],

  defaultVariants: {
    variant: 'contained',
    size: 'md',
    color: 'default',
  } as const,
};

export const buttonVariants = cva(buttonVariantsOptions.base, {
  variants: buttonVariantsOptions.variants,
  compoundVariants: buttonVariantsOptions.compoundVariants,
  defaultVariants: buttonVariantsOptions.defaultVariants,
});

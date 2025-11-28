import { cva } from 'class-variance-authority';

export const calloutVariantsOptions = {
  base: 'rounded-md py-4 px-6 flex gap-5',

  variants: {
    color: {
      default: 'bg-primary-100 text-primary-500',
      secondary: 'bg-gray-100 text-gray-500',
      info: 'bg-blue-100 text-blue-500',
      success: 'bg-green-100 text-green-500',
      warning: 'bg-orange-100 text-orange-500',
      danger: 'bg-red-100 text-red-500',
    },
  },

  defaultVariants: {
    color: 'default',
  },
} as const;

export const calloutVariants = cva(calloutVariantsOptions.base, {
  variants: calloutVariantsOptions.variants,
  defaultVariants: calloutVariantsOptions.defaultVariants,
});

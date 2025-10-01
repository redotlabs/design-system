import { cva } from 'class-variance-authority';

export const badgeVariantsOptions = {
  base: 'flex items-center justify-center rounded-sm',

  variants: {
    size: {
      sm: 'text-xs font-bold px-2 h-5',
      md: 'text-base font-bold px-2.5 h-6.5',
      lg: 'text-xl font-bold px-3 h-8',
    },
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
    size: 'md' as const,
    color: 'default' as const,
  },
} as const;

export const badgeVariants = cva(badgeVariantsOptions.base, {
  variants: badgeVariantsOptions.variants,
  defaultVariants: badgeVariantsOptions.defaultVariants,
});

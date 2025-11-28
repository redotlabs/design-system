import { cva } from 'class-variance-authority';

export const tabsVariantsOptions = {
  base: 'flex',

  variants: {
    size: {
      sm: 'p-1 gap-1.5',
      md: 'p-2 gap-2',
      lg: 'p-3 gap-3',
    },
  },

  defaultVariants: {
    size: 'md',
  },
} as const;

export const tabBarVariantsOptions = {
  base: 'absolute left-0 right-0 bottom-0 bg-primary-500',
  variants: {
    disabled: {
      true: 'bg-gray-300',
      false: 'bg-primary-500',
    },
    size: {
      sm: 'h-0.5',
      md: 'h-0.75',
      lg: 'h-1',
    },
  },
  defaultVariants: {
    size: 'md',
  },
} as const;

export const tabsVariants = cva(tabsVariantsOptions.base, {
  variants: tabsVariantsOptions.variants,
  defaultVariants: tabsVariantsOptions.defaultVariants,
});

export const tabBarVariants = cva(tabBarVariantsOptions.base, {
  variants: tabBarVariantsOptions.variants,
  defaultVariants: tabBarVariantsOptions.defaultVariants,
});

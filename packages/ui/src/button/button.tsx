import { type ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@redotlabs/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap border border-gray-200 rounded-md active:scale-97 transition-all cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        contained:
          'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-200 disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-400',
        outlined:
          'border border-gray-200 text-gray-700 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400',
        text: 'border-none text-gray-700 disabled:text-gray-400',
      },
      size: {
        sm: 'min-h-8 h-8 max-h-8 text-sm px-4 py-1.5 gap-1',
        md: 'text-md px-5 py-2.5',
        lg: 'text-lg px-5 py-4 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'contained',
      size: 'md',
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant,
  size,
  ...props
}: ComponentProps<'button'> & ButtonVariants) {
  return (
    <button
      type="button"
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonVariants };

import { type ComponentProps } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@redotlabs/utils';
import { buttonVariants } from './button.variants';

type ButtonVariants = VariantProps<typeof buttonVariants>;
type ButtonProps = ComponentProps<'button'> & ButtonVariants;

function Button({ className, variant, size, ...props }: ButtonProps) {
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
export type { ButtonVariants, ButtonProps };

import { type ComponentProps } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@redotlabs/utils';
import { buttonVariants } from './button.variants';
import { Slot } from '@radix-ui/react-slot';

type ButtonVariants = VariantProps<typeof buttonVariants>;
// Drop the deprecated native `color` HTML attribute so the semantic `color`
// variant is the only `color` prop consumers see.
type ButtonProps = Omit<ComponentProps<'button'>, 'color'> &
  ButtonVariants & { asChild?: boolean };

function Button({
  className,
  variant,
  size,
  color,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      type={asChild ? undefined : 'button'}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, color, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonVariants, ButtonProps };

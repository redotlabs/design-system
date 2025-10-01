import { type ComponentProps } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@redotlabs/utils';
import { badgeVariants } from './badge.variants';

type BadgeVariants = VariantProps<typeof badgeVariants>;

interface BadgeProps
  extends Omit<ComponentProps<'div'>, 'color'>,
    BadgeVariants {}

function Badge({ className, color, size, children, ...props }: BadgeProps) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ color, size, className }))}
      {...props}
    >
      {children}
    </div>
  );
}

export { Badge };
export type { BadgeVariants, BadgeProps };

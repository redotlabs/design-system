import type { ReactNode, ComponentProps } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@redotlabs/utils';
import { calloutVariants } from './callout.variants';

type CalloutVariants = VariantProps<typeof calloutVariants>;

interface CalloutProps
  extends Omit<ComponentProps<'div'>, 'title' | 'content' | 'color'>,
    CalloutVariants {
  icon?: ReactNode;
  title?: ReactNode;
  content?: ReactNode;
}

function Callout({
  className,
  color,
  icon,
  title,
  content,
  ...props
}: CalloutProps) {
  return (
    <div
      data-slot="callout"
      className={cn(calloutVariants({ color, className }))}
      {...props}
    >
      {icon && <div data-slot="callout-icon">{icon}</div>}
      <div className="flex flex-col gap-2">
        {title && (
          <div className="font-medium" data-slot="callout-title">
            {title}
          </div>
        )}
        {content && (
          <div className="text-sm text-gray-700" data-slot="callout-content">
            {content}
          </div>
        )}
      </div>
    </div>
  );
}

export { Callout, calloutVariants };
export type { CalloutVariants, CalloutProps };

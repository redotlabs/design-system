import { type ComponentProps } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@redotlabs/utils';
import {
  radioLabelVariants,
  radioVariants,
  radioWrapperVariants,
} from './radio.variants';

type RadioVariants = VariantProps<typeof radioVariants>;

interface RadioProps
  extends Omit<ComponentProps<'input'>, 'size'>,
    RadioVariants {
  label?: string;
}

function Radio({ className, size, label, ...props }: RadioProps) {
  return (
    <label className={cn(radioWrapperVariants())}>
      <input
        type="radio"
        data-slot="radio"
        className={cn(radioVariants({ size, className }))}
        {...props}
      />
      {label && (
        <span className={cn(radioLabelVariants({ size }))}>{label}</span>
      )}
    </label>
  );
}

export { Radio };
export type { RadioVariants, RadioProps };

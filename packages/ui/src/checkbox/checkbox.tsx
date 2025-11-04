import { type ComponentProps } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@redotlabs/utils';
import {
  checkboxIconVariants,
  checkboxLabelVariants,
  checkboxVariants,
  checkboxWrapperVariants,
} from './checkbox.variants';

type CheckboxVariants = VariantProps<typeof checkboxVariants>;

interface CheckboxProps
  extends Omit<ComponentProps<'input'>, 'size'>,
    CheckboxVariants {
  label?: string;
}

function Checkbox({ className, size, label, ...props }: CheckboxProps) {
  return (
    <label className={cn(checkboxWrapperVariants())}>
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          data-slot="checkbox"
          className={cn(checkboxVariants({ size, className }))}
          {...props}
        />
        <CheckIcon
          className={cn(
            checkboxIconVariants({
              size,
            })
          )}
        />
      </div>
      {label && (
        <span className={cn(checkboxLabelVariants({ size }))}>{label}</span>
      )}
    </label>
  );
}

const CheckIcon = (props?: ComponentProps<'svg'>) => (
  <svg width="12" height="9" viewBox="0 0 12 9" fill="none" {...props}>
    <path
      d="M0.75 4.75L4 8.25L11.25 0.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { Checkbox };
export type { CheckboxVariants, CheckboxProps };

import { type ReactNode, type ComponentProps } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@redotlabs/utils';
import {
  inputVariants,
  inputWrapperVariants,
  inputContentVariants,
} from './input.variants';

type InputVariants = VariantProps<typeof inputVariants>;
type InputProps = Omit<ComponentProps<'input'>, 'size'> &
  InputVariants & {
    startContent?: ReactNode;
    endContent?: ReactNode;
    error?: boolean;
  };

function Input({
  className,
  size,
  type,
  startContent,
  endContent,
  error,
  disabled,
  readOnly,
  ...props
}: InputProps) {
  return (
    <div className={cn(inputWrapperVariants({ size }))}>
      {startContent && (
        <div className={cn(inputContentVariants({ size }), 'pr-0')}>
          {startContent}
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(inputVariants({ size }), className)}
        aria-invalid={error}
        disabled={disabled}
        aria-disabled={disabled}
        readOnly={readOnly}
        aria-readonly={readOnly}
        {...props}
      />
      {endContent && (
        <div className={cn(inputContentVariants({ size }), 'pl-0')}>
          {endContent}
        </div>
      )}
    </div>
  );
}

export { Input };
export type { InputVariants, InputProps };

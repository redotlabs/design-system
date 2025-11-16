import { type ComponentProps } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@redotlabs/utils';
import { textareaVariants } from './textarea.variants';

type TextareaVariants = VariantProps<typeof textareaVariants>;
type TextareaProps = ComponentProps<'textarea'> & TextareaVariants;

const Textarea = ({ className, size, ...props }: TextareaProps) => {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ size }), className)}
      {...props}
    />
  );
};

export { Textarea };
export type { TextareaVariants, TextareaProps };

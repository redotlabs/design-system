import { useState, useRef, useEffect, type ComponentProps } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { cn } from '@redotlabs/utils';
import {
  selectVariants,
  selectDropdownVariants,
  selectOptionVariants,
  selectIconSizeMap,
} from './select.variants';
import { Button } from '../button';

type SelectVariants = VariantProps<typeof selectVariants>;

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

type SelectProps = Omit<ComponentProps<'div'>, 'size' | 'onChange'> &
  SelectVariants & {
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
  };

function Select({
  className,
  size,
  options,
  value,
  onChange,
  placeholder = 'select',
  disabled = false,
  ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={cn('relative w-full', className)}
      {...props}
    >
      <Button
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        data-slot="select"
        variant="text"
        size={size}
        className={selectVariants({ size })}
      >
        <span>{selectedLabel}</span>
        <ChevronDown
          size={selectIconSizeMap[size || 'md']}
          className={cn(
            'transition-transform shrink-0',
            isOpen && 'rotate-180'
          )}
        />
      </Button>

      {isOpen && (
        <div
          role="listbox"
          data-slot="select-dropdown"
          className={cn(selectDropdownVariants({ size }))}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={value === option.value}
              disabled={option.disabled}
              onClick={() => handleSelect(option.value)}
              data-slot="select-option"
              className={cn(
                selectOptionVariants({ size }),
                value === option.value ? 'text-blue-600' : 'text-gray-800',
                option.disabled
                  ? 'cursor-not-allowed text-gray-300'
                  : 'hover:bg-gray-200 active:bg-gray-300 cursor-pointer'
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export { Select };
export type { SelectVariants, SelectProps, SelectOption };

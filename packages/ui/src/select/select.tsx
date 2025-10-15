import { useState, useRef, useEffect, type ComponentProps } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { cn } from '@redotlabs/utils';
import { selectVariants } from './select.variants';

type SelectVariants = VariantProps<typeof selectVariants>;

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

type SelectProps = Omit<ComponentProps<'div'>, 'size'> &
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
  value: controlledValue,
  onChange,
  placeholder = 'select',
  disabled = false,
  ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(controlledValue || '');
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Controlled 모드 지원
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  // 외부 클릭 감지
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

  // ESC 키로 닫기
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
    // Uncontrolled 모드일 때 내부 상태 업데이트
    if (controlledValue === undefined) {
      setInternalValue(optionValue);
    }
    onChange?.(optionValue);
    setIsOpen(false);
  };

  const iconSizeMap = {
    sm: 22,
    md: 26,
    lg: 30,
  };

  const dropdownSizeClasses = {
    sm: 'p-1 gap-1 rounded-lg mt-1',
    md: 'p-1.5 gap-1 rounded-[10px] mt-2',
    lg: 'p-2 gap-1 rounded-[10px] mt-2',
  };

  const optionSizeClasses = {
    sm: 'px-[18px] py-[5.5px] rounded-md text-sm',
    md: 'px-5 py-[5.5px] rounded-lg text-lg',
    lg: 'px-[22px] py-[5.5px] rounded-lg text-xl',
  };

  return (
    <div
      ref={wrapperRef}
      className={cn('relative w-full', className)}
      {...props}
    >
      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        data-slot="select"
        className={cn(selectVariants({ size }), 'w-full')}
      >
        <span>{selectedLabel}</span>
        <ChevronDown
          size={iconSizeMap[size || 'md']}
          className={cn(
            'transition-transform shrink-0',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          data-slot="select-dropdown"
          className={cn(
            'absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden',
            dropdownSizeClasses[size || 'md']
          )}
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
                'flex items-center w-full font-semibold transition-colors text-left',
                optionSizeClasses[size || 'md'],
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

export { Select, selectVariants };
export type { SelectVariants, SelectProps, SelectOption };

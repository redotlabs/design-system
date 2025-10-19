import {
  useState,
  useRef,
  useEffect,
  useCallback,
  createContext,
  useContext,
  type ComponentProps,
  type ReactNode,
} from 'react';
import { type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { cn } from '@redotlabs/utils';
import { Button } from '../button';
import {
  selectVariants,
  selectDropdownVariants,
  selectOptionVariants,
  selectIconSizeMap,
} from './select.variants';

type SelectVariants = VariantProps<typeof selectVariants>;
type SelectSize = NonNullable<SelectVariants['size']>;

interface SelectContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  size?: SelectSize;
  disabled?: boolean;
  selectedLabel?: string;
  setSelectedLabel?: (label: string) => void;
}

const SelectContext = createContext<SelectContextValue | undefined>(undefined);

function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('Select components must be used within a Select provider');
  }
  return context;
}

/**
 * Root component for the Select. Provides context and manages state.
 *
 * @example
 * ```tsx
 * <Select value={value} onValueChange={setValue}>
 *   <SelectTrigger>
 *     <SelectValue placeholder="Select an option" />
 *   </SelectTrigger>
 *   <SelectContent>
 *     <SelectItem value="1">Option 1</SelectItem>
 *     <SelectItem value="2">Option 2</SelectItem>
 *   </SelectContent>
 * </Select>
 * ```
 */
interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  size?: SelectSize;
  children: ReactNode;
}

function Select({
  value,
  onValueChange,
  open: controlledOpen,
  onOpenChange,
  disabled = false,
  size = 'md',
  children,
}: SelectProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string>('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        handleOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, handleOpenChange]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        handleOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, handleOpenChange]);

  return (
    <SelectContext.Provider
      value={{
        value,
        onValueChange,
        open,
        setOpen: handleOpenChange,
        size,
        disabled,
        selectedLabel,
        setSelectedLabel,
      }}
    >
      <div ref={wrapperRef} className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  );
}

/**
 * Trigger button that opens/closes the select dropdown.
 * Wraps children (typically SelectValue) and adds a chevron icon.
 */
type SelectTriggerProps = ComponentProps<'button'> & {
  children: ReactNode;
};

function SelectTrigger({ className, children, ...props }: SelectTriggerProps) {
  const { open, setOpen, size, disabled } = useSelectContext();

  const handleToggle = () => {
    if (!disabled) {
      setOpen(!open);
    }
  };

  return (
    <Button
      onClick={handleToggle}
      disabled={disabled}
      aria-expanded={open}
      aria-haspopup="listbox"
      data-slot="select"
      variant="text"
      size={size}
      className={cn(selectVariants({ size }), className)}
      {...props}
    >
      {children}
      <ChevronDown
        size={selectIconSizeMap[size || 'md']}
        className={cn('transition-transform shrink-0', open && 'rotate-180')}
      />
    </Button>
  );
}

/**
 * Displays the currently selected value or placeholder text.
 */
interface SelectValueProps {
  placeholder?: string;
}

function SelectValue({ placeholder = 'select' }: SelectValueProps) {
  const { selectedLabel } = useSelectContext();
  return <span>{selectedLabel || placeholder}</span>;
}

/**
 * Container for SelectItem components. Only renders when open.
 */
type SelectContentProps = ComponentProps<'div'> & {
  children: ReactNode;
};

function SelectContent({ className, children, ...props }: SelectContentProps) {
  const { open, size } = useSelectContext();

  if (!open) return null;

  return (
    <div
      role="listbox"
      data-slot="select-dropdown"
      className={cn(selectDropdownVariants({ size }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Individual selectable option within the dropdown.
 */
type SelectItemProps = Omit<ComponentProps<'button'>, 'value'> & {
  value: string;
  children: ReactNode;
};

function SelectItem({
  value: itemValue,
  disabled,
  className,
  children,
  ...props
}: SelectItemProps) {
  const { value, onValueChange, setOpen, size, setSelectedLabel } =
    useSelectContext();
  const isSelected = value === itemValue;

  const handleSelect = () => {
    onValueChange?.(itemValue);
    const label = typeof children === 'string' ? children : itemValue;
    setSelectedLabel?.(label);
    setOpen(false);
  };

  return (
    <button
      type="button"
      role="option"
      aria-selected={isSelected}
      disabled={disabled}
      onClick={handleSelect}
      data-slot="select-option"
      className={cn(
        selectOptionVariants({ size }),
        isSelected ? 'text-blue-600' : 'text-gray-800',
        disabled
          ? 'cursor-not-allowed text-gray-300'
          : 'hover:bg-gray-200 active:bg-gray-300 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
export type { SelectProps, SelectVariants };

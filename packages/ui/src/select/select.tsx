import * as React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@redotlabs/utils';
import { Button } from '../button';
import {
  selectVariants,
  selectOptionVariants,
  selectIconSizeMap,
  selectContentSizeVariants,
  selectViewportSizeVariants,
} from './select.variants';

type SelectSize = 'sm' | 'md' | 'lg';

const SelectSizeContext = React.createContext<SelectSize>('md');

const useSelectSize = () => React.useContext(SelectSizeContext);

function Select({
  size = 'md',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root> & {
  size?: SelectSize;
}) {
  return (
    <SelectSizeContext value={size}>
      <SelectPrimitive.Root data-slot="select" {...props} />
    </SelectSizeContext>
  );
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  const size = useSelectSize();

  return (
    <SelectPrimitive.Trigger asChild {...props}>
      <Button
        variant="text"
        size={size}
        data-slot="select-trigger"
        className={cn(
          selectVariants({ size }),
          'whitespace-nowrap',
          'data-placeholder:text-gray-500',
          'aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500',
          "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='text-'])]:text-gray-800",
          className
        )}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDownIcon
            size={selectIconSizeMap[size]}
            className="transition-transform in-data-[state=open]:rotate-180 in-disabled:text-gray-300"
          />
        </SelectPrimitive.Icon>
      </Button>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  const size = useSelectSize();

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-hidden border border-gray-300 bg-white text-gray-800 shadow-lg',
          selectContentSizeVariants({ size }),
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1',
          className
        )}
        position={position}
        sideOffset={position === 'popper' ? 8 : undefined}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'flex flex-col',
            selectViewportSizeVariants({ size }),
            position === 'popper' &&
              'h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        'px-2 py-1.5 text-sm font-semibold text-gray-500',
        className
      )}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  const size = useSelectSize();

  return (
    <SelectPrimitive.Item asChild {...props}>
      <Button
        variant="text"
        size={size}
        data-slot="select-item"
        className={cn(
          selectOptionVariants({ size }),
          'w-full justify-start',
          'data-highlighted:bg-gray-200 data-highlighted:text-gray-800 active:bg-gray-300',
          'data-[state=checked]:text-blue-600 data-[state=checked]:data-highlighted:text-blue-600',
          'data-disabled:pointer-events-none data-disabled:text-gray-300',
          className
        )}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </Button>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        'pointer-events-none -mx-1 my-1 h-px bg-gray-200',
        className
      )}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        'z-10 flex cursor-default items-center justify-center bg-white py-1 text-gray-500',
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        'z-10 flex cursor-default items-center justify-center bg-white py-1 text-gray-500',
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};

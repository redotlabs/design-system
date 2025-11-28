import {
  useContext,
  createContext,
  type ComponentProps,
  type ReactNode,
} from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@redotlabs/utils';
import { tabBarVariants, tabsVariants } from './tabs.variants';
import { Button, ButtonProps } from '../button';

type TabsVariants = VariantProps<typeof tabsVariants>;

interface TabsProps extends ComponentProps<'div'>, TabsVariants {
  children: ReactNode;
  disabled?: boolean;
}

interface TabProps extends ButtonProps {
  isActive?: boolean;
  barProps?: ComponentProps<'div'>;
}

const TabContext = createContext<{
  size: TabsProps['size'];
  disabled?: boolean;
}>({
  size: 'md',
  disabled: false,
});

function Tabs({ className, size, children, disabled, ...props }: TabsProps) {
  return (
    <TabContext value={{ size, disabled }}>
      <div
        data-slot="tabs"
        className={cn(tabsVariants({ size, className }))}
        {...props}
      >
        {children}
      </div>
    </TabContext>
  );
}

function Tab({ className, isActive, children, barProps, ...props }: TabProps) {
  const { size, disabled } = useContext(TabContext);

  return (
    <Button
      className={cn(
        'relative text-black disabled:text-gray-300',
        isActive && 'text-primary-500',
        className
      )}
      size={size}
      variant="text"
      disabled={disabled}
      {...props}
    >
      {children}

      {isActive && (
        <div
          data-slot="tab-bar"
          className={cn(
            tabBarVariants({ size, disabled }),
            barProps?.className
          )}
          {...barProps}
        />
      )}
    </Button>
  );
}

export { Tabs, Tab };
export type { TabsVariants, TabsProps, TabProps };

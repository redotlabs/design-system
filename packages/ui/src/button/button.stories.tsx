import { Button } from './button';
import { buttonVariantsOptions } from './button.variants';
import { Meta } from '@storybook/react-vite';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Redot Button Component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
      },
      defaultValue: buttonVariantsOptions.defaultVariants.variant,
      description: 'The variant of the button',
      table: {
        type: {
          summary: Object.keys(buttonVariantsOptions.variants.variant).join(
            ' | '
          ),
        },
        defaultValue: {
          summary: buttonVariantsOptions.defaultVariants.variant,
        },
      },
      options: Object.keys(buttonVariantsOptions.variants.variant),
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      defaultValue: buttonVariantsOptions.defaultVariants.size,
      table: {
        type: {
          summary: Object.keys(buttonVariantsOptions.variants.size).join(' | '),
        },
        defaultValue: { summary: buttonVariantsOptions.defaultVariants.size },
      },
      description: 'The size of the button',
      options: Object.keys(buttonVariantsOptions.variants.size),
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export default meta;

export const Default = {
  args: {
    children: 'Click Me',
    variant: buttonVariantsOptions.defaultVariants.variant,
    size: buttonVariantsOptions.defaultVariants.size,
  },
};

export const Variants = {
  args: {
    children: 'Click Me',
    variant: buttonVariantsOptions.defaultVariants.variant,
    size: buttonVariantsOptions.defaultVariants.size,
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} />
      <Button {...args} variant="outlined" />
      <Button {...args} variant="text" />
    </div>
  ),
};

export const Sizes = {
  args: {
    children: 'Click Me',
    variant: buttonVariantsOptions.defaultVariants.variant,
    size: buttonVariantsOptions.defaultVariants.size,
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm" />
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
    </div>
  ),
};

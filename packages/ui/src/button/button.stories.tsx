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
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
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

export const States = {
  args: {
    children: 'Button',
    size: 'md' as const,
  },
  render: (args) => (
    <div className="flex flex-col gap-8">
      {/* Contained States */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-700">Contained</h3>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Button {...args} variant="contained">
              Enabled
            </Button>
            <span className="text-xs text-gray-500">enabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button {...args} variant="contained" className="bg-primary-600">
              Pressed
            </Button>
            <span className="text-xs text-gray-500">pressed</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button {...args} variant="contained" className="bg-primary-400">
              Hover
            </Button>
            <span className="text-xs text-gray-500">hover</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button {...args} variant="contained" disabled>
              Disabled
            </Button>
            <span className="text-xs text-gray-500">disabled</span>
          </div>
        </div>
      </div>

      {/* Outlined States */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-700">Outlined</h3>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Button {...args} variant="outlined">
              Enabled
            </Button>
            <span className="text-xs text-gray-500">enabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button
              {...args}
              variant="outlined"
              className="border-primary-400 text-primary-400"
            >
              Hover
            </Button>
            <span className="text-xs text-gray-500">hover</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button
              {...args}
              variant="outlined"
              className="border-primary-600 text-primary-600"
            >
              Pressed
            </Button>
            <span className="text-xs text-gray-500">pressed</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button {...args} variant="outlined" disabled>
              Disabled
            </Button>
            <span className="text-xs text-gray-500">disabled</span>
          </div>
        </div>
      </div>

      {/* Text States */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-700">Text</h3>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Button {...args} variant="text">
              Enabled
            </Button>
            <span className="text-xs text-gray-500">enabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button {...args} variant="text" className="text-primary-400">
              Hover
            </Button>
            <span className="text-xs text-gray-500">hover</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button {...args} variant="text" className="text-primary-600">
              Pressed
            </Button>
            <span className="text-xs text-gray-500">pressed</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button {...args} variant="text" disabled>
              Disabled
            </Button>
            <span className="text-xs text-gray-500">disabled</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

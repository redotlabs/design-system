import { Checkbox } from './checkbox';
import { checkboxVariantsOptions } from './checkbox.variants';
import { Meta } from '@storybook/react-vite';

const { variants, defaultVariants } = checkboxVariantsOptions;

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Redot Checkbox Component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      defaultValue: defaultVariants.size,
      table: {
        type: {
          summary: Object.keys(variants.size).join(' | '),
        },
        defaultValue: { summary: defaultVariants.size },
      },
      description: 'The size of the Checkbox',
      options: Object.keys(variants.size),
    },
  },
};

export default meta;

export const Default = {
  args: {
    size: defaultVariants.size,
    label: 'Label',
  },
};

export const Sizes = {
  args: {},
  render: (args) => (
    <div className="flex items-center gap-4">
      <Checkbox size="sm" {...args} label="Small" />
      <Checkbox size="md" {...args} label="Medium" />
      <Checkbox size="lg" {...args} label="Large" />
    </div>
  ),
};

export const States = {
  args: {
    size: defaultVariants.size,
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Checkbox {...args} label="Enabled" />
      <Checkbox {...args} disabled />
      <Checkbox {...args} disabled label="Disabled" checked />
      <Checkbox {...args} autoFocus label="Focused" />
    </div>
  ),
};

import { Radio } from './radio';
import { radioVariantsOptions } from './radio.variants';
import { Meta } from '@storybook/react-vite';

const { variants, defaultVariants } = radioVariantsOptions;

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Redot Radio Component',
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
      description: 'The size of the Radio',
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
      <Radio size="sm" {...args} label="Small" name="test" />
      <Radio size="md" {...args} label="Medium" name="test" />
      <Radio size="lg" {...args} label="Large" name="test" />
    </div>
  ),
};

export const States = {
  args: {
    size: defaultVariants.size,
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Radio {...args} label="Enabled" />
      <Radio {...args} disabled />
      <Radio {...args} disabled label="Disabled" checked />
      <Radio {...args} autoFocus label="Focused" />
    </div>
  ),
};

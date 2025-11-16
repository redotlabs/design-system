import { Textarea } from './textarea';
import { textareaVariantsOptions } from './textarea.variants';
import { Meta } from '@storybook/react-vite';

const { variants, defaultVariants } = textareaVariantsOptions;

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Redot Textarea Component',
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
      description: 'The size of the Textarea',
      options: Object.keys(variants.size),
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the Textarea is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
    },
  },
};

export default meta;

export const Default = {
  args: {
    size: defaultVariants.size,
    placeholder: 'Enter text...',
  },
  render: (args) => (
    <div className="w-96">
      <Textarea {...args} />
    </div>
  ),
};

export const Sizes = {
  args: {
    placeholder: 'Enter text...',
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Textarea {...args} size="sm" />
      <Textarea {...args} size="md" />
      <Textarea {...args} size="lg" />
    </div>
  ),
};

export const MaxHeight = {
  args: {
    size: defaultVariants.size,
    placeholder: 'Maximum 4 rows with scroll',
    defaultValue: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10',
    className: 'max-h-40',
  },
  render: (args) => (
    <div className="w-96">
      <Textarea {...args} />
    </div>
  ),
};

import { Badge } from './badge';
import { badgeVariantsOptions } from './badge.variants';
import { Meta } from '@storybook/react-vite';

const { variants, defaultVariants } = badgeVariantsOptions;

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Redot  Component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
      },
      defaultValue: defaultVariants.color,
      description: 'The color of the Badge',
      table: {
        type: {
          summary: Object.keys(variants.color).join(' | '),
        },
        defaultValue: {
          summary: defaultVariants.color,
        },
      },
      options: Object.keys(variants.color),
    },
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
      description: 'The size of the Badge',
      options: Object.keys(variants.size),
    },
    children: {
      control: {
        type: 'text',
      },
      description: 'The content of the Badge',
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: 'Badge',
    color: defaultVariants.color,
    size: defaultVariants.size,
  },
};

export const Colors = {
  args: {
    children: 'Badge',
    size: defaultVariants.size,
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Badge {...args} color="default">
        Default
      </Badge>
      <Badge {...args} color="secondary">
        Secondary
      </Badge>
      <Badge {...args} color="info">
        Info
      </Badge>
      <Badge {...args} color="success">
        Success
      </Badge>
      <Badge {...args} color="warning">
        Warning
      </Badge>
      <Badge {...args} color="danger">
        Danger
      </Badge>
    </div>
  ),
};

export const Sizes = {
  args: {
    children: 'Badge',
    color: defaultVariants.color,
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Badge {...args} size="sm" />
      <Badge {...args} size="md" />
      <Badge {...args} size="lg" />
    </div>
  ),
};

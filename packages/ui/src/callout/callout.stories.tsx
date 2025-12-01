import { Logo } from '../logo';
import { Callout } from './callout';
import { calloutVariantsOptions } from './callout.variants';
import { Meta } from '@storybook/react-vite';
import { CircleCheck, CircleX, InfoIcon, TriangleAlert } from 'lucide-react';

const { variants, defaultVariants } = calloutVariantsOptions;

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Redot Callout Component',
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
      description: 'The variant of the Callout',
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
    icon: {
      table: { disable: true },
    },
    title: {
      control: {
        type: 'text',
      },
      description: 'The title of the Callout',
    },
    content: {
      control: {
        type: 'text',
      },
      description: 'The content of the Callout',
    },
  },
};

export default meta;

export const Default = {
  args: {
    color: 'default',
    icon: <Logo.Symbol className="size-6" />,
    title: 'Default Callout',
    content: 'This is a default callout',
  },
};

export const Colors = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-4">
      <Callout
        icon={<Logo.Symbol className="size-6" />}
        color="default"
        title="Default Callout"
        content="This is a default callout"
      />
      <Callout
        icon={<Logo.Symbol className="size-6" variant="solid" />}
        color="secondary"
        title="Secondary Callout"
        content="This is a secondary callout"
      />
      <Callout
        icon={<InfoIcon className="size-6" />}
        color="info"
        title="Info Callout"
        content="This is an info callout"
      />
      <Callout
        icon={<CircleCheck className="size-6" />}
        color="success"
        title="Success Callout"
        content="This is a success callout"
      />
      <Callout
        icon={<TriangleAlert className="size-6" />}
        color="warning"
        title="Warning Callout"
        content="This is a warning callout"
      />
      <Callout
        icon={<CircleX className="size-6" />}
        color="danger"
        title="Danger Callout"
        content="This is a danger callout"
      />
    </div>
  ),
};

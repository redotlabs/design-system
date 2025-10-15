import { Logo } from './index';
import { Meta } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Redot Logo Component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'logo',
      table: {
        type: {
          summary: 'logo | symbol',
        },
        defaultValue: { summary: 'logo' },
      },
      description: 'The type of the Logo',
      options: ['logo', 'symbol'],
    },
  },
};

export default meta;

export const Default = {
  args: {
    type: 'logo',
  },
  render: (args) => {
    return <Logo {...args} className="h-16" />;
  },
};

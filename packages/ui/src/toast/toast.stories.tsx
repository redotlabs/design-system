import { Button } from '../button';
import { toast, Toaster } from './toast';
import { Meta } from '@storybook/react-vite';

// const meta: Meta<typeof Toast> = {
const meta: Meta = {
  title: 'Components/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Redot Toast Component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'bottom-right',
      table: {
        type: {
          summary:
            'top-center | top-right | top-left | bottom-center | bottom-right | bottom-left',
        },
        defaultValue: { summary: 'bottom-right' },
      },
      description: 'The position of the Toaster',
      options: [
        'top-center',
        'top-right',
        'top-left',
        'bottom-center',
        'bottom-right',
        'bottom-left',
      ],
    },
  },
};

export default meta;

export const Default = {
  args: {
    position: 'bottom-right',
  },
  render: (args) => {
    return (
      <>
        <Toaster {...args} />
        <div className="flex gap-2">
          <Button type="button" onClick={() => toast.success('success')}>
            success
          </Button>
          <Button type="button" onClick={() => toast.warning('warning')}>
            warning
          </Button>
          <Button type="button" onClick={() => toast.error('error')}>
            error
          </Button>
        </div>
      </>
    );
  },
};

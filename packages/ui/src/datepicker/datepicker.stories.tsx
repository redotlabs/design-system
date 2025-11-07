import { Datepicker } from './datepicker';
import { Meta } from '@storybook/react-vite';

const meta: Meta<typeof Datepicker> = {
  title: 'Components/Datepicker',
  component: Datepicker,
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
    calendarProps: {
      table: { disable: true },
    },
    defaultValue: {
      table: { disable: true },
    },
    setValue: {
      table: { disable: true },
    },
  },
};

export default meta;

export const Default = {
  args: {
    disabled: false,
  },
  render: (args) => <Datepicker {...args} />,
};

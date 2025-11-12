import { DatePicker } from './date-picker';
import { Meta } from '@storybook/react-vite';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
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
  render: (args) => <DatePicker {...args} />,
};

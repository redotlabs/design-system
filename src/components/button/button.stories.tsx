import { Button } from './button';
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
      defaultValue: 'contained',
      description: 'The variant of the button',
      table: {
        type: { summary: 'contained | outlined | text' },
        defaultValue: { summary: 'contained' },
      },
      options: ['contained', 'outlined', 'text'],
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'md',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
      description: 'The size of the button',
      options: ['sm', 'md', 'lg'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export default meta;

export const Default = {
  args: {
    children: 'Click Me',
    variant: 'contained',
    size: 'md',
  },
};

export const Variants = {
  args: {
    children: 'Click Me',
    variant: 'contained',
    size: 'md',
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
    variant: 'contained',
    size: 'md',
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm" />
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
    </div>
  ),
};

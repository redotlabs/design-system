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
    Component: {
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'Logo.Text',
      table: {
        type: {
          summary: 'Logo.Text | Logo.Symbol',
        },
        defaultValue: { summary: 'Logo.Text' },
      },
      options: ['Logo.Text', 'Logo.Symbol'],
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'base',
      description: 'The variant of the Logo Symbol',
      table: {
        type: {
          summary: 'base | solid | 3d',
        },
        defaultValue: { summary: 'base' },
      },
      options: ['base', 'solid', '3d'],
    },
    color: {
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'color',
      description: 'The color of the Logo',
      table: {
        type: {
          summary: 'color | mono',
        },
        defaultValue: { summary: 'color' },
      },
      options: ['color', 'mono'],
    },
  },
};

export default meta;

export const Default = {
  args: {
    Component: 'Logo.Text',
  },
  render: (args) => {
    const { Component, variant, color } = args;
    return (
      <div className="flex gap-8">
        {Component === 'Logo.Text' ? (
          <Logo.Text className="w-full h-16" color={color} />
        ) : (
          <Logo.Symbol className="w-full h-16" variant={variant} />
        )}
      </div>
    );
  },
};

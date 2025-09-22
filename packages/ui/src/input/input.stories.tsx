import { useState } from 'react';
import { Input } from './input';
import { inputVariantsOptions } from './input.variants';
import { Meta } from '@storybook/react-vite';
import { SearchIcon, EyeIcon, EyeOffIcon } from 'lucide-react';

const { variants, defaultVariants } = inputVariantsOptions;

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Redot Input Component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: {
        type: 'inline-radio',
      },
      defaultValue: false,
      table: {
        type: {
          summary: 'true | false',
        },
      },
      description: 'The disabled status of the Input',
      options: [true, false],
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
      description: 'The size of the Input',
      options: Object.keys(variants.size),
    },
    type: {
      control: {
        type: 'text',
      },
      description: 'The type of the Input',
    },
    startContent: {
      control: false,
      table: { disable: true },
      description:
        'Left content. Controlled in story render to hide from Controls.',
    },
    endContent: {
      control: false,
      table: { disable: true },
      description:
        'Right content. Controlled in story render to hide from Controls.',
    },
  },
};

export default meta;

export const Default = {
  args: {
    type: 'text',
    size: defaultVariants.size,
    placeholder: 'Enter text...',
    disabled: false,
  },
};

export const Sizes = {
  args: {
    type: 'text',
    size: defaultVariants.size,
    placeholder: 'Enter text...',
    disabled: false,
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Input {...args} size="sm" />
      <Input {...args} size="md" />
      <Input {...args} size="lg" />
    </div>
  ),
};

export const Statuses = {
  args: {
    type: 'text',
    size: defaultVariants.size,
    placeholder: 'Enter text...',
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="focused">Focused</label>
        <Input
          {...args}
          id="focused"
          defaultValue="focused"
          autoFocus
          readOnly
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="disabled">Disabled</label>
        <Input
          {...args}
          id="disabled"
          defaultValue="disabled"
          disabled
          readOnly
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="error">Error</label>
        <Input {...args} id="error" defaultValue="error" error readOnly />
      </div>
    </div>
  ),
};

export const StartContent = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    disabled: false,
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Input {...args} startContent={<SearchIcon />} />
    </div>
  ),
};

export const EndContent = {
  args: {
    type: 'text',
    size: defaultVariants.size,
    placeholder: 'Enter your weight...',
    disabled: false,
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Input {...args} endContent={<div>kg</div>} />
    </div>
  ),
};

export const PasswordInput = {
  args: {
    type: 'password',
    placeholder: 'Enter your password...',
    disabled: false,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPassword, setShowPassword] = useState(false);

    const onTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="flex items-center gap-4">
        <Input
          {...args}
          type={showPassword ? 'text' : 'password'}
          endContent={
            showPassword ? (
              <EyeIcon onClick={onTogglePassword} role="button" />
            ) : (
              <EyeOffIcon onClick={onTogglePassword} role="button" />
            )
          }
        />
      </div>
    );
  },
};

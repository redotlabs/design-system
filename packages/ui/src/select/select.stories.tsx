import { useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './select';
import { selectVariantsOptions } from './select.variants';
import { Meta } from '@storybook/react-vite';
import { Button } from '../button';
import { ChevronDown } from 'lucide-react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Redot Select Component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      defaultValue: selectVariantsOptions.defaultVariants.size,
      table: {
        type: {
          summary: Object.keys(selectVariantsOptions.variants.size).join(' | '),
        },
        defaultValue: { summary: selectVariantsOptions.defaultVariants.size },
      },
      description: 'The size of the select',
      options: Object.keys(selectVariantsOptions.variants.size),
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the select is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

const DefaultComponent = (args: typeof Default.args) => {
  const [value, setValue] = useState('');
  return (
    <div style={{ minHeight: '200px', width: '150px' }}>
      <Select
        value={value}
        onValueChange={setValue}
        size={args.size}
        disabled={args.disabled}
      >
        <SelectTrigger>
          <SelectValue placeholder="select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">option</SelectItem>
          <SelectItem value="2">option</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export const Default = {
  render: DefaultComponent,
  args: {
    size: selectVariantsOptions.defaultVariants.size,
    disabled: false,
  },
};

const SizesComponent = () => {
  const [valueSm, setValueSm] = useState('');
  const [valueMd, setValueMd] = useState('');
  const [valueLg, setValueLg] = useState('');

  return (
    <div className="flex items-start gap-4">
      {/* sm */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">sm</span>
        <div style={{ width: '124px', minHeight: '150px' }}>
          <Select size="sm" value={valueSm} onValueChange={setValueSm}>
            <SelectTrigger>
              <SelectValue placeholder="select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">option</SelectItem>
              <SelectItem value="2">option</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* md */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">md (default)</span>
        <div style={{ width: '150px', minHeight: '150px' }}>
          <Select size="md" value={valueMd} onValueChange={setValueMd}>
            <SelectTrigger>
              <SelectValue placeholder="select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">option</SelectItem>
              <SelectItem value="2">option</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* lg */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">lg</span>
        <div style={{ width: '170px', minHeight: '150px' }}>
          <Select size="lg" value={valueLg} onValueChange={setValueLg}>
            <SelectTrigger>
              <SelectValue placeholder="select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">option</SelectItem>
              <SelectItem value="2">option</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export const Sizes = {
  render: SizesComponent,
  parameters: {
    layout: 'padded',
  },
};

export const Open = {
  render: () => (
    <div className="flex items-start gap-8">
      {/* open = false */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">false (default)</span>
        <div style={{ width: '150px', minHeight: '150px' }}>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">option</SelectItem>
              <SelectItem value="2">option</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* open = true (정적 표시) */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">true</span>
        <div className="relative w-[150px]">
          <Button
            variant="text"
            size="md"
            className="w-full border border-solid border-gray-300 justify-between bg-white text-gray-800 gap-6"
          >
            <span>select</span>
            <ChevronDown
              size={26}
              className="rotate-180 transition-transform shrink-0"
            />
          </Button>
          <div className="absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden p-1.5 gap-1 rounded-[10px] mt-2">
            <Button
              variant="text"
              size="md"
              className="justify-start px-5 py-[5.5px] rounded-lg text-lg text-gray-800 hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </Button>
            <Button
              variant="text"
              size="md"
              className="justify-start px-5 py-[5.5px] rounded-lg text-lg text-gray-800 hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const TriggerStatus = {
  render: () => (
    <div className="flex items-start gap-4">
      {/* enabled (default) */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">enabled (default)</span>
        <div className="w-[150px]">
          <Button
            variant="text"
            size="md"
            className="w-full border border-solid border-gray-300 justify-between bg-white text-gray-800 gap-6"
          >
            <span>select</span>
            <ChevronDown size={26} className="transition-transform shrink-0" />
          </Button>
        </div>
      </div>

      {/* hover */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">hover</span>
        <div className="w-[150px]">
          <Button
            variant="text"
            size="md"
            className="w-full border border-solid border-gray-300 justify-between bg-gray-100 text-gray-800 gap-6"
          >
            <span>select</span>
            <ChevronDown size={26} className="transition-transform shrink-0" />
          </Button>
        </div>
      </div>

      {/* pressed */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">pressed</span>
        <div className="w-[150px]">
          <Button
            variant="text"
            size="md"
            className="w-full border border-solid border-gray-300 justify-between bg-gray-200 text-gray-800 gap-6"
          >
            <span>select</span>
            <ChevronDown size={26} className="transition-transform shrink-0" />
          </Button>
        </div>
      </div>

      {/* disabled */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">disabled</span>
        <div className="w-[150px]">
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">option</SelectItem>
              <SelectItem value="2">option</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const OptionStatus = {
  render: () => (
    <div className="flex items-start gap-4">
      {/* default */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">default</span>
        <div className="relative w-[150px]" style={{ minHeight: '160px' }}>
          <Button
            variant="text"
            size="md"
            className="w-full border border-solid border-gray-300 justify-between bg-white text-gray-800 gap-6"
          >
            <span>select</span>
            <ChevronDown
              size={26}
              className="rotate-180 transition-transform shrink-0"
            />
          </Button>
          <div className="absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden p-1.5 gap-1 rounded-[10px] mt-2">
            <Button
              variant="text"
              size="md"
              className="justify-start px-5 py-[5.5px] rounded-lg text-lg text-gray-800 hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </Button>
            <Button
              variant="text"
              size="md"
              className="justify-start px-5 py-[5.5px] rounded-lg text-lg text-gray-800 hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </Button>
          </div>
        </div>
      </div>

      {/* hover */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">hover</span>
        <div className="relative w-[150px]" style={{ minHeight: '160px' }}>
          <Button
            variant="text"
            size="md"
            className="w-full border border-solid border-gray-300 justify-between bg-white text-gray-800 gap-6"
          >
            <span>select</span>
            <ChevronDown
              size={26}
              className="rotate-180 transition-transform shrink-0"
            />
          </Button>
          <div className="absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden p-1.5 gap-1 rounded-[10px] mt-2">
            <Button
              variant="text"
              size="md"
              className="justify-start px-5 py-[5.5px] rounded-lg text-lg bg-gray-200 text-gray-800 cursor-pointer"
            >
              option
            </Button>
            <Button
              variant="text"
              size="md"
              className="justify-start px-5 py-[5.5px] rounded-lg text-lg text-gray-800 hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </Button>
          </div>
        </div>
      </div>

      {/* selected */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">selected</span>
        <div className="relative w-[150px]" style={{ minHeight: '160px' }}>
          <Button
            variant="text"
            size="md"
            className="w-full border border-solid border-gray-300 justify-between bg-white text-gray-800 gap-6"
          >
            <span>select</span>
            <ChevronDown
              size={26}
              className="rotate-180 transition-transform shrink-0"
            />
          </Button>
          <div className="absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden p-1.5 gap-1 rounded-[10px] mt-2">
            <Button
              variant="text"
              size="md"
              className="justify-start px-5 py-[5.5px] rounded-lg text-lg text-blue-600 hover:bg-gray-200 cursor-pointer"
            >
              option
            </Button>
            <Button
              variant="text"
              size="md"
              className="justify-start px-5 py-[5.5px] rounded-lg text-lg text-gray-800 hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </Button>
          </div>
        </div>
      </div>

      {/* selected/hover */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">selected/hover</span>
        <div className="relative w-[150px]" style={{ minHeight: '160px' }}>
          <Button
            variant="text"
            size="md"
            className="w-full border border-solid border-gray-300 justify-between bg-white text-gray-800 gap-6"
          >
            <span>select</span>
            <ChevronDown
              size={26}
              className="rotate-180 transition-transform shrink-0"
            />
          </Button>
          <div className="absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden p-1.5 gap-1 rounded-[10px] mt-2">
            <Button
              variant="text"
              size="md"
              className="justify-start px-5 py-[5.5px] rounded-lg text-lg bg-gray-200 text-blue-600 cursor-pointer"
            >
              option
            </Button>
            <Button
              variant="text"
              size="md"
              className="justify-start px-5 py-[5.5px] rounded-lg text-lg text-gray-800 hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </Button>
          </div>
        </div>
      </div>

      {/* pressed */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">pressed</span>
        <div className="relative w-[150px]" style={{ minHeight: '160px' }}>
          <Button
            variant="text"
            size="md"
            className="w-full border border-solid border-gray-300 justify-between bg-white text-gray-800 gap-6"
          >
            <span>select</span>
            <ChevronDown
              size={26}
              className="rotate-180 transition-transform shrink-0"
            />
          </Button>
          <div className="absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden p-1.5 gap-1 rounded-[10px] mt-2">
            <Button
              variant="text"
              size="md"
              className="justify-start px-5 py-[5.5px] rounded-lg text-lg bg-gray-300 text-gray-800 cursor-pointer"
            >
              option
            </Button>
            <Button
              variant="text"
              size="md"
              className="justify-start px-5 py-[5.5px] rounded-lg text-lg text-gray-800 hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

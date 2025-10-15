import { Select } from './select';
import { selectVariantsOptions } from './select.variants';
import { Meta } from '@storybook/react-vite';

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
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'Placeholder text when nothing is selected',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'select' },
      },
    },
    options: {
      control: false,
      description: 'Array of select options',
      table: {
        type: { summary: 'SelectOption[]' },
      },
    },
  },
};

export default meta;

const defaultOptions = [
  { value: '1', label: 'option' },
  { value: '2', label: 'option' },
];

export const Default = {
  args: {
    options: defaultOptions,
    placeholder: 'select',
    size: selectVariantsOptions.defaultVariants.size,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '200px', width: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Sizes = {
  render: () => (
    <div className="flex items-start gap-4">
      {/* sm */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">sm</span>
        <div style={{ width: '124px', minHeight: '150px' }}>
          <Select size="sm" options={defaultOptions} placeholder="select" />
        </div>
      </div>

      {/* md */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">md (default)</span>
        <div style={{ width: '150px', minHeight: '150px' }}>
          <Select size="md" options={defaultOptions} placeholder="select" />
        </div>
      </div>

      {/* lg */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">lg</span>
        <div style={{ width: '170px', minHeight: '150px' }}>
          <Select size="lg" options={defaultOptions} placeholder="select" />
        </div>
      </div>
    </div>
  ),
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
          <Select options={defaultOptions} placeholder="select" />
        </div>
      </div>

      {/* open = true (정적 표시) */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">true</span>
        <div className="relative w-[150px]">
          <button
            type="button"
            className="inline-flex items-center justify-between w-full h-12 text-lg px-5 py-[13px] rounded-[10px] gap-6 bg-white border border-gray-300 font-semibold text-gray-800"
          >
            <span>select</span>
            <svg
              className="w-[26px] h-[26px] rotate-180 transition-transform shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden p-1.5 gap-1 rounded-[10px] mt-2">
            <button
              type="button"
              className="flex items-center w-full font-semibold transition-colors text-left px-5 py-[5.5px] rounded-lg text-lg text-gray-800 hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </button>
            <button
              type="button"
              className="flex items-center w-full font-semibold transition-colors text-left px-5 py-[5.5px] rounded-lg text-lg text-gray-800 hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Status = {
  render: () => (
    <div className="flex items-start gap-4">
      {/* default */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">default</span>
        <div className="relative w-[150px]" style={{ minHeight: '160px' }}>
          <button
            type="button"
            className="inline-flex items-center justify-between w-full h-12 text-lg px-5 py-[13px] rounded-[10px] gap-6 bg-white border border-gray-300 font-semibold text-gray-800"
          >
            <span>select</span>
            <svg
              className="w-[26px] h-[26px] rotate-180 transition-transform shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden p-1.5 gap-1 rounded-[10px] mt-2">
            <button
              type="button"
              className="flex items-center w-full font-semibold text-left px-5 py-[5.5px] rounded-lg text-lg text-gray-800 transition-colors hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </button>
            <button
              type="button"
              className="flex items-center w-full font-semibold text-left px-5 py-[5.5px] rounded-lg text-lg text-gray-800 transition-colors hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </button>
          </div>
        </div>
      </div>

      {/* hover */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">hover</span>
        <div className="relative w-[150px]" style={{ minHeight: '160px' }}>
          <button
            type="button"
            className="inline-flex items-center justify-between w-full h-12 text-lg px-5 py-[13px] rounded-[10px] gap-6 bg-white border border-gray-300 font-semibold text-gray-800"
          >
            <span>select</span>
            <svg
              className="w-[26px] h-[26px] rotate-180 transition-transform shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden p-1.5 gap-1 rounded-[10px] mt-2">
            <button
              type="button"
              className="flex items-center w-full font-semibold text-left px-5 py-[5.5px] rounded-lg text-lg bg-gray-200 text-gray-800 transition-colors cursor-pointer"
            >
              option
            </button>
            <button
              type="button"
              className="flex items-center w-full font-semibold text-left px-5 py-[5.5px] rounded-lg text-lg text-gray-800 transition-colors hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </button>
          </div>
        </div>
      </div>

      {/* selected */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">selected</span>
        <div className="relative w-[150px]" style={{ minHeight: '160px' }}>
          <button
            type="button"
            className="inline-flex items-center justify-between w-full h-12 text-lg px-5 py-[13px] rounded-[10px] gap-6 bg-white border border-gray-300 font-semibold text-gray-800"
          >
            <span>select</span>
            <svg
              className="w-[26px] h-[26px] rotate-180 transition-transform shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden p-1.5 gap-1 rounded-[10px] mt-2">
            <button
              type="button"
              className="flex items-center w-full font-semibold text-left px-5 py-[5.5px] rounded-lg text-lg text-blue-600 transition-colors hover:bg-gray-200 cursor-pointer"
            >
              option
            </button>
            <button
              type="button"
              className="flex items-center w-full font-semibold text-left px-5 py-[5.5px] rounded-lg text-lg text-gray-800 transition-colors hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </button>
          </div>
        </div>
      </div>

      {/* selected/hover */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">selected/hover</span>
        <div className="relative w-[150px]" style={{ minHeight: '160px' }}>
          <button
            type="button"
            className="inline-flex items-center justify-between w-full h-12 text-lg px-5 py-[13px] rounded-[10px] gap-6 bg-white border border-gray-300 font-semibold text-gray-800"
          >
            <span>select</span>
            <svg
              className="w-[26px] h-[26px] rotate-180 transition-transform shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden p-1.5 gap-1 rounded-[10px] mt-2">
            <button
              type="button"
              className="flex items-center w-full font-semibold text-left px-5 py-[5.5px] rounded-lg text-lg bg-gray-200 text-blue-600 transition-colors cursor-pointer"
            >
              option
            </button>
            <button
              type="button"
              className="flex items-center w-full font-semibold text-left px-5 py-[5.5px] rounded-lg text-lg text-gray-800 transition-colors hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </button>
          </div>
        </div>
      </div>

      {/* pressed */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">pressed</span>
        <div className="relative w-[150px]" style={{ minHeight: '160px' }}>
          <button
            type="button"
            className="inline-flex items-center justify-between w-full h-12 text-lg px-5 py-[13px] rounded-[10px] gap-6 bg-white border border-gray-300 font-semibold text-gray-800"
          >
            <span>select</span>
            <svg
              className="w-[26px] h-[26px] rotate-180 transition-transform shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="absolute z-50 w-full flex flex-col bg-white border border-gray-300 shadow-lg overflow-hidden p-1.5 gap-1 rounded-[10px] mt-2">
            <button
              type="button"
              className="flex items-center w-full font-semibold text-left px-5 py-[5.5px] rounded-lg text-lg bg-gray-300 text-gray-800 transition-colors cursor-pointer"
            >
              option
            </button>
            <button
              type="button"
              className="flex items-center w-full font-semibold text-left px-5 py-[5.5px] rounded-lg text-lg text-gray-800 transition-colors hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
            >
              option
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

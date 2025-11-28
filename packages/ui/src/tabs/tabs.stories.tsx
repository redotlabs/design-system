import { useState } from 'react';
import { Tab, Tabs } from './tabs';
import { tabsVariantsOptions } from './tabs.variants';
import { Meta } from '@storybook/react-vite';

const { variants, defaultVariants } = tabsVariantsOptions;

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Redot Tabs Component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      defaultValue: defaultVariants.size,
      description: 'The size of the Tabs',
      table: {
        type: {
          summary: Object.keys(variants.size).join(' | '),
        },
        defaultValue: {
          summary: defaultVariants.size,
        },
      },
      options: Object.keys(variants.size),
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default = {
  args: {
    size: defaultVariants.size,
  },
  render: function Render(args) {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (v: number) => {
      document.startViewTransition(() => {
        setActiveTab(v);
      });
    };
    const isActive = (value: number) => activeTab === value;
    return (
      <div className="flex items-center gap-4">
        <Tabs {...args}>
          <Tab isActive={isActive(0)} onClick={() => handleTabClick(0)}>
            Tab 1
          </Tab>
          <Tab isActive={isActive(1)} onClick={() => handleTabClick(1)}>
            Tab 2
          </Tab>
          <Tab isActive={isActive(2)} onClick={() => handleTabClick(2)}>
            Tab 3
          </Tab>
        </Tabs>
      </div>
    );
  },
};

export const Sizes = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Small</h3>
        <Tabs size="sm">
          <Tab isActive>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tabs>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Medium</h3>
        <Tabs size="md">
          <Tab isActive>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tabs>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Large</h3>
        <Tabs size="lg">
          <Tab isActive>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tabs>
      </div>
    </div>
  ),
};

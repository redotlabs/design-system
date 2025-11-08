import { useState } from 'react';
import { Pagination } from '../pagination';

import { Meta } from '@storybook/react-vite';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Redot Pagination Component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    totalPages: {
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
      },
      defaultValue: 10,
      description: 'The total number of pages',
    },
    currentPage: {
      control: { disable: true },
    },
    onPrevious: {
      action: 'onPrevious',
    },
    onNext: {
      action: 'onNext',
    },
    onPageChange: {
      action: 'onPageChange',
    },
    hasNext: {
      control: { disable: true },
    },
    hasPrevious: {
      control: { disable: true },
    },
  },
};

export default meta;

export const Default = {
  args: {
    totalPages: 10,
  },
  render: function Render({ totalPages }) {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPrevious={() => setCurrentPage(currentPage - 1)}
        onNext={() => setCurrentPage(currentPage + 1)}
        onPageChange={setCurrentPage}
        hasPrevious={currentPage > 1}
        hasNext={currentPage < totalPages}
      />
    );
  },
};

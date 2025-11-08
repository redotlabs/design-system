import { Badge } from '../badge';
import { Pagination } from '../pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';
import { Meta } from '@storybook/react-vite';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Redot Table Component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

const tableData = [
  {
    order: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '010-1234-5678',
    status: 'Inactive',
  },
  {
    order: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '010-2345-6789',
    status: 'Active',
  },
  {
    order: 3,
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '010-3456-7890',
    status: 'Inactive',
  },
  {
    order: 4,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '010-4567-8901',
    status: 'Active',
  },
  {
    order: 5,
    name: 'Redot',
    email: 'redot@example.com',
    phone: '010-5678-9012',
    status: 'Success',
  },
];

export const Default = {
  args: {},
  render: (args) => (
    <div>
      <Table {...args} className="min-w-[600px]">
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item) => (
            <TableRow key={item.order}>
              <TableCell align="center">{item.order}</TableCell>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">{item.email}</TableCell>
              <TableCell align="center">{item.phone}</TableCell>
              <TableCell align="center">
                <Badge
                  color={
                    (
                      {
                        active: 'info',
                        inactive: 'danger',
                        success: 'success',
                      } as const
                    )[item.status.toLowerCase()]
                  }
                  size="sm"
                >
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        className="mt-4"
        totalPages={10}
        currentPage={1}
        onPrevious={() => {}}
        onNext={() => {}}
        onPageChange={() => {}}
        hasPrevious={false}
      />
    </div>
  ),
};

export const NoData = {
  args: {},
  render: (args) => (
    <div>
      <Table {...args} className="min-w-[600px]">
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
      <div className="min-h-[150px] flex justify-center items-center text-lg font-semibold">
        <p>No data</p>
      </div>
    </div>
  ),
};

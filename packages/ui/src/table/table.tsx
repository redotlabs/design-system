import { type ComponentProps } from 'react';
import { cn } from '@redotlabs/utils';

type TableProps = ComponentProps<'table'>;
type TableHeaderProps = ComponentProps<'thead'>;
type TableHeadProps = ComponentProps<'th'>;
type TableBodyProps = ComponentProps<'tbody'>;
type TableRowProps = ComponentProps<'tr'>;
type TableCellProps = ComponentProps<'td'>;
type TableFooterProps = ComponentProps<'tfoot'>;

function Table({ children, ...props }: TableProps) {
  return (
    <table data-slot="table" {...props}>
      {children}
    </table>
  );
}

function TableHeader({ children, className, ...props }: TableHeaderProps) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        'text-sm font-semibold text-gray-800',
        '[&>tr>th:first-child]:rounded-l-md [&>tr>th:last-child]:rounded-r-md',
        '[&>th:first-child]:rounded-l-md [&>th:last-child]:rounded-r-md',
        '[&>tr]:border-none',
        className
      )}
      {...props}
    >
      {children}
    </thead>
  );
}

function TableHead({ children, className, ...props }: TableHeadProps) {
  return (
    <th
      data-slot="table-head"
      className={cn('p-3 bg-gray-100', className)}
      {...props}
    >
      {children}
    </th>
  );
}

function TableBody({ children, ...props }: TableBodyProps) {
  return (
    <tbody data-slot="table-body" {...props}>
      {children}
    </tbody>
  );
}

function TableRow({ children, className, ...props }: TableRowProps) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'border-b-2 border-gray-100 text-sm font-medium text-gray-800',
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
}

function TableCell({ children, className, ...props }: TableCellProps) {
  return (
    <td data-slot="table-cell" className={cn('p-3', className)} {...props}>
      {children}
    </td>
  );
}

function TableFooter({ children, ...props }: TableFooterProps) {
  return (
    <tfoot data-slot="table-footer" {...props}>
      {children}
    </tfoot>
  );
}

export {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
};
export type {
  TableProps,
  TableHeaderProps,
  TableHeadProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
  TableFooterProps,
};

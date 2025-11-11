import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Table, TableBody, TableRow, TableCell } from './table';
import { createRef } from 'react';

describe('Table', () => {
  it('renders correctly with children', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const table = screen.getByRole('table');
    expect(table).toBeDefined();
  });

  it('passes additional props to table element', () => {
    render(
      <Table data-testid="custom-table" aria-label="Custom Table">
        <TableBody>
          <TableRow>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const table = screen.getByTestId('custom-table');
    expect(table.getAttribute('aria-label')).toBe('Custom Table');
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLTableElement>();

    render(<Table ref={ref}>Table</Table>);
    expect(ref.current).not.toBeNull();
  });
});

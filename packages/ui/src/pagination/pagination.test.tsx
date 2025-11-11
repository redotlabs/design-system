import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Pagination } from './pagination';
import { createRef } from 'react';

const defaultProps = {
  totalPages: 10,
  currentPage: 1,
  onPrevious: () => {},
  onNext: () => {},
  onPageChange: () => {},
};

describe('Pagination', () => {
  it('renders correctly with children', () => {
    render(<Pagination {...defaultProps} data-testid="pagination" />);
    const pagination = screen.getByTestId('pagination');
    expect(pagination).toBeDefined();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Pagination ref={ref} {...defaultProps} />);
    expect(ref.current).not.toBeNull();
  });

  describe('pagination range', () => {
    it('should render correctly under 5 pages', () => {
      render(
        <Pagination
          {...defaultProps}
          totalPages={3}
          currentPage={1}
          data-testid="pagination"
        />
      );
      const rangeButtons = screen
        .getByTestId('pagination')
        .querySelector('[data-slot="pagination-range"]');
      const expected = [...rangeButtons.childNodes].map((child: HTMLElement) =>
        child.getAttribute('aria-label')
      );
      const result = ['page 1', 'page 2', 'page 3'];
      expect(expected).toEqual(result);
    });

    it('should render correctly over 5 pages and current page is under 3', () => {
      render(
        <Pagination
          {...defaultProps}
          totalPages={10}
          currentPage={3}
          data-testid="pagination"
        />
      );
      const rangeButtons = screen
        .getByTestId('pagination')
        .querySelector('[data-slot="pagination-range"]');
      const result = [
        'page 1',
        'page 2',
        'page 3',
        'page 4',
        'page 5',
        'ellipsis',
        'page 10',
      ];
      const expected = [...rangeButtons.childNodes].map((child: HTMLElement) =>
        child.getAttribute('aria-label')
      );
      expect(expected).toEqual(result);
    });

    it('should render correctly over 5 pages and current page is over (totalPages - 2)', () => {
      render(
        <Pagination
          {...defaultProps}
          totalPages={10}
          currentPage={8}
          data-testid="pagination"
        />
      );
      const rangeButtons = screen
        .getByTestId('pagination')
        .querySelector('[data-slot="pagination-range"]');
      const result = [
        'page 1',
        'ellipsis',
        'page 6',
        'page 7',
        'page 8',
        'page 9',
        'page 10',
      ];
      const expected = [...rangeButtons.childNodes].map((child: HTMLElement) =>
        child.getAttribute('aria-label')
      );
      expect(expected).toEqual(result);
    });

    it('should render correctly over 5 pages and current page is in the middle', () => {
      render(
        <Pagination
          {...defaultProps}
          totalPages={10}
          currentPage={5}
          data-testid="pagination"
        />
      );
      const rangeButtons = screen
        .getByTestId('pagination')
        .querySelector('[data-slot="pagination-range"]');
      const result = [
        'page 1',
        'ellipsis',
        'page 4',
        'page 5',
        'page 6',
        'ellipsis',
        'page 10',
      ];
      const expected = [...rangeButtons.childNodes].map((child: HTMLElement) =>
        child.getAttribute('aria-label')
      );
      expect(expected).toEqual(result);
    });
  });
});

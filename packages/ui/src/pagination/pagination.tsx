import { Button } from '../button';
import { ChevronLeft, ChevronRight, EllipsisIcon } from 'lucide-react';
import { cn } from '@redotlabs/utils';
import { type ComponentProps } from 'react';

interface PaginationProps extends ComponentProps<'div'> {
  totalPages: number;
  currentPage: number;
  onPrevious: () => void;
  onNext: () => void;
  onPageChange: (page: number) => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

const ELLIPSIS = '...';

const Pagination = ({
  totalPages,
  currentPage,
  onPrevious,
  onNext,
  onPageChange,
  hasNext = true,
  hasPrevious = true,
  className,
  ...props
}: PaginationProps) => {
  // 페이지네이션 범위 계산
  const getPageRange = () => {
    // 1, 2, 3, 4, 5
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // 1, 2, 3, ..., 10
    if (currentPage <= 3) {
      return [
        ...Array.from({ length: 5 }, (_, i) => i + 1),
        ELLIPSIS,
        totalPages,
      ];
    }

    // 1, ..., 8, 9, 10
    if (currentPage >= totalPages - 2) {
      return [
        1,
        ELLIPSIS,
        ...Array.from({ length: 5 }, (_, i) => totalPages - 4 + i),
      ];
    }

    // 1, ..., 4, 5, 6, ..., 10
    return [
      1,
      ELLIPSIS,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      ELLIPSIS,
      totalPages,
    ];
  };

  const pageRange = getPageRange();

  return (
    <div
      data-slot="pagination"
      className={cn('p-2 flex items-center justify-center gap-1', className)}
      {...props}
    >
      <Button
        variant="text"
        size="sm"
        className="p-0 size-7 text-black disabled:text-gray-300"
        onClick={() => onPrevious()}
        disabled={!hasPrevious}
        aria-label="previous page"
      >
        <ChevronLeft className="size-5" />
      </Button>
      <div className="flex items-center" data-slot="pagination-range">
        {pageRange.map((page, index) =>
          page === ELLIPSIS ? (
            <span
              key={`ellipsis-${index}`}
              className="px-4 py-2"
              aria-label="ellipsis"
            >
              <EllipsisIcon className="size-4" />
            </span>
          ) : (
            <Button
              variant="text"
              className={cn(
                'p-0 size-7 text-black',
                page === currentPage && 'text-primary-500'
              )}
              size="sm"
              key={page}
              onClick={() => onPageChange(page as number)}
              aria-label={`page ${page}`}
            >
              {page}
            </Button>
          )
        )}
      </div>
      <Button
        variant="text"
        size="sm"
        className="p-0 size-7 text-black disabled:text-gray-300"
        onClick={() => onNext()}
        disabled={!hasNext}
        aria-label="next page"
      >
        <ChevronRight className="size-5" />
      </Button>
    </div>
  );
};

export { Pagination };
export type { PaginationProps };

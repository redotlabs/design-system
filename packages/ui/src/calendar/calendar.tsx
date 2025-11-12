import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker';
import { Button, buttonVariants } from '../button';
import { cn } from '@redotlabs/utils';
import { ko } from 'react-day-picker/locale';
import { type ComponentProps, useEffect, useRef } from 'react';

type CalendarProps = ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="w-full">
      <DayPicker
        locale={ko}
        showOutsideDays={showOutsideDays}
        className={cn(
          'bg-white group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
          String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
          String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
          className
        )}
        captionLayout={captionLayout}
        formatters={{
          formatMonthDropdown: (date) =>
            date.toLocaleString('default', { month: 'short' }),
          ...formatters,
        }}
        classNames={{
          root: cn('w-fit', defaultClassNames.root),
          months: cn(
            'flex gap-4 flex-col md:flex-row relative',
            defaultClassNames.months
          ),
          month: cn('flex flex-col w-full gap-7', defaultClassNames.month),
          nav: 'px-7 flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between',
          button_previous: cn(
            buttonVariants({ variant: 'text' }),
            'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
            defaultClassNames.button_previous
          ),
          button_next: cn(
            buttonVariants({ variant: 'text' }),
            'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
            defaultClassNames.button_next
          ),
          month_caption: 'text-center align-middle leading-8',
          dropdowns: cn(
            'w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5',
            defaultClassNames.dropdowns
          ),
          dropdown_root: cn(
            'relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md',
            defaultClassNames.dropdown_root
          ),
          dropdown: cn(
            'absolute bg-white inset-0 opacity-0',
            defaultClassNames.dropdown
          ),
          caption_label: '',
          table: 'w-full border-collapse',
          weekdays: cn('flex', defaultClassNames.weekdays),
          weekday: cn(
            'text-gray-500 rounded-md flex-1 text-xs font-normal select-none',
            defaultClassNames.weekday
          ),
          week: cn('flex w-full', defaultClassNames.week),
          week_number_header: cn(
            'select-none w-(--cell-size)',
            defaultClassNames.week_number_header
          ),
          week_number: cn(
            'text-[0.8rem] select-none text-muted-foreground',
            defaultClassNames.week_number
          ),
          day: cn(
            'relative w-full h-full p-0 text-center group/day aspect-square select-none',
            defaultClassNames.day
          ),
          range_start: cn(
            'rounded-l-md bg-accent',
            defaultClassNames.range_start
          ),
          range_middle: cn('rounded-none', defaultClassNames.range_middle),
          range_end: cn('rounded-r-md bg-accent', defaultClassNames.range_end),
          today: cn('bg-accent text-primary-500', defaultClassNames.today),
          outside: cn(
            'aria-selected:text-primary-500',
            defaultClassNames.outside
          ),
          disabled: cn(
            'text-gray-500 cursor-not-allowed',
            defaultClassNames.disabled
          ),
          hidden: cn('invisible', defaultClassNames.hidden),
          ...classNames,
        }}
        components={{
          Root: ({ className, rootRef, ...props }) => {
            return (
              <div
                data-slot="calendar"
                ref={rootRef}
                className={cn(className)}
                {...props}
              />
            );
          },
          MonthCaption: ({
            className,
            calendarMonth,
            displayIndex,
            ...props
          }) => {
            return (
              <div
                display-index={displayIndex}
                className={cn('text-xl font-bold text-gray-800', className)}
                {...props}
              >
                {calendarMonth.date.getFullYear()}.
                {calendarMonth.date.getMonth() + 1}
              </div>
            );
          },
          Chevron: ({ className, orientation, ...props }) => {
            if (orientation === 'left') {
              return (
                <ChevronLeftIcon
                  className={cn('size-7.5 text-gray-500', className)}
                  {...props}
                />
              );
            }

            if (orientation === 'right') {
              return (
                <ChevronRightIcon
                  className={cn('size-7.5 text-gray-500', className)}
                  {...props}
                />
              );
            }

            return (
              <ChevronDownIcon className={cn('size-4', className)} {...props} />
            );
          },
          DayButton: CalendarDayButton,
          WeekNumber: ({ children, ...props }) => {
            return (
              <td {...props}>
                <div className="flex size-(--cell-size) items-center justify-center text-center">
                  {children}
                </div>
              </td>
            );
          },
          ...components,
        }}
        {...props}
      />
    </div>
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: ComponentProps<typeof DayButton>) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      size="sm"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'text-gray-800 bg-white size-8 rounded-full p-0 text-sm font-semibold hover:text-white data-[selected-single=true]:bg-primary-500 data-[selected-single=true]:text-white flex aspect-square flex-col gap-1 leading-none group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 ring-primary-500',
        'group-data-[outside=true]/day:text-gray-500',
        'disabled:text-gray-300 disabled:bg-white',
        className
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
export type { CalendarProps };

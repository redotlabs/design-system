import { ChangeEvent, useState } from 'react';
import { Input, type InputProps } from '../input';
import { Button } from '../button';
import { CalendarIcon } from 'lucide-react';
import { Calendar, type CalendarProps } from '../calendar';
import { Popover, PopoverTrigger, PopoverContent } from '../popover';
import { cn } from '@redotlabs/utils';

interface DatePickerProps
  extends Omit<InputProps, 'value' | 'defaultValue' | 'onChange'> {
  defaultValue?: Date | undefined;
  setValue?: (value: Date | undefined) => void;
  calendarProps?: Omit<Partial<CalendarProps>, 'mode' | 'required'>;
}

function formatDate(date: Date | undefined) {
  if (!isValidDate(date)) {
    return '';
  }
  const yyyy = date.getFullYear();
  const mm = (date.getMonth() + 1).toString().padStart(2, '0');
  const dd = date.getDate().toString().padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  try {
    return !isNaN(date.getTime());
  } catch {
    return false;
  }
}

function formatDateString(v: string) {
  v = v.replace(/[^0-9]/g, '');
  if (v.length <= 4) {
    return v;
  }
  if (v.length <= 6) {
    return `${v.slice(0, 4)}-${v.slice(4)}`;
  }
  return `${v.slice(0, 4)}-${v.slice(4, 6)}-${v.slice(6, 8)}`;
}

function DatePicker({
  defaultValue = new Date(),
  setValue,
  disabled,
  calendarProps = {},
  ...props
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<Date | undefined>(defaultValue);
  const [date, setDate] = useState<Date | undefined>(defaultValue);
  const [dateString, setDateString] = useState<string>(formatDate(date));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: v } = e.target;
    const newDate = new Date(v);
    setDateString(formatDateString(v));
    const matched = v.match(/^\d{4}-\d{2}-\d{2}$/);

    if (isValidDate(newDate) && matched) {
      setDate(newDate);
      setValue?.(newDate);
      setMonth(newDate);
    }
  };

  return (
    <div data-slot="datepicker">
      <Input
        type="text"
        size="sm"
        value={dateString}
        defaultValue={dateString}
        disabled={disabled}
        placeholder="yyyy-mm-dd"
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            setOpen(true);
          }
        }}
        endContent={
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="text"
                size="sm"
                className={cn('p-0 text-gray-800', disabled && 'text-gray-300')}
                aria-label="Open date picker"
              >
                <CalendarIcon className="size-3" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              role="dialog"
              className="w-auto overflow-hidden p-0"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                startMonth={new Date(2000, 0, 1)}
                endMonth={new Date(2100, 11, 31)}
                month={month}
                onMonthChange={setMonth}
                onSelect={(date) => {
                  setValue?.(date);
                  setDateString(formatDate(date));
                  setOpen(false);
                }}
                {...calendarProps}
              />
            </PopoverContent>
          </Popover>
        }
        {...props}
      />
    </div>
  );
}

export { DatePicker };
export type { DatePickerProps };

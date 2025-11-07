import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DatePicker } from './date-picker';
import userEvent from '@testing-library/user-event';

describe('DatePicker', () => {
  it('renders with placeholder', () => {
    render(<DatePicker />);
    const input = screen.getByPlaceholderText('yyyy-mm-dd');
    expect(input).toBeDefined();
  });

  it('renders with initial value', () => {
    const testDate = new Date(2025, 10, 7); // 2025-11-07
    render(<DatePicker defaultValue={testDate} />);
    const input = screen.getByDisplayValue('2025-11-07') as HTMLInputElement;
    expect(input).toBeDefined();
    expect(input.value).toBe('2025-11-07');
  });

  it('formats date correctly', () => {
    const testDate = new Date(2025, 10, 7); // 2025-11-07
    render(<DatePicker defaultValue={testDate} />);
    const input = screen.getByDisplayValue('2025-11-07') as HTMLInputElement;
    expect(input.value).toBe('2025-11-07');
  });

  it('calls setValue when input changes with valid date', async () => {
    const setValue = vi.fn();
    render(
      <DatePicker defaultValue={new Date(2024, 0, 1)} setValue={setValue} />
    );

    const input = screen.getByPlaceholderText('yyyy-mm-dd') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '2025-11-07' } });

    await waitFor(() => {
      expect(setValue).toHaveBeenCalled();
    });
  });

  it('formats input as user types', async () => {
    const user = userEvent.setup();
    render(<DatePicker />);

    const input = screen.getByPlaceholderText('yyyy-mm-dd') as HTMLInputElement;

    await user.clear(input);
    fireEvent.change(input, { target: { value: '20251107' } });

    expect(input.value).toBe('2025-11-07');
  });

  it('does not call setValue for invalid date', () => {
    const setValue = vi.fn();
    render(<DatePicker setValue={setValue} />);

    const input = screen.getByPlaceholderText('yyyy-mm-dd') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'invalid' } });

    expect(setValue).not.toHaveBeenCalled();
  });

  it('opens popover when calendar button is clicked', async () => {
    render(<DatePicker />);

    const button = screen.getByRole('button', { name: 'Open date picker' });
    fireEvent.click(button);

    await waitFor(() => {
      const calendar = screen.getByRole('dialog');
      expect(calendar).toBeDefined();
    });
  });

  it('opens popover when ArrowDown key is pressed', async () => {
    render(<DatePicker />);

    const input = screen.getByPlaceholderText('yyyy-mm-dd');
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      const calendar = screen.getByRole('dialog');
      expect(calendar).toBeDefined();
    });
  });

  it('supports disabled state', () => {
    render(<DatePicker disabled />);
    const input = screen.getByPlaceholderText('yyyy-mm-dd') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('handles undefined value', () => {
    const date = new Date();
    render(<DatePicker defaultValue={date} />);
    const input = screen.getByPlaceholderText('yyyy-mm-dd') as HTMLInputElement;
    expect(input.value).toBe(date.toISOString().split('T')[0]);
  });

  it('supports calendar props', async () => {
    const today = new Date();
    const todayString = today.toLocaleDateString();

    render(
      <DatePicker
        calendarProps={{
          disabled: (date) => date.toLocaleDateString() === todayString,
        }}
      />
    );
    const input = screen.getByPlaceholderText('yyyy-mm-dd') as HTMLInputElement;

    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      const calendar = screen.getByRole('dialog');
      const todayButton = calendar.querySelector(
        `[data-day="${todayString}"]`
      ) as HTMLButtonElement;
      expect(todayButton.disabled).toBe(true);
    });
  });
});

export {};

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './select';

describe('Select', () => {
  it('renders with placeholder', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
    expect(screen.getByText('Choose an option')).toBeDefined();
  });

  it('renders as button element with correct type', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    const button = screen.getByRole('button');
    expect(button.tagName).toBe('BUTTON');
    expect(button.getAttribute('type')).toBe('button');
  });

  it('should have data-slot attribute', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    const button = screen.getByRole('button');
    expect(button.getAttribute('data-slot')).toBe('select');
  });

  it('opens dropdown on click', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    expect(screen.getByRole('listbox')).toBeDefined();
  });

  it('closes dropdown after selecting an option', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    const option = screen.getByText('Option 2');
    fireEvent.click(option);

    expect(screen.queryByRole('listbox')).toBeNull();
  });

  it('selects an option and calls onValueChange', () => {
    const handleChange = vi.fn();
    render(
      <Select onValueChange={handleChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    const option = screen.getByText('Option 2');
    fireEvent.click(option);

    expect(handleChange).toHaveBeenCalledWith('2');
  });

  it('displays selected value', () => {
    render(
      <Select value="2">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    const option = screen.getByText('Option 2');
    fireEvent.click(option);

    expect(screen.getByText('Option 2')).toBeDefined();
  });

  it('disables select when disabled prop is true', () => {
    render(
      <Select disabled>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    const trigger = screen.getByRole('button') as HTMLButtonElement;
    expect(trigger.disabled).toBe(true);
  });

  it('disables specific options', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2" disabled>
            Option 2
          </SelectItem>
          <SelectItem value="3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    );

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    const disabledOption = screen.getByText('Option 2');
    expect((disabledOption as HTMLButtonElement).disabled).toBe(true);
  });

  it('closes dropdown on outside click', () => {
    render(
      <div>
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
          </SelectContent>
        </Select>
        <button type="button">Outside</button>
      </div>
    );

    const trigger = screen.getByRole('button', { name: /select/i });
    fireEvent.click(trigger);
    expect(screen.getByRole('listbox')).toBeDefined();

    const outsideButton = screen.getByRole('button', { name: /outside/i });
    fireEvent.mouseDown(outsideButton);
    expect(screen.queryByRole('listbox')).toBeNull();
  });

  it('closes dropdown on ESC key', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    expect(screen.getByRole('listbox')).toBeDefined();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('listbox')).toBeNull();
  });

  it('merges custom className on trigger', () => {
    render(
      <Select>
        <SelectTrigger className="custom-class">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    const button = screen.getByRole('button');
    expect(button.className).toContain('custom-class');
  });
});

export {};

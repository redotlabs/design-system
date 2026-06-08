import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { type ComponentProps } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select';

// These tests cover this package's surface — size/class propagation, the
// Button-via-asChild composition, controlled value display, disabled wiring
// and exports. Open/close/keyboard/focus behavior belongs to Radix and is
// covered upstream, so it is intentionally not re-tested here (and would need
// browser-only APIs jsdom lacks).

type SelectRootProps = ComponentProps<typeof Select>;

function renderSelect(props: Partial<SelectRootProps> = {}) {
  return render(
    <Select {...props}>
      <SelectTrigger>
        <SelectValue placeholder="Choose an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  );
}

describe('Select', () => {
  it('renders the trigger with placeholder text', () => {
    renderSelect();
    expect(screen.getByRole('combobox')).toBeDefined();
    expect(screen.getByText('Choose an option')).toBeDefined();
  });

  it('renders the trigger as a button with type="button"', () => {
    renderSelect();
    const trigger = screen.getByRole('combobox');
    expect(trigger.tagName).toBe('BUTTON');
    expect(trigger.getAttribute('type')).toBe('button');
  });

  it('exposes data-slot="select-trigger" on the trigger (Button via asChild)', () => {
    renderSelect();
    expect(screen.getByRole('combobox').getAttribute('data-slot')).toBe(
      'select-trigger'
    );
  });

  // Integration smoke: relies on Radix projecting the selected ItemText into
  // the trigger for a controlled value (Radix internals, not our wrapper).
  it('displays the label for a controlled value without opening', () => {
    renderSelect({ value: '2' });
    expect(screen.getByRole('combobox').textContent).toContain('Option 2');
  });

  it('forwards aria-invalid to the trigger', () => {
    render(
      <Select>
        <SelectTrigger aria-invalid>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    const trigger = screen.getByRole('combobox');
    expect(trigger.getAttribute('aria-invalid')).toBe('true');
    expect(trigger.className).toContain('aria-invalid:border-red-500');
  });

  it('disables the trigger when disabled is set', () => {
    renderSelect({ disabled: true });
    expect((screen.getByRole('combobox') as HTMLButtonElement).disabled).toBe(
      true
    );
  });

  it('merges a custom className on the trigger', () => {
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
    expect(screen.getByRole('combobox').className).toContain('custom-class');
  });

  it('applies Button size classes to the trigger per size prop', () => {
    const { rerender } = render(
      <Select size="sm">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('combobox').className).toContain('h-8');

    rerender(
      <Select size="lg">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('combobox').className).toContain('h-16');
  });

  it('sizes the chevron icon from selectIconSizeMap', () => {
    const { container, rerender } = render(
      <Select size="md">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(
      container
        .querySelector('[data-slot="select-trigger"] svg')
        ?.getAttribute('width')
    ).toBe('26');

    rerender(
      <Select size="sm">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(
      container
        .querySelector('[data-slot="select-trigger"] svg')
        ?.getAttribute('width')
    ).toBe('22');
  });

  it('exports all composite parts', () => {
    expect(Select).toBeDefined();
    expect(SelectTrigger).toBeDefined();
    expect(SelectValue).toBeDefined();
    expect(SelectContent).toBeDefined();
    expect(SelectItem).toBeDefined();
    expect(SelectGroup).toBeDefined();
    expect(SelectLabel).toBeDefined();
    expect(SelectSeparator).toBeDefined();
    expect(SelectScrollUpButton).toBeDefined();
    expect(SelectScrollDownButton).toBeDefined();
  });
});

export {};

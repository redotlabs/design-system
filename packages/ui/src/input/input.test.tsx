import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from './input';
import { createRef } from 'react';

describe('Input', () => {
  it('renders with placeholder', async () => {
    render(<Input placeholder="Enter text..." />);
    const input = screen.getByPlaceholderText('Enter text...');
    expect(input).toBeDefined();
  });

  it('supports disabled state', async () => {
    render(<Input placeholder="Disabled" disabled />);
    const input = screen.getByPlaceholderText('Disabled') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('should have aria-disabled when disabled', () => {
    render(<Input placeholder="Disabled" disabled />);
    const input = screen.getByPlaceholderText('Disabled') as HTMLInputElement;
    expect(input.getAttribute('aria-disabled')).toBe('true');
  });

  it('should have aria-readonly when readOnly', () => {
    render(<Input placeholder="Read Only" readOnly />);
    const input = screen.getByPlaceholderText('Read Only') as HTMLInputElement;
    expect(input.getAttribute('aria-readonly')).toBe('true');
  });

  it('should have aria-invalid when error', () => {
    render(<Input placeholder="Error" error />);
    const input = screen.getByPlaceholderText('Error') as HTMLInputElement;
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Input ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('renders startContent and endContent', () => {
    render(
      <Input
        placeholder="Content"
        startContent={<span data-testid="start">S</span>}
        endContent={<span data-testid="end">E</span>}
      />
    );
    expect(screen.getByTestId('start')).toBeDefined();
    expect(screen.getByTestId('end')).toBeDefined();
  });
});

export {};

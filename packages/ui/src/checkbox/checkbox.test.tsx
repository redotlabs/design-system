import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Checkbox } from './checkbox';
import { createRef } from 'react';

describe('Checkbox', () => {
  it('renders with label', async () => {
    render(<Checkbox label="Checkbox Label" />);
    const checkbox = screen.getByLabelText('Checkbox Label');
    expect(checkbox).toBeDefined();
  });

  it('supports disabled state', async () => {
    render(<Checkbox label="Disabled" disabled />);
    const checkbox = screen.getByLabelText('Disabled') as HTMLInputElement;
    expect(checkbox.disabled).toBe(true);
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Checkbox ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

export {};

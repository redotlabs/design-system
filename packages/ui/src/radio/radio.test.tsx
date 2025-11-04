import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Radio } from './radio';
import { createRef } from 'react';

describe('Radio', () => {
  it('renders with label', async () => {
    render(<Radio label="Radio Label" />);
    const radio = screen.getByLabelText('Radio Label');
    expect(radio).toBeDefined();
  });

  it('supports disabled state', async () => {
    render(<Radio label="Disabled" disabled />);
    const radio = screen.getByLabelText('Disabled') as HTMLInputElement;
    expect(radio.disabled).toBe(true);
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Radio ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

export {};

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { createRef } from 'react';
import { Textarea } from './textarea';

describe('Textarea', () => {
  it('renders textarea element', () => {
    render(<Textarea placeholder="Test textarea" />);
    const textarea = screen.getByPlaceholderText('Test textarea');
    expect(textarea).toBeDefined();
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('applies custom className', () => {
    render(<Textarea className="custom-class" data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea.className).toContain('custom-class');
  });

  it('handles value changes', async () => {
    const user = userEvent.setup();
    render(<Textarea data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea') as HTMLTextAreaElement;

    await user.type(textarea, 'Hello World');
    expect(textarea.value).toBe('Hello World');
  });

  it('supports disabled state', () => {
    render(<Textarea disabled data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea') as HTMLTextAreaElement;
    expect(textarea.disabled).toBe(true);
  });

  it('supports readonly state', () => {
    render(<Textarea readOnly data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea') as HTMLTextAreaElement;
    expect(textarea.readOnly).toBe(true);
  });

  it('applies size variant', () => {
    render(<Textarea size="sm" data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea.className).toContain('text-xs');
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

export {};

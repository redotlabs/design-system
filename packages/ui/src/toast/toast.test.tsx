import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Toaster, toast } from './toast';
import userEvent from '@testing-library/user-event';
import { createRef, type PropsWithChildren } from 'react';

const ToastContainer = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Toaster />
      {children}
    </div>
  );
};

describe('Toast', () => {
  it('renders with success message', async () => {
    const buttonRef = createRef<HTMLButtonElement>();
    render(
      <ToastContainer>
        <button
          type="button"
          onClick={() => toast.success(<span data-testid="success-message" />)}
          ref={buttonRef}
        />
      </ToastContainer>
    );
    await userEvent.click(buttonRef.current);
    expect(screen.getByTestId('success-message')).toBeDefined();
  });

  it('renders with warning message', async () => {
    const buttonRef = createRef<HTMLButtonElement>();
    render(
      <ToastContainer>
        <button
          type="button"
          onClick={() => toast.warning(<span data-testid="warning-message" />)}
          ref={buttonRef}
        />
      </ToastContainer>
    );
    await userEvent.click(buttonRef.current);
    expect(screen.getByTestId('warning-message')).toBeDefined();
  });

  it('renders with error message', async () => {
    const buttonRef = createRef<HTMLButtonElement>();
    render(
      <ToastContainer>
        <button
          type="button"
          ref={buttonRef}
          onClick={() => toast.error(<span data-testid="error-message" />)}
        />
      </ToastContainer>
    );
    await userEvent.click(buttonRef.current);
    expect(screen.getByTestId('error-message')).toBeDefined();
  });
});

export {};

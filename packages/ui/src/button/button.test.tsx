import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  // 1. 기본 렌더링 테스트
  it('renders with children text', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText('Click Me');
    expect(button).toBeDefined();
  });

  it('renders as button element with correct type', () => {
    render(<Button>Click</Button>);
    const button = screen.getByRole('button', { name: 'Click' });
    expect(button.tagName).toBe('BUTTON');
    expect(button.getAttribute('type')).toBe('button');
  });

  it('should have data-slot attribute', () => {
    render(<Button>Click</Button>);
    const button = screen.getByRole('button');
    expect(button.getAttribute('data-slot')).toBe('button');
  });

  // 2. Variant 테스트
  it('applies contained variant styles by default', () => {
    render(<Button>Click</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-primary-500');
  });

  it('applies outlined variant styles', () => {
    render(<Button variant="outlined">Click</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('border-primary-500');
  });

  it('applies text variant styles', () => {
    render(<Button variant="text">Click</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('text-primary-500');
    expect(button.className).toContain('border-none');
  });

  // 3. Size 테스트
  it('applies md size by default', () => {
    render(<Button>Click</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('h-12');
  });

  it('applies sm size styles', () => {
    render(<Button size="sm">Click</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('h-8');
  });

  it('applies lg size styles', () => {
    render(<Button size="lg">Click</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('h-16');
  });

  // 4. Disabled 상태 테스트
  it('supports disabled state', () => {
    render(<Button disabled>Click</Button>);
    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  // 5. ClassName 병합 테스트
  it('merges custom className with variant classes', () => {
    render(<Button className="custom-class">Click</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('custom-class');
    expect(button.className).toContain('bg-primary-500');
  });

  // 6. Props 전달 테스트
  it('passes additional props to button element', () => {
    render(
      <Button data-testid="custom-button" aria-label="Custom Label">
        Click
      </Button>
    );
    const button = screen.getByTestId('custom-button');
    expect(button.getAttribute('aria-label')).toBe('Custom Label');
  });
});

export {};

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

/**
 * !테스트 통과를 위해 임시로 추가해놓은 코드입니다.
 * !테스트 코드 작성시 제거 후 작성해주세요!
 */
describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeDefined();
  });
});

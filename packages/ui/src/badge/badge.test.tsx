import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './badge';
import { createRef } from 'react';

describe('Badge', async () => {
  it('should render correctly', () => {
    const badgeElement = render(<Badge>Badge</Badge>);

    expect(() => badgeElement.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Badge ref={ref}>Badge</Badge>);
    expect(ref.current).not.toBeNull();
  });

  it('should render children', () => {
    const badgeElement = render(
      <Badge>
        <span data-testid="badge-children">new</span>
      </Badge>
    );

    expect(badgeElement.getByTestId('badge-children')).toBeTruthy();
  });
});

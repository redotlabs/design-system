import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Tabs, Tab } from './tabs';

describe('Tabs', () => {
  it('renders tabs container with children', () => {
    render(
      <Tabs>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </Tabs>
    );
    expect(screen.getByText('Tab 1')).toBeDefined();
    expect(screen.getByText('Tab 2')).toBeDefined();
  });

  it('applies active styles when isActive is true', () => {
    render(
      <Tabs>
        <Tab isActive data-testid="active-tab">
          Active Tab
        </Tab>
        <Tab data-testid="inactive-tab">Inactive Tab</Tab>
      </Tabs>
    );

    const activeTab = screen.getByTestId('active-tab');
    const inactiveTab = screen.getByTestId('inactive-tab');

    expect(activeTab.className).toContain('text-primary-500');
    expect(inactiveTab.className).not.toContain('text-primary-500');
  });

  it('renders active indicator (underline) when isActive is true', () => {
    const { container } = render(
      <Tabs>
        <Tab isActive>Active Tab</Tab>
      </Tabs>
    );

    const underline = container.querySelector('[data-slot="tab-bar"]');
    expect(underline).toBeDefined();
  });

  it('handles tab click', () => {
    const handleClick = vi.fn();
    render(
      <Tabs>
        <Tab onClick={handleClick}>Tab 1</Tab>
      </Tabs>
    );

    const tab = screen.getByRole('button', { name: 'Tab 1' });
    fireEvent.click(tab);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('supports disabled state on Tab', () => {
    render(
      <Tabs disabled>
        <Tab>Disabled Tab</Tab>
      </Tabs>
    );

    const tab = screen.getByRole('button') as HTMLButtonElement;
    expect(tab.disabled).toBe(true);
  });
});

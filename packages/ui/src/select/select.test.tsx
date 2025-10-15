import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Select } from './select';

const mockOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

describe('Select', () => {
  // 1. 기본 렌더링 테스트
  it('renders with placeholder', () => {
    render(<Select options={mockOptions} placeholder="Choose an option" />);
    const button = screen.getByRole('button', { name: /choose an option/i });
    expect(button).toBeDefined();
  });

  it('renders as button element with correct type', () => {
    render(<Select options={mockOptions} />);
    const button = screen.getByRole('button');
    expect(button.tagName).toBe('BUTTON');
    expect(button.getAttribute('type')).toBe('button');
  });

  it('should have data-slot attribute', () => {
    render(<Select options={mockOptions} />);
    const button = screen.getByRole('button');
    expect(button.getAttribute('data-slot')).toBe('select');
  });

  // 2. 드롭다운 열기/닫기 테스트
  it('opens dropdown on click', () => {
    render(<Select options={mockOptions} />);
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    expect(screen.getByRole('listbox')).toBeDefined();
  });

  it('closes dropdown after selecting an option', () => {
    render(<Select options={mockOptions} />);
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    const option = screen.getByText('Option 2');
    fireEvent.click(option);

    expect(screen.queryByRole('listbox')).toBeNull();
  });

  // 3. 선택 기능 테스트
  it('selects an option and calls onChange', () => {
    const handleChange = vi.fn();
    render(<Select options={mockOptions} onChange={handleChange} />);

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    const option = screen.getByText('Option 2');
    fireEvent.click(option);

    expect(handleChange).toHaveBeenCalledWith('2');
  });

  it('displays selected value', () => {
    render(<Select options={mockOptions} value="2" />);
    expect(screen.getByText('Option 2')).toBeDefined();
  });

  // 4. Disabled 상태 테스트
  it('disables select when disabled prop is true', () => {
    render(<Select options={mockOptions} disabled />);
    const trigger = screen.getByRole('button') as HTMLButtonElement;
    expect(trigger.disabled).toBe(true);
  });

  it('disables specific options', () => {
    const optionsWithDisabled = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2', disabled: true },
      { value: '3', label: 'Option 3' },
    ];
    render(<Select options={optionsWithDisabled} />);

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    const disabledOption = screen.getByText('Option 2');
    expect((disabledOption as HTMLButtonElement).disabled).toBe(true);
  });

  // 5. 외부 클릭 테스트
  it('closes dropdown on outside click', () => {
    render(
      <div>
        <Select options={mockOptions} />
        <button type="button">Outside</button>
      </div>
    );

    const trigger = screen.getByRole('button', { name: /select/i });
    fireEvent.click(trigger);
    expect(screen.getByRole('listbox')).toBeDefined();

    const outsideButton = screen.getByRole('button', { name: /outside/i });
    fireEvent.mouseDown(outsideButton);
    expect(screen.queryByRole('listbox')).toBeNull();
  });

  // 6. ESC 키 테스트
  it('closes dropdown on ESC key', () => {
    render(<Select options={mockOptions} />);

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    expect(screen.getByRole('listbox')).toBeDefined();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('listbox')).toBeNull();
  });

  // 7. ClassName 병합 테스트
  it('merges custom className', () => {
    render(<Select options={mockOptions} className="custom-class" />);
    const wrapper = screen.getByRole('button').parentElement;
    expect(wrapper?.className).toContain('custom-class');
  });
});

export {};

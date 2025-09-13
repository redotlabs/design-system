import { type ReactNode, useEffect } from 'react';
import { colors } from '@redotlabs/tokens';

type ThemeColor = Exclude<keyof typeof colors, 'white' | 'black'>;

type ColorPalette = {
  [key in
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900']: string;
};

export interface ThemeProviderProps {
  /**
   * 테마로 사용할 컬러 팔레트
   * @default 'blue'
   */
  color?: ThemeColor | ColorPalette;
  children: ReactNode;
}

/**
 * 디자인 시스템의 테마를 동적으로 적용하는 Provider 컴포넌트
 *
 * @example
 * ```tsx
 * <ThemeProvider color="blue">
 *   <App />
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider({
  color = 'blue',
  children,
}: ThemeProviderProps) {
  useEffect(() => {
    // primary colors 주입
    const colorPalette = typeof color === 'string' ? colors[color] : color;

    Object.entries(colorPalette).forEach(([key, value]) => {
      document.documentElement.style.setProperty(
        `--color-primary-${key}`,
        value as string
      );
    });
  }, [color]);

  return <> {children} </>;
}

import { type ReactNode } from 'react';
import { colors } from '@redotlabs/tokens';
import * as fonts from '@redotlabs/fonts';

export type ThemeColor = Exclude<keyof typeof colors, 'white' | 'black'>;
export type ThemeFont = keyof typeof fonts;

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
  font?: ThemeFont;
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
  font = 'pretendard',
  children,
}: ThemeProviderProps) {
  // primary colors 주입
  const colorPalette = typeof color === 'string' ? colors[color] : color;

  const cssVariables = Object.entries(colorPalette)
    .map(([key, value]) => `--color-primary-${key}: ${value}`)
    .join(';');

  const fontFamily = fonts?.[font]?.family ?? '';

  return (
    <>
      {cssVariables && <style>{`:root { ${cssVariables} }`}</style>}
      {fontFamily && <style>{`body { font-family: ${fontFamily}; }`}</style>}
      {children}
    </>
  );
}

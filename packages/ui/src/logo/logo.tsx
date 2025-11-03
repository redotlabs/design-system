import { ComponentProps } from 'react';
import LogoColor from './assets/logo-color.svg?react';
import LogoMono from './assets/logo-mono.svg?react';

export interface LogoTextProps extends ComponentProps<'svg'> {
  color?: 'color' | 'mono';
}

const LogoText = ({ color = 'color', ...props }: LogoTextProps) => {
  switch (color) {
    case 'color':
      return <LogoColor {...props} />;
    case 'mono':
      return <LogoMono {...props} />;
    default:
      return <LogoColor {...props} />;
  }
};

export default LogoText;

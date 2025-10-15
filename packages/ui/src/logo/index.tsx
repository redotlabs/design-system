import LogoText from './logo-text';
import Symbol from './symbol';
import { ComponentProps } from 'react';

export interface LogoProps extends ComponentProps<'svg'> {
  type?: 'logo' | 'symbol';
}

export function Logo({ type = 'logo', ...props }: LogoProps) {
  if (type === 'logo') return <LogoText {...props} />;
  return <Symbol {...props} />;
}

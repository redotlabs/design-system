import { ComponentProps } from 'react';
import SymbolBase from './assets/symbol-base.svg?react';
import SymbolSolid from './assets/symbol-solid.svg?react';
import symbol3d from './assets/symbol-3d.png';

type SVGProps = ComponentProps<'svg'>;
type ImgProps = ComponentProps<'img'>;
export type LogoSymbolProps = {
  variant?: 'base' | 'solid' | '3d';
} & (SVGProps | ImgProps);

const LogoSymbol = ({ variant = 'base', ...props }: LogoSymbolProps) => {
  switch (variant) {
    case 'base':
      return <SymbolBase {...(props as SVGProps)} />;
    case 'solid':
      return <SymbolSolid {...(props as SVGProps)} />;
    case '3d':
      return <img src={symbol3d} alt="Logo 3D" {...(props as ImgProps)} />;
    default:
      return <SymbolBase {...(props as SVGProps)} />;
  }
};

export default LogoSymbol;

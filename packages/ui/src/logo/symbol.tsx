import { ComponentProps } from 'react';
import SymbolBase from './assets/symbol-base.svg?react';
import SymbolSolid from './assets/symbol-solid.svg?react';

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
      return (
        <img
          src="https://cdn.redot.me/assets/symbol-3d.png"
          alt="Logo 3D"
          {...(props as ImgProps)}
        />
      );
    default:
      return <SymbolBase {...(props as SVGProps)} />;
  }
};

export default LogoSymbol;

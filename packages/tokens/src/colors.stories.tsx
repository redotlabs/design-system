import { Meta } from '@storybook/react-vite';
import { colors } from './color';

const meta: Meta = {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Color palette for the Redot design system.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

interface ColorSwatchProps {
  name: string;
  hex: string;
  variant?: string;
}

function ColorSwatch({ name, hex, variant }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full h-10 rounded-lg shadow-md"
        style={{ backgroundColor: hex }}
      />
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold text-gray-800">
          {name}
          {variant}
        </span>
        <span className="text-xs text-gray-500">{hex}</span>
      </div>
    </div>
  );
}

interface ColorPaletteProps {
  colorName: string;
  colorValues: Record<string, string> | { DEFAULT: string };
}

function ColorPalette({ colorName, colorValues }: ColorPaletteProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold mb-4 capitalize">{colorName}</h3>
      <div className="grid grid-cols-2 md:grid-cols-9 gap-4">
        {Object.entries(colorValues).map(([variant, hex]) => (
          <ColorSwatch
            key={variant}
            name={colorName}
            hex={hex}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}

export const Colors = {
  render: () => {
    const { white, black, ...otherColors } = colors;
    return (
      <div className="p-6">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4 capitalize">White & Black</h3>
          <div className="grid grid-cols-2 md:grid-cols-9 gap-4">
            <ColorSwatch name="white" hex={white.DEFAULT} />
            <ColorSwatch name="black" hex={black.DEFAULT} />
          </div>
        </div>
        {Object.entries(otherColors).map(([colorName, colorValues]) => (
          <ColorPalette
            key={colorName}
            colorName={colorName}
            colorValues={colorValues}
          />
        ))}
      </div>
    );
  },
};

import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Redot',
    brandImage: './logo.png',
    brandUrl: 'https://redot.me/',
    brandTarget: '_self',
    colorPrimary: '#000000',
    textColor: '#ffffff',
    colorSecondary: '#00000000',
    barSelectedColor: '#00000000',
    barHoverColor: '#00000000',
  }),
});

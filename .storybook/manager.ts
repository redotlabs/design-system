import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Tempoland',
    brandImage: './logo.png',
    brandUrl: 'https://tempoland.com/',
    brandTarget: '_self',
    textColor: '#ffffff',
    colorSecondary: '#000000',
    barSelectedColor: '#000000',
    barHoverColor: '#000000'
  }),
});
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Redot',
    brandImage: './logo.svg',
    brandUrl: 'https://storybook.redot.me/',
    brandTarget: '_self',
    colorPrimary: '#FAF9F8',
    textColor: '#1F1C1A',
    colorSecondary: '#1F1C1A',
    barSelectedColor: '#1F1C1A',
    barHoverColor: '#1F1C1A',
  }),
});

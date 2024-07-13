import { getTheme } from '@/lib/helper';

import { Color } from '@/types/colors';

const light: Color = {
  primary: { main: '#FFC107', light: '#FFC107', dark: '#FFC107' },
  secondary: { main: '#6D9B87', light: '#6D9B87', dark: '#6D9B87' },
  border: { main: '#924500', light: '#F57F17', dark: '#572900' },
  textWhite: { main: '#EDEDED', light: '#FFFFFF', dark: '#A6A6A6' },
  textBlack: { main: '#2E2E2E', light: '#707070', dark: '#000000' },
};

const dark: Color = {
  primary: { main: '#FFC107', light: '#FFC107', dark: '#FFC107' },
  secondary: { main: '#6D9B87', light: '#6D9B87', dark: '#6D9B87' },
  border: { main: '#924500', light: '#F57F17', dark: '#572900' },
  textWhite: { main: '#2E2E2E', light: '#707070', dark: '#000000' },
  textBlack: { main: '#EDEDED', light: '#FFFFFF', dark: '#A6A6A6' },
};

export const colors = getTheme() === 'dark' ? dark : light;

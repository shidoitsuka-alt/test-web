import { getTheme } from '@/lib/helper';

import { Color } from '@/types/colors';

const light: Color = {
  primary: { main: '#deeb34', light: '#dfe868', dark: '#9aa147' },
  secondary: { main: 'string;', light: 'string;', dark: 'string;' },
};

const dark: Color = {
  primary: { main: '#deeb34', light: '#dfe868', dark: '#9aa147' },
  secondary: { main: 'string;', light: 'string;', dark: 'string;' },
};

export const colors = getTheme() === 'dark' ? dark : light;

import { tss } from 'tss-react';

type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};

export const makeStyles = tss.create;

export function openGraph({
  siteName,
  templateTitle,
  description,
  logo = 'https://url.com/images/logo.jpg',
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle ? encodeURIComponent(templateTitle.trim()) : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://url.com/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    const item = window.localStorage.getItem(key);
    return item;
  }
  return null;
}

export function setLocalStorage(key: string, value: string) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, value);
  }
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

export function getTheme(): 'light' | 'dark' {
  const theme = getFromLocalStorage('theme');
  if (!theme) setLocalStorage('theme', 'light');
  return getFromLocalStorage('theme') as 'light' | 'dark';
}

export function hexOpacity(hexCode: string, opacity: number, removeOpacity?: boolean): string {
  if (removeOpacity) {
    if (hexCode.toUpperCase() === '#FFFFFF') {
      const newHex = `rgba(255, 255, 255, ${opacity})`;
      return newHex;
    }

    const r = parseInt(hexCode.slice(1, 3), 16);
    const g = parseInt(hexCode.slice(3, 5), 16);
    const b = parseInt(hexCode.slice(5, 7), 16);

    const newR = Math.round((1 - opacity) * 255 + opacity * r);
    const newG = Math.round((1 - opacity) * 255 + opacity * g);
    const newB = Math.round((1 - opacity) * 255 + opacity * b);

    const newHex = `#${newR.toString(16).padStart(2, '0')}${newG
      .toString(16)
      .padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;

    return newHex.toUpperCase();
  } else {
    const opacityHex = Math.round(opacity * 255)
      .toString(16)
      .padStart(2, '0');
    if (hexCode) return hexCode.slice(0, 7) + opacityHex.toUpperCase();
    return '#000';
  }
}

export function formatMoney(cur: number | string, decimal = 0): string {
  const val = typeof cur === 'string' ? parseFloat(cur) : cur;
  if (val < 0) {
    return '(' + formatMoney(-val, decimal) + ')';
  }

  const value = Math.abs(Math.floor(val * Math.pow(10, decimal)));
  const valueParts = value.toString().split('.');
  valueParts[0] = valueParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return valueParts.join('.');
}

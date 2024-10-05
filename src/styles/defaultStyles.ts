import { CSSProperties } from 'react';

import { colors } from '@/config/colors';

export default {
  lightBorder: {
    border: `.35rem solid ${colors.border.light}`,
    borderRadius: 8,
  },
} as Record<string, CSSProperties>;

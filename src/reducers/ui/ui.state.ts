import { getTheme } from '@/lib/helper';

const UIState = {
  theme: getTheme(),
  toast: {
    type: '',
    message: '',
    show: false,
    duration: 3000,
  },
};

export default UIState;

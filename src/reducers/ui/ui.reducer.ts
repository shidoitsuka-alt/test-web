import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import UIState from '@/reducers/ui/ui.state';

export const UIReducer = createSlice({
  name: 'ui',
  initialState: UIState,
  reducers: (create) => ({
    setTheme: create.reducer((state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    }),
    showToast: create.reducer(
      (
        state,
        action: PayloadAction<{
          message: string;
          type: 'success' | 'info' | 'error';
          duration?: number;
        }>
      ) => {
        const { message, type, duration } = action.payload;
        state.toast = {
          ...state.toast,
          show: true,
          message,
          type,
          duration: duration || 3000,
        };
      }
    ),
    hideToast: create.reducer((state) => {
      state.toast = {
        ...state.toast,
        show: false,
        duration: 3000,
      };
    }),
  }),
});

export const { setTheme, showToast, hideToast } = UIReducer.actions;

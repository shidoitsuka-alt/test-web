import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import UIState from '@/reducers/ui/ui.state';

export const UIReducer = createSlice({
  name: 'ui',
  initialState: UIState,
  reducers: (create) => ({
    setTheme: create.reducer((state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    }),
  }),
});

export const { setTheme } = UIReducer.actions;

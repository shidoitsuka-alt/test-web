'use-client';

import { Action, combineSlices, configureStore } from '@reduxjs/toolkit';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { ThunkDispatch } from 'redux-thunk';

import RegisterReducer from '@/lib/reducers';

import { UIReducer } from '@/reducers/ui/ui.reducer';

export type SliceAction<T> = { payload: T; type: string };

export type TypeReducer<T extends keyof (typeof RegisterReducer)[keyof typeof RegisterReducer]> = {
  [K in keyof typeof RegisterReducer]: T extends 'getInitialState'
    ? ReturnType<(typeof RegisterReducer)[K][T]>
    : (typeof RegisterReducer)[K][T];
};

const uiPersistConfig = {
  key: 'ui',
  storage,
  blacklist: ['toast'],
};

const persistedUIReducer = persistReducer(uiPersistConfig, UIReducer.reducer);

const reducer = combineSlices({
  ui: persistedUIReducer,
});

const persistedReducer = persistReducer(
  { key: 'localNextBoilterplate', version: 1, storage, blacklist: ['ui'] },
  reducer
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export type RootState = TypeReducer<'getInitialState'>;
export type AppDispatch = ThunkDispatch<RootState, any, Action>;

export default StoreProvider;

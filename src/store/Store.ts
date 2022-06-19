import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './CounterSlice'

import storage from 'redux-persist/lib/storage'

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, counterReducer)

export const Store = configureStore({
    reducer: {counter:persistedReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export type AppDispatch = typeof Store.dispatch
export type RootState = ReturnType<typeof Store.getState>
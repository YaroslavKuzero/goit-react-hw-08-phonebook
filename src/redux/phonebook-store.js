import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactReducers } from './phonebook';
import { authReducers } from './auth';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const store = configureStore({
  reducer: {
    contacts: contactReducers,
    auth: persistReducer(persistConfig, authReducers)
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default {
  store,
  persistor
};
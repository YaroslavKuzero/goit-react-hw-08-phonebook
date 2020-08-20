import { configureStore } from '@reduxjs/toolkit';
import { contactReducers } from './phonebook';
import { authReducers } from './auth';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default {
  store,
  persistor
};
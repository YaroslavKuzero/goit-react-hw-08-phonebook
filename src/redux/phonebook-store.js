import { configureStore } from '@reduxjs/toolkit';
import contactReducers from './phonebook-reducers';


const store = configureStore({
  reducer: contactReducers,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
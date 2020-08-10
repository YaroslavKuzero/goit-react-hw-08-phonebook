import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from './phonebook-actions';

const contacts = createReducer([], {
  [contactActions.getContactsSuccess]: (_, { payload }) => payload,
  [contactActions.addContactSuccess]: (state, { payload }) => [payload, ...state],
  [contactActions.deleteContactSuccess]: (state, { payload }) => state.filter(item => item.id !== payload,)
})

const filter = createReducer('', {
  [contactActions.changeFilter]: (_, action) => action.payload,
})

const loading = createReducer(false, {
  [contactActions.getContactsRequest]: () => true,
  [contactActions.getContactsSuccess]: () => false,
  [contactActions.getContactsError]: () => false,
  [contactActions.addContactRequest]: () => true,
  [contactActions.addContactSuccess]: () => false,
  [contactActions.addContactError]: () => false,
  [contactActions.deleteContactRequest]: () => true,
  [contactActions.deleteContactSuccess]: () => false,
  [contactActions.deleteContactError]: () => false,
})

export default combineReducers({ contacts, filter, loading });
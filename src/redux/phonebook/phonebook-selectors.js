import { createSelector } from '@reduxjs/toolkit';


const getContacts = (state) => state.contacts.contacts;
const getFilter = (state) => state.contacts.filter;
const getLoading = (state) => state.contacts.loading;

const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
});

export default {
  getContacts,
  getFilter,
  getLoading,
  getFilteredContacts
}
import { createSelector } from '@reduxjs/toolkit';


const getContacts = (state) => state.contacts;
const getFilter = (state) => state.filter;
const getLoading = (state) => state.loding;

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
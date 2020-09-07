import React from 'react';
import { useSelector } from 'react-redux';
import { contactSelectors } from '../../redux/phonebook';

import Form from '../../components/Form';
import Filter from '../../components/FindContact';
import ContactList from '../../components/ContactList';
import Spinner from '../../components/Spinner';

import s from './PhoneBook.module.css';




export default function Phonebook() {
  const isloading = useSelector(contactSelectors.getLoading)
  return (
    <div
      className={s.phonebook}>
      {isloading ? <Spinner /> : <h1 className={s.phonebook_header}>Phonebook</h1>}
      <h2 className={s.section_header}>Create a new contact</h2>
      <Form />
      <h2 className={s.section_header}>Contacts</h2>
      <Filter />
      <ContactList />
    </div >
  )
}

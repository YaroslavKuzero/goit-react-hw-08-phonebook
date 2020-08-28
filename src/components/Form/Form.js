import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactOperations, contactSelectors } from '../../redux/phonebook';
import styles from './Form.module.css';

export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactSelectors.getContacts);

  const addContactHandler = useCallback((event) => {
    event.preventDefault();
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} already in your contact list`)
      return;
    }

    dispatch(contactOperations.addContact(name, number));
    resetInputs();
  }, [dispatch, name, number, contacts]);

  const changeHandler = useCallback((event) => {
    const { name, value } = event.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  }, [])

  const resetInputs = () => {
    setName('');
    setNumber('');
  }

  return (
    <form
      className={styles.form}
      onSubmit={addContactHandler}>
      <label>
        <input
          className={styles.input_name}
          name='name'
          type='text'
          placeholder='Name'
          value={name}
          onChange={changeHandler}></input>
      </label>
      <label>
        <input
          className={styles.input_num}
          name='number'
          type='tel'
          placeholder='Number'
          value={number}
          onChange={changeHandler}></input>
      </label>
      <button
        className={styles.btn_add}
        type='submit'>
        Add contact
        </button>
    </form>
  )
}

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactActions, contactSelectors } from '../../redux/phonebook';
import styles from './FindContact.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactSelectors.getFilter);
  const onChange = (event) => dispatch(contactActions.changeFilter(event.target.value));

  return (
    <label>
      <input
        className={styles.find_contact}
        type='text'
        placeholder='Find contact by name'
        value={value}
        onChange={onChange}>
      </input>
    </label>
  );
}

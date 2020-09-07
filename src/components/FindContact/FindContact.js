import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactActions, contactSelectors } from '../../redux/phonebook';

import { find_contact } from './FindContact.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactSelectors.getFilter);
  const onChange = ({ target: { value } }) => dispatch(contactActions.changeFilter(value));

  return (
    <label>
      <input
        className={find_contact}
        type='text'
        placeholder='Find contact by name'
        value={value}
        onChange={onChange}>
      </input>
    </label>
  );
}

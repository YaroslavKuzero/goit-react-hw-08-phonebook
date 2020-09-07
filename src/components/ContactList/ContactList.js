import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactOperations, contactSelectors } from '../../redux/phonebook';

import s from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const items = useSelector(contactSelectors.getFilteredContacts);

  useEffect(() => {
    dispatch(contactOperations.fetchContacts())
  }, [dispatch])

  return (
    <ul className={s.contact_list}>
      {items.map(item => (
        <li className={s.contact_list_item} key={item.id}>
          <span className={s.contact_name}>{item.name}: </span>
          <span className={s.contact_number}>{item.number}</span>
          <button className={s.btn_delete} title='delete'
            onClick={() => dispatch(contactOperations.deleteContact(item.id))}
          >x</button>
        </li>
      ))}
    </ul>
  )
}

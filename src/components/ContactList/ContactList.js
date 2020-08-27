import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { contactOperations, contactSelectors } from '../../redux/phonebook';

export default function ContactList() {
  const dispatch = useDispatch();
  const renderItems = useSelector(contactSelectors.getFilteredContacts);

  useEffect(() => {
    dispatch(contactOperations.fetchContacts())
  }, [dispatch])

  return (
    <ul className={styles.contact_list}>
      {renderItems.map(item => (
        <li className={styles.contact_list_item} key={item.id}>
          <span className={styles.contact_name}>{item.name}: </span>
          <span className={styles.contact_number}>{item.number}</span>
          <button className={styles.btn_delete} title='delete'
            onClick={() => dispatch(contactOperations.deleteContact(item.id))}
          >x</button>
        </li>
      ))}
    </ul>
  )
}

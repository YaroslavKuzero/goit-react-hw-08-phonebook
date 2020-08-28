import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css'

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getAuthenticated);

  return (
    <nav>
      <NavLink className={styles.linkHome} exact to="/">
        Home
    </NavLink>
      {isAuthenticated && <NavLink className={styles.linkContacts} exact to="/contacts">
        Contacts
    </NavLink>}
    </nav>
  )
};

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import { linkHome, linkContacts } from './Navigation.module.css'

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getAuthenticated);

  return (
    <nav>
      <NavLink className={linkHome} exact to="/">
        Home
    </NavLink>
      {isAuthenticated && <NavLink className={linkContacts} exact to="/contacts">
        Contacts
    </NavLink>}
    </nav>
  )
};

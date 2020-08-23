import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css'

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink className={styles.linkHome} exact to="/">
      Home
    </NavLink>
    {isAuthenticated && <NavLink className={styles.linkContacts} exact to="/contacts">
      Contacts
    </NavLink>}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getAuthenticated(state)
})

export default connect(mapStateToProps, null)(Navigation);
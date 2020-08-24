import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      exact
      className={styles.linkRegister}
      to="/register"
    >
      Registration
    </NavLink>
    <NavLink
      exact
      className={styles.linkLogin}
      to="/login"
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
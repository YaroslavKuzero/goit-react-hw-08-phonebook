import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      exact
      className={s.linkRegister}
      to="/register"
    >
      Registration
    </NavLink>
    <NavLink
      exact
      className={s.linkLogin}
      to="/login"
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
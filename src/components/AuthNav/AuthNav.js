import React from 'react';
import { NavLink } from 'react-router-dom';

import { linkRegister, linkLogin } from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      exact
      className={linkRegister}
      to="/register"
    >
      Registration
    </NavLink>
    <NavLink
      exact
      className={linkLogin}
      to="/login"
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
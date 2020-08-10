import React from 'react';
import { NavLink } from 'react-router-dom';


const AuthNav = () => (
  <div>
    <NavLink
      exact
      to="/register"
    >
      Registration
    </NavLink>
    <NavLink
      exact
      to="/login"
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
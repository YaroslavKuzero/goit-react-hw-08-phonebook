import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink exact to="/">
      Home Page
    </NavLink>
    <NavLink exact to="/contacts">
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
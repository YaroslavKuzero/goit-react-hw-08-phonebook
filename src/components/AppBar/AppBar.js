import React from 'react';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu'
import AuthNav from '../AuthNav';


const AppBar = ({ isAuthenticated }) => (
  <div>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </div>
);

export default AppBar;
import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getAuthenticated);

  return (
    <div className={styles.bar}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  )
};

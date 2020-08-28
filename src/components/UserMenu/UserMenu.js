import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const onLogout = useCallback(
    () => {
      dispatch(authOperations.logout())
    },
    [dispatch],
  )
  return (
    <div>
      <span className={styles.welcome}>Welcome, {name}!</span>
      <button
        className={styles.btnLogout}
        type="button"
        onClick={onLogout}>
        Logout
    </button>
    </div>
  )
};

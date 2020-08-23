import React from 'react';
import { connect } from 'react-redux'
import { authSelectors, authOperations } from '../../redux/auth'
import styles from './UserMenu.module.css'

const UserMenu = ({ name, onLogout }) => (
  <div>
    <span class={styles.welcome}>Welcome, {name}!</span>
    <button class={styles.btnLogout} type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state)
})

const mapDispatchToProps = {
  onLogout: authOperations.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
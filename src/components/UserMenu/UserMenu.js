import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

const UserMenu = ({ name, onLogout }) => (
  <div>
    <span className={styles.welcome}>Welcome, {name}!</span>
    <button className={styles.btnLogout} type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

UserMenu.propTypes = {
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state)
})

const mapDispatchToProps = {
  onLogout: authOperations.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
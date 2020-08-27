import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <div className={styles.bar}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </div>
);

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getAuthenticated(state)
});

export default connect(mapStateToProps, null)(AppBar);
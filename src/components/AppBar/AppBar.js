import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth'
import Navigation from '../Navigation';
import UserMenu from '../UserMenu'
import AuthNav from '../AuthNav';
import styles from './AppBar.module.css'


const AppBar = ({ isAuthenticated }) => (
  <div class={styles.bar}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getAuthenticated(state)
});

export default connect(mapStateToProps, null)(AppBar);
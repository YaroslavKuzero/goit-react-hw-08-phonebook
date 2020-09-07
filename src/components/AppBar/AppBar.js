import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import PropTypes from 'prop-types';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

import s from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <div className={s.bar}>
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
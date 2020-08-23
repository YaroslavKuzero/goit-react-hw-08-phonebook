import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';


const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
    <Route
      {...routeProps}
      render={
        props => isAuthenticated ? <Component{...props} /> : <Redirect to='/' />
      }
    />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps, null)(PrivateRoute)
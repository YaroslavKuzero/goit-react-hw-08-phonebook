import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
    <Route
      {...routeProps}
      render={
        props => isAuthenticated && routeProps.restricted ? (
          <Redirect to='/contacts' />
        ) : (
            < Component{...props} />
          )
      }
    />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps, null)(PublicRoute)
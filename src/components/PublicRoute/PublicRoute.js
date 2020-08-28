import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';


export default function PublicRoute({
  children,
  ...routeProps
}) {
  const isAuthenticated = useSelector(authSelectors.getAuthenticated);

  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? <Redirect to='/contacts' /> : children}
    </Route>
  )
};

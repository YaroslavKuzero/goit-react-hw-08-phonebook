import React, { useEffect, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Spinner from './components/Spinner';
import AppBar from './components/AppBar';

import './css/body.css';

const Home = lazy(() => import('./Views/Home' /* webpackChunkName: "home-page" */));
const Login = lazy(() => import('./Views/Login' /* webpackChunkName: "login-page" */));
const Register = lazy(() => import('./Views/Register' /* webpackChunkName: "register-page" */));
const Phonebook = lazy(() => import('./Views/PhoneBook' /* webpackChunkName: "phonebook-page" */));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch])

  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <PrivateRoute exact path='/contacts'>
            <Phonebook />
          </PrivateRoute>

          <PublicRoute exact restricted path='/register'>
            <Register />
          </PublicRoute>

          <PublicRoute exact restricted path='/login'>
            <Login />
          </PublicRoute>

        </Switch>
      </Suspense>
    </>
  )
}

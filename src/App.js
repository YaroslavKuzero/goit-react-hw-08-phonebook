import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute'
import Spinner from './components/Spinner'
import './css/body.css';
import AppBar from './components/AppBar';

const Home = lazy(() => import('./Views/Home' /* webpackChunkName: "home-page" */));
const Login = lazy(() => import('./Views/Login' /* webpackChunkName: "login-page" */));
const Register = lazy(() => import('./Views/Register' /* webpackChunkName: "register-page" */));
const Phonebook = lazy(() => import('./Views/PhoneBook' /* webpackChunkName: "phonebook-page" */));

class App extends Component {

  componentDidMount() {
    this.props.onCurrentUser()
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute exact path='/contacts' component={Phonebook} />
            <PublicRoute exact restricted path='/register' component={Register} />
            <PublicRoute exact restricted path='/login' component={Login} />
          </Switch>
        </Suspense>
      </>
    )
  }
}

const mapDispatchToProps = {
  onCurrentUser: authOperations.getCurrentUser
}


export default connect(null, mapDispatchToProps)(App);

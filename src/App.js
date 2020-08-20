import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import './css/body.css';
import AppBar from './components/AppBar';
import Home from './Views/Home';
import Login from './Views/Login'
import Register from './Views/Register';
import Phonebook from './Views/PhoneBook';


class App extends Component {

  componentDidMount() {
    this.props.onCurrentUser()
  }
  render() {
    return (
      <>
        <AppBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contacts' component={Phonebook} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </>
    )
  }
}

const mapDispatchToProps = {
  onCurrentUser: authOperations.getCurrentUser
}


export default connect(null, mapDispatchToProps)(App);

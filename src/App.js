import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';
import './css/body.css';
import AppBar from './components/AppBar';
import Home from './Views/Home';
import Login from './Views/Login'
import Register from './Views/Register';
import Phonebook from './Views/PhoneBook';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contacts' component={Phonebook} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

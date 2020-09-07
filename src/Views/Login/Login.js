import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

import s from './Login.module.css';

const initialState = {
  email: '',
  password: '',
};

class Login extends Component {
  state = initialState;

  handleChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { onLogin } = this.props
    event.preventDefault();
    onLogin(this.state)
    this.setState(initialState);
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={s.loginPage}>
        <h1 className={s.title}>Login page</h1>

        <form
          className={s.form}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className={s.label}>
            E-mail
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button className={s.btnLogin} type="submit">Login</button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  onLogin: (data) => dispatch(authOperations.login(data))
})

export default connect(null, mapDispatchToProps)(Login);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

import s from './Register.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
}
class Register extends Component {
  state = initialState

  handleChange = (event) => {
    const { name, value } = event.currentTarget
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { onRegister } = this.props
    event.preventDefault()
    onRegister(this.state)
    this.setState(initialState);
  }


  render() {
    const { name, email, password } = this.state;
    return (
      <div className={s.registration}>
        <h1 className={s.title}> Registration page</h1>

        <form
          className={s.form}
          onSubmit={this.handleSubmit}
          autoComplete="off" >
          <label className={s.label}> Name
            <input
              className={s.input}
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange} />
          </label>

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

          <button className={s.btnRegister} type='submit'>Register</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: (data) => dispatch(authOperations.register(data))
})

export default connect(null, mapDispatchToProps)(Register);
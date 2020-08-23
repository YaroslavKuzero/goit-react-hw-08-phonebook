import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './Register.module.css'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  handleChange = (event) => {
    const { name, value } = event.currentTarget
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onRegister(this.state)
    this.setState({ name: '', email: '', password: '' });
  }


  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.registration}>
        <h1 className={styles.title}> Registration page</h1>

        <form
          className={styles.form}
          onSubmit={this.handleSubmit}
          autoComplete="off" >
          <label className={styles.label}> Name
            <input
              className={styles.input}
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange} />
          </label>

          <label className={styles.label}>
            E-mail
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.btnRegister} type='submit'>Register</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: (data) => dispatch(authOperations.register(data))
})

export default connect(null, mapDispatchToProps)(Register);
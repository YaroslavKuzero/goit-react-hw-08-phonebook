import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './Login.module.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onLogin(this.state)
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.loginPage}>
        <h1 className={styles.title}>Login page</h1>

        <form
          className={styles.form}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
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

          <button className={styles.btnLogin} type="submit">Login</button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  onLogin: (data) => dispatch(authOperations.login(data))
})

export default connect(null, mapDispatchToProps)(Login);

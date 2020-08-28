import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './Login.module.css';


export default function Login() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback((event) => {
    const { name, value } = event.currentTarget;
    name === 'email' ? setEmail(value) : setPassword(value);
  }, [],
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(authOperations.login(email, password))
      resetInputs()
    },
    [dispatch, email, password],
  );

  const resetInputs = () => {
    setEmail('');
    setPassword('');
  }

  return (
    <div className={styles.loginPage}>
      <h1 className={styles.title}>Login page</h1>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={styles.label}>
          E-mail
            <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Password
            <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={styles.btnLogin} type="submit">Login</button>
      </form>
    </div>
  );
}

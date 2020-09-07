import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import s from './Login.module.css';


export default function Login() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(({ currentTarget: { name, value } }) => {
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
    <div className={s.loginPage}>
      <h1 className={s.title}>Login page</h1>

      <form
        className={s.form}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={s.label}>
          E-mail
            <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
            <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={s.btnLogin} type="submit">Login</button>
      </form>
    </div>
  );
}

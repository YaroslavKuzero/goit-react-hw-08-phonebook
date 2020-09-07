import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import s from './Register.module.css';

export default function Register() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(
    ({ currentTarget: { name, value } }) => {
      switch (name) {
        case 'name':
          setName(value)
          break;
        case 'email':
          setEmail(value)
          break;
        case 'password':
          setPassword(value)
          break;

        default:
          console.log(new Error());
          break;
      }
    },
    [],
  );

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    dispatch(authOperations.register(name, email, password));
    resetInputs();
  }, [dispatch, email, name, password])

  const resetInputs = () => {
    setName('');
    setEmail('');
    setPassword('');
  }
  return (
    <div className={s.registration}>
      <h1 className={s.title}> Registration page</h1>

      <form
        className={s.form}
        onSubmit={handleSubmit}
        autoComplete="off" >
        <label className={s.label}> Name
            <input
            className={s.input}
            type='text'
            name='name'
            value={name}
            onChange={handleChange} />
        </label>

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

        <button className={s.btnRegister} type='submit'>Register</button>
      </form>
    </div>
  )
}

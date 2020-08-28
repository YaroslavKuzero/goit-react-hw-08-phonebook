import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './Register.module.css'

export default function Register() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.currentTarget
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
    <div className={styles.registration}>
      <h1 className={styles.title}> Registration page</h1>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        autoComplete="off" >
        <label className={styles.label}> Name
            <input
            className={styles.input}
            type='text'
            name='name'
            value={name}
            onChange={handleChange} />
        </label>

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

        <button className={styles.btnRegister} type='submit'>Register</button>
      </form>
    </div>
  )
}

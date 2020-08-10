import React, { Component } from 'react';


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
    this.setState({ name: '', email: '', password: '' });
  }


  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1> Registration page</h1>

        <form onSubmit={this.handleSubmit}
          autoComplete="off" >
          <label> Name
            <input type='text' name='name' value={name} onChange={this.handleChange} />
          </label>

          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type='submit'>Register</button>
        </form>
      </div>
    )
  }
}

export default Register;
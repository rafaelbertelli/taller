import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from '../base'


class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      isLoggin: false,
      error: false,
      msg: ''
    }
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  handleLogin = () => {
    this.setState({isLoggin: true})
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({isLoggedIn: true})
        // this.setState({value: event.target.value}, function () {
        //   console.log(this.state.value);
        // });
      })
      .catch(() => {
        this.setState({
          isLoggin: false,
          error: true
        })
      })

  }

  render () {
    if (this.state.isLoggedIn) {
      return (
        <Redirect to='/admin' />
      )
    }

    return (
      <div className='pure-form'>
        <fieldset>
          <legend>A compact inline form</legend>

          <input
            type='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />

          <button onClick={this.handleLogin} className='pure-button pure-button-primary'>Sign in</button>
        </fieldset>
      </div>
    )
  }
}

export default Login

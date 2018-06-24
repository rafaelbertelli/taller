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
      isAuthing: true,
      error: false,
      msg: ''
    }
  }

  handleChange = (e) => {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  handleLogin = () => {
    this.setState({ isLoggin: true })
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({ isLoggedIn: true })
        console.log('logou')
      })
      .catch((err) => {
        this.setState({ error: true })
        console.log(err)
      })
      .finally(() => {
        this.setState({ isLoggin: false })
        console.log('finalizou')
      })
  }

  componentDidMount () {
    auth.onAuthStateChanged(user => {
      this.setState({
        isAuthing: false,
        isLoggedIn: !!user
      })
    })
  }

  render () {
    if (this.state.isAuthing) {
      return (
        <div className='pure-form'>
          <h1>Aguarde...</h1>
        </div>
      )
    }
    
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
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button onClick={this.handleLogin} className='pure-button pure-button-primary'>Sign in</button>
        </fieldset>
      </div>
    )
  }
}

export default Login

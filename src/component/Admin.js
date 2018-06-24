import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { auth } from '../base'
import Cliente from './Cliente'

class Admin extends Component {
  constructor () {
    super()

    this.state = {
      isAuthing: true,
      isLoggedIn: false
    }
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

    if (!this.state.isLoggedIn) {
      return <Redirect to='/login' />
    }

    return (
      <div className='pure-form'>
        <div className='header'>
          <h1>Administração</h1>
          <h2>Painel de controle</h2>
        </div>

        <Switch>
          <Route exact path='/admin' render={() => (
            <div>
              <h1>Bem vindo à administração do mundo!</h1>
            </div>
          )} />

          <Route exact path={`${this.props.match.path}/cliente`} component={Cliente} />
        </Switch>

      </div>
    )
  }
}

export default Admin

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import base, { auth } from '../base'

class Cliente extends Component {
  constructor (props) {
    super(props)

    this.state = {
      clientes: {},
      isLoggedIn: false,
      isLoggin: false,
      isAuthing: true
    }
  }

  componentDidMount () {
    auth.onAuthStateChanged(user => {
      this.setState({
        isAuthing: false,
        isLoggedIn: !!user
      })

      if (!!user) {
        base.syncState('clientes', {
          context: this,
          state: 'clientes',
          asArray: false
        })
      }
    })
  }

  _listClients = (key, { nome, celular, endereco, complemento }) => {
    const style = key % 2 !== 0 ? 'pure-table-odd' : ''
    return (
      <tr className={style} key={key}>
        <td>{nome}</td>
        <td>{celular}</td>
        <td>{endereco}</td>
        <td>{complemento}</td>
      </tr>
    )
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
      return (
        <Redirect to='/login' />
      )
    }

    return (
      <div>
        <div className='pure-u-1-1'>
          <table className="pure-table pure-table-horizontal">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Celular</th>
                <th>Endereço</th>
                <th>Complemento</th>
              </tr>
            </thead>

            <tbody>
              {Object
                .keys(this.state.clientes)
                .map(key => this._listClients(key, this.state.clientes[key]))}
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

export default Cliente

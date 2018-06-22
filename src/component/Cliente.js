import React, { Component } from 'react'
import base from '../base'

class Cliente extends Component {
  constructor (props) {
    super(props)

    this.state = {
      clientes: {}
    }
  }

  componentDidMount () {
    base.syncState('clientes', {
      context: this,
      state: 'clientes',
      asArray: false
    })
  }

  render () {
    return (
      <div className='pure-g'>
        <h1>{JSON.stringify(this.state.clientes)}</h1>
      </div>
    )
  }
}

export default Cliente

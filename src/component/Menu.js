import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../base'

class Menu extends React.Component {
  constructor () {
    super()

    this.state = {
      isLoggedIn: false,
      isAuthing: true,
    }
  }

  handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log('logout')
        window.location = window.location.origin
        
      }).catch(() => {
        console.log('erro no logout')
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
    return (
      <div>
        <div id='menu'>
          <div className='pure-menu'>
            <Link to='/' className='pure-menu-heading'>Bertelli</Link>
            <ul className='pure-menu-list'>
              <li className='pure-menu-item menu-item-divided pure-menu-selected'>
                <Link to='/' className='pure-menu-link'>Home</Link>
              </li>
              <li className='pure-menu-item'>
                <Link to='/login' className='pure-menu-link'>Login</Link>
              </li>

              {
                this.state.isLoggedIn && 
                <div>
                  <li className='pure-menu-item'>
                    <Link to='/admin/cliente' className='pure-menu-link'>Cliente</Link>
                  </li>
                  <li className='pure-menu-item'>
                    <button className='pure-menu-link' onClick={this.handleLogout}>Logout</button>
                  </li>
                </div>
              }

            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default Menu

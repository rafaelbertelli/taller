import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
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
            <li className='pure-menu-item'>
              <Link to='/cliente' className='pure-menu-link'>Cliente</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu

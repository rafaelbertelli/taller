import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './vendor/pure-min.css'
import './vendor/side-menu.css'
import './css/index.css'
import './css/layout.css'

import Home from './component/Home'
import Login from './component/Login'
import Menu from './component/Menu'
import Error404 from './component/Error404'
import Cliente from './component/Cliente'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='container boilerplate shaddow'>
          <div id='layout'>
            <Menu />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/cliente' component={Cliente} />
              <Route component={Error404} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App

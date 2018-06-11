import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './component/Home'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='container boilerplate shaddow'>

          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>

        </div>
      </Router>
    )
  }
}

export default App

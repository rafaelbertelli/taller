import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './vendor/pure-min.css'
import './vendor/side-menu.css'

import './css/index.css'
import './css/layout.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

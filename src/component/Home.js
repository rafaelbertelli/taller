import React from 'react'
import base from '../base'

export default class Home extends React.Component {
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
      <div>
        <div id='main'>
          <div className='header'>
            <h1>Page Title</h1>
            <h2>A subtitle for your page goes here</h2>
          </div>

          <div className='content'>
            <h2 className='content-subhead'>How to use this layout</h2>
            <p>
              To use this layout, you can just copy paste the HTML, along with the CSS in <a href='/css/layouts/side-menu.css' alt='Side Menu CSS'>side-menu.css</a>, and the JavaScript in <a href='/js/ui.js'>ui.js</a>. The JS file uses vanilla JavaScript to simply toggle an <code>active</code> class that makes the menu responsive.
            </p>

            <h2 className='content-subhead'>Now Let's Speak Some Latin</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className='pure-g'>
              <div className='pure-u-1-4'>
                <img className='pure-img-responsive' src='http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg' alt='Peyto Lake' />
              </div>
              <div className='pure-u-1-4'>
                <img className='pure-img-responsive' src='http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg' alt='Train' />
              </div>
              <div className='pure-u-1-4'>
                <img className='pure-img-responsive' src='http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg' alt='T-Shirt Store' />
              </div>
              <div className='pure-u-1-4'>
                <img className='pure-img-responsive' src='http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg' alt='Mountain' />
              </div>
            </div>

            <h2 className='content-subhead'>Try Resizing your Browser</h2>
            {Object.keys(this.state.clientes).map(key => {
              return console.log(this.state.clientes[key])
            })}
          </div>
        </div>
      </div>
    )
  }
}

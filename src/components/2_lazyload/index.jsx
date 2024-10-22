import React, { Component } from 'react'
import {NavLink , Routes,Route} from 'react-router-dom'

// import About from './About'
import About from './About'
import Home from './Home'

export default class Demo extends Component {


  render() {
    return (
      <div id="root">
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              
                <NavLink className='list-group-item' to='/about'>about</NavLink>
                <NavLink className='list-group-item' to='/home'>home</NavLink>


            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Routes>
                  <Route path='/about' element={<About></About>}/>
                  <Route path='/home' element={<Home></Home>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

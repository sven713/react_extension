import React, { Component } from 'react'
import './index.css'


const MyContext = React.createContext()
const {Provider} = MyContext


export default class A extends Component {
  state={
    name:'tom'
  }
  render() {
    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>用户名是:{this.state.name}</h4>
        <Provider value={this.state.name}>
          <B></B>
        </Provider>
      </div>
    )
  }
}


class B extends Component {
  static contextType = MyContext
  
  render() {
    console.log('bbb--',this.context)
    return (
      <div className='child'>
        <h3>我是B组件</h3>
        <h4>A组件给我的户名是:???</h4>
        <C></C>
      </div>
    )
  }
}

class C extends Component {
  static contextType = MyContext
  render() {
    console.log('c--',this)
    return (
      <div className='grand'>
        <h3>我是C组件</h3>
        <h4>A组件给我的用户名是:{this.context}</h4>
      </div>
    )
  }
}
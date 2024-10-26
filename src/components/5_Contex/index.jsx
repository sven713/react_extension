import React, { Component } from 'react'

export default class A extends Component {
  state={
    name:'tom'
  }
  render() {
    return (
      <div>
        <h3>我是A组件</h3>
        <h4>用户名是:{this.state.name}</h4>
        <B></B>
      </div>
    )
  }
}


class B extends Component {
  
  render() {
    return (
      <div>
        <h3>我是B组件</h3>
        <h4>A组件给我的户名是:???</h4>
        <C></C>
      </div>
    )
  }
}

class C extends Component {
  
  render() {
    return (
      <div>
        <h3>我是C组件</h3>
        <h4>B组件给我的用户名是:?????</h4>
      </div>
    )
  }
}
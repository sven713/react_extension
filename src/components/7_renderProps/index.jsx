import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h3>Parent</h3>
        <A>hello</A>
      </div>
    )
  }
}

class A extends Component {
  render() {
    console.log('aa-',this.props)
    return (
      <div className='a'>
        <h3>我是A组件</h3>
        {this.props.children}
        {/* <B></B> */}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='b'>
        <h3>我是B组件</h3>
      </div>
    )
  }
}
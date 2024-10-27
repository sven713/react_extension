import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'

export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h3>Parent</h3>
        <A render={(name)=> (<C/>)}>

        </A>
      </div>
    )
  }
}

class A extends Component {
  state={
    name:'tom1'
  }
  render() {
    console.log('aa-',this.props)
    const {name} = this.state
    return (
      <div className='a'>
        <h3>我是A组件</h3>
        {this.props.render(name)}
        {/* <B></B> */}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='b'>
        <h3>我是B组件,{this.props.name}</h3>
      </div>
    )
  }
}
import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {

  state = {
    carName:'BYD汉'
  }
  changeCar =()=> {
    this.setState({
      carName:'特斯拉'
    })
  }
  render() {
    const {carName} = this.state
    return (
      <div className='parent'>
        <h3>我是parent组件</h3>
        <span>我车的名字:{carName}</span><br></br>
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName={carName}/>
      </div>
    )
  }
}


class Child extends Component {
  render() {
    return (
      <div className='child'>
        <h3>我是child组件</h3>
        <span>我接到的车:{this.props.carName}</span>
      </div>
    )
  }
}

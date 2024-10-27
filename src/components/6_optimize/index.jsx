import React, { Component, PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

  state = {
    carName:'BYD汉',
    stus:['小李','校长','小王']
  }
  changeCar =()=> {
    this.setState({
      carName:'特斯拉'
    })
    // this.setState({})
  }

  addStud = ()=> {
    const {stus} = this.state
    // stus.push('lisi')
    // this.setState({
    //   stus
    // })
    // console.log('lll---',stus,'state---',this.state.stus)

    this.setState({
      stus:[...stus, 'lisi']
    })
    //!!!! setState, 用新对象,别在原始对象上push, unshift
  }

  // shouldComponentUpdate (event){
  //   console.log(event)
  //   // return false
  //   return true
  // }

  render() {
    console.log('ppp-----')
    const {carName} = this.state
    return (
      <div className='parent'>
        <h3>我是parent组件</h3>
        {this.state.stus}<br></br>
        <span>我车的名字:{carName}</span><br></br>
        <button onClick={this.changeCar}>点我换车</button>
        <button onClick={this.addStud}>点我添加学生</button>
        <Child carName={carName}/>
      </div>
    )
  }
}


class Child extends PureComponent {
  render() {
    console.log('ccc-----')
    return (
      <div className='child'>
        <h3>我是child组件</h3>
        <span>我接到的车:{this.props.carName}</span>
      </div>
    )
  }
}

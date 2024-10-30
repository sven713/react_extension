import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {

  state = {
    hasError:false
  }

  // 子组件报错,会调用,携带错误信息   state的值取决于Error, 用于捕获报错
  static getDerivedStateFromError(error){
    console.log('ee----',error)
    // this.setState({
    //   hasError: error
    // })

    return {
      hasError: error
    }
  }

  // 用于统计错误次数,发送服务器
  componentDidCatch(){
    console.log('出错了!!!!')
  }

  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {this.state.hasError ? <h2>出错了,稍后再试</h2> : <Child></Child>}
        
      </div>
    )
  }
}

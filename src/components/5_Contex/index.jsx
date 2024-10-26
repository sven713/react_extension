import React, { Component,  } from 'react'
import './index.css'


const MyContext = React.createContext()
const {Provider, Consumer} = MyContext


export default class A extends Component {
  state={
    name:'tom',
    age:'18'
  }
  render() {
    const {name, age} = this.state
    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>用户名是:{this.state.name}</h4>
        {/* todo: 直接传state?  !!!可以*/}
        <Provider value={{name, age}}>
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

// class C extends Component {
//   static contextType = MyContext
//   render() {
//     console.log('c--',this)
//     return (
//       <div className='grand'>
//         <h3>我是C组件</h3>
//         <h4>A组件给我的用户名是:{this.context.name}</h4>
//         <h4>!+A组件给我的年龄是:{this.context.age}</h4>
//       </div>
//     )
//   }
// }

function C(){



  return (
    <div className='grand'>
      <h3>我是C组件</h3>
      
      <h4>A组件给我的用户名是:

        <Consumer>
          {
            value => {
              console.log('vv---',value)
              // return `${value.name}, 年龄是:${value.age}`
              return (
              <span>
                {value.name}
                <h4>A组件给我的年龄是:{value.age}</h4>
              </span>)
            }
          }
        </Consumer>

      </h4>
      <h4>A组件给我的年龄是:????</h4>
    </div>
  )
}
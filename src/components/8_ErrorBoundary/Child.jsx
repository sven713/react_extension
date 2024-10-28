import React, { Component } from 'react'

export default class Child extends Component {

  state = {
    children:[
      {
        id:'001',
        name:'tom',
        age:18
      },
      {
        id:'002',
        name:'jack',
        age:20
      },
      {
        id:'003',
        name:'peiqi',
        age:30
      },
    ]
  }

  render() {
    const {children} = this.state
    return (
      <div>
        <h2>我是Child组件</h2>
        {
          children.map((item)=>{
            return <div key={item.id}>姓名:{item.name}-----年龄:{item.age}</div>
          })
        }
      </div>
    )
  }
}

import React, { Component } from 'react'

// export default class Demo extends Component {

//   state = {
//     count: 0
//   }

//   add = ()=> {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>当前求和为:{this.state.count}</h2>
//         <button onClick={this.add}>点我加1</button>
//       </div>
//     )
//   }
// }


function Demo (){

  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState('Tom')

  function add(){
    console.log('0000000')
    // setCount(count + 1)

    setCount(count =>  count + 1)
  }


  function changeName(){
    setName('Jack')
  }

  return(

      <div>
        <h2>当前求和为:{count}</h2>
        <button onClick={add}>点我加1</button>

        <h2>我的名字:{name}</h2>
        <button onClick={changeName}>点我改名</button>
      </div>

  )
}


export default Demo
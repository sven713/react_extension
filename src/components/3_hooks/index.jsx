import React, { Component } from 'react'
import ReactDom from 'react-dom'

//  class Demo extends Component {

//   state = {
//     count: 0
//   }

//   componentDidMount(){
    
//     this.timer = setInterval(() => {

//       this.setState({
//         count : this.state.count + 1
//       })
//     }, 500);


//   }

//   componentWillUnmount(){
//     clearInterval(this.timer)
//   }

//   remove =()=>{
//     ReactDom.unmountComponentAtNode(document.getElementById('root'))
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
//         <button onClick={this.remove}>点我卸载</button>
//       </div>
//     )
//   }
// }

// 函数里面没有this
function Demo (){

  const [count, setCount] = React.useState(0)


  // 函数组件的生命周期函数: didMount + willUnMount
  React.useEffect(()=>{
    console.log('@')
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
    const iiii = 99
    return ()=> { // 相当于willUnmount
      console.log('####',iiii)
      clearInterval(timer)
    }
  },[]) //空数组表示谁也不检测; 数组中写谁,表示检测谁 ; 相当于

  function add(){

    setCount(count =>  count + 1)
  }

  function remove(){
    ReactDom.unmountComponentAtNode(document.getElementById('root'))
  }

  return(

      <div>
        <h2>当前求和为:{count}</h2>
        <button onClick={add}>???点我加1</button>
        <button onClick={remove}>点我卸载</button>

        
      </div>

  )
}


export default Demo
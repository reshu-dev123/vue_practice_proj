import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props){
    console.log("constructor");
  super(props)
    this.state={
     count:0,
    }
  }
//   shouldComponentUpdate(nextProps, nextState) {
//     // Allow the component to re-render only if the count is even
//     if (nextState.count % 2 === 0) {
//         console.log('shouldComponentUpdate')
//         console.log('nextState',nextState)
//         console.log('curr stae',this.state)
//       return true; // Re-render
//     }
//     return false; // Don't re-render
//   }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  componentDidMount(){
    console.log("component did mount");
    console.log("init state value",this.state)
    console.log('-----------------------')
  }
  componentDidUpdate(prevProps,prevState){
    console.log('Component did updated');
    console.log('Previous state:', prevState);
    console.log('Current state:', this.state);
    console.log('-----------------------')
  }
  componentWillUnmount(){
    console.log('Component will unmount'); 
  }
  
  render() {
    console.log("render");
    return (
      <>
        <div>
        <button onClick={this.increment}>+</button>
        <h3>{this.state.count}</h3>
        <button>-</button>
        </div>
      </>
    )
  }

}

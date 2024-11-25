import React, { Component } from 'react'
import Child from './Child'
export default class App extends Component {
  constructor(props){
  super(props)
    this.state={
    mount:true,

    }
  }
  render() {
    return (
      <>
      <div  style={{margin:20+"px"}}       >
      {this.state.mount?<Child/> : null}
      </div>
      </>
      
    )
  }
}

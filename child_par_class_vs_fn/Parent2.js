import React, { Component } from 'react'
import Child2 from './Child2'

export default class Parent2 extends Component {
    constructor(props){
        super(props)
       this.state ={
            count : ''
        }    
    }

    handleClick=(data)=>{
        this.setState({count:data})
    }
  render() {
    return (
        <>
              <h1>Parent2</h1>
              <h3>data from child :{this.state.count} </h3>
             <Child2 parent2fn ={this.handleClick}/>
        </>
    )
  }
}

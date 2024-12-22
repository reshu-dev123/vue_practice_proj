import React, { Component } from 'react'

export default class Child2 extends Component {
    constructor(props){
    super(props)
    this.state={
        data:''
    }
    }
    childHndlClick=()=>{
        this.props.parent2fn(this.state.data)
    }
  render() {
    return (
      <>
            <div>Child2</div>
            <input type='text' value={this.state.data} onChange={(e) => this.setState({data:e.target.value})}/>
            <button onClick={this.childHndlClick}>send data to parent</button>
      </>
    )
  }
}

import React, { Component } from 'react'

 class ClassComponent extends Component {
    constructor(props) 
    {
        console.log('constructor....');
        super(props);
        this.state = {
        counter: 0
      }
      this.increment= () => this.setState({counter: this.state.counter + 1})
      this.decrement= () => this.setState({counter: this.state.counter - 1})
    }
    componentDidMount(){
      console.log('componentDidMount....')
      console.log('....................')
    }
  render() {
    console.log('Render')
    return  <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <div>
          Counter: {this.state.counter}
        </div>
      </div>
    
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
    console.log('....................')
  }
}

export default ClassComponent;

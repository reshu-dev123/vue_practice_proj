import React, { Component } from 'react';

class Shouldupd extends React.Component {
  constructor() {
    super();
    this.state = {
      count1: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Allow the component to re-render only if the count is even
    if (nextState.count1 % 2 === 0) {
      return true; // Re-render
    }
    return false; // Don't re-render
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count1: prevState.count1 + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Counter Example</h1>
        <p>Count: {this.state.count1}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Shouldupd;
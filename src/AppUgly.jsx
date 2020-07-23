import React, { Component } from "react";

export default class AppUgly extends Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>hello {item}</h1>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }

  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1,
      };
    });
  };

  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1,
      };
    });
  };
}

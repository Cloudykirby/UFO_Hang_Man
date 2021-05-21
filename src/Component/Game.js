import React, { Component } from "react";

export default class Game extends Component {
  render() {
    const { reset } = this.props;
    return (
      <div>
        <h1>game component</h1>
        <button onClick={reset}>reset</button>
      </div>
    );
  }
}

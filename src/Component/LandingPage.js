import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LandingPage extends Component {
  render() {
    const { startGame } = this.props;
    return (
      <div>
        <button onClick={startGame}>Start Game</button>
      </div>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LandingPage extends Component {
  render() {
    const { startGame } = this.props;
    return (
      <div className="landingPage">
        <p className="story">
          You have woken up and noticed that you have been abducted by aliens,
          you need to guess the letters of the code to stop the UFO from
          abducting another person. You have 6 incorrect guesses before the
          system locks you out, and the aliens will notice that you have escaped
          from your cell. Click start to begin!
        </p>
        <button className="start-button" onClick={startGame}>
          Start Game
        </button>
      </div>
    );
  }
}

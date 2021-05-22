import React, { Component } from "react";
import ufo from "./ufo";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.guessedLetter = this.guessedLetter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let lowercase = e.target.value.toLowerCase();
    console.log(lowercase);
    this.setState({ currentGuess: lowercase });
  }
  guessedLetter() {
    console.log(this.props.word);
    return this.props.word
      .split("")
      .map((letter) => (this.props.guesses.has(letter) ? letter : " _ "));
  }
  handleClick() {
    let curr = this.state.currentGuess;
    if (curr.length === 1 && !this.props.guesses.has(curr)) {
      this.props.appendGuesses(curr);
      if (!this.props.word.includes(curr)) {
        this.props.addToIncorrect();
      }
    }
    this.setState({
      currentGuess: "",
    });
  }

  render() {
    const { reset, incorrectCount, word, guesses } = this.props;
    const gameOver = incorrectCount >= 6;
    console.log(incorrectCount, "in game");

    return (
      <div className="game-container">
        <div className="error">
          {this.state.currentGuess.length > 1
            ? "Please enter only one letter"
            : null}
        </div>
        <div className="error">
          {guesses.has(this.state.currentGuess)
            ? "Please choose another letter"
            : null}
        </div>
        <div className="top-right"> Wrong Guesses: {incorrectCount} of 6</div>
        <div>
          <pre className="ufo">{ufo[incorrectCount]}</pre>
        </div>
        <p className="hidden_word">{!gameOver ? this.guessedLetter() : word}</p>
        <input
          type="text"
          placeholder="Enter one Letter"
          onChange={this.handleChange}
          value={this.state.currentGuess}
        />
        <div className="buttons-container">
          <button onClick={reset}>reset</button>
          <button type="submit" onClick={this.handleClick}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import ufo from "./ufo";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: "",
      wrongAnswer: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.guessedLetter = this.guessedLetter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let lowercase = e.target.value.toLowerCase();
    this.setState({ currentGuess: lowercase });
  }
  guessedLetter() {
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
        this.setState({ wrongAnswer: true });
      } else
        (this.setState: {
          wrongAnswer: false,
        });
    }
    this.setState({
      currentGuess: "",
    });
  }

  render() {
    const { reset, incorrectCount, word, guesses, losingMess } = this.props;
    const gameOver = incorrectCount >= 6;
    if (gameOver) {
      return (
        <div className="gameover-container">
          <h1 className="gameover">Game Over</h1>
          <button className="button" onClick={reset}>
            reset
          </button>
        </div>
      );
    }

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
        <div className="top-right">
          <div className="top-right"> Wrong Guesses: {incorrectCount} of 6</div>
          <div>{this.state.wrongAnswer ? { losingMess } : null}</div>
        </div>
        <div>
          <pre className="ufo">{ufo[incorrectCount]}</pre>
        </div>
        <p className="hidden_word">{!gameOver ? this.guessedLetter() : word}</p>
        <input
          className="text-box"
          type="text"
          placeholder="Enter one Letter"
          onChange={this.handleChange}
          value={this.state.currentGuess}
        />
        <div className="buttons-container">
          <button className="button" onClick={reset}>
            reset
          </button>
          <button className="button" type="submit" onClick={this.handleClick}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import LandingPage from "./Component/LandingPage";
import Game from "./Component/Game";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionary: [],
      losingDic: [],
      guesses: new Set([]),
      word: "",
      losingMess: "",
      incorrectCount: 0,
    };
    this.startGame = this.startGame.bind(this);
    this.reset = this.reset.bind(this);
    this.appendGuesses = this.appendGuesses.bind(this);
    this.addToIncorrect = this.addToIncorrect.bind(this);
  }
  randomNumGen(array) {
    let length = array.length;
    let randomNum = Math.floor(Math.random() * length);
    return array[randomNum];
  }
  startGame() {
    let newWord = this.randomNumGen(this.state.dictionary);
    let losingmes = this.randomNumGen(this.state.losingDic);
    this.setState({
      word: newWord,
      losingMess: losingmes,
    });
  }
  reset() {
    this.setState({
      guesses: new Set([]),
      word: "",
      losingMess: "",
      incorrectCount: 0,
    });
  }
  appendGuesses(newGuess) {
    this.setState({ guesses: this.state.guesses.add(newGuess) });
  }
  addToIncorrect() {
    this.setState({
      incorrectCount: this.state.incorrectCount + 1,
    });
  }

  componentDidMount() {
    fetch("./nouns.txt")
      .then((r) => r.text())
      .then((text) => {
        let words = text.split("\n");
        words.pop();
        this.setState({ dictionary: [...words] });
      });

    fetch("./messages.txt")
      .then((r) => r.text())
      .then((text) => {
        console.log(text, "in fetch");
        let words = text.split("\n");
        words.pop();
        this.setState({ losingDic: words });
      });
  }

  render() {
    return (
      <div className="App-container">
        <h1 className="title">UFO Hangman</h1>
        {this.state.word ? (
          <Game
            reset={this.reset}
            guesses={this.state.guesses}
            word={this.state.word}
            losingMess={this.state.losingMess}
            incorrectCount={this.state.incorrectCount}
            appendGuesses={this.appendGuesses}
            addToIncorrect={this.addToIncorrect}
          />
        ) : (
          <LandingPage startGame={this.startGame} />
        )}
      </div>
    );
  }
}
export default App;

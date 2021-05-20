import "./App.css";
import React, { Component } from "react";
import LandingPage from "./Component/LandingPage";
import ufo from "./Component/ufo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionary: [],
      losingDic: [],
      guesses: [],
      word: "",
      losingMess: "",
    };
    this.startGame = this.startGame.bind(this);
  }
  randomNumGen(array) {
    let length = array.length;
    let randomNum = Math.floor(Math.random() * length);
    return array[randomNum];
  }
  startGame() {
    let newWord = this.randomNumGen(this.state.dictionary);
    let losingmes = this.randomNumGen(this.state.losingDic);
    // if (newWord) {
    //   this.setState({
    //     word: newWord,
    //   });
    // }
    this.setState({
      word: newWord,
      losingMess: losingmes,
    });
  }
  reset() {
    this.setState({
      guesses: [],
      word: "",
      losingMess: "",
    });
  }

  componentDidMount() {
    fetch("./nouns.txt")
      .then((r) => r.text())
      .then((text) => {
        let words = text.split("\n");
        words.pop();
        this.setState({ dictionary: [...words] });
        // console.log("test", typeof text.split("\n"));
      });

    fetch("./messages.txt")
      .then((r) => r.text())
      .then((text) => {
        console.log(text, "in fetch");
        let words = text.split("\n");
        words.pop();
        this.setState({ losingDic: words });
        // console.log("test", typeof text.split("\n"));
      });
  }

  render() {
    console.log("dictionary", this.state.losingDic);
    console.log(ufo[0]);

    return (
      <div>
        <h1>UFO Hangman</h1>
        <LandingPage startGame={this.startGame} />
        <h1>{this.state.word}</h1>
        <h1>{this.state.losingMess}</h1>
        <pre className="testa">{ufo[this.state.guesses.length]}</pre>
      </div>
    );
  }
}
export default App;

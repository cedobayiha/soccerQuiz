import React, { Component } from "react";
import Title from "./components/Tittle";
import Choices from "./components/Choices/Choices";
import Next from "./components/Next/Next";
import Restart from "./components/Restart/Restart";
import EndScreenRestart from "./components/Restart/EndScreenRestart";
import Tracker from "./components/Tracker/Tracker";
import Progress from "./components/Progress/Progress";
import "./App.css";

import EndScreen from "./components/endScreen/EndScreen";

class App extends Component {
  state = {
    questions: [
      {
        q: "Who is LaLiga top scorer of all time?",
        answers: ["Cristiano Ronaldo", "Raul", "Lionel Messi", "Telmo Zara"],
        answerKey: 2
      },
      {
        q: "Who is the Champions league top scorer of all time?",
        answers: ["Karim Benzema", "Cristiano Ronaldo", "Raul", "Lionel Messi"],
        answerKey: 1
      },
      {
        q: "Who is ligue 1 top scorer 2018/2019?",
        answers: ["Kylian Mbappé", "Neymar", "Edinson Cavani", "Nicolas Pépé"],
        answerKey: 0
      },
      {
        q: "Who has the most bundesliga assists this season 2018/2019?",
        answers: [
          "Thorgan Hazard",
          "Marco Reus",
          "James Rodriguez",
          "Jadon Sancho"
        ],
        answerKey: 3
      },
      {
        q:
          "Which team is currently leading the standings in the English Premier League?",
        answers: [
          "Tottenham Hotspurs",
          "Manchester City",
          "Chelsea",
          "Liverpool"
        ],
        answerKey: 1
      }
    ],
    QIndex: 0,
    playerAnswers: [],
    quizFinished: false
  };

  handleNext = () => {
    let tempIndex = this.state.QIndex + 1;
    if (tempIndex < this.state.questions.length) {
      this.setState({ QIndex: tempIndex });
    } else {
      this.setState({ quizFinished: true });
    }
  };

  handleRestart = () => {
    this.setState({ QIndex: 0});
  };

  selectChoice = (QIndex, choiceIndex) => {
    let playerAnswersCopy = [...this.state.playerAnswers];
    playerAnswersCopy[QIndex] = choiceIndex;
    this.setState({ playerAnswers: playerAnswersCopy });
  };
  EndScreenRestart = () => {
    this.setState({ quizFinished: false, QIndex: 0, playerAnswers: []});
  };

  render() {
    let choiceIndexs = [0, 1, 2, 3];
    return (
      <div className="App">
        <div className="container">
          {!this.state.quizFinished ? (
            <>
              {" "}
              <Title q={this.state.questions[this.state.QIndex].q} />
              <Tracker
                idx={this.state.QIndex}
                qts={this.state.questions.length}
              />
              <Progress
                idx={this.state.QIndex}
                qts={this.state.questions.length}
                quizFinished={this.state.quizFinished}
              />
              {choiceIndexs.map(choiceIndex => {
                return (
                  <Choices
                    c={
                      this.state.questions[this.state.QIndex].answers[
                        choiceIndex
                      ]
                    }
                    handleClick={() =>
                      this.selectChoice(this.state.QIndex, choiceIndex)
                    }
                    isSelected={
                      choiceIndex ===
                      this.state.playerAnswers[this.state.QIndex]
                    }
                    key={choiceIndex}
                  />
                );
              })}
              <div className="footer">
                <Next click={this.handleNext} />
                <Restart click={this.EndScreenRestart} />
              </div>{" "}
            </>
          ) : (
            <>
              <EndScreen
                questions={this.state.questions}
                playerAnswers={this.state.playerAnswers}
              />
              <div className="footer">
                <EndScreenRestart click={this.EndScreenRestart} />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;

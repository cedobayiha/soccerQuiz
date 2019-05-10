import React from "react";
import EndScreenChoice from "./EndScreenChoice";

const EndScreenAnswer = props => {
  // let correct = props.playerAnswer === props.answerKey;

  // let playerChoice = props.playerAnswer;
  return (
    <div>
      
      <h3>{props.title}</h3>
      {props.answers.map((answer, index) => {
        // let isSelected = index === playerChoice;
        return (
          <EndScreenChoice
            correctAnswers={props.answerKey}
            playerAnswer={props.playerAnswer}
            answer={answer}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default EndScreenAnswer;

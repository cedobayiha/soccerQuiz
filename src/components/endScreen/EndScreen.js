import React from "react"
import "./EndScreen.css"
import EndScreenAnswer from "./EndScreenAnswer";

// import EndScreenTracker from "./EndScreenTracker"


const EndScreen = (props) => {
  
   return (<div>
   {props.questions.map((question, index) => {
     return <EndScreenAnswer playerAnswer={props.playerAnswers[index]} answerKey={question.answerKey} answers={question.answers} title={question.q}
     key={index}/>
   }

   )}</div>)
}

export default EndScreen
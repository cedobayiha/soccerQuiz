import React from "react"
import "./EndScreen.css"
import EndScreenAnswer from "./EndScreenAnswer";
import Legend from "./Legend"
import EndScreenTitle from "./EndScreenTitle"
import EndScreenTracker from "./EndScreenTracker"


const EndScreen = (props) => {

   return (<div>
     <EndScreenTitle />
     <Legend />
     
   {props.questions.map((question, index) => {
     console.log(question.answerKey);
     
     return <EndScreenAnswer playerAnswer={props.playerAnswers[index]} answerKey={question.answerKey} answers={question.answers} title={question.q}
     key={index}/>
   }

   )}</div>)
}

export default EndScreen
import React from "react"

const EndScreenChoice = (props) => {

  
  let color = "";
  if (props.index === props.correctAnswers && props.index === props.playerAnswer){
    color = "green"
 } else if(props.index === props.playerAnswer){
     color = "red"
  } else if (props.index === props.correctAnswers){
     color = "orange"
  } 
  
return (

  <p style={{color}}>
    {props.answer}
  </p>
)
}

export default EndScreenChoice
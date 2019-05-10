import React from "react";
import "./Progress.css";

const Progress = props => {
  let percentage;
  if (props.quizFinished) {
    percentage = 100;
  } else {
    percentage = (props.idx / props.qts) * 100;
  }


  return (
    <div className="progress">
      <div className="progress__inner" style={{ width: percentage + "%" }} />
    </div>
  );
};

export default Progress;

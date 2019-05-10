import React from "react"

const EndScreenTracker = (props) => {
  const getPercentage = (num1, num2) => {
    return Math.round((num1 / num2) * 100);
  };
  return (
    <div>
      <p>Your scrore:</p>
    </div>
  )

}

export default EndScreenTracker
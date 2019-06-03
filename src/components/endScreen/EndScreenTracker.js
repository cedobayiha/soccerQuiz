import React from "react"

const EndScreenTracker = (props) => {
  let p;
   p = Math.round((props.count / props.num2) * 100);

  return (
    <div>
      <p>Your scrore: {p}%</p>
    </div>
  )

}

export default EndScreenTracker
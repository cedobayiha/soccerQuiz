import React from "react"

const Legend = () => {
  return (
    <div style={{margin: "70px"}}>
        <p style={{color: "green",
      fontWeight: "bold"}}>The green color is when you selected the right answer.</p>
        <p style={{color: "red",
      fontWeight: "bold"}}>The red color is when you selected the wrong answer</p>
        <p style={{color: "orange",
      fontWeight: "bold"}}>The orange color indicate the right answer when you've made the wrong choice</p>
      </div>
  )
}

export default Legend
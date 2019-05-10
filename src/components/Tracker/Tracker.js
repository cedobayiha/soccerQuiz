import React from 'react'

const Tracker = props => {
  return (
    <div>
      <p>{props.idx + 1} of {props.qts}</p>
    </div>
  )
}

export default Tracker
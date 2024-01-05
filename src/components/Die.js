import React from 'react'

const Die = (props) => {
  const backgroundColor = props.on ? "green" : "red"
  return (
    <div className='die-face' style={{ backgroundColor  }}>
      <h2 onClick={(event)=>props.handleCheck(event, props.id)}>{props.number}</h2>
    </div>
  )
}

export default Die
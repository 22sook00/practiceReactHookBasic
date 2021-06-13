import React, { useState } from 'react'

const Contact = () => {

  const [ color, setColor ] = useState('black')
  const inputColorName = (e) =>{
    setColor(e.target.value)
  }
  return (
    <>
    <h1 className = 'inputTitle'>원하는 컬러를 찾아보세요.</h1>
      <div className = 'flexBox'>
        <div className = 'inputBox'>
        <input onChange = { inputColorName }
        type = 'text' placeholder = 'Search the color you want.'></input>
        <h2>{color}</h2>
        </div>
        <div className = 'selected-color' style = {{backgroundColor : color}}></div>
      </div>
    </>
  )
}

export default Contact;
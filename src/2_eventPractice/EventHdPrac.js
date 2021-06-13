import "./eventHdPrac.css";
import React, { useState } from 'react'

const Event = () => {

  const Darkmode = () =>{
    const [ isDarkOn , setDarkOn ] = useState(false);

    const handleChange = () =>{
      //handle체인지하면 다크모드의 초기값 폴스가 트루로 바뀐다.
      setDarkOn(isDarkOn ? false : true);
    }

    return (
      <div className = {isDarkOn ? 'Container dark' : 'Container light'}>
        <div className = {isDarkOn ? 'dark' : 'light'}>다크모드 설정</div>
        <label className = 'switch'>
          <input type = 'checkbox' onChange = {handleChange} />
            <span className = 'slider round'></span>
        </label>
      </div>   
    )
  }

return <div className = 'box'>
  <Darkmode/>
    {/*<div>
      <h3>다크모드 설정</h3>
      <div className = 'switchBox'>
        <div className = 'movingDot' onClick = {handleClick} style = {color}></div>
      </div>
    </div>*/}
</div>
}

export default Event;
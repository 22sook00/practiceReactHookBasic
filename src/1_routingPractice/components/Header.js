import React, { useState } from 'react'
import { Link  } from 'react-router-dom'
import headerObj from '../static/headerObj'

//이 부분에 링크를 이어넣어 준다. 
//링크를 일일히 넣지 않고 매핑을 이용한다.

const Header = () => {
  return (
    <header>
      <ul>
        {headerObj.map((el,id)=>{
          return <Link to = {el.linkTo} key = {id}><li>{el.title}</li></Link>
        })}
      </ul>
    </header>
  )
}

export default Header;
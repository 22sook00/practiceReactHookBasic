import React, { useState } from 'react'
import stackObj from '../static/stackObj'

/*
Todo : 내가 사용할 수 있는 스택 선택하기.
1. 내가 사용할 수 있는 스택들을 셀렉트 옵션으로 나타내본다.
2. 나타난 셀렉트 옵션을 클릭시(변경시) 화면에 나타내본다.
3. front / back / etc 기술 나눠서 해본다.
*/
const Stacks = () => {

  const [selectFront, setSelectFront] = useState('')
  const [selectBack, setSelectBack] = useState('')
  const [selectEtc, setSelectEtc] = useState('')

  const handleChangeFront = (e) =>{
    setSelectFront(e.target.value)
  }
  const handleChangeBack = (e) =>{
    setSelectBack(e.target.value)
  }
  const handleChangeEtc = (e) =>{
    setSelectEtc(e.target.value)
  }
  
  const FrontOptions = stackObj.map((el,id)=>{
    if(el.type === 'front-end' ){
      return <option value = {el.value} key = {id}>{el.skill}</option>
    }
  })
  const BackOptions = stackObj.map((el,id)=>{
    if(el.type === 'back-end' ){
      return <option value = {el.value} key = {id}>{el.skill}</option>
    }
  })
  const EtcOptions = stackObj.map((el,id)=>{
    if(el.type === 'etc' ){
      return <option value = {el.value} key = {id}>{el.skill}</option>
    }
  })

  return (
    <>
    {/*총 세개의 스택표시 h2, 셀렉트, 셀렉티드 된p */}
    <h1 className = 'stackTitle'>Choose the skills <br/>i can hadle well.</h1>
    <div className = 'optionBox'>
      <div className = 'divideSection'>
        <select onChange = {handleChangeFront}>{FrontOptions}</select>
        <h3>Front skill : <br/>{selectFront}</h3>
      </div>
      <div className = 'divideSection'>
        <select  onChange = {handleChangeBack}>{BackOptions}</select>
        <h3>Back skill : <br/>{selectBack}</h3>
      </div>
      <div className = 'divideSection'>
        <select onChange = {handleChangeEtc}>{EtcOptions}</select> 
        <h3>Etc : <br/>{selectEtc}</h3>
      </div>
    </div>
    </>
  )
}

export default Stacks;
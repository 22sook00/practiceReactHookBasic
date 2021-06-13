import React, { useState } from 'react'
/*
Todo : modal 창에서 해야할것
1. 기본화면과 팝업창을 만든다.
2. 버튼을 클릭 시 오픈클릭이면 트루, 아니면 폴스 클릭이벤트
3. 그 외 css 적 요소 입힌다. 키프레임, 애니메이션
*/

const About = () => {

  const [modal , setModal] = useState(false);

  const modalClick = () => {
    setModal(!modal)  
  }

  return (
    <>
      <div className = 'modalMain'>
      <h1>onClick 이벤트로 모달창 구현</h1>
        <button className = 'modal-btn openBtn' onClick = {modalClick}>🙉 Open 🙉</button>
      </div>
      {modal ?
      (
        <div className = 'modal'>
        <div className = 'popupBox'>
          <p className = 'closeBtnX' onClick = {modalClick}>❌</p>
          <h2>I'm modal popUp!</h2>
          <hr></hr>
          <button className = 'modal-btn closeBtn' onClick = {modalClick}>🙈 Close 🙈</button>
        </div>
        </div>
      ) : null }
      
    </>
  )
}

export default About;
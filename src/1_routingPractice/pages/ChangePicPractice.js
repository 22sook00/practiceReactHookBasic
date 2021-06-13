import React, { useState } from 'react'
import mainObj from '../static/mainObj'

/*
Todo : 썸네일 나타내기 해보기.
1. 사진 세개 맵으로 렌더링. 
2. 각 세개의 사진을 클릭 시 객체 속성을 받아 큰 이미지로 보여주고, 이름도 바꿔준다.
*/

const Main = () => {

  const [ defaultPic , setDefaultPic ] = useState(mainObj[0])

  //썸네일 매핑해서 나타내기.
  //썸네일에 온클릭 이벤트 나타내기.
  //e.target 하면 내가 썸네일에 지정한 속성밖에 나타나지 않는다.
  //find 메소드 사용해서 나타내보도록 한다. 
  //handleClick 함수 안에서 한번더 함수를 호출해서 화살표함수로 온클릭 나타내준다.
  const handleClick = (e) =>{
    const finding = mainObj.find((selectAll)=>{
      return selectAll === e
    })
    setDefaultPic(finding);
  }

  return (
    <div className = 'box'>
      <div className = 'thumbnailBox'>
        {mainObj.map((el,id)=>{
          return <img className = 'thumbnails' 
          onClick = {() => {handleClick(el)}}
          key = {id} src = {el.src} alt = {el.alt} />
        })}
      </div>

      <div className = 'selectedBox'>
        <h2>{defaultPic.alt}</h2>  
        <img className = 'selectedImg' src = {defaultPic.src} alt = {defaultPic.alt} />
        <h3>{defaultPic.descrition}</h3>
        <p>{defaultPic.date}</p>
      </div>
    </div>)
}

export default Main;
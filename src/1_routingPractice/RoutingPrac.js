import React, { useState } from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Header from './components/Header'
import ChangePicPractice from './pages/ChangePicPractice'
import ModalPractice from './pages/ModalPractice'
import OptionPractice from './pages/OptionPractice'
import InputPractice from './pages/InputPractice'
//css는 자동완성기능이 안된다. 
import './RoutingPrac.css'

//Todo : 태그 짤때 html 처럼 하지말고 각 태그마다 함수를 만들어서 대입하는 연습.
//1. 큰 구조를 먼저 짜고 , 그 구조 안에서 세세한 컴포넌트를 짠다.
// -> 큰 구조를 짤 때 라우팅을 쓸거라면, 무조건 큰틀에서 사용해준다. 
//2. 앞으로 arrow function 쓰는 연습 하기.
//3. state 는 변화가능한 것. props 는 변화불가한 사항 가져오고 왠만하면 건들지않는다.

const RoutingPrac = () => {
  
  const Footer = () =>{
    return <footer>
      <p>All rights by sookyoung.lee</p>
    </footer>
  }

  return (<div>
      <BrowserRouter>
        <Header />

        <section className = 'sectionBox'>
          <Switch>
            <Route exact path = '/'><ChangePicPractice/></Route>
            <Route path = '/modal'><ModalPractice/></Route>
            <Route path = '/stacks'><OptionPractice/></Route>
            <Route path = '/color'><InputPractice/></Route>
          </Switch>
        </section>

        <Footer />
        </BrowserRouter>
        </div>
      )
}

export default RoutingPrac;
// 여기에는 header,nav 부분에 들어갈 객체형태의 배열이 온다.
// 컴포넌트가 아니기 때문에 대문자로 작성하지 않는다.
// !하지만 반드시 export 를 해줘야 한다.

const headerObj = [
  {id:1,title: 'ChangePicture', linkTo : '/'},
  {id:2,title: 'Modal', linkTo : '/modal'},
  {id:3,title: 'Stacks', linkTo : '/stacks'},
  {id:4,title: 'Input color', linkTo : '/color'},
]
export default headerObj;
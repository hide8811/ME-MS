import React, {useState} from 'react'
import styled from 'styled-components'
import LoginModal from '../Molecules/LoginModal'

const Header = () => {
  const [isSignIn, changeSignState] = useState(false)

  let login
  if(isSignIn) {
    login = <LoginModal change = {() => changeSignState(!isSignIn)}/>
  }else{
    login = 'ログイン'
  }

  return(
    <>
      <HEADER>
        <H1>Comfortbois MS</H1>
        <P onClick ={() => changeSignState(!isSignIn)}>{login}</P>
      </HEADER>
    </>
  )
}

const HEADER = styled.header`
  border-bottom: 1px solid rgb(0, 255, 123);
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const H1 = styled.div`
  line-height: 40px;
  font-size: 20px;
  margin-left: 5px;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
`;
  const P = styled.div`
  line-height: 40px;
  margin-right: 5px;
`;

export default Header
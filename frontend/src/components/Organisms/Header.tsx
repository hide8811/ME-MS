import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return(
    <>
      <HEADER>
        <H1>Comfortbois MS</H1>
        <P>ログイン</P>
      </HEADER>
    </>
  )
}

const HEADER = styled.header`
  border-bottom: 1px solid rgb(0, 255, 123);
  display: flex;
  justify-content: space-between;
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
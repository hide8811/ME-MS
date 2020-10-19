import React from 'react'
import styled from 'styled-components'

type Props = {
  clickEvent?: any
}

const Header: React.FC<Props> = ({ clickEvent }) => {
  return (
    <HEADER>
      <h1>Comfortbois MS</h1>
      <p onClick={() => clickEvent()}>ログイン</p>
    </HEADER>
  )
}

const HEADER = styled.header`
  border-bottom: 1px solid #3cb371;
  display: flex;
  justify-content: space-between;
  position: relative;
  h1 {
    line-height: 40px;
    font-size: 20px;
    margin-left: 5px;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
  }
  p {
    line-height: 40px;
    margin-right: 5px;
  }
`

export default Header

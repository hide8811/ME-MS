import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type Props = {
  clickEvent?: any
}

const Header: React.FC<Props> = ({ clickEvent }) => {
  return (
    <HEADER>
      <Link to="/">
        <h1>Comfortbois MS</h1>
      </Link>

      <p onClick={() => clickEvent()}>ログイン</p>
    </HEADER>
  )
}

const HEADER = styled.header`
  border-bottom: 1px solid #00a914;
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
  a {
    color: #000;
  }
`

export default Header

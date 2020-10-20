import React from 'react'
import styled from 'styled-components'

type Props = {
  btnName: string
  clickEvent?: any
}

const GlobalBtn: React.FC<Props> = ({ btnName, clickEvent }) => {
  return <BUTTON onClick={clickEvent}>{btnName}</BUTTON>
}

const BUTTON = styled.button`
  padding: 5px 10px;
  background: #00a914;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
`

export default GlobalBtn

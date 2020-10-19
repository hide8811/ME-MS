import React from 'react'
import styled from 'styled-components'
import ContentBtn from '../Atoms/ContentBtn'
import { Link } from 'react-router-dom'

const ContentBtns = () => {
  return (
    <FLEX>
      <ContentBtn iconName="fas fa-calendar-check" />
      <ContentBtn iconName="fas fa-yen-sign" />

      <Link to="/form">
        <ContentBtn iconName="fas fa-paper-plane" />
      </Link>
    </FLEX>
  )
}

const FLEX = styled.div`
  margin: 0 auto;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
`

export default ContentBtns

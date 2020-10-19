import React from 'react'
import styled from 'styled-components'
import ContentBtn from '../Atoms/ContentBtn'

const ContentBtns = () => {
  return (
    <FLEX>
      <ContentBtn iconName="fas fa-calendar-check" />
      <ContentBtn iconName="fas fa-yen-sign" />
      <ContentBtn iconName="fas fa-paper-plane" />
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

import React from 'react'
import styled from 'styled-components'
import { FilterAge, FilterTime, FilterWeek } from '../../controls'

const Month:React.FC = (props:any) => {
  const urlParams:number = props.match.params.id

  return(
    <CONTAINER>
      <h1>{urlParams}月の結果</h1>
      <FilterAge urlParams={urlParams} />
      <FilterWeek urlParams={urlParams} />
      <FilterTime urlParams={urlParams} />
    </CONTAINER>
  )
}

const CONTAINER = styled.div`
  padding: 10px;
  h1{
    font-size: 20px;
    border-bottom: 1px solid #aaa;
    padding: 0 0 10px 2px;
    margin: 0 0 10px;
  }
`;

export default Month
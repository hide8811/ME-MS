import React from 'react'
import styled from 'styled-components'
import { FilterAge, FilterWeek } from '../../controls'

const Month:React.FC = (props:any) => {
  const urlParams:number = props.match.params.id

  return(
    <CONTAINER>
      <h1>{urlParams}月の結果</h1>
      <FilterAge urlParams={urlParams} />
      <FilterWeek urlParams={urlParams} />
    </CONTAINER>
  )
}

const CONTAINER = styled.div`
  padding: 10px;
  h1{
    font-size: 20px;
    border-bottom: 1px solid #aaa;
    padding-bottom: 5px;
    margin: 5px 0 15px;
  }
`;

export default Month
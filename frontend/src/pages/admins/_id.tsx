import React from 'react'
import styled from 'styled-components'
import FilterAge from '../../controls/FilterAge'

const Month:React.FC = (props:any) => {

  return(
    <CONTAINER>
      {/* {urlParams} */}
      <FilterAge />
    </CONTAINER>
  )
}

const CONTAINER = styled.div`
  padding: 10px;
  .flex-box {
    display: flex;
    margin-bottom: 10px;
    font-size: 18px;
  }
`;

export default Month
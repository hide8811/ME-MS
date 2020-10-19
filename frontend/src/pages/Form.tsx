import React from 'react'
import styled from 'styled-components'
import GlobalInput from '../components/Atoms/GlobalInput'

const Form = () => {
  return (
    <CONTAINER>
      <GlobalInput type="text" placeholder="id" label={'ログインID'} />
    </CONTAINER>
  )
}

const CONTAINER = styled.div`
  padding: 15px;
`;

export default Form

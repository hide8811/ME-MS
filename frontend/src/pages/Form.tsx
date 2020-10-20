import React,{useState} from 'react'
import styled from 'styled-components'
import GlobalInput from '../components/Atoms/GlobalInput'
import GlobalSelect from '../components/Atoms/GlobalSelect'

const Form = () => {
  const [age, updateValueAge] = useState('--')

  return (
    <CONTAINER>
      <GlobalSelect questions={quwstions.age} label={'大まかな年齢'} updateValue={updateValueAge} />
      <GlobalInput type="text" placeholder="id" label={'利用日時'} />
      <GlobalInput type="text" placeholder="id" label={'利用時間'} />
      <GlobalInput type="text" placeholder="id" label={'利用コース'} />
      {age}
    </CONTAINER>
  )
}

const quwstions = {
  age: [
    '10代',
    '20代前半',
    '20代後半',
    '30代前半',
    '30代後半',
    '40代前半',
    '40代後半',
    '50代前半',
    '50代後半',
    '60代前半',
    '60代後半',
    '70代以上'
  ],
  corse: [
    '60min',
    '90min',
    '120min',
    '150min',
    '180min'
  ]
}

const CONTAINER = styled.div`
  padding: 15px;
`;

export default Form

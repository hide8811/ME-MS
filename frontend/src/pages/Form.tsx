import React,{useState} from 'react'
import styled from 'styled-components'
import GlobalInput from '../components/Atoms/GlobalInput'
import GlobalRadio from '../components/Atoms/GlobalRadio'
import GlobalSelect from '../components/Atoms/GlobalSelect'

const Form = () => {
  const [age, updateValueAge] = useState('--')
  const [corse, updateValueCorse] = useState('--')
  const [date, updateValueDate] = useState('--')
  const [time, updateValueTime] = useState('--')
  const [option, updateValueOption] = useState('--')
  const [cosplay, updateValueCosplay] = useState('--')
  const [extend, updateValueExtend] = useState('--')
  const [deep, updateValueDeep] = useState('--')

  return (
    <CONTAINER>
      <GlobalSelect questions={questions.age} label={'大まかな年齢'} updateValue={updateValueAge} />
      <GlobalInput type="date" label={'利用日時'} updateValue={updateValueDate} />
      <GlobalInput type="time" label={'利用時間'} updateValue={updateValueTime} />
      <GlobalSelect questions={questions.corse} label={'利用コース'} updateValue={updateValueCorse} />
      <GlobalRadio choices={questions.choice} label={'オプションの有無'} name={'choice-option'} updateValue={updateValueOption} />
      <GlobalRadio choices={questions.choice} label={'コスプレの有無'} name={'choice-cosplay'} updateValue={updateValueCosplay} />
      <GlobalSelect questions={questions.extend} label={'延長時間'} updateValue={updateValueExtend} />
      <GlobalSelect questions={questions.deep} label={'ディープリンパ'} updateValue={updateValueDeep} />
      {age}<br></br>
      {date}<br></br>
      {time}<br></br>
      {corse}<br></br>
      {option}<br></br>
      {cosplay}<br></br>
      {extend}<br></br>
      {deep}<br></br>
    </CONTAINER>
  )
}

const questions = {
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
  ],
  extend: [
    '無し',
    '30min',
    '60min',
    '90min',
    '120min'
  ],
  deep: [
    '無し',
    '10min',
    '20min',
    '30min',
    '40min',
    '50min',
    '60min',
    '70min',
    '80min',
    '90min',
    '100min'
  ],
  choice: [
    '無し',
    '有り'
  ]
}

const CONTAINER = styled.div`
  padding: 15px;
`;

export default Form

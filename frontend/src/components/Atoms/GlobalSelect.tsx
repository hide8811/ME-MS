import React from 'react'
import styled from 'styled-components'

type Props = {
  label: string
  questions: Array<string>
  updateValue: any
}

const GlobalSelect: React.FC<Props> = ({ label, questions, updateValue }) => {
  const handleChange = (e: any) => {
    updateValue(e.target.value)
  }
  const option = questions.map((val, index) => {
    return <option key={index}>{val}</option>
  })

  return (
    <CONTAINER>
      <label>{label}</label>
      <select onChange={handleChange}>
        <option hidden>選択してください</option>
        {option}
      </select>
    </CONTAINER>
  )
}

const CONTAINER = styled.div`
  label {
    display: block;
    width: 100%;
    margin-bottom: 7px;
  }
  select {
    width: 100%;
    border-radius: 4px;
    line-height: 25px;
    border: 1px solid #000;
    transition: 0.2s;
    padding-left: 5px;
    margin-bottom: 15px;
    background: #fff;
    background-image: linear-gradient(45deg, transparent 50%, #000 50%),
      linear-gradient(135deg, #000 50%, transparent 50%),
      linear-gradient(to right, #000, #000);
    background-position: calc(100% - 17px) calc(0.75em),
      calc(100% - 12px) calc(0.75em), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 0.9em;
    background-repeat: no-repeat;
    &:focus {
      border: 1px solid #00a914;
    }
  }
`

export default GlobalSelect

import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  label: string
  forName?: string

  id?: string
  type: string
  placeholder?: string
  inputName?: string

  updateValue?: any
  isRequired?: string
}

const GlobalInput: React.FC<Props> = ({
  label,
  forName,
  id,
  type,
  placeholder,
  inputName,
  updateValue,
  isRequired,
}) => {
  const [text, updateText] = useState('')
  const handleChange = (val: string) => {
    updateText(val)
    updateValue(val)
  }

  return (
    <INPUTS>
      <label htmlFor={forName}>
        {label}
        {isRequired ? <span>{isRequired}</span> : <></>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={inputName}
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      />
    </INPUTS>
  )
}

const INPUTS = styled.div`
  label {
    display: block;
    width: 100%;
    margin-bottom: 7px;
    span {
      display: inline-block;
      margin-left: 5px;
      font-size: 12px;
      background: #f00;
      color: #fff;
      border-radius: 4px;
      padding: 0 4px;
      line-height: 18px;
    }
  }
  input {
    width: 100%;
    border-radius: 4px;
    line-height: 25px;
    border: 1px solid #000;
    transition: 0.2s;
    padding-left: 5px;
    margin-bottom: 15px;
    &:focus {
      border: 1px solid #00a914;
    }
  }
  input[type='date'],
  input[type='time'] {
    background: #fff;
    padding-right: 7px;
  }
`

export default GlobalInput

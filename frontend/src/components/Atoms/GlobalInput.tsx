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
}

const GlobalInput: React.FC<Props> = ({label,forName,id,type,placeholder,inputName,updateValue}) => {

  const [text,updateText] = useState('')
  const handleChange = (val:string) => {
    updateText(val)
    updateValue(val)
  }

  return (
    <INPUTS>
      <label htmlFor={forName}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={inputName}
        value={text}
        onChange={(e)=>handleChange(e.target.value)}
      />
    </INPUTS>
  )
}

const INPUTS = styled.div`
  label {
    display: block;
    width: 100%;
    margin-bottom: 7px;
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
      border: 1px solid #3cb371;
    }
  }
  input[type='date'],input[type='time'] {
    background: #fff;
    padding-right: 7px;
  }
`

export default GlobalInput

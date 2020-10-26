import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  choices: Array<string>
  label: string
  name: string
  updateValue: any
}

const GlobalRadio: React.FC<Props> = ({
  label,
  choices,
  name,
  updateValue,
}) => {
  const [isChoice, changeChoice] = useState(choices[0])
  const handleChoice = () => {
    if (isChoice === choices[0]) {
      changeChoice(choices[1])
    } else {
      changeChoice(choices[0])
    }
  }
  const updateValueChoice = (e: any) => {
    updateValue(e.target.value)
  }

  const choicesInput = choices.map((val, index) => {
    return (
      <div key={index}>
        <input
          type="radio"
          name={name}
          id={name + index}
          value={val}
          checked={val === isChoice}
          onClick={handleChoice}
          onChange={updateValueChoice}
        />
        <label className="choice" htmlFor={name + index}>
          {val}
        </label>
      </div>
    )
  })

  return (
    <CONTAINER>
      <label className="label-name" htmlFor={name}>
        {label}
      </label>
      <div className="flex">{choicesInput}</div>
    </CONTAINER>
  )
}

const CONTAINER = styled.div`
  .flex {
    display: flex;
    margin-bottom: 15px;
  }
  .label-name {
    display: block;
    width: 100%;
    margin-bottom: 7px;
  }
  .choice {
    display: block;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 20px;
    margin-right: 10px;
    background: #ccc;
    cursor: pointer;
  }
  input[type='radio'] {
    display: none;
    &:checked + .choice {
      background: #00a914;
      color: #fff;
    }
  }
`

export default GlobalRadio

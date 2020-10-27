import React from 'react'
import styled from 'styled-components'

type Props = {
  choices: Array<string>
  label: string
  name: string
  updateValue: any
  isRequired?: string
}

const GlobalRadio: React.FC<Props> = ({
  label,
  choices,
  name,
  updateValue,
  isRequired
}) => {
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
          onChange={updateValueChoice}
        />
        <label className="choice" htmlFor={name + index}>
          {
            (() => {
              if(val === 'false'){
                return '無し'
              } else {
                return '有り'
              }
            })()
          }
        </label>
      </div>
    )
  })

  return (
    <CONTAINER>
      <label className="label-name" htmlFor={name}>
      {label}
        {
          isRequired?
          <span>{isRequired}</span>
          :
          <></>
        }
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

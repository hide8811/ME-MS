import React from 'react'
import styled from 'styled-components'

type Props = {
  label?: string, 
  forName?: string,

  id?: string,
  type: string,
  placeholder?: string,
  name?: string
}

const GlobalInput:React.FC<Props> = ({label,forName,id,type,placeholder,name}) => {
  return(
    <INPUTS>
      <label htmlFor={forName}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} name={name}/>
    </INPUTS>
  )
}

const INPUTS = styled.div`
  label{
    display: block;
    width: 100%;
    margin-bottom: 7px;
  }
  input[type="text"]{
    width: 100%;
    border-radius: 4px;
    line-height: 25px;
    border: 1px solid #000;
    transition: .2s;
    padding-left: 5px;
    margin-bottom: 15px;
    &:focus {
      border: 1px solid #3CB371;
    }
  }
  input[type="password"]{
    width: 100%;
    border-radius: 4px;
    line-height: 25px;
    border: 1px solid #000;
    transition: .2s;
    padding-left: 5px;
    margin-bottom: 15px;
    &:focus {
      border: 1px solid #3CB371;
    }
  }
`;

export default GlobalInput
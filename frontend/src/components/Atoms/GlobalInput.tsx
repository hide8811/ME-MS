import React from 'react'

type Props = {
  label?: string, 
  type: string,
  placeholder?: string,
  name?: string
}

const GlobalInput:React.FC<Props> = ({label,type,placeholder,name}) => {
  return(
    <>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} name={name} />
    </>
  )
}

export default GlobalInput
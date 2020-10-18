import React from 'react'

type Props = {
  btnName: string
}

const GlobalBtn:React.FC<Props> = ({btnName}) => {
  return(
  <button>{btnName}</button>
  )
}

export default GlobalBtn
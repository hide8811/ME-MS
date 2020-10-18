import React from 'react'

type Props = {
  btnName: string,
  clickEvent: any
}

const GlobalBtn:React.FC<Props> = ({btnName,clickEvent}) => {
  return(
    <button onClick={clickEvent()}>{btnName}</button>
  )
}

export default GlobalBtn
import React from 'react'

type Props = {
  
}

const Month:React.FC<Props> = (props:any) => {
  const urlParams = props.match.params.id
  return(
    <div>
      {urlParams}
    </div>
  )
}

export default Month
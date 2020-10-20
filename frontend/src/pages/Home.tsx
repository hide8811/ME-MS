import React, { useState } from 'react'
import GlobalBtn from '../components/Atoms/GlobalBtn'

const Home:React.FC = () => {

  const [data,getData] = useState(null)
  const gettingData = () => {
    return fetch('http://localhost:3000/customers')
    .then(res => res.json())
    .then(resjson => getData(resjson))
    .catch(e=>console.log(e))
  }

  return(
    <>
      <GlobalBtn btnName='取得！' clickEvent={gettingData} />
      {data}
    </>
  )
}

export default Home
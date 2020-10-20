import React, { useState } from 'react'
import GlobalBtn from '../components/Atoms/GlobalBtn'

const Home:React.FC = () => {

  const [data,getData] = useState('データ無し')
  const gettingData = () => {
    return fetch('http://localhost:3000/customers')
    .then(res => res.json())
    .then(res => getData(res))
    .catch(e=>getData(e))
  }

  return(
    <>
      <GlobalBtn btnName='取得！' clickEvent={gettingData} />
      {data}
    </>
  )
}

export default Home
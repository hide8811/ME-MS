import React, { useState } from 'react'
import GlobalBtn from '../components/Atoms/GlobalBtn'
import axios from 'axios'

const Home:React.FC = () => {

  const [data,getData]:any = useState({
    age: '',
    date: '',
    time: '',
    course: '',
    option: true,
    cosplay: true,
    extended_time: '',
    deep_lymph: '',
  })

  const gettingData = () => {
    axios.get('http://localhost:3000/customers')
    .then(res => console.log(res.data))
  }
  return(
    <>
      <GlobalBtn btnName='取得！' clickEvent={gettingData} />
      {data}
    </>
  )
}

export default Home
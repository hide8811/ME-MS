import React, { useState,useEffect } from 'react'
import GlobalBtn from '../components/Atoms/GlobalBtn'
import axios from 'axios'

const Home:React.FC = () => {

  const [datas,getData]:any = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3000/test.json')
    .then(res => getData(res.data))
    console.log('effect')
  },[])

  const showData = datas.map((val:any,ind:any)=>{
  return (
    <ul key={ind}>
      {val.age}
      {val.age}
    </ul>
  )
  })
  return(
    <>
      <div id='test'>
        <GlobalBtn btnName='表示！' />
      </div>
      {showData}
    </>
  )
}

export default Home
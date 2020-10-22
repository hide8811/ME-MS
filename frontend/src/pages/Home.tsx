import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import GlobalBtn from '../components/Atoms/GlobalBtn'
import axios from 'axios'

const Home:React.FC = () => {

  const months = [
    '1月 人数',
    '2月 人数',
    '3月 人数',
    '4月 人数',
    '5月 人数',
    '6月 人数',
    '7月 人数',
    '8月 人数',
    '9月 人数',
    '10月 人数',
    '11月 人数',
    '12月 人数',
  ]

  const monthButtons = months.map((val:string,ind:number)=> {
    return <BUTTON key={ind}>{val}</BUTTON>
  })

  // const [datas,getData]:any = useState([])
  
  // useEffect(() => {
  //   axios.get('http://localhost:3000/test.json')
  //   .then(res => getData(res.data))
  //   console.log('effect')
  // },[])

  // const showData = datas.map((val:any,ind:number)=>{
  // return (
  //   <ul key={ind}>
  //     {val.age}
  //     {val.age}
  //   </ul>
  // )
  // })
  return(
    <>
      {monthButtons}
    </>
  )
}

const BUTTON = styled.button`
  width: 95%;
  display: block;
  margin: 0 auto;
  background: #00a914;
  margin-top: 20px;
  color: #fff;
  font-size: 20px;
  line-height: 40px;
  border-radius: 4px;
  &:last-child{
    margin-bottom: 20px;
  }
`;

export default Home
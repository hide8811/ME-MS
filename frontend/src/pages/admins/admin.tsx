import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home:React.FC = () => {

  const [dataObj, getDataObj] = useState([])
  
  const months = [
    {id: 1, content: dataObj.length},
    {id: 2, content: '2月 人数'},
    {id: 3, content: '3月 人数'},
    {id: 4, content: '4月 人数'},
    {id: 5, content: '5月 人数'},
    {id: 6, content: '6月 人数'},
    {id: 7, content: '7月 人数'},
    {id: 8, content: '8月 人数'},
    {id: 9, content: '9月 人数'},
    {id: 10, content: '10月 人数'},
    {id: 11, content: '11月 人数'},
    {id: 12, content: '12月 人数'}
  ]



  const monthButtons = months.map((val:any)=> {
    return (
      <Link key={ val.id } to={ '/admin/' + val.id }>
        <BUTTON>{ val.id }月 { val.content }人</BUTTON>
      </Link>
    )
  })

  useEffect(() => {
    axios.get('http://localhost:3000/customers')
    .then(res => getDataObj(res.data))
  },[])

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
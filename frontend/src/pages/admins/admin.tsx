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
        <button>{ val.id }月 { val.content }人</button>
      </Link>
    )
  })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/customers')
      getDataObj(result.data)
    }
    fetchData()
  },[])

  return(
    <CONTAINER>
      <div className="flex">
        <div><i className="fas fa-chevron-left"></i></div>
        <div>2020</div>
        <div><i className="fas fa-chevron-right"></i></div>
      </div>
      {monthButtons}
    </CONTAINER>
  )
}

const CONTAINER = styled.div`
  .flex{
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 10px auto 15px;
    font-size: 20px;
  }
  button{
    width: 95%;
    display: block;
    margin: 0 auto 20px;
    background: #00a914;
    color: #fff;
    font-size: 20px;
    line-height: 40px;
    border-radius: 4px;
  }
`;

export default Home
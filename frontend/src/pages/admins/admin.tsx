import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home:React.FC = () => {

  const [dataObj1, getDataObj1] = useState([])
  const [dataObj2, getDataObj2] = useState([])
  const [dataObj3, getDataObj3] = useState([])
  const [dataObj4, getDataObj4] = useState([])
  const [dataObj5, getDataObj5] = useState([])
  const [dataObj6, getDataObj6] = useState([])
  const [dataObj7, getDataObj7] = useState([])
  const [dataObj8, getDataObj8] = useState([])
  const [dataObj9, getDataObj9] = useState([])
  const [dataObj10, getDataObj10] = useState([])
  const [dataObj11, getDataObj11] = useState([])
  const [dataObj12, getDataObj12] = useState([])
  
  const months = [
    {id: 1, content: dataObj1.length},
    {id: 2, content: dataObj2.length},
    {id: 3, content: dataObj3.length},
    {id: 4, content: dataObj4.length},
    {id: 5, content: dataObj5.length},
    {id: 6, content: dataObj6.length},
    {id: 7, content: dataObj7.length},
    {id: 8, content: dataObj8.length},
    {id: 9, content: dataObj9.length},
    {id: 10, content: dataObj10.length},
    {id: 11, content: dataObj11.length},
    {id: 12, content: dataObj12.length}
  ]

  useEffect(() => {
    const fetchData = async () => {
      const params = { year: '2020' }
      const result = await axios.get('http://localhost:3000/customers', { params } )
      getDataObj1(result.data.January)
      getDataObj2(result.data.February)
      getDataObj3(result.data.March)
      getDataObj4(result.data.April)
      getDataObj5(result.data.May)
      getDataObj6(result.data.June)
      getDataObj7(result.data.July)
      getDataObj8(result.data.August)
      getDataObj9(result.data.September)
      getDataObj10(result.data.October)
      getDataObj11(result.data.November)
      getDataObj12(result.data.December)
    }
    fetchData()
  },[])
  
  const monthButtons = months.map((val:any)=> {
    return (
      <Link key={ val.id } to={ '/admin/' + val.id }>
        <button>{ val.id }月 { val.content }人</button>
      </Link>
    )
  })

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
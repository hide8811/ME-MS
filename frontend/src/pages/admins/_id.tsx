import React,{useState,useEffect} from 'react'
// import styled from 'styled-components'
import axios from 'axios'
import ageFilter,{ ageFilterArray } from '../../controls/percentAge'

const Month:React.FC = (props:any) => {
  
  const urlParams = props.match.params.id
  const [datas, getDatas] = useState([])

  useEffect(() => {
    // const params = { getParams: '2020-' + urlParams }
    // axios.get('http://localhost:3000/customers',{ params })
    axios.get('http://localhost:3000/customers')
    .then(res => getDatas(res.data))
  },[])
  
  datas.map((val:any)=>{
    ageFilter(val.age)
  })

  const numberCustomers = [
    ageFilterArray.age10.length,
    ageFilterArray.age20.length,
    ageFilterArray.age25.length,
    ageFilterArray.age30.length,
    ageFilterArray.age35.length,
    ageFilterArray.age40.length,
    ageFilterArray.age45.length,
    ageFilterArray.age50.length,
    ageFilterArray.age55.length,
    ageFilterArray.age60.length,
    ageFilterArray.age65.length,
    ageFilterArray.age70.length
  ]
  const divisionNumberCustomers = numberCustomers.map(val => val / 2)
  const percentabNumberCustomers = divisionNumberCustomers.map(val => val / datas.length * 100)
  const OrganizeNumberCustomers = percentabNumberCustomers.map(val => Math.round(val * 10) / 10)

  const agesVal = [
    '10代',
    '20代前半',
    '20代後半',
    '30代前半',
    '30代後半',
    '40代前半',
    '40代後半',
    '50代前半',
    '50代後半',
    '60代前半',
    '60代後半',
    '70代以上',
  ]

  const showNumberCustomers = OrganizeNumberCustomers.map((val,index) => {
    return(
    <div key={index}>{agesVal[index]} : {val}%</div>
    )
  })

  return(
    <div>
      {urlParams}
      {showNumberCustomers}
    </div>
  )
}

export default Month
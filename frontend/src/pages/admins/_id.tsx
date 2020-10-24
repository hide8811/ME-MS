import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { FilterAge, initialAgeFilter } from '../../controls/FilterAge'

const Month:React.FC = (props:any) => {
  
  // const urlParams = props.match.params.id
  const [datas, getDatas] = useState([])

  useEffect(() => {
    // const params = { getParams: '2020-' + urlParams }
    // axios.get('http://localhost:3000/customers',{ params })
    axios.get('http://localhost:3000/customers')
    .then(res => getDatas(res.data))
  },[])
  
  datas.map((val:any)=>{
    // FilterAge > controls
    FilterAge(val.age)
  })

  const numberCustomersArray:Array<number> = []
  const numberCustomers = () => {
    // initialAgeFilter > controls
    for(let i = 0; i < initialAgeFilter.length; i++){
      numberCustomersArray.push(initialAgeFilter[i].agesArray.length)
    }
  }
  
  numberCustomers()
  const divisionNumberCustomers = numberCustomersArray.map(val => val / 2)
  const percentabNumberCustomers = divisionNumberCustomers.map(val => val / datas.length * 100)
  const organizeNumberCustomers = percentabNumberCustomers.map(val => Math.round(val * 10) / 10)

  const showNumberCustomers = organizeNumberCustomers.map((val,index) => {
    // initialAgeFilter > controls
    // let valval = String({val})
    // const cok = {
    //   width: {valval}, background: "#000"
    // }
    return (
    <div className='flex-box' key={index}>
      <pre>{ initialAgeFilter[index].caseTitle} : </pre>
      <pre> {val}%</pre>
    </div>
    )
  })

  return(
    <CONTAINER>
      {/* {urlParams} */}
      {showNumberCustomers}
    </CONTAINER>
  )
}

const CONTAINER = styled.div`
  padding: 10px;
  .flex-box {
    display: flex;
    margin-bottom: 10px;
    font-size: 18px;
  }
`;

export default Month
import React,{useState,useEffect} from 'react'
// import styled from 'styled-components'
import axios from 'axios'
import {ages} from '../../controls/percentAge'

const Month:React.FC = (props:any) => {
  
  const urlParams = props.match.params.id
  const [datas, getDatas] = useState([])

  useEffect(() => {
    // const params = { getParams: '2020-' + urlParams }
    // axios.get('http://localhost:3000/customers',{ params })
    axios.get('http://localhost:3000/customers')
    .then(res => getDatas(res.data))
  },[])

  const arrays:string[] = []
  const showData = datas.map((val:any,index:number)=>{

    const abc = () => {
      let agenum = ages(val.age)
      if(agenum === 1) {
        arrays.push('yes')
      }
    }
    abc()
    return (
    <ul key={index}>
      <li>{val.age}</li>
      <li>{val.date}</li>
    </ul>
    )
  })

  return(
    <div>
      {urlParams}
      {showData}
    </div>
  )
}

export default Month
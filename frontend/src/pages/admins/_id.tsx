import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {ages} from '../../controls/percentAge'

const Month:React.FC = (props:any) => {
  
  const [datas, getDatas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/customers',{
      // date: '2020-10'
    })
    .then(res => getDatas(res.data))
    console.log('effect')
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
    </ul>
    )
  })
  console.log(arrays.length)
  console.log(datas.length)
  const urlParams = props.match.params.id
  return(
    <div>
      {urlParams}
      {showData}
    </div>
  )
}

export default Month
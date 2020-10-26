import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

type Props = {
  urlParams: number
}
type GetParams = {
  month: string
}

const FilterWeek:React.FC<Props> = ({urlParams}) => {

  const [datas, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const params:GetParams = { month: '2020-' + urlParams }
      // paramsはAxiosRequestConfigに指定されている。
      // typescriptでaxiosにパラメータをつける場合はパラメータの名前はparamsにしなければならない。
      const result = await axios.get
        ('http://localhost:3000/customers/month_search', { params } )
      setData(result.data)
    }
    fetchData()
  },[])

  const initialTimeFilter:any = [
    {caseTitle: '12時〜13時59分', timeArray:[]},
    {caseTitle: '14時〜15時59分', timeArray:[]},
    {caseTitle: '16時〜17時59分', timeArray:[]},
    {caseTitle: '18時〜19時59分', timeArray:[]},
    {caseTitle: '20時〜21時59分', timeArray:[]},
    {caseTitle: '22時〜23時59分', timeArray:[]},
    {caseTitle: '24時〜25時59分', timeArray:[]},
    {caseTitle: '26時〜27時59分', timeArray:[]}
  ]

  const FilterCase = (users:string) => {  
    switch(users) {
      case '12':
      case '13':
        initialTimeFilter[0].timeArray.push(1)
        break;
      case '14':
      case '15':
        initialTimeFilter[1].timeArray.push(1)
        break;
      case '16':
      case '17':
        initialTimeFilter[2].timeArray.push(1)
        break;
      case '18':
      case '19':
        initialTimeFilter[3].timeArray.push(1)
        break;
      case '20':
      case '21':
        initialTimeFilter[4].timeArray.push(1)
        break;
      case '22':
      case '23':
        initialTimeFilter[5].timeArray.push(1)
        break;
      case '24':
      case '25':
        initialTimeFilter[6].timeArray.push(1)
        break;
      case '26':
      case '27':
        initialTimeFilter[7].timeArray.push(1)
        break;
      default:
        return null
    }
  }
  datas.map((val:any)=>{
    const timeObj = String(new Date(val.time).getHours() + 15) 
    FilterCase(timeObj)
  })
  const numberCustomersArray:Array<number> = []

  for(let i = 0; i < initialTimeFilter.length; i++){
    numberCustomersArray.push(initialTimeFilter[i].timeArray.length)
  }
  const organizeNumberCustomers = numberCustomersArray
  .map(val => Math.round(val / datas.length * 1000) / 10)

  const showNumberCustomers = organizeNumberCustomers.map((val,index) => {
    return (
    <div className='flex-box' key={index}>
      <pre>{ initialTimeFilter[index].caseTitle} : </pre>
      {val?
        <pre> {val}%</pre>:
        <pre> 0%</pre>
      }
    </div>
    )
  })

  return(
    <CONTAINER>
      <h2>時間帯別割合</h2>
      <div className="result">
        {showNumberCustomers}
      </div>
    </CONTAINER>
  )
}

const CONTAINER = styled.div`
  h2{
    padding-left: 3px;
    margin-bottom: 10px;
  }
  .result{
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;
    .flex-box {
      display: flex;
      margin-bottom: 10px;
      font-size: 18px;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
`;

export default FilterWeek
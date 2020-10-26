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

  const initialWeekFilter:any = [
    {caseTitle: '日曜日', weekArray:[]},
    {caseTitle: '月曜日', weekArray:[]},
    {caseTitle: '火曜日', weekArray:[]},
    {caseTitle: '水曜日', weekArray:[]},
    {caseTitle: '木曜日', weekArray:[]},
    {caseTitle: '金曜日', weekArray:[]},
    {caseTitle: '土曜日', weekArray:[]},
  ]

  const FilterCase = (users:string) => {  
    switch(users) {
      case '日曜日':
        initialWeekFilter[0].weekArray.push(1)
        break;
      case '月曜日':
        initialWeekFilter[1].weekArray.push(1)
        break;
      case '火曜日':
        initialWeekFilter[2].weekArray.push(1)
        break;
      case '水曜日':
        initialWeekFilter[3].weekArray.push(1)
        break;
      case '木曜日':
        initialWeekFilter[4].weekArray.push(1)
        break;
      case '金曜日':
        initialWeekFilter[5].weekArray.push(1)
        break;
      case '土曜日':
        initialWeekFilter[6].weekArray.push(1)
        break;
      default:
        return null
    }
  }
  datas.map((val:any)=>{
    const weekChars = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
    const dayObj = new Date(val.date).getDay()
    const stringWeek = weekChars[dayObj]
    FilterCase(stringWeek)
  })
  const numberCustomersArray:Array<number> = []

  for(let i = 0; i < initialWeekFilter.length; i++){
    numberCustomersArray.push(initialWeekFilter[i].weekArray.length)
  }
  const organizeNumberCustomers = numberCustomersArray
  .map(val => Math.round(val / datas.length * 1000) / 10)

  const showNumberCustomers = organizeNumberCustomers.map((val,index) => {
    return (
    <div className='flex-box' key={index}>
      <pre>{ initialWeekFilter[index].caseTitle} : </pre>
      {val?
        <pre> {val}%</pre>:
        <pre> 0%</pre>
      }
    </div>
    )
  })

  return(
    <CONTAINER>
      <h2>曜日別集客率</h2>
      <div className="result">
        {showNumberCustomers}
      </div>
    </CONTAINER>
  )
}

const CONTAINER = styled.div`
  h2{
    margin-bottom: 10px;
  }
  .result{
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
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
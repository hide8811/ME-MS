import React,{useState,useEffect} from 'react'
import axios from 'axios'

type Props = {
  urlParams: number
}

type GetParams = {
  month: string
}

const FilterAge:React.FC<Props> = ({urlParams}) => {

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

  const initialAgeFilter:any = [
    {caseTitle: '10代', agesArray:[]},
    {caseTitle: '20代前半', agesArray:[]},
    {caseTitle: '20代後半', agesArray:[]},
    {caseTitle: '30代前半', agesArray:[]},
    {caseTitle: '30代後半', agesArray:[]},
    {caseTitle: '40代前半', agesArray:[]},
    {caseTitle: '40代後半', agesArray:[]},
    {caseTitle: '50代前半', agesArray:[]},
    {caseTitle: '50代後半', agesArray:[]},
    {caseTitle: '60代前半', agesArray:[]},
    {caseTitle: '60代後半', agesArray:[]},
    {caseTitle: '70代以上', agesArray:[]}
  ]

  const FilterCase = (users:string) => {  
    switch(users) {
      case '10代':
        initialAgeFilter[0].agesArray.push(1)
        break;
      case '20代前半':
        initialAgeFilter[1].agesArray.push(1)
        break;
      case '20代後半':
        initialAgeFilter[2].agesArray.push(1)
        break;
      case '30代前半':
        initialAgeFilter[3].agesArray.push(1)
        break;
      case '30代後半':
        initialAgeFilter[4].agesArray.push(1)
        break;
      case '40代前半':
        initialAgeFilter[5].agesArray.push(1)
        break;
      case '40代後半':
        initialAgeFilter[6].agesArray.push(1)
        break;
      case '50代前半':
        initialAgeFilter[7].agesArray.push(1)
        break;
      case '50代後半':
        initialAgeFilter[8].agesArray.push(1)
        break;
      case '60代前半':
        initialAgeFilter[9].agesArray.push(1)
        break;
      case '60代後半':
        initialAgeFilter[10].agesArray.push(1)
        break;
      case '70代以上':
        initialAgeFilter[11].agesArray.push(1)
        break;
      default:
        return null
    }
  }
  datas.map((val:any)=>{
    FilterCase(val.age)
  })
  const numberCustomersArray:Array<number> = []

  for(let i = 0; i < initialAgeFilter.length; i++){
    numberCustomersArray.push(initialAgeFilter[i].agesArray.length)
  }
  const organizeNumberCustomers = numberCustomersArray
  .map(val => Math.round(val / datas.length * 1000) / 10)

  const showNumberCustomers = organizeNumberCustomers.map((val,index) => {
    return (
    <div className='flex-box' key={index}>
      <pre>{ initialAgeFilter[index].caseTitle} : </pre>
      {val?
        <pre> {val}%</pre>:
        <pre> 0%</pre>
      }
    </div>
    )
  })
  
  return(
  <>
    {showNumberCustomers}
  </>
  )
}

export default FilterAge
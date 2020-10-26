import React from 'react'
import styled from 'styled-components'

type Props = {
  datas: Array<any>
}

const FilterAge: React.FC<Props> = ({ datas }) => {
  console.log(datas)
  const initialAgeFilter: any = [
    { caseTitle: '10代後半', agesArray: [] },
    { caseTitle: '20代前半', agesArray: [] },
    { caseTitle: '20代後半', agesArray: [] },
    { caseTitle: '30代前半', agesArray: [] },
    { caseTitle: '30代後半', agesArray: [] },
    { caseTitle: '40代前半', agesArray: [] },
    { caseTitle: '40代後半', agesArray: [] },
    { caseTitle: '50代前半', agesArray: [] },
    { caseTitle: '50代後半', agesArray: [] },
    { caseTitle: '60代前半', agesArray: [] },
    { caseTitle: '60代後半', agesArray: [] },
    { caseTitle: '70代以上', agesArray: [] },
  ]

  const FilterCase = (user_case: string) => {
    switch (user_case) {
      case '10代':
        initialAgeFilter[0].agesArray.push(1)
        break
      case '20代前半':
        initialAgeFilter[1].agesArray.push(1)
        break
      case '20代後半':
        initialAgeFilter[2].agesArray.push(1)
        break
      case '30代前半':
        initialAgeFilter[3].agesArray.push(1)
        break
      case '30代後半':
        initialAgeFilter[4].agesArray.push(1)
        break
      case '40代前半':
        initialAgeFilter[5].agesArray.push(1)
        break
      case '40代後半':
        initialAgeFilter[6].agesArray.push(1)
        break
      case '50代前半':
        initialAgeFilter[7].agesArray.push(1)
        break
      case '50代後半':
        initialAgeFilter[8].agesArray.push(1)
        break
      case '60代前半':
        initialAgeFilter[9].agesArray.push(1)
        break
      case '60代後半':
        initialAgeFilter[10].agesArray.push(1)
        break
      case '70代以上':
        initialAgeFilter[11].agesArray.push(1)
        break
      default:
        return null
    }
  }
  datas.map((val: any) => FilterCase(val.age))
  const numberCustomersArray: Array<number> = []

  for (let i = 0; i < initialAgeFilter.length; i++) {
    numberCustomersArray.push(initialAgeFilter[i].agesArray.length)
  }
  const organizeNumberCustomers = numberCustomersArray.map(
    (val) => Math.round((val / datas.length) * 1000) / 10
  )

  const showNumberCustomers = organizeNumberCustomers.map((val, index) => {
    return (
      <div className="flex-box" key={index}>
        <pre>{initialAgeFilter[index].caseTitle} : </pre>
        {val ? <pre> {val}%</pre> : <pre> 0%</pre>}
      </div>
    )
  })

  return (
    <CONTAINER>
      <h2>年齢別割合</h2>
      <div className="result">{showNumberCustomers}</div>
    </CONTAINER>
  )
}

const CONTAINER = styled.div`
  h2 {
    padding-left: 3px;
    margin-bottom: 10px;
    color: #f00;
  }
  .result {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;
    .flex-box {
      display: flex;
      margin-bottom: 10px;
      font-size: 18px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

export default FilterAge

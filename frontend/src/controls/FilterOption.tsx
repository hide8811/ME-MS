import React from 'react'
import styled from 'styled-components'
import { FilterOptionCosplay, FilterOptionDeep, FilterOptionExtend } from '.'

type Props = {
  datas: Array<any>
}

const FilterOption:React.FC<Props> = ({datas}) => {

  const initialOptionFilter: any = [
    { caseTitle: '無し', optionArray: [] },
    { caseTitle: '有り', optionArray: [] }
  ]
  const FilterCase = (user_case: boolean) => {
    switch (user_case) {
      case false:
        initialOptionFilter[0].optionArray.push(1)
        break
      case true:
        initialOptionFilter[1].optionArray.push(1)
        break
      default:
        return null
    }
  }
  datas.map((val: any) => FilterCase(val.option))
  const numberCustomersArray: Array<number> = []

  for (let i = 0; i < initialOptionFilter.length; i++) {
    numberCustomersArray.push(initialOptionFilter[i].optionArray.length)
  }
  const organizeNumberCustomers = numberCustomersArray.map(
    (val) => Math.round((val / datas.length) * 1000) / 10
  )

  const showNumberCustomers = organizeNumberCustomers.map((val, index) => {
    return (
      <div className="flex-box" key={index}>
        <pre>{initialOptionFilter[index].caseTitle} : </pre>
        {val ? <pre> {val}%</pre> : <pre> 0%</pre>}
      </div>
    )
  })

  return (
    <CONTAINER>
      <h2>オプションの有無</h2>
      <div className="result">
        {showNumberCustomers}
        <FilterOptionCosplay datas={datas} />
        <FilterOptionExtend datas={datas} />
        <FilterOptionDeep datas={datas} />
      </div>
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
    &-title{
      margin-bottom: 10px;
      color: #343434;
    }
    &:last-child {
      margin-bottom: 0;
    }
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

export default FilterOption
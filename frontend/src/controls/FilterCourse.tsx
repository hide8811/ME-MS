import React from 'react'
import styled from 'styled-components'

type Props = {
  datas: any
}

const FilterCourse: React.FC<Props> = ({ datas }) => {
  const initialCourseFilter: any = [
    { caseTitle: '60min', courseArray: [] },
    { caseTitle: '90min', courseArray: [] },
    { caseTitle: '120min', courseArray: [] },
    { caseTitle: '150min', courseArray: [] },
    { caseTitle: '180min', courseArray: [] },
  ]

  const FilterCase = (user_case: string) => {
    switch (user_case) {
      case '60min':
        initialCourseFilter[0].courseArray.push(1)
        break
      case '90min':
        initialCourseFilter[1].courseArray.push(1)
        break
      case '120min':
        initialCourseFilter[2].courseArray.push(1)
        break
      case '150min':
        initialCourseFilter[3].courseArray.push(1)
        break
      case '180min':
        initialCourseFilter[4].courseArray.push(1)
        break
      default:
        return null
    }
  }

  datas.map((val: any) => FilterCase(val.course))
  const numberCustomersArray: Array<number> = []

  for (let i = 0; i < initialCourseFilter.length; i++) {
    numberCustomersArray.push(initialCourseFilter[i].courseArray.length)
  }
  const organizeNumberCustomers = numberCustomersArray.map(
    (val) => Math.round((val / datas.length) * 1000) / 10
  )

  const showNumberCustomers = organizeNumberCustomers.map((val, index) => {
    return (
      <div className="flex-box" key={index}>
        <pre>{initialCourseFilter[index].caseTitle} : </pre>
        {val ? <pre> {val}%</pre> : <pre> 0%</pre>}
      </div>
    )
  })

  return (
    <CONTAINER>
      <h2>コース別割合</h2>
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

export default FilterCourse

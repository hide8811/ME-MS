import React from 'react'
import styled from 'styled-components'

type Props = {
  datas: Array<any>
}

const FilterOptionCosplay:React.FC<Props> = ({datas}) => {

  const initialOptionCosplayFilter: any = [
    { caseTitle: '衣装チェンジ無し', cosplayArray: [] },
    { caseTitle: '衣装チェンジ有り', cosplayArray: [] }
  ]
  const FilterCase = (user_case: boolean) => {
    switch (user_case) {
      case false:
        initialOptionCosplayFilter[0].cosplayArray.push(1)
        break
      case true:
        initialOptionCosplayFilter[1].cosplayArray.push(1)
        break
      default:
        return null
    }
  }
  datas.map((val: any) => FilterCase(val.cosplay))
  const numberCustomersArray: Array<number> = []

  for (let i = 0; i < initialOptionCosplayFilter.length; i++) {
    numberCustomersArray.push(initialOptionCosplayFilter[i].cosplayArray.length)
  }
  const organizeNumberCustomers = numberCustomersArray.map(
    (val) => Math.round((val / datas.length) * 1000) / 10
  )

  const showNumberCustomers = organizeNumberCustomers.map((val, index) => {
    return (
      <div className="flex-box" key={index}>
        <pre>{initialOptionCosplayFilter[index].caseTitle} : </pre>
        {val ? <pre> {val}%</pre> : <pre> 0%</pre>}
      </div>
    )
  })

  return (
    <>
      <div className="result">
        <div className="result-title">衣装チェンジの有無</div>
        {showNumberCustomers}
      </div>
    </>
  )
}

export default FilterOptionCosplay
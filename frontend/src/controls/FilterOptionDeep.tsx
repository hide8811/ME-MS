import React from 'react'

type Props = {
  datas: Array<any>
}

const FilterOptionDeep: React.FC<Props> = ({ datas }) => {
  const initialOptionDeepFilter: any = [
    { caseTitle: '無し', deepArray: [] },
    { caseTitle: '10min', deepArray: [] },
    { caseTitle: '20min', deepArray: [] },
    { caseTitle: '30min', deepArray: [] },
    { caseTitle: '40min', deepArray: [] },
    { caseTitle: '50min', deepArray: [] },
    { caseTitle: '60min', deepArray: [] },
    { caseTitle: '70min', deepArray: [] },
    { caseTitle: '80min', deepArray: [] },
    { caseTitle: '90min', deepArray: [] },
    { caseTitle: '100min', deepArray: [] },
  ]
  const FilterCase = (user_case: string) => {
    switch (user_case) {
      case '無し':
        initialOptionDeepFilter[0].deepArray.push(1)
        break
      case '10min':
        initialOptionDeepFilter[1].deepArray.push(1)
        break
      case '20min':
        initialOptionDeepFilter[2].deepArray.push(1)
        break
      case '30min':
        initialOptionDeepFilter[3].deepArray.push(1)
        break
      case '40min':
        initialOptionDeepFilter[4].deepArray.push(1)
        break
      case '50min':
        initialOptionDeepFilter[5].deepArray.push(1)
        break
      case '60min':
        initialOptionDeepFilter[6].deepArray.push(1)
        break
      case '70min':
        initialOptionDeepFilter[7].deepArray.push(1)
        break
      case '80min':
        initialOptionDeepFilter[8].deepArray.push(1)
        break
      case '90min':
        initialOptionDeepFilter[9].deepArray.push(1)
        break
      case '100min':
        initialOptionDeepFilter[10].deepArray.push(1)
        break
      default:
        return null
    }
  }
  datas.map((val: any) => FilterCase(val.deep_lymph))
  const numberCustomersArray: Array<number> = []

  for (let i = 0; i < initialOptionDeepFilter.length; i++) {
    numberCustomersArray.push(initialOptionDeepFilter[i].deepArray.length)
  }
  const organizeNumberCustomers = numberCustomersArray.map(
    (val) => Math.round((val / datas.length) * 1000) / 10
  )

  const showNumberCustomers = organizeNumberCustomers.map((val, index) => {
    return (
      <div className="flex-box" key={index}>
        <pre>{initialOptionDeepFilter[index].caseTitle} : </pre>
        {val ? <pre> {val}%</pre> : <pre> 0%</pre>}
      </div>
    )
  })

  return (
    <>
      <div className="result">
        <div className="result-title">ディープリンパ</div>
        {showNumberCustomers}
      </div>
    </>
  )
}

export default FilterOptionDeep

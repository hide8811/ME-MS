import React from 'react'

type Props = {
  datas: Array<any>
}

const FilterOptionExtend: React.FC<Props> = ({ datas }) => {
  const initialOptionExtendFilter: any = [
    { caseTitle: '無し', extendArray: [] },
    { caseTitle: '30min', extendArray: [] },
    { caseTitle: '60min', extendArray: [] },
    { caseTitle: '90min', extendArray: [] },
    { caseTitle: '120min', extendArray: [] },
  ]
  const FilterCase = (user_case: string) => {
    switch (user_case) {
      case '無し':
        initialOptionExtendFilter[0].extendArray.push(1)
        break
      case '30min':
        initialOptionExtendFilter[1].extendArray.push(1)
        break
      case '60min':
        initialOptionExtendFilter[2].extendArray.push(1)
        break
      case '90min':
        initialOptionExtendFilter[3].extendArray.push(1)
        break
      case '120min':
        initialOptionExtendFilter[4].extendArray.push(1)
        break
      default:
        return null
    }
  }
  datas.map((val: any) => FilterCase(val.extended_time))
  const numberCustomersArray: Array<number> = []

  for (let i = 0; i < initialOptionExtendFilter.length; i++) {
    numberCustomersArray.push(initialOptionExtendFilter[i].extendArray.length)
  }
  const organizeNumberCustomers = numberCustomersArray.map(
    (val) => Math.round((val / datas.length) * 1000) / 10
  )

  const showNumberCustomers = organizeNumberCustomers.map((val, index) => {
    return (
      <div className="flex-box" key={index}>
        <pre>{initialOptionExtendFilter[index].caseTitle} : </pre>
        {val ? <pre> {val}%</pre> : <pre> 0%</pre>}
      </div>
    )
  })

  return (
    <>
      <div className="result">
        <div className="result-title">延長時間</div>
        {showNumberCustomers}
      </div>
    </>
  )
}

export default FilterOptionExtend

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {
  FilterAge,
  FilterCourse,
  FilterOption,
  FilterTime,
  FilterWeek,
} from '../../controls'

const Month: React.FC = (props: any) => {
  const urlParams: number = props.match.params.id
  const [datas, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const params = { month: '2020-' + urlParams }
      // paramsはAxiosRequestConfigに指定されている。
      // typescriptでaxiosにパラメータをつける場合はパラメータの名前はparamsにしなければならない。
      const result = await axios.get(
        'http://localhost:80/customers/month_search',
        { params }
      )
      setData(result.data)
    }
    fetchData()
  }, [urlParams])

  return (
    <CONTAINER>
      <h1>{urlParams}月の結果</h1>
      <FilterAge datas={datas} />
      <FilterWeek datas={datas} />
      <FilterTime datas={datas} />
      <FilterCourse datas={datas} />
      <FilterOption datas={datas} />
    </CONTAINER>
  )
}

const CONTAINER = styled.div`
  padding: 10px;
  h1 {
    font-size: 20px;
    border-bottom: 1px solid #aaa;
    padding: 0 0 10px 2px;
    margin: 0 0 10px;
  }
`

export default Month

import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalBtn from '../components/Atoms/GlobalBtn'
import GlobalInput from '../components/Atoms/GlobalInput'
import GlobalRadio from '../components/Atoms/GlobalRadio'
import GlobalSelect from '../components/Atoms/GlobalSelect'
import axios from 'axios'

const Form = () => {
  const [age, updateValueAge] = useState('')
  const [course, updateValueCorse] = useState('')
  const [date, updateValueDate] = useState('')
  const [time, updateValueTime] = useState('')
  const [option, updateValueOption] = useState('false')
  const [cosplay, updateValueCosplay] = useState('false')
  const [extended_time, updateValueExtend] = useState('無し')
  const [deep_lymph, updateValueDeep] = useState('無し')
  const datas: any = {
    age,
    date,
    time,
    course,
    option,
    cosplay,
    extended_time,
    deep_lymph,
  }

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    if(age === '' || date === '' || time === '' || course === '' ) {
      e.preventDefault()
      alert('必須の項目は全て入力してください')
    } else {
      const isCorrect = window.confirm(
        `大まかな年齢：${age}\n利用日時：${date}\n利用時間：${time}\n利用コース：${course}\nオプションの有無：${option}\n衣装チェンジの有無：${cosplay}\n延長時間：${extended_time}\nディープリンパ：${deep_lymph}\n以上の内容でお間違いないですか？`
        )
      if (isCorrect) {
        alert('送信しました')
        axios
          .post('http://localhost:3000/customers', datas)
          .then(() => alert('送信しました'))
          .catch((e) => console.log(e))
      } else {
        e.preventDefault()
      }
    }
  }

  return (
    <CONTAINER onSubmit={sendData}>
      <GlobalSelect
        questions={questions.age}
        label={'大まかな年齢'}
        updateValue={updateValueAge}
        isRequired={'必須'}
      />
      <GlobalInput
        type="date"
        label={'利用日時'}
        updateValue={updateValueDate}
        isRequired={'必須'}
      />
      <GlobalInput
        type="time"
        label={'利用時間'}
        updateValue={updateValueTime}
        isRequired={'必須'}
      />
      <GlobalSelect
        questions={questions.course}
        label={'利用コース'}
        updateValue={updateValueCorse}
        isRequired={'必須'}
      />
      <GlobalRadio
        choices={questions.choice}
        label={'オプションの有無'}
        name={'choice-option'}
        updateValue={updateValueOption}
        isRequired={'必須'}
      />
      {
        (() => {
          if (option === 'true') {
            return (
              <div>
                <GlobalRadio
                  choices={questions.choice}
                  label={'衣装チェンジの有無'}
                  name={'choice-cosplay'}
                  updateValue={updateValueCosplay}
                />
                <GlobalSelect
                  questions={questions.extend}
                  label={'延長時間'}
                  updateValue={updateValueExtend}
                />
                <GlobalSelect
                  questions={questions.deep}
                  label={'ディープリンパ'}
                  updateValue={updateValueDeep}
                />
              </div>
            )
          } else {
            return <></>
          }
        })()
      }
        <div className="right">
          <GlobalBtn btnName="送信する" />
        </div>
    </CONTAINER>
  )
}

const questions = {
  age: [
    '10代',
    '20代前半',
    '20代後半',
    '30代前半',
    '30代後半',
    '40代前半',
    '40代後半',
    '50代前半',
    '50代後半',
    '60代前半',
    '60代後半',
    '70代以上',
  ],
  course: ['60min', '90min', '120min', '150min', '180min'],
  extend: ['無し', '30min', '60min', '90min', '120min'],
  deep: [
    '無し',
    '10min',
    '20min',
    '30min',
    '40min',
    '50min',
    '60min',
    '70min',
    '80min',
    '90min',
    '100min',
  ],
  choice: ['false', 'true'],
}

const CONTAINER = styled.form`
  padding: 15px;
  .right {
    text-align: right;
  }
`

export default Form

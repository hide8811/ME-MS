import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalBtn from '../Atoms/GlobalBtn'
import GlobalInput from '../Atoms/GlobalInput'
import { withRouter, RouteComponentProps } from 'react-router-dom'

type Props = RouteComponentProps & {
  clickEvent: any
}

export let LoginState = false

const LoginModal: React.FC<Props> = ({ clickEvent, history }) => {
  const [idText, updateValueId] = useState('')
  const [psText, updateValuePass] = useState('')

  const isLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (idText === 'comfortbois' || psText === 'comfortbois2020') {
      document.getElementById('form')?.classList.remove('failed')
      clickEvent()
      history.push('/')
      LoginState = true
    } else {
      LoginState = false
      document.getElementById('form')?.classList.add('failed')
    }
  }

  return (
    <LOGIN>
      <div className="close-back" onClick={clickEvent}></div>
      <form onSubmit={isLogin} id={'form'}>
        <GlobalInput
          type="text"
          placeholder="id"
          label={'ログインID【comfortbois】'}
          updateValue={updateValueId}
        />
        <GlobalInput
          type="password"
          placeholder="password"
          label={'パスワード【comfortbois2020】'}
          updateValue={updateValuePass}
        />
        <div className="text-right">
          <GlobalBtn btnName="ログイン" />
        </div>
      </form>
    </LOGIN>
  )
}

const LOGIN = styled.div`
  .close-back {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  form {
    position: absolute;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    max-width: 500px;
    height: 195px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 10;
    .text-right {
      margin-top: -5px;
      text-align: right;
    }
  }
  .failed {
    border: 2px solid #f00;
  }
`

export default withRouter(LoginModal)

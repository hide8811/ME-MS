import React from 'react'
import styled from 'styled-components'
import GlobalBtn from '../Atoms/GlobalBtn'
import GlobalInput from '../Atoms/GlobalInput'

type Props = {
  clickEvent: any
}

const LoginModal:React.FC<Props> = ({clickEvent}) => {
  const eventStop = (e:any) => {
    e.preventDefault()
  }
  return(
    <LOGIN>
      <div className="close-back" onClick={clickEvent}></div>
      <form onSubmit={eventStop}>
        <GlobalInput type='text' placeholder='id' label={'ログインID'} />
        <GlobalInput type='password' placeholder='password' label={'パスワード'} />
        <div className="text-right">
          <GlobalBtn btnName='btn' clickEvent={() => clickEvent}/>
        </div>
      </form>
    </LOGIN>
  )
}

const LOGIN = styled.div`
  .close-back{
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
  form{
    position: absolute;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0,0,0,.7);
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
`;

export default LoginModal
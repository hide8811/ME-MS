import React from 'react'
import styled from 'styled-components'
import GlobalBtn from '../Atoms/GlobalBtn'
import GlobalInput from '../Atoms/GlobalInput'

const LoginModal = (props:any) => {
  const eventStop = (e:any) => {
    e.preventDefault()
  }
  return(
    <LOGIN>
      <div className="close-back"></div>
      <div className="inner">
        <form onSubmit={eventStop}>
          <GlobalInput type='text' placeholder='かり' label={'ログインID'} />
          <GlobalBtn btnName='btn' clickEvent={() => props.()}/>
        </form>
      </div>
    </LOGIN>
  )
}

const LOGIN = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  .close-back{
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    position: absolute;
    top: 0;
    left: 0;
    }
  .inner{
    width:100vw;
    height:100vh;
    position:relative;
    form{
      background:#f00;
      position:absolute;
      width: 100%;
      height: 300px;
      top:0;
      bottom:0;
      left:0;
      right:0;
      margin:auto;
    }
  }
`;

export default LoginModal
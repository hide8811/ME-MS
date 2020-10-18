import React from 'react'
import styled from 'styled-components'
import GlobalBtn from '../Atoms/GlobalBtn'

// type Props = {
//   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

const LoginModal = (props:any) => {
  return(
    <LOGIN>
      <div className="close-back" onClick={()=>props.change()}></div>
      <div className="inner">
        <form>
          <input type="text" />
          <GlobalBtn btnName='btn' />
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
      width:100px;
      height:100px;
      background:#f00;
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      margin:auto;
    }
  }
`;

export default LoginModal
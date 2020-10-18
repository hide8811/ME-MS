import React from 'react'
import styled from 'styled-components'

type Props = {iconName:string}

const ContentBtn: React.FC<Props> = ({iconName}) => {
  return(
    <>
      <Button>
        <i className={iconName}></i>
      </Button>
    </>
  )
}

const Button = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background: rgb(189, 189, 189);
  box-shadow: 0 5px 0 rgba(0,0,0 ,0.5);
  margin: 20px 0 0 20px;
  color: #fff;
  font-size: 200px;
  line-height: 300px;
  &:active {
    box-shadow: none;
    margin-top: 25px;
  }
  @media screen and (max-width: 480px) {
      width: 42vw;
      height: 42vw;
      font-size: 120px;
      line-height: 42vw;
  }
`;

export default ContentBtn
import React from 'react'
import { Redirect } from 'react-router-dom'
import { LoginState } from '../components/Molecules/LoginModal'

const Auth: React.FC = ({ children }) => {
  const content = LoginState ? children : <Redirect to={'/form'} />
  return <>{content}</>
}

export default Auth

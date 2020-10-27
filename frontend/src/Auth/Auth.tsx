import React from 'react'
import { Redirect } from 'react-router-dom'
import User from './User'

const Auth = (porps:any) => {
  User.isLoggedIn() ? porps.children : <Redirect to={'/form'} />
}

export default Auth
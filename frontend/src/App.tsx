import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ContentBtns from './components/Molecules/ContentBtns'
import LoginModal from './components/Molecules/LoginModal'
import Header from './components/Organisms/Header'
import Form from './pages/Form'
import Home from './pages/Home'

const App: React.FC = () => {
  const [isSignIn, chageSign] = useState(false)

  let login
  if (isSignIn) {
    login = <LoginModal clickEvent={() => chageSign(!isSignIn)} />
  } else {
    login = null
  }

  return (
    <>
      <Router>
        <Header clickEvent={() => chageSign(!isSignIn)} />
        <Route exact path='/' component={ContentBtns} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/form' component={Form} />
      </Router>
      {login}
    </>
  )
}

export default App

import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ContentBtns from './components/Molecules/ContentBtns'
import LoginModal from './components/Molecules/LoginModal'
import Header from './components/Organisms/Header'
import Form from './pages/Form'
import Admin from './pages/admins/admin'
import Admin_id from './pages/admins/_id'

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
        <Route exact path="/" component={ContentBtns} />
        <Route exact path="/admin" component={Admin} />
        <Route path="/admin/:id" component={Admin_id} />
        <Route exact path="/form" component={Form} />
      </Router>
      {login}
    </>
  )
}

export default App

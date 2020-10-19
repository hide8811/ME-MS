import React, {useState} from 'react'
import ContentBtns from './components/Molecules/ContentBtns'
import LoginModal from './components/Molecules/LoginModal'
import Header from './components/Organisms/Header'

const App = () => {
  const [isSignIn,chageSign] = useState(false)

  let login
  if (isSignIn) {
    login = <LoginModal clickEvent={() => chageSign(!isSignIn)}/>
  } else {
    login = null
  }

  return (
    <>
      <Header clickEvent={() => chageSign(!isSignIn)}/>
      <ContentBtns />
      {login}
    </>
  );
}

export default App;

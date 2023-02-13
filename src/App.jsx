import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import LandingPage from './Components/LandingPage'

const App = () => {

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}/>
        <Route path='/home' element={<Home></Home>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage'

const App = () => {

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/login' element={<UserLogin />}/>
        <Route exact path='/signup' element={<UserSignup />}/>
        <Route exact path='/captain-login' element={<CaptainLogin />}/>
        <Route exact path='/captain-signup' element={<CaptainSignup />}/>
      </Routes>
    </div>
  )
}

export default App
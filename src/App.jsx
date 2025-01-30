import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/captainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Start />} />
        <Route exact path='/login' element={<UserLogin />} />
        <Route exact path='/signup' element={<UserSignup />} />
        <Route exact path='/captain-login' element={<CaptainLogin />} />
        <Route exact path='/captain-signup' element={<CaptainSignup />} />
        <Route exact path='/home' element={
          <UserProtectWrapper><Home /></UserProtectWrapper>
        } />
        <Route exact path='/user/logout' element={
          <UserProtectWrapper><UserLogout /></UserProtectWrapper>
        } />
        <Route exact path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        } />
        {/* <Route element={<UserProtectWrapper />}>     
          <Route exact path='/home' element={<Home />} />
        </Route> */}
      </Routes>
    </div>
  )
}

export default App
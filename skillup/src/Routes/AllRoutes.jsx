import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import Whytojoin from '../Pages/Whytojoin'

const AllRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/' element="login"/>
        <Route path='/Whytojoin' element={<Whytojoin />} />
        <Route path='/LoginAdmin' element="admin"/>

      
      
    </Routes>
  )
}

export default AllRoutes

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import LoginAdmin from '../Components/LoginAdmin'
import ProductsCrud from '../Components/ProductsCrud'
import SignupPage from '../Components/Signup'

function AllPages() {
  return (
    <Routes>
        <Route path="/loginAdmin" element={<LoginAdmin/>}></Route>
        <Route path="/productsAdmin" element={<ProductsCrud/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
      
    </Routes>
  )
}

export default AllPages

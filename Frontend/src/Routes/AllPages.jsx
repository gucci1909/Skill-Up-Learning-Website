import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FinalPaymentPage from '../Components/FinalPaymentPage'
import HomePage from '../Components/HomePage'
import Login from '../Components/Login'
import LoginAdmin from '../Components/LoginAdmin'
import ProductsCrud from '../Components/ProductsCrud'
import ProductsPage from '../Components/ProductsPage'
import SignupPage from '../Components/Signup'
import SingleProductPage from '../Components/SingleProductPage'
import Whytojoin from '../Components/Whytojoin'

function AllPages() {
  return (
    <Routes>
        <Route path="/loginAdmin" element={<LoginAdmin/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="/productsAdmin" element={<ProductsCrud/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Whytojoin' element={<Whytojoin />} />
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/products/:id" element={<SingleProductPage />}></Route>
        <Route path="/finalPayment" element={<FinalPaymentPage />}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
      
    </Routes>
  )
}

export default AllPages

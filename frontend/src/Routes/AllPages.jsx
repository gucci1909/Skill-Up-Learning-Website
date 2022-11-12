import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import ProductsCrud from '../Components/ProductsCrud'

function AllPages() {
  return (
    <Routes>
        <Route path="/loginAdmin" element={<Login/>}></Route>
        <Route path="/productsAdmin" element={<ProductsCrud/>}></Route>
      
    </Routes>
  )
}

export default AllPages

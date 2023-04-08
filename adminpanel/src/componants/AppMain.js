import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Aside from './Aside'
import Dashboard from './Dashboard'
import AddProduct from './AddProduct'
import Orders from './Orders'
import AddValues from './AddValues'
import AllProduct from './AllProduct'
import Orderdetails from './Orderdetails'

function AppMain() {
  return (
    <div>
      <Router>
        <Aside />
        <div className="appMain">
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/addproduct' element={<AddProduct />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
            <Route path='/addvalues' element={<AddValues />}></Route>
            <Route path='/allproduct' element={<AllProduct />}></Route>
            <Route path='/orderdetails/:orderId' element={<Orderdetails />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default AppMain
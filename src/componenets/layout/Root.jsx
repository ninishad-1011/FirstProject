import React from 'react'
import Navbar from '../shared/Navbar'
import Product from '../pages/Product'
import Fotter from '../shared/Fotter'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Fotter/>

    </div>
  )
}

export default Root
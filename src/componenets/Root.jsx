import React from 'react'
import Navbar from './Navbar'
import Product from './Product'
import Fotter from './Fotter'
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
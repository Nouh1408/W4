import React from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className='lg:max-w-screen-xl container mx-auto'>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}
